# people_list_card

**JSON `type`:** `people_list_card` · Mel Chat Templates v0.2.1.


Ranked or matching people: initials, name, a line of context, and a trailing note. A "+N more" row ends the list. Used for top buyers, duplicates and search results.

**Fields:** `data.items[]{client_id, initials, title, subtitle, trailing}`, `data.more_count`.
**Markup:** `.rds-mc.rds-mc--lg.rds-mc--list` > `.rds-mc__row` … + `button.rds-mc__more` ("+N more", Green Text 600).
**Rules:** at most 5 rows before "+N more".
