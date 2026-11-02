# Skill pills

Horizontal row of Mel skill pills above the composer. Each pill: the mark in the skill colour plus what the skill does. Tap fills the composer with the pill's prompt; it never sends (KJ, 2 November 2026, matches `skill_cards`). A picker, not tabs: no active state. No script.

```html
<div class="c-skill-pills">
  <button type="button" class="c-skill-pill"><span class="c-mel-mark c-mel-mark--inline" data-skill="crm" data-state="idle" role="img" aria-label="CRM">…</span><span class="t-body">Update a contact</span></button>
</div>
```

- **Use.** Empty chat and Home only. Not in the Mel chat footer once a conversation has started (voice canvas, 27 October).
- **Pill.** `surface-tile`, pill radius, 44pt tall. Mark inline size, still.
- **Copy.** A task, verb first. Not the skill name alone.
- Kept by KJ on 28 October 2026.
