# AGENTS.md — Radius design system (web + mobile)

Instructions for any coding agent (Claude Code, Cursor, Codex, Copilot, others) working with this repo or with an app repo that includes it.

Read this file fully before writing UI. Then read `docs/radius-cards/00-index.md` before building or changing any Mel chat card.

---

## 1. What this repo is

One repo, two design systems, one card protocol.

| Folder | What | Who uses it |
|---|---|---|
| `web/` | **Radius UI**. Web design system. Plain HTML + CSS + a small JS bundle. Light theme only. | Web app (Mel Assistant Web, Radius web) |
| `mobile/` | **Radius Mobile**. Mobile design system written in HTML/CSS as the visual spec. Light + dark, iOS + Android. | iOS (Swift) and Android (Kotlin) apps |
| `shared/protocol/` | Mel Chat Templates v0.2.1 JSON payloads. One example per card type. | Backend, web, iOS, Android |
| `docs/radius-cards/` | How to read, build and add Mel chat cards. LLM-first. | Everyone |
| `tools/preview.html` | Opens any component preview with the right CSS loaded. | Humans and agents checking visuals |
| `app-templates/` | Short AGENTS.md / CLAUDE.md to paste into the web, iOS and Android repos. | App repos |

Source of truth for the card protocol: Mel Chat Templates (`https://api1.agentdesks.com/v3.0/agent-ally/mel-templates/`). This repo is a copy of the approved designs. If the templates page and this repo disagree on a JSON field, the templates page wins; if they disagree on looks, this repo wins.

---

## 2. Hard rules (do not break)

1. **Use what exists.** Before you write any new UI, search `web/components/` or `mobile/components/` for the JSON type or a part that does the job. Reuse it. Do not invent a look.
2. **Tokens only.** Colours, type, spacing, radius, motion come from tokens. Never hard-code a hex, px font size or duration in app code.
   - Web: CSS variables from `web/tokens.css` (`--primary`, `--muted-foreground`, `--border` …).
   - Mobile: semantic tokens from `mobile/tokens.json` (`surface-card`, `text-primary`, `action-primary` …). Never the primitive palette.
3. **Card names = JSON `type`.** A card for `stats_card` is called `StatsCard` (native) / `stats_card` (web folder). Same fields, same states, everywhere.
4. **Suggestions fill the composer and never send.** Prompt rows, chips, skill cards, listing rows, option tiles: tap puts text in the composer. Only the composer's Send button sends.
5. **One primary action per card**, on the right (web) or at the foot (mobile). Everything else is a prompt row under the card.
6. **Mobile is not web.** On mobile there are **no side panels and no popovers**:
   - web right panel → pushed page (iOS push / Android new screen)
   - popover, menu, share menu → bottom sheet
   - media viewer → full-screen viewer
   - long list or picker → bottom sheet (search inside the sheet)
7. **Header row + full-width body** (KJ rule, 2 Nov 2026). Any card with a caption and a body: row 1 = icon tile + caption (+ chevron if the whole card is a tap). Title and text go below, full width from the card's left edge. No chevron when the card has its own buttons.
8. **Replace by id.** A card that arrives with the same `data.id` replaces the earlier one in place (draft → sending → sent). Never append a second copy.
9. **States** are `draft | working | done | partial | failed | stale`. Show every state the payload can carry. `partial` and `failed` always offer `retry`.
10. **Copy.** Sentence case. No apology words, no exclamation marks, no emoji (except where the template ships them, for example `feature_list`). Say what happened ("Saved to Radius CRM").
11. **Touch targets.** 44pt iOS, 48dp Android. Web: keep the component's own sizes.
12. **Light and dark (mobile).** Every mobile screen and card must work in both. Check both before you finish.
13. **Do not edit `web/` or `mobile/` by hand in an app repo.** They are an export. Changes go through the design system owner (KJ) and come back as a new export.

---

## 3. Web: use the HTML directly

```html
<link rel="stylesheet" href="radius-design-system/web/tokens.css">
<link rel="stylesheet" href="radius-design-system/web/components/bundle.css">
<script src="radius-design-system/web/components/bundle.js"></script>

<div class="rds"> … copy markup from web/components/<name>/preview.html … </div>
```

- Wrap UI in `.rds` (or `body.rds-body`).
- Icons: `<i data-icon="send"></i>` (Lucide names). `bundle.js` hydrates them. After inserting markup at runtime call `RadiusUI.init(el)`.
- Behaviour is declarative (`data-rds-*`); see `web/README.md`.
- React / Vue / any framework: keep the same class names and DOM structure. Render the markup from the preview as JSX. Do not restyle with Tailwind or inline styles. Call `RadiusUI.init(ref.current)` in an effect after mount.
- Full recipe: `docs/radius-cards/02-web-recipe.md`.

## 4. Mobile: the HTML is the spec, build native

The files in `mobile/` are **not shipped**. They are the exact visual spec. Rebuild each part with native components:

- iOS: SwiftUI preferred (UIKit notes in the recipe).
- Android: Jetpack Compose preferred (Views notes in the recipe).
- Read the component's `mobile/components/<name>/README.md` (behaviour, states, platform notes) and `preview.html` (exact structure, classes, light + dark).
- Translate classes → native using `docs/radius-cards/03-mobile-recipe.md` (class → token → SwiftUI / Compose table).
- Colours: generate an asset catalog (iOS) and `colors.xml` + `values-night` (Android) from `mobile/tokens.json` `color.tokens[]` (each has `value.light` and `value.dark`). Never hand-copy hex.
- Type: Mona Sans only. Use the variable TTF at `web/fonts/MonaSans-VF.ttf` in the apps (`mobile/fonts/MonaSans-VF.woff2` is the same face for web previews). Type roles and sizes are in `docs/radius-cards/03-mobile-recipe.md`. Scale with Dynamic Type / fontScale, cap 1.5×.
- Icons: Phosphor (`ph-<name>` in the HTML → Phosphor iOS / Phosphor Android, same name, regular weight).

## 5. Building a new Mel chat card

Follow `docs/radius-cards/06-new-card-recipe.md`. Short version:

1. Find the JSON type in `docs/radius-cards/05-card-catalog.md`. If it exists, build that; do not design a new one.
2. Read `shared/protocol/examples/<type>.json` for fields.
3. Compose from existing parts (card shell, header row, kv rows, tiles, chips, buttons, prompt rows). No new tokens.
4. Cover every state, light + dark (mobile), long text, empty, 1.5× text.
5. If the type is not in the catalog: stop and ask the design owner. Write a proposal in the PR; do not ship an invented card.

## 6. Where to look

| Need | File |
|---|---|
| Card list, paths, examples | `docs/radius-cards/05-card-catalog.md` |
| JSON fields, states, actions, tones | `docs/radius-cards/01-card-protocol.md`, `shared/protocol/examples/` |
| Web classes and markup | `docs/radius-cards/02-web-recipe.md`, `web/README.md` |
| Native mapping (SwiftUI, Compose) | `docs/radius-cards/03-mobile-recipe.md` |
| Layout rules (header row, sheets, pages) | `docs/radius-cards/04-layout-rules.md` |
| Mobile foundations (colour, type, layout, Mel) | `mobile/README.md`, `mobile/04-color.md` … `mobile/16-ios-background.md` |
| Decisions and why | `mobile/01-decisions.md` |
| See a component | `gallery.html` (all), or `tools/preview.html?ds=web&c=stats_card` / `?ds=mobile&c=stats_card` (one) |
| Draft a component that does not exist | `node tools/new-component.mjs --name <type> --payload <file>` or the Builder tab in `gallery.html`. Output is a proposal; do not ship it before approval. |

**Path note:** some older mobile docs and component READMEs mention `foundations/`, `Components/`, `src/` or per-component `.css`/`.js` files from the original source project. In this repo all mobile styles are in `mobile/components/bundle.css` (tokens included) and components live in `mobile/components/<Name>/`.

## 7. Before you say "done"

- [ ] Used an existing component or composed only from existing parts.
- [ ] No hard-coded colours, sizes or durations.
- [ ] JSON type, fields and states match `shared/protocol/examples/<type>.json`.
- [ ] Suggestions fill, never send. One primary action.
- [ ] Mobile: no popovers or side panels; sheets and pushed pages only. Light + dark checked. 44pt / 48dp targets.
- [ ] Copy: sentence case, no apology, no exclamation marks.
- [ ] Compared side by side with `tools/preview.html` (screenshot in the PR).
