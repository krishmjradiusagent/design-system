# Calendar

Month grid for picking a date or range. 36px round days; selected = Deep Teal, today = Cloud, range = Mint Mist band.

**Markup:** `<div class="rds-calendar" data-rds-calendar data-year data-month data-selected="Y-M-D" data-today="Y-M-D">` (month 0-based); `data-range="startDay,endDay"` for a range. `bundle.js` renders and handles prev/next and selection. `RadiusUI.calendar(el)` re-renders.
