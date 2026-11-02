Class prefix `.c-forms-toolbar`. Styles ship in `components/bundle.css`; load `c-forms-toolbar.css` alone only outside this system. Behaviour: `c-forms-toolbar.js`.

## 1. Job
List toolbar: view switch (List/Cards) · "Viewing N documents" · Select/Cancel · Select all.

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.form-view-toolbar` · `.form-view-switcher` · `.form-bulk-bar` · `.form-select-all`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Scope | `[data-c-forms][data-view][data-selecting]` |
| Toolbar | `.c-forms-toolbar[data-for]` |
| Controls | `[data-c-view]` + menu · `[data-c-select]` · `[data-c-select-all]` |
| Views | `[data-c-view-list]` / `[data-c-view-cards]` |

## 5. Behaviour + tone
Toggles `data-selecting` / `data-view` on scope; syncs select-all (checked/indeterminate). Emits `c-forms-selection` {ids}, `c-forms-view` {view}. Needs c-menu.js.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-forms-toolbar.css` (linted).

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
