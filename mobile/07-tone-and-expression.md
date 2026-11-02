> 15 October 2026: family names below are compatibility aliases to the MEL teal/mint ramp. Roles remain identified by labels/icons. This supersedes their former color meanings.

# Tone + expression — how the UI gets colorful without drifting

> Superseded in part: `gilded` is now a MEL green alias, `.tone-gold` resolves to MEL green, and every family name maps to the same MEL ramp (see Brand migration). Category is told by label and icon.

## Concept
- **Tone class** = *which* color family a thing belongs to: `.tone-sapphire`, `.role-buyer`, `.tone-success`.
- **Expression** = *how much* color the screen shows: `data-expression="quiet | accented | colorful"` on `<html>` or the screen.
- Components read **slot vars** only. They never know the color.

| Slot | Read by | Default (no tone / quiet) |
|---|---|---|
| `--metric-bg` `--metric-fg` | `.rm-metric` | card + primary text |
| `--chip-bg` `--chip-fg` | `.rm-chip` | tile + secondary text |
| `--tile-bg` `--tile-fg` | `.rm-tile` | tile + primary text |
| `--chart` | charts, bars | secondary text |

## Expression levels
| Level | Use when | Accent tones affect |
|---|---|---|
| `quiet` (default) | normal screens | nothing (neutral) |
| `accented` | dashboards, data-heavy, "add some color" | metrics, chips, roles, charts |
| `colorful` | KJ asks "make it colorful/vibrant/fun" | + icon tiles, avatars |
**Always on at every level:** `.tone-success/info/warning/danger`, `.tone-gold`, `.tone-mel`.

## Families (tier 1, 11 steps each)
sapphire · teal · jade · sage · gilded · terracotta · ruby · rose · plum · iris · slate
- `gilded` → brand only (use `.tone-gold`, never `.tone-gilded` for categories)
- `terracotta`, `ruby` → charts only (too close to warning/danger)
- `slate` → neutral category (drafts, archived, "other")

## Fixed mappings
| Meaning | Class |
|---|---|
| Buyer | `.role-buyer` (sapphire) |
| Seller | `.role-seller` (sage) |
| Both | `.role-both` (plum) |
| Referral | `.role-referral` (teal) |
| Tenant | `.role-tenant` (rose) |
| Money / commission | `.tone-gold` |
| Mel | `.tone-mel` |

## Rules
1. Max **4 accent families** per screen. Never the same family on two neighbours.
2. Same meaning → same tone on every screen (e.g. Listings is always sapphire).
3. Never put an accent on a CTA, body text, or a full-screen surface.
4. Accents never signal status. Status tones never signal categories.
5. Choose the level from the prompt (see `prompt-map.md`), state it in your reply.

## Example
```html
<section class="rm-section rm-grid rm-grid--3">
  <div class="rm-metric tone-sapphire">…Listings…</div>
  <div class="rm-metric tone-gold">…Paid…</div>
  <div class="rm-metric tone-success">…On track…</div>
</section>
```
Quiet: Listings neutral, Paid gold, Status green. Accented: Listings turns sapphire.
