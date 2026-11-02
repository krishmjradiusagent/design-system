# Prompt map — turning KJ's words into system choices

| KJ says | You do |
|---|---|
| "design X screen" | pick template by screen type (`screens.md`), `quiet` |
| "make it colorful / vibrant / fun / less boring" | `data-expression="colorful"` |
| "add some color / highlight numbers / dashboard" | `accented` |
| "clean / minimal / premium / calm" | `quiet` |
| "luxury / premium CTA" | use the shared MEL primary variant |
| "Mel suggests / AI insight" | `.rm-card--mel` + inline Mel `heads-up` |
| "Mel is working" | `data-state="thinking"` |
| "add a filter / quick action / quick view" | sheet |
| "detail of a deal / person" | pushed page |
| "transaction list / row / card / status …" | reuse from `../Components/` first |
| "new kind of card/list/widget" | component via template + contract → ask approval |
| any new color / font / radius / spacing | **stop** — not allowed. Ask KJ with `Rec:` |
| conflicting instruction vs `decisions.md` | quote the decision, ask which wins |

Always state in your reply: screen type · template · expression · components reused · new components (if any).
