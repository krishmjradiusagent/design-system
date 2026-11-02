Class prefix `.c-upload-card`. Styles ship in `components/bundle.css`; load `c-upload-card.css` alone only outside this system. Behaviour: `c-upload-card.js`.

## 1. Job
Upload queue item: status, retry, remove/cancel, progress, inline access/state.

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `renderUploadQueue()` · `.upload-document-card` · `.upload-row-*`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `article.c-upload-card[data-name][data-size][data-status][data-progress]` |
| Status | ✓ success · ! error · spinner |
| Options | `.c-upload-card__options` with `.c-dropdown--inline` ×2 |

## 5. Behaviour + tone
States: ready · uploading · uploaded · error · cancelled. Retry simulates upload; cancel while uploading → cancelled. Emits `c-upload-status`, `c-upload-remove`.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-upload-card.css` (linted).

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
