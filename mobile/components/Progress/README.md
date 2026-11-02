# Progress

Two jobs. **Steps** shows where the agent is in a multi-step flow ("Step 2 of 3"). **Bar** shows how far an import has got ("812 of 1,248"). Class prefix `.c-progress`. Styles ship in `components/bundle.css`. Behaviour: `c-progress.js`.

```html
<!-- Steps -->
<div class="c-progress c-progress--steps">
  <ol class="c-progress__steps" aria-label="Step 2 of 3">
    <li data-state="done"><span class="c-progress__label t-meta">Upload</span></li>
    <li data-state="current" aria-current="step"><span class="c-progress__label t-meta">Map columns</span></li>
    <li data-state="todo"><span class="c-progress__label t-meta">Review</span></li>
  </ol>
</div>

<!-- Bar -->
<div class="c-progress c-progress--bar" data-state="active">
  <div class="c-progress__track" role="progressbar" aria-label="Importing contacts" aria-valuemin="0" aria-valuemax="1248" aria-valuenow="812">
    <i class="c-progress__fill" style="width:65%"></i>
  </div>
  <div class="c-progress__meta">
    <span class="c-progress__count t-body-strong">812 of 1,248</span>
    <span class="c-progress__pct t-meta">65%</span>
  </div>
</div>
```

## Interaction (do exactly this)
- **Steps.** `cProgress.setStep(root, 3)` marks steps before 3 as `done`, step 3 as `current`, the rest `todo`, and rewrites the `aria-label`. The bar is not tappable.
- **Bar.** `cProgress.setValue(root, 812, 1248)` updates the fill, the count, the percent and the aria values. Call it as the import reports progress.
- **Unknown total.** `cProgress.setValue(root, null)` switches to indeterminate (a sliding fill). Switch back to `setValue` when the total is known.
- **Done.** `cProgress.complete(root)` fills the bar and sets `data-state="done"`. Then move to the result screen. Do not leave a full bar on screen.
- **Motion.** Fill grows over 240ms. Reduced motion removes the slide and shows a full bar for indeterminate.
- **Live text.** The count is a plain text node. Do not announce every change; announce only completion.

## Rules
- Three to five steps. Labels are one or two words and never wrap: they truncate.
- All labels are `t-meta`. The current one turns to full text colour with the strong weight (from CSS); the others stay `text-secondary`. First label aligns left, last aligns right, the rest centre.
- Bar copy is `X of Y` on the left and the percent on the right. Both stay on one line.
- Use `action-primary` for the fill, never a status colour. A failed import uses a `c-alert` instead.
- Not for waiting on a short action. Use a spinner for under two seconds.
- Semantic tokens only. Approved by KJ on 16 October 2026.

## Script
```js
/* c-progress — cProgress.setStep(root, n)         flow bar: n is 1-based, steps before n become done
               cProgress.setValue(root, value, max) import bar: updates fill, counts, aria. value===null makes it indeterminate
               cProgress.complete(root)             sets 100% and data-state="done"
   Events: root dispatches "c-progress:change" with detail {step} or {value, max, percent}. */
(function () {
  const fmt = n => Number(n).toLocaleString('en-US');
  function setStep(root, n) {
    const items = [...root.querySelectorAll('.c-progress__steps > li')];
    items.forEach((li, i) => {
      const st = i + 1 < n ? 'done' : i + 1 === n ? 'current' : 'todo';
      li.dataset.state = st;
      st === 'current' ? li.setAttribute('aria-current', 'step') : li.removeAttribute('aria-current');
    });
    const list = root.querySelector('.c-progress__steps');
    list.setAttribute('aria-label', 'Step ' + n + ' of ' + items.length);
    root.dispatchEvent(new CustomEvent('c-progress:change', { bubbles: true, detail: { step: n } }));
  }
  function setValue(root, value, max) {
    const track = root.querySelector('.c-progress__track'), fill = root.querySelector('.c-progress__fill');
    if (value === null || value === undefined) { root.dataset.state = 'indeterminate'; track.removeAttribute('aria-valuenow'); fill.style.width = ''; return; }
    max = max || Number(track.getAttribute('aria-valuemax')) || 100;
    const pct = Math.max(0, Math.min(100, Math.round(value / max * 100)));
    root.dataset.state = pct >= 100 ? 'done' : 'active';
    track.setAttribute('aria-valuemax', max); track.setAttribute('aria-valuenow', value);
    fill.style.width = pct + '%';
    const c = root.querySelector('.c-progress__count'), p = root.querySelector('.c-progress__pct');
    if (c) c.textContent = fmt(value) + ' of ' + fmt(max);
    if (p) p.textContent = pct + '%';
    root.dispatchEvent(new CustomEvent('c-progress:change', { bubbles: true, detail: { value, max, percent: pct } }));
  }
  const complete = root => { const t = root.querySelector('.c-progress__track'); const m = Number(t.getAttribute('aria-valuemax')) || 100; setValue(root, m, m); };
  window.cProgress = { setStep, setValue, complete };
})();
```
