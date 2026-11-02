# search_board_card

A saved client search: name and area, beds/baths, budget, and "Open search board". Replaces legacy `search_board`.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `search_board_card`. Web twin: Radius UI `search_board_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**Fields:** `data.id`, `data.title`, `data.subtitle`, `data.rows[]`, `data.link`.
