# campaign_sequence_card

The full campaign: name, touchpoints and length, status badge, then a numbered timeline. Each step shows day, channel chip, title and the whole message.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `campaign_sequence_card`. Web twin: Radius UI `campaign_sequence_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.id`, `data.title`, `data.subtitle`, `data.badge{text, tone}`, `data.steps[]{n, day, channel, title, subject?, body}`.
**Edit by asking:** "Make day 3 shorter". Mel answers with `sequence_step_card` for that one step; the full card is not resent.
**Badge:** Draft = warning dot; Live = success.
