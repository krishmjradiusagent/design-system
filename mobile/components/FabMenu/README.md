Class prefix `.c-fab-menu`. Styles ship in `components/bundle.css`; load `c-fab-menu.css` alone only outside this system. Behaviour: `c-fab-menu.js`.

## 1. Job
Gilded FAB with add menu above.

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.tx-add-fab` · `.overview-add-menu`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-fab-menu` |
| FAB | `.rm-fab` |
| Menu | `.c-menu` |

## 5. Behaviour + tone
Emits `c-fab-action` {action, group}. Counts as the screen's one gilded primary. Needs c-menu.js.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-fab-menu.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
