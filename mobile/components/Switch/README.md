# Switch

On/off setting in a list row. A native checkbox with `role="switch"`, drawn as the iOS pill or the Android Material shape. Class prefix `.rm-switch`. Styles ship in `components/bundle.css`. No script.

```html
<label class="rm-item">
  <span class="rm-item__body">
    <span class="t-body">Notifications</span>
    <span class="t-meta t-secondary">Reminders and follow-ups from Mel</span>
  </span>
  <input type="checkbox" role="switch" class="rm-switch rm-switch--ios" checked>
</label>
```

- **Platform.** `--ios` is 51 by 31 with a 27 white thumb. `--android` is 52 by 32, outlined when off with a small thumb, filled with a large thumb when on. Pick one per platform build.
- **Colour.** On = `action-voice` track. Off = `text-tertiary` track. Thumb = `switch-thumb`, white in both themes. White is a thumb here, never a label on Mel Green.
- **Row.** The whole row is the label, so the tap target is the row, not only the switch. Title `t-body`, subtext `t-meta` in `text-secondary`, one line, truncated.
- **Disabled.** 40% opacity, state kept. Say why in the subtext ("Not available offline").
- **Motion.** 240ms, `motion-ease-out`. Reduced motion removes the slide.
- **Not for** actions that need a confirm button. A switch applies at once.
- Semantic tokens only. Approved by KJ on 16 October 2026.
