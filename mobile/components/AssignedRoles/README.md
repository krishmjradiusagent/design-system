Class prefix `.c-assigned-roles`. Styles ship in `components/bundle.css`; load `c-assigned-roles.css` alone only outside this system. Behaviour: `c-assigned-roles.js`.

## 1. Job
Assigned roles: first two inline, "+N" opens the full list.

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `assignedRolesControl()` · `.assigned-roles`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-assigned-roles[data-c-roles]` |
| Trigger | `.c-assigned-roles__trigger` (only when >2) |
| List | `.c-menu` static items |

## 5. Behaviour + tone
0 → "Not assigned"; ≤2 → plain text; >2 → button + list. Dual deal expands to Seller, Buyer upstream (data). Needs c-menu.js.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-assigned-roles.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
