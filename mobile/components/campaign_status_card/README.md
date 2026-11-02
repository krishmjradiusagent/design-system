# campaign_status_card

A running campaign: name, Live badge, next send, recipients per channel.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `campaign_status_card`. Web twin: Radius UI `campaign_status_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.id`, `data.title`, `data.badge{text, tone}`, `data.rows[]`.
**Detail:** prompt row "Open campaign" pushes the campaign page in Radius.
