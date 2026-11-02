# property_card

One listing: photo, price, address, beds · baths · sqft, Status and MLS rows, then "Open listing". Replaces legacy `property`.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `property_card`. Web twin: Radius UI `property_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**Fields:** `data.id`, `data.photo_url`, `data.price`, `data.title`, `data.subtitle`, `data.rows[]`, `data.link{title, kind, value}`.
**Photo:** 148px tall, crops to fill. With no photo, a gradient placeholder with a house icon (dark mode uses surface tokens).
**Small fixes vs template:** the "›" text glyph is the Phosphor caret like every other link row; the placeholder gets a dark-mode gradient.
