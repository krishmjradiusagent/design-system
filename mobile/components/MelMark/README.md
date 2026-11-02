# Mel mark

The Mel brand mark: rounded shape with a living white dot. Replaces the eyes mascot (KJ, 28 October 2026). Class `.c-mel-mark`. Styles in `components/bundle.css`. No script; set `data-state`.

```html
<span class="c-mel-mark c-mel-mark--dock" data-state="idle" role="img" aria-label="Mel, idle">
  <svg viewBox="-10 -10 140 140" aria-hidden="true"><g class="c-mel-mark__float">
    <path class="c-mel-mark__shape" d="M48 8 H72 A40 40 0 0 1 112 48 V72 A40 40 0 0 1 72 112 H19 A11 11 0 0 1 8 101 V48 A40 40 0 0 1 48 8 Z"/>
    <g class="c-mel-mark__layer c-mel-mark__layer--dot"><circle class="c-mel-mark__ring" cx="60" cy="60" r="13"/><circle class="c-mel-mark__dot" cx="60" cy="60" r="13"/></g>
    <g class="c-mel-mark__layer c-mel-mark__layer--listen"><circle class="c-mel-mark__ring" cx="60" cy="60" r="15"/><circle class="c-mel-mark__ring" cx="60" cy="60" r="15"/><circle class="c-mel-mark__ring" cx="60" cy="60" r="15"/><circle cx="60" cy="60" r="15"/></g>
    <g class="c-mel-mark__layer c-mel-mark__layer--think"><circle cx="42" cy="60" r="7"/><circle cx="60" cy="60" r="7"/><circle cx="78" cy="60" r="7"/></g>
    <g class="c-mel-mark__layer c-mel-mark__layer--bars"><rect x="35.5" y="55" width="7" height="10" rx="3.5"/><rect x="46" y="49" width="7" height="22" rx="3.5"/><rect x="56.5" y="45" width="7" height="30" rx="3.5"/><rect x="67" y="53" width="7" height="14" rx="3.5"/><rect x="77.5" y="55" width="7" height="10" rx="3.5"/></g>
    <g class="c-mel-mark__layer c-mel-mark__layer--done"><circle class="c-mel-mark__donedot" cx="60" cy="60" r="20"/><path class="c-mel-mark__check" d="M51 60.5 L57.5 67 L70 54"/></g>
    <circle class="c-mel-mark__badge" cx="98" cy="22" r="11"/>
  </g></svg>
</span>
```

- **Source.** Mel Brand Guidelines 01 Logo, 07 Mel in motion, 10 Assistants. Copy the SVG exactly. Never redraw, recolor outside the tokens, stretch, rotate or add effects.
- **States** (`data-state`, from 07 Mel in motion): `idle` float 4px, ring 13 to 30px, dot 13 to 14.5, 3.2s. `ready` ring 13 to 34px, dot to 15, 2.4s. `listening` three rings draw in 40 to 15px, 1.8s, 0.6s stagger. `thinking` / `working` three dots rise 8px, 1.2s, 0.15s stagger. `speaking` five bars with the brand ranges (10/26, 22/8, 30/14, 14/30, 10/20), 0.9s, 0.11s stagger. `done` dot grows 13 to 22, settles at 20, check draws, then holds. `attention` / `heads-up` Deep Teal shape, mint dot blinks, badge pulses 11 to 13, 0.9s; use sparingly. `paused` / `offline` static grey. Sequence: Ready, Listening, Working, then Speaking or Done; back to Ready after 2 seconds.
- **State change** (brand 09): only the centre changes. The current layer cross-fades out and the next fades in from scale 0.92 to 1, 240ms, Mel ease (`motion-ease-out`). The shape never moves on a change; the idle float is the resting loop (KJ, 28 October 2026). Keep every layer in the markup.
- **Skills** (`data-skill`): `crm`, `marketing`, `campaign`, `client`, `compliance`, `document`. Only the shape colour changes; the dot stays white. MLS has no brand accent, so it uses Mel Green. Never mix two skill colours in one place.
- **Sizes.** `--inline` 26, `--dock` 40, `--hero` 64, `--hero-large` 76, or set `--mm-size`. Below 24px the dot stays still (`--inline` idle is still; force with `--still`). `--glow` adds the soft hero glow; one per screen.
- **Tokens.** `mel-mark`, `mel-mark-dot`, `mel-mark-attention`, `mel-mark-attention-dot`, `mel-mark-paused`, `mel-mark-paused-dot`, `mel-mark-glow`, `mel-skill-*`.
- **Accessibility.** `role="img"` with the state in `aria-label`; update the label when the state changes. Give a visible text status when the state carries critical information. Reduced motion (brand 09): no movement; colour and opacity changes stay, so the cross-fade and the attention blink remain. Each state shows as a still frame: dot, rings, three dots, bars, check.
- **Compatibility.** Old `.mel` markup renders this mark (shape + pulsing dot); the eyes are hidden. New work uses `.c-mel-mark`.
- Approved by KJ on 28 October 2026. Replaces the 15 October eyes mascot decision.
