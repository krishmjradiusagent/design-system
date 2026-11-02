# people_list_card

Ranked or matching people: initials, name, context line, trailing note. Used for top buyers, duplicates and search results.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `people_list_card`. Web twin: Radius UI `people_list_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**Fields:** `data.items[]{client_id, initials, title, subtitle, trailing}`, `data.more_count`.
**Rules:** at most 5 rows in chat. "+N more" (Green Text, 600) pushes a full page with the whole list; back returns to the chat at the same scroll spot. Tapping a person pushes their CRM page.
**Empty:** no list; Mel sends `empty_card`.
**Proposal:** "+N more" and the pushed page are adapted from web (template shows 3 rows); approved by KJ, 2 November 2026.
