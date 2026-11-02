# listing_picker_card

Pick which listing to market. Each row is a prompt row: tap fills the composer with "Use 123 Ocean View Drive"; it never sends.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `listing_picker_card`. Web twin: Radius UI `listing_picker_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.items[]{id, title, status{text, tone}, subtitle, photo_url}`, `data.more_count`.
**Show all:** "Show all 12 listings" opens a bottom sheet with search and the full list (medium detent, drag to large). Picking one fills the composer and closes the sheet.
