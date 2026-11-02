# capability_carousel

Intro carousel for a new agent: one card per skill with a live-looking preview, the skill mark, name and one line. Snaps card by card; dots show position.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `capability_carousel`. Web twin: Radius UI `capability_carousel`.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Cards:** Marketing, CRM, Campaigns, Client experience, Compliance, Documents (6 dots). First three shown.
**Behaviour:** tap fills the composer with a starter prompt for that skill; it never sends.
