Class prefix `.c-quick-metrics`. Styles ship in `components/bundle.css`; load `c-quick-metrics.css` alone only outside this system. No script.

## 1. Job
2-column grid of compact metric cards.

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `.tx-quick-metrics` · `.tx-metric-card` (compact). Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `.c-quick-metrics` | grid, gap 8 |
| Card | `.rm-metric.rm-metric--compact.tone-*` | atom |
| Label | `.rm-metric__label.t-caption` + Phosphor icon | |
| Value | `.rm-metric__value.t-money-sm` | |

## 5. Variants
any tone per card

## 6. States
default · long value (ellipsis) · status control as value · inside sheet (sheet-card surface) · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--metric-bg/-fg` · `--space-grid-gap/-card-pad-compact/-card-inner` · `--size-icon-row`

## 8. Tone + expression
Quick view tones: price sapphire · commission gold · rate none · closing teal · acceptance slate · status = status control. Accents show from `accented`.

## 9. Behaviour (JS)
Static. Status cell hosts c-status-control.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | iOS/Android: 2-column grid of tiles | iOS/2-column grid of tiles |

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
