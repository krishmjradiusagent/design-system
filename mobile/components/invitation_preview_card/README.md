# invitation_preview_card

The invitation clients will get, per channel, with one approve button at the foot.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `invitation_preview_card`. Web twin: Radius UI `invitation_preview_card`.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.title`, `data.subtitle`, `data.badge`, `data.sections[]{channel, subject?, body}`, `data.action{kind: approve}`.
**After approve:** spinner (at least 600ms), then `send_summary_card`. Edit by asking.
