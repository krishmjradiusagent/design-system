# 04 · Layout rules (web + mobile)

Approved by KJ. These override anything an agent "thinks looks better".

## 1. Mel speaks in plain text

- Mel's reply has no bubble and no card. Only the user's turn has a bubble.
- Result objects (drafts, contacts, lists) are cards **under** one or two sentences of Mel text.

## 2. Header row + full-width body (2 Nov 2026)

For every card with a caption and a body:

```
┌───────────────────────────────────────┐
│ [icon] Caption · who / what         › │   ← row 1: tile + caption (+ chevron if the whole card is a tap)
│ Title                                 │   ← full width, starts at the card's left edge
│ Text, clamped to 2 lines for previews…│
└───────────────────────────────────────┘
```

- Chevron only when tapping the card opens something (page, viewer, profile).
- No chevron when the card has its own buttons (Send, Post, Publish). Buttons stay in the foot.
- One-line pointers (client card, link rows) stay a single row: tile + text + chevron.
- Live in: `client_note_card`, `offer_card`, `message_draft_card`. All new cards follow it.
- Web markup: `.rds-note__head` + `.rds-note__body`. Mobile markup: `.m-note__head` + `.m-note__body`.

## 3. Actions

- One primary action per card. Web: right side of the foot. Mobile: right side of the foot.
- Secondary choices are prompt rows under the card, not more buttons.
- Approve flows: the card is its own confirm. No extra "Are you sure?" except for destructive actions.
- Sending shows a spinner for at least 600ms, then a success line replaces the button.

## 4. Suggestions

- Prompt rows, chips, skill cards, listing rows, option tiles, style tiles: tap fills the composer. Never sends.
- Multi-select pickers build one sentence in the composer ("Create social posts and reels").

## 5. Mobile navigation

| Situation | Use |
|---|---|
| See more detail about one thing | Pushed page |
| Pick from a long list, search, filter, share, menu | Bottom sheet (medium → large) |
| Look at an image, video, PDF, website preview | Full-screen viewer |
| Sign in to a provider | System auth sheet |
| Open an external page | In-app browser |
| Delete / lose data | Confirm dialog |

Never: side panels, popovers, hover states, tooltips as the only way to see info.

## 6. Lists inside cards

- Show 3–5 rows in chat. Then "+N more" (people) or "Show all N …" (listings, recipients).
- Mobile: "+N more" pushes a page; "Show all" opens a sheet with search when the list is pickable.
- Web: expand in place or open the right panel.

## 7. Density and spacing

- Use the tokens; do not tune spacing per card. Card padding `space-card-pad` (mobile) / 14×16 (web `.rds-mc`).
- kv rows are label over value on mobile (no room for columns), label + value grid on web.
- Rails (posts, carousels) scroll sideways and bleed to the card or screen edge.

## 8. Copy

- Sentence case. Verbs first on buttons ("Send", "Approve & Launch", "Choose clients").
- Say what happened ("Saved to Radius CRM", "Sent and logged", "6 texts didn't go through").
- No apology, no exclamation marks, no filler, no invented numbers. Placeholders in brackets: `[PRICE]`, `[DATE]`.

## 9. Themes

- Web: light only.
- Mobile: light and dark, always both. Semantic tokens switch automatically; never branch on theme in a view except through tokens.
