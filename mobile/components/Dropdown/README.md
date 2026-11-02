Class prefix `.c-dropdown`. Styles ship in `components/bundle.css`; load `c-dropdown.css` alone only outside this system. Behaviour: `c-dropdown.js`.

## 1. Job
Custom select (native select banned): label + trigger + listbox.

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `uploadDropdown()` `.cc-select` · `librarySelect()` (was native select). Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-dropdown[data-c-dropdown][data-name][data-value][data-label]` (`--inline` gold text) |
| Trigger | `.c-dropdown__trigger` |
| List | `.c-menu[role=listbox]` options `aria-selected` |

## 5. Behaviour + tone
Emits `c-dropdown-change` {name, value, label}. Hidden input keeps form value. Menu matches trigger width. Needs c-menu.js.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-dropdown.css` (linted).

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
