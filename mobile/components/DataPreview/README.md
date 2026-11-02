# Data preview

A check of the agent's file before import. It shows one sample row at a time as label and value, with Previous and Next. Class prefix `.c-data-preview`. Styles ship in `components/bundle.css`. Behaviour: `c-data-preview.js`.

```html
<div class="c-data-preview" tabindex="0" role="group" aria-label="File preview" data-index="0"
     data-rows='[{"First name":"Sarah","Last name":"Johnson","Email":"s.johnson@oak.com","Phone":"555 0142","Source":"Zillow"},
                 {"First name":"Michael","Last name":"Lee","Email":"m.lee@home.com","Phone":"555 0199","Source":"Referral"}]'>
  <div class="rm-card c-data-preview__card" aria-live="polite"><dl class="c-data-preview__list"></dl></div>
  <div class="c-data-preview__pager">
    <button type="button" class="c-data-preview__nav" data-dir="prev" aria-label="Previous row"><i class="ph ph-caret-left"></i></button>
    <span class="c-data-preview__count t-meta">1 of 2</span>
    <button type="button" class="c-data-preview__nav" data-dir="next" aria-label="Next row"><i class="ph ph-caret-right"></i></button>
  </div>
</div>
<script>cDataPreview.init();</script>
```

## Interaction (do exactly this)
- **Next and Previous.** Tap a button to move one row. Previous is disabled on the first row, Next on the last. The count reads `1 of 3`.
- **Keyboard.** Focus the preview (Tab). ArrowRight is next, ArrowLeft is previous.
- **Data.** Put three sample rows (not more) in `data-rows` as a JSON array of objects with the same keys. Keys become the labels in order. The component sets text only, never HTML.
- **Screen copy.** Put the title and the total outside the component: "Check your file" and "Row 1 of 3 · 1,248 rows". Update it from the `c-data-preview:change` event.
- **Long values.** A value that does not fit truncates with an ellipsis and shows the full text as a tooltip. Never wrap.
- **Not for** comparing rows or editing data.

## Rules
- Three to eight columns. More than eight: show the first eight and say "and 6 more columns" in the screen copy.
- Labels use `text-secondary`. Values use full text colour.
- Buttons are neutral, never mint. Hit area 44pt iOS, 48dp Android.
- Semantic tokens only. Approved by KJ on 16 October 2026.

## Script
```js
/* c-data-preview — cDataPreview.init(root)   renders row 0 from root's data-rows (JSON array of objects, same keys in each).
                    cDataPreview.show(root, i) go to row i (0-based)
   Controls: Previous and Next buttons, ArrowLeft and ArrowRight when the preview has focus. Buttons disable at the ends.
   Event: root dispatches "c-data-preview:change" with detail {index, total}. Values are shown as text, never HTML. */
(function () {
  function show(root, i) {
    const rows = root._rows || [];
    if (!rows.length) return;
    i = Math.max(0, Math.min(rows.length - 1, i));
    root.dataset.index = i;
    const dl = root.querySelector('.c-data-preview__list'); dl.replaceChildren();
    Object.entries(rows[i]).forEach(([k, v]) => {
      const dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.className = 't-body'; dd.className = 't-body'; dt.textContent = k; dd.textContent = v; dd.title = v;
      dl.append(dt, dd);
    });
    root.querySelector('.c-data-preview__count').textContent = (i + 1) + ' of ' + rows.length;
    root.querySelector('[data-dir="prev"]').disabled = i === 0;
    root.querySelector('[data-dir="next"]').disabled = i === rows.length - 1;
    root.dispatchEvent(new CustomEvent('c-data-preview:change', { bubbles: true, detail: { index: i, total: rows.length } }));
  }
  function init(root) {
    if (root.dataset.cPreviewBound) return; root.dataset.cPreviewBound = '1';
    try { root._rows = JSON.parse(root.dataset.rows || '[]'); } catch (e) { root._rows = []; }
    root.querySelector('[data-dir="prev"]').addEventListener('click', () => show(root, +root.dataset.index - 1));
    root.querySelector('[data-dir="next"]').addEventListener('click', () => show(root, +root.dataset.index + 1));
    root.addEventListener('keydown', e => {
      if (e.target.closest('button')) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(root, +root.dataset.index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); show(root, +root.dataset.index + 1); }
    });
    show(root, 0);
  }
  window.cDataPreview = { init: r => (r && r.nodeType ? init(r) : document.querySelectorAll(".c-data-preview").forEach(init)), show };
})();
```
