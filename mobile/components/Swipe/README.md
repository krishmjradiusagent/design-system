Class prefix `.c-swipe`. Styles ship in `components/bundle.css`; load `c-swipe.css` alone only outside this system. Behaviour: `c-swipe.js`.

## 1. Job
Generic swipe-to-reveal row (forms, any list).

## 2. Level
Component · Batch C (documents)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.form-swipe-shell` · `.form-swipe-actions`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless; Phosphor icons (PDF image → `ph-file-pdf`).

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-swipe[data-id]` |
| Actions | `.c-swipe__actions` (`.rm-btn` items with `data-action`) |
| Main | `.c-swipe__main` |

## 5. Behaviour + tone
Swipe left ≥45px / ← reveals; → / Esc / outside tap hides; taps right after a swipe are swallowed. `[data-no-swipe]`, inputs, menus never start a drag. Emits `c-swipe-action` {action, id}.

## 6. States
default · selecting · open menu · disabled · empty · long names · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-swipe.css` (linted).

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
