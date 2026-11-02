# Chat row

Chat list row for History and the Assistants section. Avatar, title and time on the first line, preview and unread dot on the second. Modelled on a WhatsApp chat list. Use it inside `rm-card rm-card--list`; rows divide with the card separator token.

```html
<div class="rm-card rm-card--list">
  <button type="button" class="c-chat-row" data-unread>
    <span class="c-chat-row__avatar"><span class="mel mel--inline" data-state="idle"></span></span>
    <span class="c-chat-row__body">
      <span class="c-chat-row__top"><span class="c-chat-row__title t-body-strong">Follow up with Jordan</span><span class="c-chat-row__time t-caption">2:14 PM</span></span>
      <span class="c-chat-row__bottom"><span class="c-chat-row__preview t-meta">Draft: “Hi Jordan, two new homes near Oak Street…”</span><span class="c-chat-row__unread" aria-label="Unread"></span></span>
    </span>
  </button>
</div>
```

- Variant `c-chat-row--plain` hides the avatar; text and divider reflow to the left edge. Use it where the list has no per-row identity.
- Avatar: the Mel mark for Mel chats, an assistant avatar in Assistants. Fill `.mel` through the harness; never hand-write Mel SVG.
- Title and preview are one line with an ellipsis. The preview stops 32px short of the right edge so the ellipsis stays clear of the time column and the dot.
- `data-unread` sets the title and time to full text colour and shows `.c-chat-row__unread`. The dot is Deep Teal in light and Mint in dark (`action-primary`).
- No chevron. The avatar, time and dot already mark the row as tappable.
- The row is a `<button>`: the reset (width, no border, no background, left-aligned, pointer) ships with the component, so no inline style is needed. Use `<a>` when the row navigates.
- The title line and the preview line sit 4px apart (`space-1`).
- Hit area 44pt iOS, 48dp Android. Focus ring is a 2px `text-primary` outline.
- Semantic tokens only; no new tokens. Visual approved by KJ on 16 October 2026.
