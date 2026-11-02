Class prefix `.c-tx-row`. Styles ship in `components/bundle.css`; load `c-tx-row.css` alone only outside this system. Behaviour: `c-tx-row.js`.

## 1. Job
Compact transaction row for the Transactions list with swipe actions.

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `.tx-swipe-row` · `.tx-compact-row` · `.tx-swipe-actions` · `.tx-compact-summary`. Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `.c-tx-row[data-id]` | overflow clip for swipe |
| Actions | `.c-tx-row__actions` | edit · delete · privacy (`.rm-btn`) |
| Main | `.c-tx-row__main` | photo + open button + summary |
| Amount | `button.c-tx-row__amount[data-price][data-earnings]` | toggles all rows |
| Status | `.c-status-control` | |

## 5. Variants
`.c-tx-row--card` (when rows sit inside a card: main bg = card)

## 6. States
default · swiping · revealed · private ("Private · Closes …") · closed · missing photo · amount = earnings · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--bg-page` (row bg) · `--surface-raised/-input` · `--border-card` · `--separator-on-page` · `--space-row-y/-row-media/-0-5/-1-5/-2` · `--radius-badge` · `--size-control-lg` · `--motion-base`

## 8. Tone + expression
Status via c-status-control (always on).

## 9. Behaviour (JS)
Swipe left ≥45px reveals actions (also ← key; → / Esc hides). Tap address → `c-tx-open` {id}. Action → `c-tx-action` {id, action}. Amount → toggles price/earnings on every row, `c-tx-amount-mode`. Outside tap resets. Needs `c-status-control.js`.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | UITableView trailing swipe actions | swipe-to-reveal (M3 has no native; keep same pattern) |

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
