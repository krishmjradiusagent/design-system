Class prefix `.c-quick-view`. Styles ship in `components/bundle.css`; load `c-quick-view.css` alone only outside this system. Behaviour: `c-quick-view.js`.

## 1. Job
Transaction quick view sheet (tap a transaction row).

## 2. Level
Component · Batch A (list + quick view)

## 3. Source
`Pre-design system projects/Transactions - office app/` → index.html `#transactionSheet` + `renderQuickView()` + `renderTransactionActions()`. Structure/spacing 1:1; colors, type, radius, spacing now from the new system; borderless by default; icons Phosphor.

## 4. Anatomy
| Part | Class | Notes |
|---|---|---|
| Root | `section.rm-sheet.c-quick-view[role=dialog]` | sibling `.c-quick-view__scrim` before it |
| Head | title `[data-qv=title]` + sub + close glass | |
| Body | `[data-qv=body]` → c-image-rail · c-quick-metrics ×2 · c-tracker-card | |
| CTA | gilded "View transaction" + glass ⋯ `[data-qv=more]` | sticky |
| Menu | `[data-qv=menu]` | Add task · Commission breakdown · Mark private · Accept contract · Cancel contract |

## 5. Variants
one variant

## 6. States
closed · open · menu open · tracker expanded · private · owner ≠ me (privacy disabled) · Closed (no accept/cancel) · Dynamic Type 1.5× · dark/light

## 7. Tokens consumed
`--surface-raised` · `--overlay-scrim` · `--separator-on-sheet/-on-raised` · `--status-success-fg` · `--action-destructive` · `--space-sheet-*` · `--radius-card/-input` · `--motion-slow`

## 8. Tone + expression
Inherits from children. One gilded CTA (the screen's primary while open).

## 9. Behaviour (JS)
`cQuickView.open(sheet, tx, opener)` fills + opens; Esc / scrim / close / drag grab >80px closes; focus returns to opener. Emits `c-qv-view` {id}, `c-qv-action` {id, action}. Needs c-status-control.js + c-tracker-card.js.

## 10. Platform
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Hit area | 44pt | 48dp |
| Native equivalent | sheet with medium/large detents | M3 modal bottom sheet |

## 11. Accessibility
Real buttons for every tap target · `aria-label` on icon-only buttons · focus ring from foundations · reduced motion respected · contrast checked dark + light.

## 12. Do / Don't
- Do: reuse as-is; color only via tone classes; real Radius data.
- Don't: restyle internals, add borders, hard-code colors or sizes.

## 13. Review
- [x] `lint-tokens.mjs` clean
- [x] Matrix / demo page renders dark + light × 3 expressions
- [x] No new tokens, no new atoms
- [ ] Approved by KJ
