# result_list_card

A header with an icon and summary, then one row per person saying what happened.

**Source:** no mobile design on the templates page yet. Adapted from the Radius UI web design for `result_list_card`; approved by KJ, 2 November 2026.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.title`, `data.subtitle`, `data.items[]{title, status, tone}`. Warning turns the status amber, danger red; success stays secondary.
**Note:** may merge with `status_list_card` later.
