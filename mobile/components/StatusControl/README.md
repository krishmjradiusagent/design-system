Class prefix `.c-status-control`. Styles ship in `components/bundle.css`; load `c-status-control.css` alone only outside this system. Behaviour: `c-status-control.js`.

## 1. Job
Status pill that opens a status picker.

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `statusControl()` · `.tx-status-trigger` · `.tx-status-menu`. Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `.c-status-control[data-c-status]` | span |
| Trigger | `.c-status-control__trigger` | button |
| Pill | `.c-status-control__pill.tone-*` | chip slots |
| Menu | `.c-status-control__menu[popover]` | raised surface, top layer |

## 5. Variants
default (pill) · `--plain` (no pill bg, used inside rows/metrics)

## 6. States
closed · open · option checked · keyboard focus · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--chip-bg/-fg` via tone-info/warning/success · `--surface-raised` · `--shadow-sheet` · `--separator-on-raised` · `--space-1/-1-5/-2-5/-3` · `--radius-pill/-card/-input` · `--size-icon-row`

## 8. Tone + expression
Status tones are always on (all expressions). Map: Inspection due → warning · Offer accepted, In escrow, Closing soon → info · Closed → success.

## 9. Behaviour (JS)
Click/Enter opens; ↑↓ moves; Esc closes; selecting re-renders and emits `c-status-change` {status}. Menu uses the Popover API (top layer) so swipe rows/sheets never clip it; closes on outside click and scroll.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | UIMenu from the pill | M3 dropdown menu |

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
