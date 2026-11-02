# Voice cards

Cards that sit in the voice dock above the controls, and the divider that marks a voice session in chat. No script.

```html
<a class="c-voice-link" href="…"><span class="rm-tile"><i class="ph ph-chat-text"></i></span>
  <span class="c-voice-link__text"><span class="t-row-title">Text to Sarah Johnson</span><span class="t-meta">Draft ready · tap to review</span></span>
  <i class="ph ph-caret-right"></i></a>
<div class="c-voice-pick" role="group" aria-label="Which Sarah?"><button type="button" class="c-voice-pick__row">…</button></div>
<ul class="c-voice-perms"><li><i class="ph ph-check"></i>Read replies from clients</li></ul>
<div class="c-voice-divider">Voice chat · 2 min</div>
```

- **One card at a time** in the dock. Set `data-card="true"` on `.c-voice` while it shows.
- **Link card.** Opens the item in chat. 64px min height. **Pick list.** When Mel needs you to choose (two contacts with one name); Mel also says the choice. **Permissions.** What Mel will do once connected, as a checked list in `text-accent`.
- **Draft card.** Same shape as the chat draft card (`rm-card`, header tile, footer line with Send).
- **Divider.** Centred caption with hairlines; shows where a voice session sat in the thread.
- Same shape as chat cards: `surface-card`, `radius-card`, 1px `border-card`.
- Approved by KJ on 28 October 2026 (CRM by voice).
