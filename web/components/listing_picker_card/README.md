# listing_picker_card

**JSON `type`:** `listing_picker_card` · Mel Chat Templates v0.2.1.


The agent's listings with status chips. **Tapping one fills the composer** with its `prompt`. It ends with "Show all N listings". On web it is a keyboard-selectable question card with letter keys.

**Fields:** `data.title`, `data.items[]{listing_id, title, subtitle, badge{text, tone}, prompt}`, `data.more{label, kind: fill_prompt, value}`.
**Status tones:** Active = success, Pending = warning, Coming soon = info.

Try it: pick A.
