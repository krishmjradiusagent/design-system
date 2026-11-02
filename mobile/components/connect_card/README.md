# connect_card

The tools Mel needs before it can act: one row per tool, what it unlocks, and a Connect button.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `connect_card`. Web twin: Radius UI `connect_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.id`, `data.items[]{provider, title, subtitle, connected, action{kind: connect, value}}`.
**Connect:** opens the system sign-in sheet (iOS ASWebAuthenticationSession / Android Custom Tab), never an in-app web view. When it returns, the same `id` is resent with `connected: true` and the row shows "Connected" (success).
**Proposal:** the Connected row is adapted from web; approved by KJ, 2 November 2026.
