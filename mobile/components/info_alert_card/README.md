# info_alert_card

A heads-up in chat: title, one or two lines, one action.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `info_alert_card`. Web twin: Radius UI `info_alert_card`.
**Alias page.** Built from existing parts: `c-alert` with a tone (see Alert). No new styles; this page exists so the JSON type name maps one to one.

**Tones:** info · success · warning · danger. The action is `action.kind` (usually `send_prompt` or `deep_link`).
