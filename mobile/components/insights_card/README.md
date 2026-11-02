# insights_card

Portal activity at a glance: three count tiles, then the hot list. Each person row pushes their client page.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `insights_card`. Web twin: Radius UI `insights_card`.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.tiles[]{value, label, tone}`, `data.list{title, items[]{initials, name, when, line, tone}}`.
**Small fix:** the template repeats "Sarah Johnson" on rows 1 and 2; row 2 uses a second sample name here.
