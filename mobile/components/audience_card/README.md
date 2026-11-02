# audience_card

Who a campaign will reach before anything is written: total matches, how many are ready per channel, and who is excluded (no consent).

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `audience_card`. Web twin: Radius UI `audience_card`.
**Native rules:** full width in the chat column. No side panels or popovers: detail pushes a full page, choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.title`, `data.subtitle`, `data.rows[]{label, value | chips[]{text, tone, icon}}`.
**Next:** prompt rows ("Looks right", "Only buyers under [PRICE]"). The excluded count is never hidden.
