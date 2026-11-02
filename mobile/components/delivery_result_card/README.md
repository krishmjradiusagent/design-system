# delivery_result_card

How a send went: sent, bounced or failed, and what goes out next.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `delivery_result_card`. Web twin: Radius UI `delivery_result_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.title`, `data.subtitle`, `data.rows[]{label, value, tone?}`, `data.state`.
**Rules:** bounces and failures are always shown in danger tone. `partial` and `failed` add a foot with a link-style "Retry N" (`action.kind: retry`).
**Proposal:** the partial foot is adapted from the web card protocol; approved by KJ, 2 November 2026.
