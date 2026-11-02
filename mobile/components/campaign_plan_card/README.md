# campaign_plan_card

A short check-in plan for a group: title, who it reaches, one row per week with channel and first line, then the stop rule.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `campaign_plan_card`. Web twin: Radius UI `campaign_plan_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**Approve by asking:** prompt rows "Start it", "Change week 2". No buttons in the card. The full campaign skill uses `campaign_sequence_card`.
