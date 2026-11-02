#!/usr/bin/env python3
"""Generate native token files from mobile/tokens.json.

Usage (from the repo root):
    python3 tools/gen_native_tokens.py            # writes build/native/...
    python3 tools/gen_native_tokens.py --out DIR

Outputs:
    ios/RadiusColors.swift         SwiftUI Color.rds.<token> (light + dark, dynamic)
    ios/RadiusTokens.swift         spacing, radius, size (CGFloat) and motion (Double seconds)
    android/values/colors.xml      light colours   (rds_<token>)
    android/values-night/colors.xml dark colours
    android/values/dimens.xml      spacing, radius, size (dp)
    android/RadiusTokens.kt        Compose: RadiusColors (light/dark), RadiusSpacing, RadiusRadius, RadiusSize, RadiusMotion

Never hand-edit the outputs. Re-run after every design system export.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "mobile", "tokens.json")
out = os.path.join(ROOT, "build", "native")
if "--out" in sys.argv:
    out = sys.argv[sys.argv.index("--out") + 1]

t = json.load(open(SRC))
colors = {c["name"]: c for c in t["color"]["tokens"]}


def resolve(v, theme, depth=0):
    if isinstance(v, dict):
        v = v.get(theme, v.get("light"))
    m = re.fullmatch(r"\{([a-z0-9-]+)\}", str(v).strip())
    if m and depth < 8 and m.group(1) in colors:
        return resolve(colors[m.group(1)]["value"], theme, depth + 1)
    return str(v).strip()


def rgba(s):
    """Return (r, g, b, a) floats 0..1 from #rgb, #rrggbb, #rrggbbaa or rgba()."""
    s = s.strip()
    if s.startswith("#"):
        h = s[1:]
        if len(h) in (3, 4):
            h = "".join(ch * 2 for ch in h)
        r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
        a = int(h[6:8], 16) / 255 if len(h) == 8 else 1.0
        return r, g, b, a
    m = re.fullmatch(r"rgba?\(([^)]*)\)", s)
    if m:
        parts = [p.strip() for p in re.split(r"[ ,/]+", m.group(1)) if p.strip()]
        r, g, b = (float(p) / 255 for p in parts[:3])
        a = float(parts[3].rstrip("%")) / (100 if parts[3].endswith("%") else 1) if len(parts) > 3 else 1.0
        return r, g, b, a
    return None


def camel(name):
    p = name.split("-")
    return p[0] + "".join(x[:1].upper() + x[1:] for x in p[1:])


def snake(name):
    return "rds_" + name.replace("-", "_")


def px(v):
    m = re.fullmatch(r"(-?[\d.]+)px", str(v).strip())
    return float(m.group(1)) if m else None


def ms(v):
    m = re.fullmatch(r"([\d.]+)ms", str(v).strip())
    return float(m.group(1)) if m else None


def hex8(c):
    r, g, b, a = c
    return "#%02X%02X%02X%02X" % (round(a * 255), round(r * 255), round(g * 255), round(b * 255))  # Android AARRGGBB


skipped = []
rows = []
for name, c in colors.items():
    L, D = rgba(resolve(c["value"], "light")), rgba(resolve(c["value"], "dark"))
    if not L or not D:
        skipped.append(name)
        continue
    rows.append((name, L, D, c.get("usage", "")))

os.makedirs(os.path.join(out, "ios"), exist_ok=True)
for d in ("android/values", "android/values-night"):
    os.makedirs(os.path.join(out, d), exist_ok=True)

# ---------- iOS colours
f = ["// Generated from mobile/tokens.json by tools/gen_native_tokens.py. Do not edit.",
     "import SwiftUI", "import UIKit", "",
     "private func dyn(_ l: (CGFloat, CGFloat, CGFloat, CGFloat), _ d: (CGFloat, CGFloat, CGFloat, CGFloat)) -> Color {",
     "    Color(UIColor { $0.userInterfaceStyle == .dark",
     "        ? UIColor(red: d.0, green: d.1, blue: d.2, alpha: d.3)",
     "        : UIColor(red: l.0, green: l.1, blue: l.2, alpha: l.3) })",
     "}", "",
     "public enum RDSColor {"]
for name, L, D, use in rows:
    f.append(f"    /// {use}".rstrip())
    f.append(f"    public static let {camel(name)} = dyn(({L[0]:.4f}, {L[1]:.4f}, {L[2]:.4f}, {L[3]:.3f}), ({D[0]:.4f}, {D[1]:.4f}, {D[2]:.4f}, {D[3]:.3f}))")
f += ["}", "", "public extension Color { static let rds = RDSColor.self }", ""]
open(os.path.join(out, "ios", "RadiusColors.swift"), "w").write("\n".join(f))

# ---------- dimensions + motion
groups = {"spacing": "Spacing", "radius": "Radius", "size": "Size"}
dims = {g: [(x["name"], px(x["value"])) for x in t[g]["tokens"] if px(x["value"]) is not None] for g in groups}
motion = [(x["name"], ms(x["value"])) for x in t["duration"]["tokens"] if ms(x["value"]) is not None]
easing = [(x["name"], x["value"]) for x in t["easing"]["tokens"]]

f = ["// Generated from mobile/tokens.json by tools/gen_native_tokens.py. Do not edit.", "import CoreGraphics", ""]
for g, label in groups.items():
    f.append(f"public enum RDS{label} {{")
    f += [f"    public static let {camel(n)}: CGFloat = {v:g}" for n, v in dims[g]]
    f += ["}", ""]
f.append("public enum RDSMotion {  // seconds")
f += [f"    public static let {camel(n)}: Double = {v / 1000:g}" for n, v in motion]
f += [f"    // {n}: {v}" for n, v in easing]
f += ["}", ""]
open(os.path.join(out, "ios", "RadiusTokens.swift"), "w").write("\n".join(f))

# ---------- Android XML
for theme, idx, folder in (("light", 1, "values"), ("dark", 2, "values-night")):
    x = ['<?xml version="1.0" encoding="utf-8"?>', "<!-- Generated from mobile/tokens.json. Do not edit. -->", "<resources>"]
    x += [f'    <color name="{snake(r[0])}">{hex8(r[idx])}</color>' for r in rows]
    x.append("</resources>")
    open(os.path.join(out, "android", folder, "colors.xml"), "w").write("\n".join(x) + "\n")
x = ['<?xml version="1.0" encoding="utf-8"?>', "<!-- Generated from mobile/tokens.json. Do not edit. -->", "<resources>"]
for g in groups:
    x += [f'    <dimen name="{snake(n)}">{v:g}dp</dimen>' for n, v in dims[g]]
x.append("</resources>")
open(os.path.join(out, "android", "values", "dimens.xml"), "w").write("\n".join(x) + "\n")

# ---------- Compose
def kc(c):
    r, g, b, a = c
    return "Color(0x%02X%02X%02X%02X)" % (round(a * 255), round(r * 255), round(g * 255), round(b * 255))

k = ["// Generated from mobile/tokens.json by tools/gen_native_tokens.py. Do not edit.",
     "package com.radius.design", "", "import androidx.compose.ui.graphics.Color", "import androidx.compose.ui.unit.dp", "",
     "data class RadiusColors("]
k += [f"    val {camel(r[0])}: Color," for r in rows]
k += [")", "", "val RadiusLight = RadiusColors("]
k += [f"    {camel(r[0])} = {kc(r[1])}," for r in rows]
k += [")", "", "val RadiusDark = RadiusColors("]
k += [f"    {camel(r[0])} = {kc(r[2])}," for r in rows]
k += [")", ""]
for g, label in groups.items():
    k.append(f"object Radius{label} {{")
    k += [f"    val {camel(n)} = {v:g}.dp" for n, v in dims[g]]
    k += ["}", ""]
k.append("object RadiusMotion {  // milliseconds")
k += [f"    const val {camel(n)} = {int(v)}" for n, v in motion]
k += [f"    // {n}: {v}" for n, v in easing]
k += ["}", ""]
open(os.path.join(out, "android", "RadiusTokens.kt"), "w").write("\n".join(k))

print(f"colours: {len(rows)} written, {len(skipped)} skipped {skipped}")
print("dims:", {g: len(v) for g, v in dims.items()}, "motion:", len(motion))
print("out:", out)
