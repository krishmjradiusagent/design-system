Class prefix `.c-tx-card-row`. Styles ship in `components/bundle.css`; load `c-tx-card-row.css` alone only outside this system. No script.

## 1. Job
Transaction row inside a card on Home ("Active transactions").

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `.tx-row` (`.tx-header/.tx-addr/.tx-price/.tx-role/.tx-foot/.tx-status/.tx-close`). Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `button.c-tx-card-row` | inside `.rm-card.rm-card--list` |
| Photo | `.c-tx-card-row__photo` | 44px, placeholder icon fallback |
| Address | `.c-tx-card-row__address.t-address` | 2-line clamp |
| Price · role | `.c-tx-card-row__price` + `.c-tx-card-row__role.role-*` | |
| Foot | `.c-tx-card-row__status.tone-*` + close text | |

## 5. Variants
one variant

## 6. States
default · pressed (scale .985) · long address (2 lines) · missing photo · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--surface-input` · `--text-secondary/-tertiary` · `--separator-on-card` · `--chip-*` · `--space-0-5/-1/-1-5/-2/-2-5/-3` · `--radius-badge/-pill` · `--size-control-lg`

## 8. Tone + expression
Role text uses `--chip-fg` → neutral in quiet, colored in accented/colorful. Status pill always on.

## 9. Behaviour (JS)
Whole row is one button (opens quick view). Indigo buyer color from old file → `.role-buyer` (sapphire).

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | list cell in inset grouped section | M3 list item |

## 11. Accessibility
Real buttons for every tap target · `aria-label` on icon-only buttons · focus ring from foundations · reduced motion respected · contrast checked dark + light.

## 12. Do / Don't
- Do: reuse as-is; color only via tone classes; real Radius data.
- Don't: restyle internals, add borders, hard-code colors or sizes.

## 13. Review
- [x] `lint-tokens.mjs` clean
- [x] Matrix / demo page renders dark + light × 3 expressions
- [x] No new tokens, no new atoms
- [ ] Approved by KJ
