# Code boxes

One-digit boxes for a verification code (sign-up by phone). Lives inside `.c-text-field`: label above, error below. Script moves focus and handles paste.

```html
<div class="c-code-boxes" role="group" aria-label="6-digit code">
  <input class="c-code-boxes__box" inputmode="numeric" autocomplete="one-time-code" maxlength="1" aria-label="Digit 1">
  …
</div>
```

- **Box.** `surface-input`, `radius-input`, `size-control-lg` tall, centred 20px digit.
- **Focus.** Green focus ring with a page-colour gap. **Error.** `aria-invalid="true"`: 1px `status-danger-fg` edge; error text below names the fix.
- **Behaviour.** Typing a digit moves on; Backspace moves back; pasting a full code fills every box. The first box takes `autocomplete="one-time-code"`.
- **Hit area.** Android min width 48dp.
- From the Assistants mobile sign-up boards. Approved by KJ on 28 October 2026.
