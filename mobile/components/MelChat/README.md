# Mel chat

Rules for the Mel chat thread. Not one component: a screen scope plus message styles. No script.

```html
<main class="rm-screen rm-chat">
  <div class="c-ai-message c-ai-message--user"><div class="rm-card c-user-bubble">…</div></div>
  <div class="c-ai-message c-ai-message--assistant"><div class="typeset typeset-chat">…</div></div>
</main>
```

- **`.rm-chat` scope.** Put it on the chat screen. In light, cards, inputs, tiles and lines turn neutral grey (`chat-surface-card` `#F4F5F6`, `chat-surface-input` `#EEF0F1`, `chat-surface-tile` `#E8EAEC`, `chat-border` `#DDE0E3`). Dark is unchanged palette N. Never use it outside chat.
- **Mel speaks in plain text.** No card, no bubble. Wrap the reply in `.typeset.typeset-chat` (16px, leading 1.6, 1.7 in dark, block gap 1em, scales with `--type-scale` up to 24px). Headings, lists, tables, code and quotes are styled inside it. `.c-mel-plain` strips a card that a legacy part adds.
- **User turns.** Filled bubble, no border: `.c-user-bubble` (or `.rm-card--bordered` inside `.c-ai-message--user`), `surface-tile` fill.
- **Result cards** (drafts, contacts, tasks) stay cards.
- **Working.** `.c-thinking` for a single line; `.c-trace` when Mel shows its steps. Never a dot loader in the thread.
- **After a reply.** `.c-suggest` chips or `.c-prompt-row` rows. Both fill the composer and never send. Pick one per reply.
- **Result cards follow Mel Chat Templates v0.2.1.** Same JSON `type` names, fields and states as Radius UI (web). A later card with the same `data.id` replaces the earlier one in place (draft → sending → sent). See README, "Mel chat card protocol".
- **Footer.** `c-float-nav` row plus `c-chat-composer--compact`. No blur over chat content from the composer.
- Approved by KJ (v102 grey surfaces, v106 plain text, v107 bubble, 27 October typeset).
