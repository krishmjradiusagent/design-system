Class prefix `.c-m3-navbar`. Styles ship in `components/bundle.css`; load `c-m3-navbar.css` alone only outside this system. No script.

## 1. Job
Android primary navigation (Material 3 navigation bar) with Mel FAB.

## 2. Level
Component · Batch D (shared)

## 3. Source
M3 spec · replaces iOS `.rm-dock` on Android. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Bar | `nav.c-m3-navbar` (80dp) |
| Item | `.c-m3-navbar__item[aria-current]` + `__pill` (64×32 gold tint when active) |
| Mel | `.mel.c-m3-navbar__mel` |

## 5. Behaviour + tone
Shown only under `data-platform="android"`; the iOS dock hides automatically. Labels required (M3).

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-m3-navbar.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
