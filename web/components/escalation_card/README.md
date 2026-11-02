# escalation_card

**JSON `type`:** `escalation_card` · Mel Chat Templates v0.2.1.


A client message Mel handed to the agent: who, where, when, a "Needs you" badge, the quoted message, and what Mel replied.

**Fields:** `data.client{client_id, name}`, `data.source`, `data.time`, `data.badge`, `data.quote`, `data.reply`, `data.actions[]` (deep_link to the chat).
**Rule:** Mel never answers legal or contract questions itself. It hands them to the agent and says so.
