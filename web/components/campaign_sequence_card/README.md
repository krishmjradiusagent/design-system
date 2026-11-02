# campaign_sequence_card

**JSON `type`:** `campaign_sequence_card` · Mel Chat Templates v0.2.1.


A numbered list of touchpoints: day, channel chip, step name and a two-line message preview. The badge shows Draft.

**Channels:** email (info tint), text (success tint).
**Markup:** `.rds-seq` > `.rds-seq__head` (+ `.rds-tbadge[data-tone]`) + `ol.rds-seq__list` > `li.rds-seq__step[data-channel]`.
**After it:** `approval_summary_card`, then the primary approve action.
