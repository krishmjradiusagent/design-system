Class prefix `.c-picker`. Styles ship in `components/bundle.css`; load `c-picker.css` alone only outside this system. Behaviour: `c-picker.js`.

## 1. Job
Inline single-choice picker (e.g. Transaction template).

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `detailTemplateControl()`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-picker[data-c-picker][data-value][data-label]` |
| Trigger | `.c-picker__trigger` |
| Menu | `.c-menu` radio items |

## 5. Behaviour + tone
Emits `c-picker-change` {value}. Needs c-menu.js.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-picker.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
