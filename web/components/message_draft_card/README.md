# message_draft_card

**JSON `type`:** `message_draft_card` · Mel Chat Templates v0.2.1.

A message Mel wrote for the agent to approve (CRM skill · Draft). The header row shows the channel tile and "Text to Jordan Lee" (or "Email to …"). The body is plain text. The foot shows where it sends from, and a Send button.

**States:**
- default
- `data-state="sending"`: spinner, at least 600ms
- `data-state="done"`: button swaps to "✓ Sent", then a status line "Sent and logged"

**Edit by asking:** prompt rows "Make it shorter" and "Make it warmer". The new draft replaces the card; it is not a second card.
**Recovery:**
- Missing email or phone: `.rds-mc__note--warn`, plus a row "Add Jordan's email".
- Send failed: status `data-state="error"` plus a row "Try again".

Try it: click Send.


**Layout (KJ rule, 2 November 2026):** header row + full-width body. Row 1: icon tile + caption (`.rds-note__cap`) + chevron when the whole card is a tap. Title and text sit below, full width from the card edge. No chevron when the card has its own buttons. Markup: `.rds-note__head` + `.rds-note__body` (`.rds-note` on tappable cards). Same rule as Radius Mobile.
