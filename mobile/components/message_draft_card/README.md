# message_draft_card

A message Mel wrote for the agent to approve. Row 1: channel tile (text or email) + "Text to Jordan Lee". Below, full width: the message. Foot: where it sends from and one Send button.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `message_draft_card`. Web twin: Radius UI `message_draft_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**Layout:** header row + full-width body, same as `client_note_card`; no chevron because the card is not a tap (KJ, 2 November 2026). Email uses the envelope tile, "Email to Jordan Lee", and a bold subject line above the body.
**States (`data-state` on the card):** `draft` → `sending` (spinner, at least 600ms) → `done` (button becomes "✓ Sent", status line "Sent and logged").
**Edit by asking:** prompt rows "Make it shorter", "Make it warmer". The new draft replaces this card (same `data.id`). No edit popover.
**Recovery:** missing phone or email → `.m-warnrow` + row "Add Jordan's email". Send failed → `.m-status--danger` "Didn't send" + row "Try again".
