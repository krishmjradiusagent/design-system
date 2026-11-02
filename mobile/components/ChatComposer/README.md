# Chat composer

The Mel chat input. A surface with a text field on top and one toolbar row below. Class prefix `.c-chat-composer`. Styles ship in `components/bundle.css`. No script for the layout.

```html
<form class="c-chat-composer" aria-label="Message composer">
  <textarea class="c-chat-composer__field t-body" rows="1" placeholder="Ask anything" aria-label="Message Mel"></textarea>
  <div class="c-chat-composer__toolbar">
    <div class="c-chat-composer__idle">
      <button type="button" class="rm-btn rm-btn--secondary c-chat-composer__icon" aria-label="Attachments and connected sources" aria-haspopup="menu"><i class="ph ph-plus"></i></button>
      <span class="c-chat-composer__spacer"></span>
      <button type="button" class="rm-btn rm-btn--secondary c-chat-composer__icon" aria-label="Dictate message"><i class="ph ph-microphone"></i></button>
      <button type="button" class="rm-btn rm-btn--voice c-chat-composer__speak" aria-label="Speak to Mel"><i class="ph ph-phone"></i><span class="t-body-strong">Speak</span></button>
    </div>
    <button type="submit" class="rm-btn rm-btn--primary c-chat-composer__send" aria-label="Send message"><i class="ph ph-arrow-up"></i></button>
  </div>
</form>
```

- **Empty.** + on the left. Mic and Speak on the right. No arrow.
- **Typing.** Plus, mic and Speak all hide. Only the send arrow shows, on the right. The switch is CSS only (the textarea needs a `placeholder`). Native builds set `data-typing="true"` on the root instead.
- **Attachments.** The + opens `c-menu` (Choose files, connected sources, search). Selected files and sources show as `rm-chip` rows above the surface.
- **Colours.** The + and mic buttons use a neutral tint, `text-primary` at 10% over `surface-input`, so they stay visible in light and dark. They are never mint or green. Speak is `rm-btn--voice`. The arrow is `rm-btn--primary`.
- **Field.** Grows with the text to three rows, then scrolls. Enter sends, Shift+Enter adds a line.
- **Hit area.** 44pt iOS, 48dp Android.
- **Not for** forms. Use `c-text-area` for those.
- Semantic tokens only. Approved by KJ on 16 October 2026.

## Compact and generating (KJ, 27 October 2026)

- **`.c-chat-composer--compact`.** Mel chat footer. One pill row: field, then round mic, Speak (icon only) and send. Solid `surface-input`, no glass, sheen or shadow. Sits above `c-float-nav`.
- **Generating.** Set `data-generating="true"` while Mel works. Speak and Send hide, Stop (`.c-chat-composer__stop`) shows, the field locks. Stop ends the reply; the field unlocks.
- **Mel icon on send** (brand 09). `.c-chat-composer__mel` holds an inline `c-mel-mark` next to Stop. While generating it shows `thinking` (working dots). When the reply lands, set `data-generating="false"`, `data-done="true"` and the mark to `done` (check); remove `data-done` after 2 seconds.
- One composer only. `c-mobile-composer` from the Assistants canvas is not added.
