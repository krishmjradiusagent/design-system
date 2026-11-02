# ytd_progress_card

Before → after numbers when a deal closes or is about to: volume, GCI, sides, team rank.

**Source:** no mobile design on the templates page yet. Adapted from the Radius UI web design for `ytd_progress_card`; approved by KJ, 2 November 2026.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.title`, `data.subtitle`, `data.rows[]{label, from, to, delta}`. Rows read "from to to"; `delta` is for the fallback text only.
