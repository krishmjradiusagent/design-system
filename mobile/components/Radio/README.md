# Radio

Single choice from a short list. A native `input type="radio"` drawn as a circle, inside a full-width row with a title and one line of subtext. Class prefix `.c-radio`. Styles ship in `components/bundle.css`. No script: the browser handles selection and keyboard.

```html
<div class="rm-card c-radio-group" role="radiogroup" aria-labelledby="dup-h">
  <label class="c-radio">
    <input type="radio" name="dup" value="skip" class="c-radio__input">
    <span class="c-radio__body"><span class="c-radio__title t-body-strong">Skip</span><span class="c-radio__text t-meta">Keep the contact in Radius as is</span></span>
  </label>
  <label class="c-radio">
    <input type="radio" name="dup" value="update" class="c-radio__input" checked>
    <span class="c-radio__body"><span class="c-radio__title t-body-strong">Update existing</span><span class="c-radio__text t-meta">Add new details from the file</span></span>
  </label>
</div>
```

## Interaction (do exactly this)
- **Selection.** Tapping anywhere on the row selects it. One option is always selected once the user has chosen; start with a default checked when a safe default exists.
- **Keyboard.** Tab enters the group on the checked option. Arrow keys move and select. Space selects. This comes free from native radios sharing one `name`; never replace the input with a div.
- **Change.** Listen to the `change` event on the input. Read `event.target.value`.
- **Pressed.** The row fills with `surface-tile` while pressed. There is no hover state; this is a touch component.
- **Focus.** Focus ring on the circle, from `focus-visible` only.
- **Disabled.** `disabled` on the input dims the whole row to 40% and blocks taps. Say why in the subtext.

## Rules
- Subtext is one line and truncates with an ellipsis. Never let it wrap. Shorten the copy.
- Two to five options. For more, use `c-picker` or `c-dropdown`.
- Selected circle is `action-primary` with a `text-on-action` dot. Unselected is a `text-tertiary` outline.
- Group rows sit in an `rm-card` with a hairline between them (`c-radio-group` draws it).
- A label for the group is required (`aria-labelledby`).
- Hit area 44pt iOS, 48dp Android.
- Do not use for on/off. Use `rm-switch`.
- Semantic tokens only. Approved by KJ on 16 October 2026.
