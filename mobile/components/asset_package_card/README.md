# asset_package_card

A finished package of designs. The whole card is one button: title, count, a strip of thumbnails with "+N" on the last.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `asset_package_card`. Web twin: Radius UI `asset_package_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.id`, `data.title`, `data.subtitle`, `data.thumbs[]`, `data.more_count`, `data.channel?`.
**Behaviour:** tap pushes a full-screen viewer page (swipe between designs, share sheet from the top bar). Two shapes: package (3 large tiles) and channel (tile icon + 4 small tiles).
