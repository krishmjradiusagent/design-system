Class prefix `.c-avatar`. Styles ship in `components/bundle.css`; load `c-avatar.css` alone only outside this system. Behaviour: `c-avatar.js`.

## 1. Job
Person avatar (image or initials) + overlapping group.

## 2. Level
Component · Batch D (shared)

## 3. Source
`.rds-avatar` (+ `--lg`, groups). Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Avatar | `.c-avatar[data-name][data-src]` (`--sm` 22 · md 32 · `--lg` 44) |
| Group | `.c-avatar-group` + `__more` |

## 5. Behaviour + tone
JS fills initials ("Krish (me)" → K) and swaps in the image when it loads. Toned only in colorful.

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-avatar.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
