# contact_card

**JSON `type`:** `contact_card` · Mel Chat Templates v0.2.1.

Answer to "Find Jordan" (CRM skill · Find). The head shows avatar initials, name, and type plus stage. The 2×2 key-value grid shows phone, email, looking for and last contact. A link row underneath hands off to the full CRM record.

**No match:** no card. Mel says so in one line and offers prompt rows ("Add Jordan as a new contact", "Search by phone").
**Markup:** `.rds-mc.rds-mc--md` + `.rds-mc__av` + `.rds-mc__kv`, then `a.rds-link-row`.
