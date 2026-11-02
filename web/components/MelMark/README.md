# MelMark

The Mel mark: the rounded shape with a living dot (Brand · 01 Logo, 07 Mel in motion). Never redraw it; `bundle.js` injects the exact source path.

**Markup:** `<span class="rds-mel-mark" data-state="ready" style="width:40px;height:40px"></span>`.
**States:** `idle` (float 4px + soft ring 3.2s) · `ready` (ring 13→34, 2.4s) · `listening` (rings draw in, 1.8s staggered) · `thinking` (three dots, 1.2s) · `speaking` (voice bars, 0.9s) · `done` (dot opens into a check) · `attention` (Deep Teal shape, mint dot + badge; use sparingly) · `offline` (Line grey, still). `data-still` stops the ring (required below 24px). `data-assistant="coral|lagoon|honey|rose|harbor|cocoa"` recolours the shape for an assistant.

- Sequence: Ready → Listening → Working → Speaking or Done → Ready after 2s.
- Don't recolour (except assistants), stretch, rotate or add effects. Clear space = 2× the dot.
