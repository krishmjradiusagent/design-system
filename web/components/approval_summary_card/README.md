# approval_summary_card

**JSON `type`:** `approval_summary_card` · Mel Chat Templates v0.2.1.


Everything that will go live, with an icon per row and an "Awaiting approval" badge. **The primary approve button sits under the card. Nothing ships without the tap.**

**Fields:** `data.id`, `data.state` (draft → working → done), `data.title`, `data.badge`, `data.rows[]{icon, tone, label, value | chips[]}`, `data.actions[]` (approve).
**Markup:** `.rds-seq` > head + `.rds-seq__kv.rds-seq__kv--ic` > `.rds-seq__kvr` (`.rds-tic[data-tone]` + label, value right), then `.rds-seq__send`.
