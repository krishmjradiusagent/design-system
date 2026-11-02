# Select

Pick one option from a menu. Trigger matches Input; the menu is a popover with 8px items and a Green Text check.

**Markup:** `.rds-select[data-rds-root][data-rds-floating]` > `.rds-select__trigger[data-rds-trigger]` (with `.rds-select__value`) + `.rds-menu.rds-floating[role=listbox]` of `.rds-menu__item[role=option]`. `bundle.js` writes the choice into the trigger and closes on outside click / Esc. `data-placeholder` greys the trigger text.

- Do use for 5+ options; fewer → RadioGroup or ToggleGroup.
