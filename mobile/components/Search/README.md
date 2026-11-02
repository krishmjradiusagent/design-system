Class prefix `.c-search`. Styles ship in `components/bundle.css`; load `c-search.css` alone only outside this system. Behaviour: `c-search.js`.

## 1. Job
Search capsule with clear button.

## 2. Level
Component · Batch D (shared)

## 3. Source
`.tx-search-capsule` · `.rds-search__clear`. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-search` |
| Input | `.c-search__input[type=search]` |
| Clear | `.c-search__clear` (hidden when empty) |

## 5. Behaviour + tone
Clear empties + refocuses; Esc clears. Emits `c-search` {query}. Ring on capsule (focus-within).

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-search.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
