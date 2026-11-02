# invitation_preview_card

**JSON `type`:** `invitation_preview_card` · Mel Chat Templates v0.2.1.


The email and text Mel will send to clients, grouped by channel, with the approve button inside the card.

**Fields:** `data.id`, `data.state`, `data.title`, `data.subtitle`, `data.badge`, `data.sections[]{channel, title, subject?, body}`, `data.actions[]` (approve).
**Markup:** `.rds-seq` > head + `.rds-seq__sec` per channel (hairline between) + `.rds-seq__send`.
