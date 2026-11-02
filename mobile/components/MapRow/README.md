# Map row

One column from the agent's file matched to a Radius field. Shows the file column, one example value, a status, and a field picker that opens a `c-menu`. Class prefix `.c-map-row`. Styles ship in `components/bundle.css`. Behaviour: `c-map-row.js` (needs `c-menu.js`).

```html
<div class="rm-card" style="padding:0 var(--space-3)" data-c-map-rows id="map">
  <div class="c-map-row" data-id="col_3" data-state="needs" data-value="">
    <div class="c-map-row__head">
      <div class="c-map-row__file">
        <span class="c-map-row__label t-meta">Column in file</span>
        <span class="c-map-row__name t-body-strong">Lead Src</span>
      </div>
      <span class="c-map-row__status t-meta"><i class="ph ph-warning" aria-hidden="true"></i>Choose a field</span>
    </div>
    <span class="c-map-row__example t-meta">Example: Zillow</span>
    <button type="button" class="c-map-row__picker t-body" aria-haspopup="menu"><span>Choose a field</span><i class="ph ph-caret-down" aria-hidden="true"></i></button>
    <div class="c-menu" popover="manual" role="menu" aria-label="Radius field for Lead Src">
      <button type="button" class="c-menu__item t-body" role="menuitemradio" data-value="first_name" data-label="First name" aria-checked="false"><span>First name</span><i class="ph ph-check"></i></button>
      <button type="button" class="c-menu__item t-body" role="menuitemradio" data-value="lead_source" data-label="Lead source" aria-checked="false"><span>Lead source</span><i class="ph ph-check"></i></button>
      <button type="button" class="c-menu__item t-body" role="menuitemradio" data-value="skip" data-label="Do not import" aria-checked="false"><span>Do not import</span><i class="ph ph-check"></i></button>
    </div>
  </div>
</div>
<script>cMapRow.init(document.getElementById('map'));</script>
```

## Interaction (do exactly this)
- **Open.** Tap the picker. The `c-menu` opens under it at the picker's width, with focus on the checked item (or the first).
- **Choose.** Tap an item. The menu closes, focus returns to the picker, the picker label shows `data-label`, the row `data-state` becomes `matched`, `needs` or `skipped`, the status text and icon update, and the row fires `c-map-row:change` with `{id, value, state, user:true}`.
- **Do not import.** The item with `data-value="skip"` sets `skipped`. It can be used on any number of rows.
- **One field once.** A Radius field already used by another row is disabled in this row's menu. Choosing it elsewhere frees it.
- **Gate Continue.** Call `cMapRow.unresolved(root)` after every change. Keep Continue disabled while it is above 0, and say how many are left ("2 columns need a field").
- **Auto-matched rows.** Render them with `data-state="matched"`, the matched item `aria-checked="true"`, and call `cMapRow.init` once. The agent can still change them.
- **Keyboard.** Arrow keys move in the menu, Enter or Space chooses, Esc closes and returns focus to the picker.
- **Read result.** `cMapRow.values(root)` returns `[{id, value}]` for the import.

## Rules
- Status words are exactly `Matched`, `Choose a field` and `Skipped`. Each stays on one line.
- Column name, example and picker text never wrap: they truncate. Keep the example short.
- Rows sit in an `rm-card` with a hairline between them.
- A row that needs a choice gets a warning outline on the picker, not a red fill.
- Use `c-menu`, not a native select.
- Hit area 44pt iOS, 48dp Android.
- Semantic tokens only. Approved by KJ on 16 October 2026.

## Script
```js
/* c-map-row — cMapRow.init(root)         bind every .c-map-row under root (safe to call twice). Needs c-menu.js.
              cMapRow.set(row, value)      value = a field key, "skip", or "" (needs a choice)
              cMapRow.unresolved(root)     number of rows still in data-state="needs" (use it to enable Continue)
              cMapRow.values(root)         [{id, value}] for every row
   Each Radius field can be used once: choosing it disables it in the other rows' menus. "skip" can repeat.
   Event: row dispatches "c-map-row:change" (bubbles) with detail {id, value, state, user}. */
(function () {
  const STATUS = {
    matched: ['ph-check-circle', 'Matched'],
    needs: ['ph-warning', 'Choose a field'],
    skipped: ['', 'Skipped']
  };
  function syncUnique(root) {
    const rows = [...root.querySelectorAll('.c-map-row')];
    const used = new Map(rows.filter(r => r.dataset.value && r.dataset.value !== 'skip').map(r => [r.dataset.value, r]));
    rows.forEach(r => r.querySelectorAll('.c-menu__item[data-value]').forEach(it => {
      const v = it.dataset.value, owner = used.get(v);
      const taken = v !== 'skip' && owner && owner !== r;
      taken ? it.setAttribute('disabled', '') : it.removeAttribute('disabled');
    }));
  }
  function set(row, value, user) {
    const items = [...row.querySelectorAll('.c-menu__item[data-value]')];
    const it = items.find(i => i.dataset.value === value);
    const state = value === 'skip' ? 'skipped' : value ? 'matched' : 'needs';
    items.forEach(i => i.setAttribute('aria-checked', String(!!it && i === it)));
    row.dataset.value = value || ''; row.dataset.state = state;
    row.querySelector('.c-map-row__picker > span').textContent = it ? (it.dataset.label || it.textContent.trim()) : 'Choose a field';
    const st = row.querySelector('.c-map-row__status'), s = STATUS[state];
    st.replaceChildren();
    if (s[0]) { const i = document.createElement('i'); i.className = 'ph ' + s[0]; i.setAttribute('aria-hidden', 'true'); st.appendChild(i); }
    st.appendChild(document.createTextNode(s[1]));
    const root = row.closest('[data-c-map-rows]') || row.parentElement;
    syncUnique(root);
    row.dispatchEvent(new CustomEvent('c-map-row:change', { bubbles: true, detail: { id: row.dataset.id || null, value: value || '', state, user: !!user } }));
  }
  function bind(row) {
    if (row.dataset.cMapBound) return; row.dataset.cMapBound = '1';
    const picker = row.querySelector('.c-map-row__picker'), menu = row.querySelector('.c-menu');
    window.cMenu.attach(picker, menu, { align: 'start', matchWidth: true });
    menu.addEventListener('click', e => { const it = e.target.closest('.c-menu__item[data-value]'); if (it && !it.hasAttribute('disabled')) set(row, it.dataset.value, true); });
  }
  function init(root = document) {
    root.querySelectorAll('.c-map-row').forEach(bind);
    syncUnique(root);
  }
  const unresolved = root => root.querySelectorAll('.c-map-row[data-state="needs"]').length;
  const values = root => [...root.querySelectorAll('.c-map-row')].map(r => ({ id: r.dataset.id || null, value: r.dataset.value || '' }));
  window.cMapRow = { init, set, unresolved, values };
})();
```
