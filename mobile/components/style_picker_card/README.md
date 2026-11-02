# style_picker_card

Pick one design style. 2-up 3:4 tiles with the style name on a dark shade; the last tile spans the row at 16:9.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `style_picker_card`. Web twin: Radius UI `style_picker_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.styles[]{id, name, image_url}`, single choice.
**Behaviour:** tap a tile to select it (ring + check) and fill the composer ("Use Modern Minimal"). The expand button opens a full-screen viewer page with the style's samples; it never opens a popover.
**Images:** gradients here stand in for the real style photos.
