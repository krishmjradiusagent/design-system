# change_card

**JSON `type`:** `change_card` · Mel Chat Templates v0.2.1.

Before → after review for a CRM update (CRM skill · Update). The old value is struck through in Slate, the new value is Deep Teal. Unchanged fields say "no change" so the agent sees nothing else moves.

**Flow:** Mel asks "Save it?" in the reply, with prompt rows "Save it" and "Change something". After saving, a status line "Saved to Radius CRM" replaces the question.
**Markup:** `.rds-mc` > `.rds-mc__t` + `.rds-mc__kv(--3)`; old value in `<s>`.
