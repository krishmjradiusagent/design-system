# portal_status_card

**JSON `type`:** `portal_status_card` · Mel Chat Templates v0.2.1.


What was saved and what failed while setting something up, with a status chip.

**Fields:** `data.title`, `data.state` (done | partial | failed), `data.rows[]{label, badge}`, `data.actions[]` (retry).
**Rule:** always say what was kept ("Your logo and colors are saved") next to what failed.
