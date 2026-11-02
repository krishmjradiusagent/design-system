# Radius design system

Web (**Radius UI**) and mobile (**Radius Mobile**) design systems in one repo, plus the Mel chat card protocol they share.

- Owner: KJ (Radius design)
- Card protocol: Mel Chat Templates v0.2.1 — 54 card types, all covered on web and mobile
- Exported: 2 November 2026 (Radius UI v38, Radius Mobile v40)

## Start here

| You are | Read |
|---|---|
| A coding agent | `AGENTS.md` (Claude Code also reads `CLAUDE.md`) |
| A web developer | `AGENTS.md` §3, `docs/radius-cards/02-web-recipe.md` |
| An iOS or Android developer | `AGENTS.md` §4, `docs/radius-cards/03-mobile-recipe.md` |
| Backend | `docs/radius-cards/01-card-protocol.md`, `shared/protocol/examples/` |
| Adding a new card | `docs/radius-cards/06-new-card-recipe.md` |

## Layout

```
AGENTS.md  CLAUDE.md  README.md
web/                 Radius UI: tokens.css, tokens.json, fonts/, components/<Name>/{preview.html,README.md}, components/bundle.{css,js}
mobile/              Radius Mobile: tokens.json, fonts/, 01–16 foundation docs, components/<Name>/{preview.html,README.md}, components/bundle.css
shared/protocol/     examples.json + examples/<type>.json (one payload per card type)
docs/radius-cards/   00-index … 06-new-card-recipe (LLM-first card kit)
gallery.html         all components + builder (gallery/data.js, gallery/builder.js)
tools/               preview.html, build-gallery.mjs, new-component.mjs, gen_native_tokens.py
vendor/phosphor/     icon font for offline previews
app-templates/       AGENTS.md + CLAUDE.md to drop into the web, iOS and Android repos
```

## See everything: the gallery

Open `gallery.html` (from the repo root, with any static server, or double-click it; it works from disk too).

- **Mel cards · 54**: every card type, web next to mobile (light + dark).
- **Web components** / **Mobile components**: every component, Mel cards first, then by group. Search at the top.
- **Builder**: paste a JSON payload → the card is laid out with existing parts only, on web and mobile, light and dark. Copy or download `preview.html` + `README.md` for both. Optional AI mode (your Anthropic key, stays in the browser).

Hosted copy for the team (no setup): https://claude.ai/artifact/73ta3wsBz6W2QjDyMcAhQN (copy files instead of download there).

After adding or changing components: `node tools/build-gallery.mjs` (refreshes `gallery/data.js`).

## Generate a component that does not exist yet

```bash
node tools/new-component.mjs --name open_house_card --payload payload.json        # web + mobile
node tools/new-component.mjs --name open_house_card --payload payload.json --only mobile
ANTHROPIC_API_KEY=sk-ant-... node tools/new-component.mjs --name x --payload p.json --ai   # optional AI layout
```

- Uses only existing classes and tokens. Fields it cannot place are listed as "not placed".
- Refuses to overwrite an existing component (`--force` only for proposals).
- Output is tagged **Status: proposal** in its README and in the gallery until the design owner approves it.

## View one component

```bash
npx serve .            # or: python3 -m http.server
# open http://localhost:3000/tools/preview.html?ds=web&c=stats_card
# open http://localhost:3000/tools/preview.html?ds=mobile&c=stats_card
```

## Use it from an app repo

```bash
# in the web / iOS / Android repo
git submodule add https://github.com/krishmjradiusagent/design-system.git radius-design-system
cp radius-design-system/app-templates/<web|ios|android>/AGENTS.md ./AGENTS.md
cp radius-design-system/app-templates/<web|ios|android>/CLAUDE.md ./CLAUDE.md
# later: git submodule update --remote radius-design-system
```

## Push this repo (first time)

```bash
cd "Design system"            # this folder
git init -b main
git add .
git commit -m "Radius design system: web + mobile + Mel card kit"
git remote add origin https://github.com/krishmjradiusagent/design-system.git
git push -u origin main
```

## Live design systems (humans, Radius org access)

- Radius UI (web): https://claude.ai/artifact/LWPKZhvNAyVUJ3KmkWrm3N
- Radius Mobile: https://claude.ai/artifact/CagVxhCE3LMBh8kLPJexMD (private to the owner until shared)

Agents cannot open these links. They use the files in this repo.

## Updating

The design systems are edited by the design owner, then re-exported here. Do not hand-edit `web/` or `mobile/`. Each export bumps the date above.
