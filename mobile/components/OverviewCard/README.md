Class prefix `.c-overview-card`. Styles ship in `components/bundle.css`; load `c-overview-card.css` alone only outside this system. No script.

## 1. Job
Overview section summary with latest activity (max 2 docs).

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `overviewSummary()` · `.tx-overview-card` · `.tx-activity`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `section.c-overview-card` |
| Summary | `a.c-overview-card__summary` tile + title + count + chevron |
| Count | `.c-overview-card__count` (`--alert` red for audit) |
| Activity | rail + `ol.c-overview-card__list` of c-doc-chip links (40px rows, parity) |

## 5. Behaviour + tone
Stack them with `.rm-stack--tight` (8 apart, parity). Empty → "No activity yet".

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-overview-card.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
