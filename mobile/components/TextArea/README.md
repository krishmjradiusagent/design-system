# Text area

Multi-line text input. Three shapes: the **field** (label, input, hint or error, count), the **composer** (auto-grow pill with a send button), and the **Save and Cancel footer** for an editor screen. Class prefix `.c-text-area`. Styles ship in `components/bundle.css`. No script.

```html
<div class="c-text-area">
  <label class="c-text-area__label t-meta" for="ins">Instructions</label>
  <textarea class="c-text-area__input t-body" id="ins" maxlength="500"></textarea>
  <div class="c-text-area__foot t-meta">
    <span class="c-text-area__hint">How Mel writes and remembers.</span>
    <span class="c-text-area__count">71 / 500</span>
  </div>
</div>

<div class="c-text-area c-text-area--composer">
  <textarea class="c-text-area__input t-body" rows="1" placeholder="Ask Mel"></textarea>
  <button type="button" class="c-text-area__send" aria-label="Send"><i class="ph ph-arrow-up"></i></button>
</div>

<div class="c-text-area-footer">
  <button type="button" class="rm-btn rm-btn--ghost">Cancel</button>
  <button type="button" class="rm-btn rm-btn--primary" disabled>Save</button>
</div>
```

- **One line each.** The hint is one line and truncates with an ellipsis. The count never wraps (`nowrap`, tabular digits). Keep hints short enough to share the row with `500 / 500`.
- **Error.** Set `aria-invalid="true"` on the input for the red outline. Put the message in `c-text-area__error` in place of the hint. The count stays.
- **Count.** Show it only when there is a limit. Format `71 / 500`.
- **Focus.** Focus ring, no fill change.
- **Auto-grow.** The input uses `field-sizing: content`, with a three-row cap on the composer, then it scrolls. Native builds grow the field the platform way.
- **Save and Cancel.** Opened with no edits: Save disabled. Edited: Save enabled. Save confirms with a `c-toast` ("Instructions saved"). Cancel or back with unsaved edits opens the `c-alert` dialog "Discard changes?" with a filled red Discard over a secondary Keep editing. Cancel or back with no edits closes silently.
- **Toast.** `c-toast` sizes to its text on one line. It no longer wraps at half width.
- **Hit area.** Send button 44pt iOS, 48dp Android.
- Semantic tokens only. Approved by KJ on 16 October 2026.
