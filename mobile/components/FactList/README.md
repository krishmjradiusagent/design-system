Class prefix `.c-fact-list`. Styles ship in `components/bundle.css`; load `c-fact-list.css` alone only outside this system. No script.

## 1. Job
Transaction facts: tinted round icon + label + value.

## 2. Level
Component · Batch B (transaction overview + details)

## 3. Source
`Transactions - office app/transaction.js` / `transaction.css` → `renderDetails()` list · `.detail-facts` · `.detail-info-icon` · `.detail-money-row`. Structure/spacing 1:1; colors, type, radius, spacing from the new system; borderless by default; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Root | `.c-fact-list` inside `.rm-card.rm-card--list` |
| Row | `.c-fact` (`--money` value gold) |
| Icon | `.c-fact__icon.tone-*/.role-*` |

## 5. Behaviour + tone
Icon tones (old blue/indigo/green/amber, indigo removed): property sapphire · representation role-* · sale price gold · gross jade · rate teal · closing sapphire · acceptance slate. Accents from `accented`; gold always.

## 6. States
default · open/expanded (if interactive) · long text · empty · Dynamic Type 1.5× · dark/light · quiet/accented/colorful

## 7. Tokens consumed
Semantic only — see `c-fact-list.css` (linted: no raw values, no tier-1, no invented tokens).

## 8. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Menus | UIMenu / pull-down | M3 dropdown / menu |

## 9. Accessibility
Real buttons/links · `aria-label` on icon-only controls · menus keyboard-operable (↑↓ Esc) · focus ring from foundations · reduced motion respected.

## 10. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
