# offer_card

**JSON `type`:** `offer_card` · Mel Chat Templates v0.2.1 · legacy `offer` (design pending on the templates page).

**Status:** Mel-style design approved by KJ on 2 Nov 2026. There is no Mel web board for it yet.


Points to an offer. Today it shows "Offer Documents For", the client name and the property address; now that is one card that opens the offer.
**Fields today:** client name and property address only. Price, terms and status are not in the legacy data, so the card does not invent them. Add them as `rows` only when the template gains those fields.


**Layout (KJ rule, 2 November 2026):** header row + full-width body. Row 1: icon tile + caption (`.rds-note__cap`) + chevron when the whole card is a tap. Title and text sit below, full width from the card edge. No chevron when the card has its own buttons. Markup: `.rds-note__head` + `.rds-note__body` (`.rds-note` on tappable cards). Same rule as Radius Mobile.
