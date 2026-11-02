# Prompt row

A suggested prompt as a plain text row: glyph plus one line. Tap fills the composer; it never sends. Replaces `c-prompt-card` and `c-follow-up-actions` inside Mel chat. Also used in iOS widgets. No script.

```html
<div class="c-prompt-rows">
  <button type="button" class="c-prompt-row">
    <i class="ph ph-arrow-bend-down-right c-prompt-row__glyph" aria-hidden="true"></i>
    <span class="c-prompt-row__text">Draft a text to Sarah Johnson</span>
  </button>
</div>
```

- **Colour.** Text and glyph in the accent text colour (`text-accent`). `--more` uses `text-secondary`. `--destructive` uses `action-destructive` (template style name; `--danger` stays as an alias).
- **Rows.** 1px `border-card` between rows, none above the first. Pressed fills `surface-tile`.
- **Copy.** The full prompt, as the agent would type it. Sentence case, no ending period.
- **Hit area.** 44pt iOS, 48dp Android.
- **Prompt card.** `c-prompt-card` stays for onboarding only.
- Approved by KJ (chat intimation, 27 October 2026).
