# client_card

**JSON `type`:** `client_card` · Mel Chat Templates v0.2.1 · legacy `client` (design pending on the templates page).

**Status:** Mel-style design approved by KJ on 2 Nov 2026. There is no Mel web board for it yet.


A compact client reference that opens the client profile. Today it shows a person icon, name, buyer or seller, and a short line; now it uses initials, name, type and one line. **The whole card is the tap target**, with a chevron.
**Use `contact_card`** when Mel shows details. This card only points to a client.
**Markup:** `a.rds-mc.rds-mc--sm.rds-mc--tap` > `.rds-mc__av` + `.rds-mc__ht` + chevron.
