Class prefix `.c-bulk-bar`. Styles ship in `components/bundle.css`; load `c-bulk-bar.css` alone only outside this system. No script.

## 1. Job
Floating selection actions: gilded "Create envelope (n)" + delete + download; FAB above when not selecting.

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.form-floating-stack` · `.form-floating-tools`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-bulk-bar` |
| FAB | `.rm-fab` (hidden while tools show) |
| Tools | `.c-bulk-bar__tools[hidden]` primary + `.c-bulk-bar__icon` ×2 |

## 5. Behaviour + tone
Create stays disabled until every selected form is filled (screen logic, see `_demo/forms.html`). Rule: one gilded action → FAB hides while Create shows.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-bulk-bar.css` (linted).

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
