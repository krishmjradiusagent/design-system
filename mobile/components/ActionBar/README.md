Class prefix `.c-action-bar`. Styles ship in `components/bundle.css`; load `c-action-bar.css` alone only outside this system. Behaviour: `c-action-bar.js`.

## 1. Job
Floating bottom actions: glass "Commission breakdown" + ⋯ contract menu + FAB.

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `.page-actions` · `.commission-breakdown-trigger` · `appendContractMenu()`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Bar | `.c-action-bar` |
| Glass | `.c-action-bar__glass` (`__icon` square) |
| Contract | `[data-c-contract]` + `.c-menu` (details · tracker · accept · cancel) |
| FAB | `.c-fab-menu` |

## 5. Behaviour + tone
Emits `c-contract-action` {action}. Needs c-menu.js + c-fab-menu.js.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-action-bar.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
