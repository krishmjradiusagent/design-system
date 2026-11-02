# insights_card

**JSON `type`:** `insights_card` · Mel Chat Templates v0.2.1.


Three headline numbers, then a short list of people to act on, each with a time and a reason.

**Fields:** `data.title`, `data.stats[3]{label, value, tone}`, `data.list_title`, `data.items[]{client_id, initials, title, time, subtitle}`.
**Tones:** info = active, danger = hot, warning = needs follow-up. The tone colours the stat icon and the avatar only; the numbers stay Deep Teal.
