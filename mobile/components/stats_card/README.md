# stats_card

Result of a contact import. Up to 4 stat tiles in a 2×2 grid, one warning line for anything the agent must fix, then a link row to the CRM.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `stats_card`. Web twin: Radius UI `stats_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**Markup:** `.m-crm-card` > `.m-stats > .m-stat` + `.m-warnrow`, then `a.m-link`.
**Rules:** at most 4 tiles; no warning line when nothing needs review.
