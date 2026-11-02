Class prefix `.c-tracker-card`. Styles ship in `components/bundle.css`; load `c-tracker-card.css` alone only outside this system. Behaviour: `c-tracker-card.js`.

## 1. Job
Commission tracker: progress ring + stage, expands to 6 steps.

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `quickTrackerCard()` · `.tx-tracker-card` · `.rds-timeline`. Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `article.c-tracker-card[data-c-tracker=0–6]` | |
| Ring | `svg.c-tracker-card__ring` | gold fill, n/6 |
| Toggle | `button.c-tracker-card__toggle` | aria-expanded |
| Steps | `ol.c-tracker-card__steps` | done/current/pending |

## 5. Variants
one variant

## 6. States
0/6 · in progress · 6/6 "Payment complete" · collapsed · expanded · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--metric-bg` · `--border-card` · `--action-primary` (ring) · `--separator-on-card` · `--space-timeline-step/-card-pad/-card-pad-compact` · `--t-badge-size` (ring text)

## 8. Tone + expression
Steps: done → tone-success · current → tone-info · pending → neutral. Always on.

## 9. Behaviour (JS)
Toggle expands/collapses timeline. Data via `data-c-tracker`. Labels fixed: Checklist compliant → Agent CDA → Team lead CDA → Group lead CDA → Commission received → Agent payment.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | disclosure group | expandable card |

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
