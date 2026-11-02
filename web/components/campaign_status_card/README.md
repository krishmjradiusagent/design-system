# campaign_status_card

**JSON `type`:** `campaign_status_card` · Mel Chat Templates v0.2.1.


A running campaign: name, Live badge, the next send, and recipient chips per channel.

**Fields:**
- `data.id`, `data.title`
- `data.badge{text, tone}`
- `data.rows[]{icon, tone, label, value | chips[]{text, tone}}`

**Markup:** `.rds-seq` > head + `.rds-seq__tiles` > `.rds-seq__tile` (`.rds-tic[data-tone]` + label, then `<b>` value or `.rds-seq__chips` > `.rds-tchip[data-tone]`). The Live dot pulses.
