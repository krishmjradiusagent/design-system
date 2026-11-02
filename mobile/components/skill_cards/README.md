# skill_cards

What Mel can do, as 2-up cards: the skill mark in its colour plus a task. Shown in an empty chat.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `skill_cards`. Web twin: Radius UI `skill_cards`.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**Behaviour:** tap fills the composer with the task; it never sends (same rule as Skill pills).
**Fields:** `data.items[]{skill, title, prompt}`.
