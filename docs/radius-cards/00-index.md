# Radius cards · index

LLM-first kit for Mel chat cards. Read in this order. Each file is short and self-contained.

| # | File | Read when |
|---|---|---|
| 01 | `01-card-protocol.md` | Always. JSON shape, states, actions, tones, replace-by-id. |
| 02 | `02-web-recipe.md` | Building for web. Classes, markup, behaviours. |
| 03 | `03-mobile-recipe.md` | Building for iOS or Android. HTML → SwiftUI / Compose mapping, tokens, type. |
| 04 | `04-layout-rules.md` | Always. Header row, sheets vs pages, one primary action. |
| 05 | `05-card-catalog.md` | Finding the card for a JSON type and its files. |
| 06 | `06-new-card-recipe.md` | Building any card, or proposing a new one. Prompt template + checklist. |

## Three facts that prevent most bugs

1. Suggestions fill the composer. They never send.
2. On mobile there are no popovers and no side panels. Sheets and pushed pages only.
3. A card with the same `data.id` replaces the old one. Never append a duplicate.

## Glossary

- **Card** — one rendered JSON payload in the chat thread.
- **Prompt row** — a tappable line under a reply (`↳ Draft a message to Jordan`). Fills the composer.
- **Header row** — icon tile + caption (+ chevron) at the top of a card.
- **kv row** — label over value (mobile) or label + value (web) inside a card.
- **Tone** — `success | warning | danger | info | neutral`. Colour pair for chips, dots, tiles.
- **Pushed page** — iOS navigation push / Android new screen with back.
- **Bottom sheet** — iOS sheet with detents (medium, large) / Android modal bottom sheet.
