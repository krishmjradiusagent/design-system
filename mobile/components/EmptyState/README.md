Class prefix `.c-empty-state`. Styles ship in `components/bundle.css`; load `c-empty-state.css` alone only outside this system. No script.

## 1. Job
Empty state: icon tile + title + description + optional action.

## 2. Level
Component · Batch D (shared)

## 3. Source
`_ds .rds-empty` + Home `.sec-empty`. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-empty-state` (inside `.rm-card` → tighter padding) |
| Media | `.c-empty-state__media` (tile slots; colorful → toned) |
| Action | `.c-empty-state__action` |

## 5. Behaviour + tone
Action can be gilded only if it is the screen's one primary.

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-empty-state.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
