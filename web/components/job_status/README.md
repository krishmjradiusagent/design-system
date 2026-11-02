# job_status

**JSON `type`:** `job_status` · Mel Chat Templates v0.2.1.


A dot and a short line for long jobs, so the agent can keep chatting while it runs. It updates in place, keyed on `data.id`. Examples: "Designing · 2 of 6 ready" → "Designed · 6 of 6", or "Stopped · 2 of 6".

**Markup:** `p.rds-job[data-state="working|done|stopped|failed"]` > `.rds-job__dot` + `<b>verb</b> · n of N`.
**Motion:** the working dot pulses (`--duration-pulse` 1.4s). Done turns green, stopped grey, failed red.
