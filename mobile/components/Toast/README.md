Class prefix `.c-toast`. Styles ship in `components/bundle.css`; load `c-toast.css` alone only outside this system. Behaviour: `c-toast.js`.

## 1. Job
Short confirmation toast above bottom actions (+ optional action). Optional `placement:'top'` places it below the safe area for screens with fixed bottom actions.

## 2. Level
Component · Batch D (shared)

## 3. Source
index `.toast` · transaction.js `announce()` `.page-notice`. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-toast[role=status]` (`--success` `--danger`; `--error` stays as an alias) |
| Action | `.c-toast__action` (gold text) |

## 5. Behaviour + tone
`cToast.show(container, msg, {tone, placement:'top', action, onAction, ms})` — one per container, auto-hides 4.5s, polite live region. Default placement remains above bottom actions.

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-toast.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
