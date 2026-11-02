# style_picker_card

**JSON `type`:** `style_picker_card` · Mel Chat Templates v0.2.1.


Design styles shown as image tiles. Multi-select with a check. The expand button opens the gallery (Media viewer).

**Layout:**
- Web: 5 columns, 3:4 tiles, max 720px; names wrap to two lines.
- Mobile: 2 columns, and each tile keeps its own aspect (`data-aspect="4:5|9:16|4:3|1:1|17:22"`).

**Fields:** `data.multi`, `data.options[]{id, title, subtitle, image_url, aspect}`.
**Selected:** a 2px Deep Teal ring and a check that swaps in from scale 0.92 over `--duration-base`.
**Markup:** `.rds-style-grid(.rds-style-grid--mobile)` > `.rds-style[data-aspect]` > `button.rds-style__sel[aria-pressed]` (`.rds-ph`/img, `.rds-style__shade`, `.rds-style__name`, `.rds-style__check`) + `.rds-style__exp`.
