Class prefix `.c-filter-sheet`. Styles ship in `components/bundle.css`; load `c-filter-sheet.css` alone only outside this system. Behaviour: `c-filter-sheet.js`.

## 1. Job
Filter sheet with dropdowns + Reset / Cancel / Apply.

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `renderLibraryFilters()` · `#libraryFilterSheet` · `.library-filter-footer`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Scrim | `.c-filter-sheet__scrim` |
| Sheet | `section.rm-sheet.c-filter-sheet` head + body + foot |
| Controls | `[data-c-close]` `[data-c-reset]` `[data-c-apply]` |

## 5. Behaviour + tone
`cFilterSheet.open(sheet, opener)`; Reset → each dropdown `data-default`; Apply emits `c-filters-apply` {values}; Esc/scrim/Cancel close; focus returns.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-filter-sheet.css` (linted).

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
