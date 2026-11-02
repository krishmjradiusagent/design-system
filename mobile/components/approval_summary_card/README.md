# approval_summary_card

The last check before a campaign goes live: campaign, audience, goals, channels, sequence, start. One primary button under the card.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `approval_summary_card`. Web twin: Radius UI `approval_summary_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.id`, `data.rows[]{icon, tone, label, value | chips[]}`, `data.action{kind: approve, label}`.
**After approve:** the button shows a spinner (at least 600ms), then Mel sends `campaign_status_card`. No confirm dialog: the card is the confirm.
