# 06 · Build a card (or propose a new one)

## A. Build a card that exists in the catalog

1. **Find it.** `05-card-catalog.md` → JSON type → web and mobile folders.
2. **Read the payload.** `shared/protocol/examples/<type>.json`. List every field and which part of the card shows it.
3. **Read the spec.** `README.md` + `preview.html` for your platform. Open `tools/preview.html?ds=<web|mobile>&c=<type>`.
4. **Compose.** Use only the parts in `02-web-recipe.md` (web) or `03-mobile-recipe.md` (mobile). No new colours, sizes, radii, shadows or fonts.
5. **States.** Implement every state the payload can carry (`draft`, `working`, `done`, `partial`, `failed`, `stale`). Wire `actions[].kind` (see `01-card-protocol.md`).
6. **Edge cases.** Long names (truncate captions, wrap values), empty lists (`empty_card` instead), missing optional fields (hide the row, never show "null"), 1.5× text, light + dark (mobile), RTL-safe spacing (use leading/trailing).
7. **Check.** Screenshot next to the preview. Run the checklist (section D).

## B. The type is not in the catalog

Do not ship a new card. Instead:

0. Draft it with the generator: `node tools/new-component.mjs --name <type> --payload payload.json` (or the Builder tab in `gallery.html`). It lays the card out from existing parts only, lists fields it could not place, and marks the README **Status: proposal**.
1. Check whether an existing type fits with different data (most do: `stats_card`, `people_list_card`, `status_list_card`, `result_list_card`, `info_alert_card`, `empty_card`).
2. If none fits, attach the generated files (or the prompt in section C) to the PR / ticket and tag the design owner (KJ).
3. Build only after approval. The design owner adds it to the design systems and re-exports this repo.

## C. Prompt template (paste into any LLM)

```
You are building a Mel chat card for Radius.

Repo: radius-design-system (read AGENTS.md first).
Platform: <web | iOS SwiftUI | Android Compose>
JSON type: <type>
Payload: <paste shared/protocol/examples/<type>.json or the real payload>

Rules:
- Compose only from existing parts listed in docs/radius-cards/02-web-recipe.md (web) or 03-mobile-recipe.md (mobile).
- Tokens only. No hard-coded colours, sizes, durations.
- Follow docs/radius-cards/04-layout-rules.md (header row + full-width body, one primary action, suggestions fill never send, mobile: sheets and pushed pages only).
- Implement states: draft, working, done, partial, failed, stale (only those the payload can carry).
- Copy: sentence case, no apology, no exclamation marks.

Deliver:
1. The list of parts you used and where each field renders.
2. The code.
3. What you could not verify.
If anything is missing from the design system, stop and list the gap instead of inventing.
```

## D. Checklist

- [ ] JSON type and folder name match exactly.
- [ ] Every payload field has a place, or is deliberately hidden (say why).
- [ ] Only existing parts and tokens.
- [ ] Header row + full-width body where there is a caption and a body.
- [ ] One primary action; the rest are prompt rows.
- [ ] Suggestions fill the composer, never send.
- [ ] Same `data.id` replaces the card in place.
- [ ] All states the payload can carry. `partial` / `failed` show `retry`.
- [ ] Mobile: no popovers or side panels. Sheets, pushed pages, full-screen viewers only.
- [ ] Mobile: light + dark, 44pt / 48dp, Dynamic Type 1.5×, Reduce Motion.
- [ ] Copy rules.
- [ ] Screenshot next to `tools/preview.html` in the PR.
