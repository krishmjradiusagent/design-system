# Native handoff (iOS + Android devs)

Source of truth: `tokens/*.json` (W3C DTCG-style: `$type`, `$value`, `$description`).
- `color.primitive.json` — raw values (tier 1)
- `color.semantic.json` — `{ light, dark }` per token → map to iOS asset catalog / SwiftUI `Color` with appearances, Android `colors.xml` + `values-night`
- `color.accent.json` — 11 × 11 accent families
- `effects.json` — materials (flat MEL CTA/body, sheet gradient), shadows, Mel ring
- `typography.json` — fonts + roles (size, weight, line height, tracking, tabular) → SwiftUI `Font` / Compose `TextStyle`. Scale with Dynamic Type / fontScale, cap 1.5×.
- `foundation.json` — spacing scale + named slots, radius, sizes, motion
- `build/manifest.json` — every CSS var + class (for diffing)
- `../Components/<name>/<name>.md` — each component's contract (anatomy, states, behaviour, platform notes)

Rules for native:
- Map semantic tokens, never primitives, into views.
- iOS: HIG nav (tab bar = dock look), sheets with detents, swipe back. Android: M3 navigation bar, top app bar, system back, M3 switches/checkbox/date picker/snackbar.
- Mel: rebuild in Rive (preferred) or Lottie from `docs/mel.md` + `src/mel.css` (states, timings).
- When tokens change: diff the JSON, regenerate, never hand-edit values.
