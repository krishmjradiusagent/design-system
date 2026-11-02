# stats_card

**JSON `type`:** `stats_card` · Mel Chat Templates v0.2.1.

Result of a contact import (CRM onboarding · Import result). Up to 4 stat tiles (Cloud fill, 18/600 tabular numbers), one warn line for anything that needs the agent, then a link row to the CRM.

**Before it:**
1. File chip from the user.
2. Trace ("Reading the file").
3. Duplicates question (option_picker_card).
4. Status "Importing…".

**Markup:** `.rds-mc` > `.rds-mc__stats > .rds-mc__stat` + `.rds-mc__warn`.
