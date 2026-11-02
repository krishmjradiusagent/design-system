Class prefix `.c-gallery`. Styles ship in `components/bundle.css`; load `c-gallery.css` alone only outside this system. Behaviour: `c-gallery.js`.

## 1. Job
Full-screen property photo viewer.

## 2. Level
Component · Batch D (shared)

## 3. Source
index `.tx-gallery` · `openGallery()`. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `section.c-gallery[role=dialog]` |
| Head | back glass · centered title · spacer |
| Body | `[data-c-gallery-body]` photos |

## 5. Behaviour + tone
`cGallery.open(el, {title, photos, index, opener})` scrolls to the tapped photo; background inert; back / Esc closes and refocuses opener. Wired in `c-quick-view.html` (tap a rail photo).

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-gallery.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
