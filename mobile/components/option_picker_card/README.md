# option_picker_card

Pick one or more things to create. 2-up tiles; a selected tile gets a 2px primary ring and a check.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `option_picker_card`. Web twin: Radius UI `option_picker_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.options[]{id, title, subtitle, icon}`, `data.multi`.
**Behaviour:** each tap toggles a tile and rewrites the composer ("Make social posts and reels"). Nothing sends until the agent taps Send in the composer.
**Shown:** Social posts and Reels selected (sample state).
