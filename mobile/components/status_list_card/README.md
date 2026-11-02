# status_list_card

Where things went, one row per destination: icon, name, what happened, then a status chip or a Connect / Reconnect button.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `status_list_card`. Web twin: Radius UI `status_list_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.summary`, `data.items[]{provider, title, subtitle, status{text, tone} | action{kind: connect}}`.
**Connect / Reconnect:** opens the system sign-in sheet. The same `id` is resent when it returns.
