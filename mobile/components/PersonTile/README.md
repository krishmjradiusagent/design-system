Class prefix `.c-person-tile`. Styles ship in `components/bundle.css`; load `c-person-tile.css` alone only outside this system. No script.

## 1. Job
People tile: role + avatar + name, or avatar group + "+N".

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `.tx-quick-person`. Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `.rm-metric.rm-metric--compact.c-person-tile` | |
| Avatar | `.c-person-tile__avatar` (img or initials) | 22px |
| Group | `.c-person-tile__group` | overlap −6 |
| More | `.c-person-tile__more` | +N |

## 5. Variants
single person · group

## 6. States
photo · initials (brackets stripped: "Krish (me)" → K) · long name ellipsis · 0 people · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--surface-input` · `--metric-bg` · `--text-secondary` · `--space-1/-1-5/-2` · `--radius-pill`

## 8. Tone + expression
Neutral (no tone).

## 9. Behaviour (JS)
Static.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | iOS/Android: tile with avatar stack | iOS/tile with avatar stack |

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
