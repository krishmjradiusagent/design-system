# send_summary_card

**JSON `type`:** `send_summary_card` · Mel Chat Templates v0.2.1.


The result of a bulk send: a headline and counts per channel. Partial sends switch to a warning icon and show failures as a danger chip.

**Fields:** `data.state` (done | partial | failed), `data.title`, `data.counts[]{channel, value}`, `data.failed`, `data.actions[]` (e.g. "See who failed", link).
