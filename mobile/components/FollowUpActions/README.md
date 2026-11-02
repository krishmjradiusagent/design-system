Class prefix `.c-follow-up-actions`. Styles ship in `components/bundle.css`; load `c-follow-up-actions.css` alone only outside this system. No script.

## 1. Job
Stacked follow-up action rows + Accept | Cancel pair (quick view).

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `_ds/.../follow-up-actions.css` `.rds-follow-up-actions`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `nav.c-follow-up-actions` |
| Action | `button.c-follow-up-action` (`--breakdown` info · `--tracker` gold · `--accept` success · `--cancel` destructive) |
| Pair | `.c-follow-up-actions__pair` |

## 5. Behaviour + tone
Buttons; screen decides what each does. In quick view emits `c-qv-action`. Tracker was indigo → gold.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-follow-up-actions.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
