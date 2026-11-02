Class prefix `.c-summary-cards`. Styles ship in `components/bundle.css`; load `c-summary-cards.css` alone only outside this system. No script.

## 1. Job
2-col summary cards at top of Overview / Details: status (tinted), closing date + roles, template.

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.detail-summary-cards` · `.overview-summary-cards` · `.tx-metric-card` · `.detail-status-card`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Grid | `.c-summary-cards` (`--compact` = overview padding 8) |
| Card | `.c-summary-card` (`--status` label in primary text) |
| Label | `.c-summary-card__label` + icon |
| Value | `.c-summary-card__value` hosts c-status-control / c-picker / c-assigned-roles |

## 5. Behaviour + tone
Status card tint follows status via `data-c-tone-target=".c-summary-card"` on the status control (always on).

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-summary-cards.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
