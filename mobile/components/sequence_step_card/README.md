# sequence_step_card

One edited step of a campaign, shown after "change day 3". Same chrome as `campaign_sequence_card` with a single step.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `sequence_step_card`. Web twin: Radius UI `sequence_step_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.campaign_id`, `data.step{n, day, channel, title, body}`. The subtitle says what changed.
