# property_card

**JSON `type`:** `property_card` · Mel Chat Templates v0.2.1. Replaces the legacy `property` action.


One listing: photo, price, address, beds · baths · sqft, Status and MLS rows, then an "Open listing" link row. Search results may send several cards (the list is capped).

**Fields:** `data.id`, `data.photo_url`, `data.price`, `data.title`, `data.subtitle`, `data.rows[]`, `data.link{title, kind, value}`.
**Note:** the templates page hand-authored this design in the CRM card style, so there is no Mel web board for it yet.
