# email_review_card

An email to approve: channel head, recipients on one line with "Show all", add buttons, subject, body with its image, then Send.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `email_review_card`. Web twin: Radius UI `email_review_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.to{label, emails[], more_count}`, `data.subject`, `data.body`, `data.asset{kind, url}`.
**Show all:** opens a bottom sheet with every recipient and a remove button per row (medium detent, drag to large). "Done" closes it. Upload CSV opens the system file picker; Add a client opens the contact picker sheet.
**Proposal:** the sheet replaces the template's inline "Show more" expand (template wins on the card; the sheet is the mobile list pattern). Label is "Show all" because it opens a list. Approved by KJ, 2 November 2026.
