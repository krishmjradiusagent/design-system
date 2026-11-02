# reminder_card

A timed follow-up, meeting or showing in one chrome: icon tile, title, when, rows, optional actions. Replaces legacy `client_reminder`, `meeting`, `property_visit`.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `reminder_card`. Web twin: Radius UI `reminder_card`.
**Native rules:** the card sits in the chat column at full width. A link row pushes a full page (iOS push / Android new screen), never a side panel or popover. Tap targets are 44pt on iOS and 48dp on Android.

**`data.kind`:** reminder (default) | meeting | showing. Kind changes the tile tint only: meeting = info, showing = success.
**Actions:** meeting → "Open calendar" + "Join" (primary, right). Showing → "Open calendar". "Open calendar" opens the native calendar app (deep link), not an in-app panel.
**Connect calendar:** opens the system OAuth sheet (ASWebAuthenticationSession / Custom Tab).
**Proposal:** the template has only the default kind; meeting, showing and not-connected are adapted from web; approved by KJ, 2 November 2026.
