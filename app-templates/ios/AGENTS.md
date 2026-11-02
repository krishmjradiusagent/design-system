# AGENTS.md — iOS (Swift) app

Platform: **iOS (Swift)**. Design system: `radius-design-system/` (git submodule).

## Read first
1. `radius-design-system/AGENTS.md` — all rules. They apply here.
2. `radius-design-system/docs/radius-cards/00-index.md` — Mel chat cards.
3. `radius-design-system/docs/radius-cards/03-mobile-recipe.md` — how to build on this platform.

## How UI is built here
- The HTML in `radius-design-system/mobile/` is the visual spec. Build SwiftUI views (UIKit only where the app already uses it). Generate tokens with `python3 radius-design-system/tools/gen_native_tokens.py --out <app>/DesignSystem/Generated` and use `Color.rds.*`, `RDSSpacing`, `RDSRadius`, `RDSSize`, `RDSMotion`. Never hard-code values.
- Light + dark always. Sheets with detents, navigation push, full-screen viewers. No popovers. 44pt targets. Dynamic Type to 1.5×.
- Mel chat cards: name = JSON `type` (`stats_card` → `StatsCard`). Payload examples: `radius-design-system/shared/protocol/examples/`.
- Suggestions fill the composer and never send. One primary action per card. Same `data.id` replaces the card.

## Never
- Edit anything inside `radius-design-system/`. Gaps go to the design owner (KJ).
- Invent a card, colour, size or icon set.
- Ship a card without all its states.

## Update the design system
`git submodule update --remote radius-design-system`, then re-run token generation (mobile) and check the changed components.
