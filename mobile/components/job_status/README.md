# job_status

A one-line status for long work: pulsing dot, what Mel is doing, progress. Same `data.id` replaces the line as work moves; the finished card replaces it at the end.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `job_status`. Web twin: Radius UI `job_status`.
**Native rules:** full width in the chat column. Detail pushes a full page, lists and choices open a bottom sheet; no side panels or popovers. Tap targets 44pt iOS / 48dp Android.

**States:** working (pulsing primary dot) → done (success dot, still). Reduced motion: no pulse.
**Rule:** never a modal or progress sheet; the agent keeps chatting while it runs.
