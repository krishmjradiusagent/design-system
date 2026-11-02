Class prefix `.c-form-card`. Styles ship in `components/bundle.css`; load `c-form-card.css` alone only outside this system. No script.

## 1. Job
Card view of forms / library docs (2-col grid).

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.form-card-grid` · `.form-document-card` · `.form-card-preview` · `.form-card-lines`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Grid | `.c-form-card-grid` |
| Card | `.c-form-card` |
| Preview | `.c-form-card__preview` lines + `__actions` (chip or checkbox + ⋯) |
| Name | `.c-form-card__name` 2 lines |

## 5. Behaviour + tone
Was bordered → filled. Uses c-form-row chip + more button.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-form-card.css` (linted).

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
