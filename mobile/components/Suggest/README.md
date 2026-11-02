# Suggest

Suggestion chips under a Mel reply. Tap fills the composer with the chip text; it never sends. shadcn Suggestion shape, DS colours. No script.

```html
<div class="c-suggest">
  <button type="button" class="c-suggest__btn"><span>Send it</span></button>
  <button type="button" class="c-suggest__btn"><span>Make it shorter</span></button>
</div>
```

- **Shape.** 32px chip, `radius-input` (8), 1px `border-card`, `surface-tile` fill, 14px medium. The button is 44pt tall for touch; the chip sits inside it.
- **Row.** Scrolls sideways, bleeds to the screen edge, fades on the right.
- **Versus prompt row.** Both fill the composer. Chips for short replies (two to four words), `c-prompt-row` for full prompts. Use one kind per reply.
- **Copy.** Two to four words, a verb first.
- Approved by KJ (chat intimation, 27 October 2026). Changed to fill, never send, by KJ on 2 November 2026 to match Mel Chat Templates v0.2.1.
