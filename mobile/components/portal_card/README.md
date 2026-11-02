# portal_card

A link card for the agent's client portal: thumbnail in their brand colours, site address with a Live dot, title, and copy.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `portal_card`. Web twin: Radius UI `portal_card`.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Behaviour:** tap opens the portal in the in-app browser (SFSafariViewController / Custom Tab). Copy copies the link and shows a toast "Link copied".
