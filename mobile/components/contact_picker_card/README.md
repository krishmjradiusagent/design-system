# contact_picker_card

Pick clients for an action. In chat it is a small card with the current pick; "Choose clients" opens a bottom sheet with search, Select all, a check per client and a sticky footer.

**Source:** no mobile design on the templates page yet. Adapted from the Radius UI web design for `contact_picker_card`; approved by KJ, 2 November 2026.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.id`, `data.title`, `data.searchable`, `data.select_all{label, count}`, `data.options[]{client_id, title, subtitle}`, `data.actions[]` (approve).
**Behaviour:** the count and the button label update live ("Invite 3 clients"); the button is disabled at 0. Sheet opens at the large detent because it has search. Confirming closes the sheet and updates the in-chat card.
