Class prefix `.c-m3-topbar`. Styles ship in `components/bundle.css`; load `c-m3-topbar.css` alone only outside this system. No script.

## 1. Job
Android top app bar (M3 small): back arrow · title · actions.

## 2. Level
Component · Batch D (shared)

## 3. Source
M3 spec · replaces iOS glass header on Android. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Bar | `.c-m3-topbar` (64dp) |
| Button | `.c-m3-topbar__btn` (48dp) |
| Title | `.c-m3-topbar__title.t-page-title` |

## 5. Behaviour + tone
Shown only on Android; mark the iOS header `data-ios-only`. Back uses arrow-left (Android), caret-left on iOS.

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-m3-topbar.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
