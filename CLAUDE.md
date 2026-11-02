# CLAUDE.md

@AGENTS.md

Everything in `AGENTS.md` applies. Claude-specific notes only below.

## How to work in this repo

- **Plan first.** Before writing UI, name the JSON type(s) and the existing components you will use. If you cannot name an existing component for a part, say so and ask; do not invent one.
- **Read before you build.** For each card: `docs/radius-cards/05-card-catalog.md` → `shared/protocol/examples/<type>.json` → `web/components/<type>/README.md` + `preview.html` (web) or `mobile/components/<type>/README.md` + `preview.html` (mobile) → the recipe for your platform.
- **Use the subagent for search, not for design.** Fan out with Explore to find components and classes. Keep design decisions in the main thread.
- **Check visually.** Open `tools/preview.html?ds=<web|mobile>&c=<name>` (serve the repo root with any static server, e.g. `npx serve .`) and compare your build against it. For mobile, check light and dark.
- **Never edit `web/` or `mobile/`** from an app task. If the design system is missing something, write the gap in your reply and stop.
- **Ask, do not assume,** when: the JSON type is not in the catalog; a field has no visual home; the platform rule (sheet vs page) is unclear; copy is missing.

## Output style for this team

- Terse. Bullets over paragraphs. Lead with the action.
- No apology language, no exclamation marks in UI copy or in replies.
- When you finish, list: components used, files changed, states covered, what you could not check.
