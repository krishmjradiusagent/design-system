# client_note_card

**JSON `type`:** `client_note_card` · Mel Chat Templates v0.2.1 · legacy `client_note` (design pending on the templates page).

**Status:** Mel-style design approved by KJ on 2 Nov 2026. There is no Mel web board for it yet.


Confirms that Mel saved a note. Header row: pencil tile, "Created a note · client", chevron. Below, full width: note title and a 2-line preview. Tapping opens the client profile, at the note.
**Markup:** `a.rds-mc.rds-mc--tap` > `.rds-mc__tile` (pencil) + `.rds-mc__ht` (`__m`, `__t`, `.rds-mc__b.rds-mc__clamp`).


**Layout (KJ rule, 2 November 2026):** header row + full-width body. Row 1: icon tile + caption (`.rds-note__cap`) + chevron when the whole card is a tap. Title and text sit below, full width from the card edge. No chevron when the card has its own buttons. Markup: `.rds-note__head` + `.rds-note__body` (`.rds-note` on tappable cards). Same rule as Radius Mobile.
