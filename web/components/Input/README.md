# Input

Single-line text field. 36px, 8px radius, `input` stroke, mint focus glow (`shadow-focus-input`).

**Markup:** `<input class="rds-input">` inside `.rds-field` with a `.rds-label`. `rds-input--sm` is 32px (Mel web `.w-input`). Invalid: `aria-invalid="true"` + `.rds-field__error`.

- Do always label; placeholders are examples, not labels.
- Use `.rds-num` for money and counts.
