# contact_card

Answer to "Find Jordan". Head: initials, name, type and stage. Rows: phone, email, looking for, last contact. Stacked label over value (mobile has no room for a 2×2 grid).

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `contact_card`. Web twin: Radius UI `contact_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**No match:** no card. Mel says so in one line and offers prompt rows ("Add Jordan as a new contact", "Search by phone").
**Markup:** `.m-crm-card` > `.m-prow.m-prow--head` (`.m-av`) + `.m-kv` rows.
