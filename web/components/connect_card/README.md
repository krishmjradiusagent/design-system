# connect_card

**JSON `type`:** `connect_card` · Mel Chat Templates v0.2.1. Replaces today's `google_calendar` action.


The tools Mel needs before it can act: one row per tool, saying what it unlocks, then either a "Connected" chip or a Connect button. Used for Gmail, the Radius texting number, MLS, Google Calendar and social accounts.

**Fields:** `data.id`, `data.items[]{provider, title, subtitle, connected, action{kind: connect, value: provider}}`. When OAuth returns, the same `id` is sent again with `connected: true` and the row turns into the chip.
