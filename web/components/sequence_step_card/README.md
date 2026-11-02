# sequence_step_card

**JSON `type`:** `sequence_step_card` · Mel Chat Templates v0.2.1.


One step shown after the agent asked for a change, with an "updated" note in the subtitle.

**Fields:** `data.id`, `data.title`, `data.subtitle`, `data.badge`, `data.step{index, timing, channel, title, body}`.
**Rule:** show only the changed step, never the whole sequence again.
