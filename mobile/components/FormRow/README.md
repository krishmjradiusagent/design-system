Class prefix `.c-form-row`. Styles ship in `components/bundle.css`; load `c-form-row.css` alone only outside this system. No script.

## 1. Job
Recommended form row: PDF tile · name · action chip · ⋯ menu; checkbox replaces the tile when selecting.

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `renderForms()` · `.form-list-row` · `.form-start` · `.form-filled` · `.form-menu-wrap`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Row | `.c-form-row` (inside `.c-swipe__main`) |
| Select | `label.c-form-row__select` + `.c-checkbox[data-select][data-ready]` |
| Link | `a.c-form-row__link` tile + name + chip |
| Chip | `.c-form-row__chip` → `__start` (gold) · `__filled` ✓ (success) · View |
| More | `.c-form-row__more` + `.c-menu` (Convert to template · Download · Delete) |

## 5. Behaviour + tone
Swipe tray: Template · Download · Delete. Parent `[data-selecting="true"]` swaps tile → checkbox. "Start filling" indigo → gold (KJ).

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-form-row.css` (linted).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Selection | edit mode with leading checkboxes | M3 checkbox + contextual action bar |
| Menus / pickers | UIMenu, pull-down | M3 menu / exposed dropdown |

## 9. Accessibility
Real buttons/links/inputs · labels on every checkbox and icon button · menus + listboxes keyboard-operable · progress has role=progressbar · focus ring from foundations.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
