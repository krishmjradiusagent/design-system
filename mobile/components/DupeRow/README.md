# Duplicate row

One duplicate contact in an import review list. Name, one line saying what differs, and a menu chip that shows and changes the choice. Class prefix `.c-dupe-row`. Styles ship in `components/bundle.css`. Behaviour: `c-dupe-row.js` (needs `c-menu.js`).

```html
<div class="rm-card" style="padding:0 var(--space-3)" id="review">
  <div class="c-dupe-row" data-id="c_102" data-choice="update">
    <div class="c-dupe-row__body">
      <span class="c-dupe-row__name t-body-strong">Sarah Johnson</span>
      <span class="c-dupe-row__diff t-meta">Email: s.johnson@oak.com</span>
    </div>
    <button type="button" class="c-dupe-row__choice t-body" aria-haspopup="menu">
      <span class="c-dupe-row__label">Update</span><i class="ph ph-caret-down" aria-hidden="true"></i>
    </button>
    <div class="c-menu" popover="manual" role="menu" aria-label="Choice for Sarah Johnson">
      <button type="button" class="c-menu__item t-body" role="menuitemradio" data-value="skip" data-short="Skip" aria-checked="false"><span>Skip</span><i class="ph ph-check"></i></button>
      <button type="button" class="c-menu__item t-body" role="menuitemradio" data-value="update" data-short="Update" aria-checked="true"><span>Update existing</span><i class="ph ph-check"></i></button>
      <button type="button" class="c-menu__item t-body" role="menuitemradio" data-value="both" data-short="Both" aria-checked="false"><span>Keep both</span><i class="ph ph-check"></i></button>
    </div>
  </div>
</div>
<script>cDupeRow.init(document.getElementById('review'));</script>
```

## Interaction (do exactly this)
- **Open.** Tap the chip. The `c-menu` opens under it, right-aligned, and focus lands on the checked item. It flips above when there is no room below.
- **Choose.** Tap an item. The menu closes, focus returns to the chip, the chip label changes to `data-short`, `data-choice` on the row updates, and the row fires `c-dupe-row:change` with `{id, value, user:true}`.
- **Keyboard.** Arrow keys move in the menu. Enter or Space chooses. Esc closes and returns focus to the chip.
- **Set all.** `cDupeRow.setAll(listElement, 'update')` changes every row and fires change with `user:false`. Call it from the `change` event of the "For all" `c-radio` group. It overwrites every row, including ones the agent changed by hand, so the group-level choice always wins until the agent edits a row again.
- **Count.** Count rows whose `data-choice` differs from the group default to show "3 changed".
- **Load.** Call `cDupeRow.init(root)` once after the rows render, and again after you add rows. Safe to call twice.

## Rules
- Chip labels are `Skip`, `Update`, `Both`. Menu items read `Skip`, `Update existing`, `Keep both`. Same three values everywhere: `skip`, `update`, `both`.
- The diff line is one line, `Field: value`, and truncates. If several fields differ say `Phone and email differ`.
- Name and diff never wrap. The chip never shrinks.
- The chip is a neutral tint (`text-primary` at 10% over the card), never mint. Its hit area is 44pt iOS, 48dp Android even though it looks 36 tall.
- Rows sit in an `rm-card` with a hairline between them.
- Pair with the "For all" `c-radio` group. Do not add per-row radios. Use `c-menu`, not a native select.
- Semantic tokens only. Approved by KJ on 16 October 2026.

## Script
```js
/* c-dupe-row — wires each row's chip to its c-menu. Needs c-menu.js (window.cMenu) loaded first.
   cDupeRow.init(root)        bind every .c-dupe-row under root (safe to call twice)
   cDupeRow.set(row, value)   value = skip | update | both
   cDupeRow.setAll(root, v)   set every row under root (used by "For all" radios)
   Event: row dispatches "c-dupe-row:change" (bubbles) with detail {id, value, user}. user is true when the agent picked it. */
(function () {
  function set(row, value, user) {
    const items = [...row.querySelectorAll('.c-menu__item[data-value]')];
    const it = items.find(i => i.dataset.value === value); if (!it) return;
    items.forEach(i => i.setAttribute('aria-checked', String(i === it)));
    row.querySelector('.c-dupe-row__label').textContent = it.dataset.short || it.textContent.trim();
    row.dataset.choice = value;
    row.dispatchEvent(new CustomEvent('c-dupe-row:change', { bubbles: true, detail: { id: row.dataset.id || null, value, user: !!user } }));
  }
  function bind(row) {
    if (row.dataset.cDupeBound) return; row.dataset.cDupeBound = '1';
    const chip = row.querySelector('.c-dupe-row__choice'), menu = row.querySelector('.c-menu');
    window.cMenu.attach(chip, menu, { align: 'end' });
    menu.addEventListener('click', e => { const it = e.target.closest('.c-menu__item[data-value]'); if (it) set(row, it.dataset.value, true); });
  }
  const init = (root = document) => root.querySelectorAll('.c-dupe-row').forEach(bind);
  const setAll = (root, value) => root.querySelectorAll('.c-dupe-row').forEach(r => set(r, value, false));
  window.cDupeRow = { init, set, setAll };
})();
```
