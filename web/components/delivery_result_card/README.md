# delivery_result_card

**JSON `type`:** `delivery_result_card` · Mel Chat Templates v0.2.1.


How a send went: sent, bounced, and what goes out next.

**Fields:** `data.title`, `data.subtitle`, `data.rows[]{label, value, tone?}`. A row with a tone shows its value as a `.rds-tchip`; without a tone it shows plain bold text.
**Rules:** bounces are always shown, in danger tone. Follow with prompts ("Fix the 2 bounced emails").
