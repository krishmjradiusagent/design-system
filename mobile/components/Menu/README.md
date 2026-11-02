Class prefix `.c-menu`. Styles ship in `components/bundle.css`; load `c-menu.css` alone only outside this system. Behaviour: `c-menu.js`.

## 1. Job
Shared popover menu (top layer) + attach() helper.

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.rds-menu` · `.tx-status-menu` · `.overview-add-menu` · `.contract-menu`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Menu | `.c-menu[popover=manual]` |
| Item | `.c-menu__item` (`--success` `--danger` `--static`, `[aria-checked]` radio) |

## 5. Behaviour + tone
`cMenu.attach(trigger, menu, {align, place, keepOpen})`: open/close, flip placement, ↑↓, Esc, outside click/scroll/resize close, aria-expanded.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-menu.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
