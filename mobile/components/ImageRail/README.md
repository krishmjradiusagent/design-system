Class prefix `.c-image-rail`. Styles ship in `components/bundle.css`; load `c-image-rail.css` alone only outside this system. No script.

## 1. Job
Horizontal property photo rail.

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `.tx-image-rail`. Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `section.c-image-rail` | scroll-snap |
| Item | `button.c-image-rail__item` | first 232×92, rest 148×92 |
| Count | `.c-image-rail__count` | glass badge on first |

## 5. Variants
one variant

## 6. States
loaded · broken image (house icon) · 1 photo · many photos · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--surface-input` · `--action-glass` · `--radius-card/-pill` · `--space-0-5/-1/-2` · `--size-icon-tab`

## 8. Tone + expression
No tone.

## 9. Behaviour (JS)
Each item is a button → open gallery (screen decides). Snap scrolling, scrollbar hidden.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | horizontal UICollectionView paging | LazyRow with snapping |

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
