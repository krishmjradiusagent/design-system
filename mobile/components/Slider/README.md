Class prefix `.c-slider`. Styles ship in `components/bundle.css`; load `c-slider.css` alone only outside this system. No script.

Native range control, adapted from `/Users/radius/Desktop/Design OS/Radius UI Design System/components/forms/Slider.jsx` and `components/components.css`.
Uses the canonical 6px track / 16px thumb with mobile semantic colors. No new visual tokens.

Wrap `<input type="range" class="c-slider" min="0" max="100" step="1">` in a
`<label class="c-slider-field">` with a `.t-meta` label. Set an accessible name,
initial value, and relevant min/max/step. Native keyboard arrow/Home/End behavior.
Update a visible output on `input`. No built-in persistence or product behavior.
