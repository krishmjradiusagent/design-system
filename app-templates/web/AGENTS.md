# AGENTS.md — Web app

Platform: **Web**. Design system: `radius-design-system/` (git submodule).

## Read first
1. `radius-design-system/AGENTS.md` — all rules. They apply here.
2. `radius-design-system/docs/radius-cards/00-index.md` — Mel chat cards.
3. `radius-design-system/docs/radius-cards/02-web-recipe.md` — how to build on this platform.

## How UI is built here
- Use the HTML directly: load `radius-design-system/web/tokens.css`, `web/components/bundle.css`, `web/components/bundle.js`; copy markup from `web/components/<name>/preview.html`; keep class names; call `RadiusUI.init(el)` after rendering.
- Light theme only. Right panel, popovers and menus are allowed on web.
- Mel chat cards: name = JSON `type` (`stats_card` → `StatsCard`). Payload examples: `radius-design-system/shared/protocol/examples/`.
- Suggestions fill the composer and never send. One primary action per card. Same `data.id` replaces the card.

## Never
- Edit anything inside `radius-design-system/`. Gaps go to the design owner (KJ).
- Invent a card, colour, size or icon set.
- Ship a card without all its states.

## Update the design system
`git submodule update --remote radius-design-system`, then re-run token generation (mobile) and check the changed components.
