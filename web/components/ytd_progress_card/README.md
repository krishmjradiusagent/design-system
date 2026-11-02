# ytd_progress_card

**JSON `type`:** `ytd_progress_card` · Mel Chat Templates v0.2.1. Web only in the designs so far.


Before → after numbers for volume, GCI and sides, plus a rank line. Shown when a deal closes or is about to.

**Fields:** `data.title`, `data.subtitle`, `data.rows[]{label, from, to, delta}`, `data.rank`.
**Display:** each row reads "from to to", matching the web design. `delta` is in the JSON for the fallback text and is not shown in the row.
**Markup:** `.rds-ndcard` > `.rds-ndcard__h` (`.rds-ndcard__ic` + title/sub) + `.rds-ndcard__li` (`.nm` + `.st`).
