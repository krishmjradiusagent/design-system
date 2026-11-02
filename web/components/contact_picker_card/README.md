# contact_picker_card

**JSON `type`:** `contact_picker_card` · Mel Chat Templates v0.2.1. Web only in the designs so far.


A question with search, Select all, a checkbox per contact, a footer count and a confirm button.

**Fields:** `data.id`, `data.title`, `data.searchable`, `data.select_all{label, count}`, `data.options[]{client_id, title, subtitle}`, `data.actions[]` (approve).
**Behaviour:** the count and the button label update live ("Invite 3 clients"); the button is disabled at 0. Search filters the rows.

Try it: tick and search.
