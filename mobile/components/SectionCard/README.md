Class prefix `.c-section-card`. Styles ship in `components/bundle.css`; load `c-section-card.css` alone only outside this system. No script.

## 1. Job
Titled card: heading + count + body (people, tracker).

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.detail-people` · `.detail-people-heading`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `section.c-section-card` |
| Head | `.c-section-card__title` + `.c-section-card__count` |
| Body | `.c-section-card__body` |

## 5. Behaviour + tone
Was bordered → default filled.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-section-card.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
