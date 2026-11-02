# CardProtocol

The shared card protocol from Mel Chat Templates v0.2.1. It applies to every card in this group, so that iOS, Android, web and backend read the same states.

**`data.state`:** draft | working | done (default) | partial | failed | stale. Put it on the card as `[data-state]`, and add the status lines `.rds-cstate--<state>`; each one shows only in its own state.
- `working`: actions dim; "Sending…" with a pulsing dot.
- `done`: actions removed; "✓ Sent".
- `partial`: warning line plus a Retry link.
- `failed`: red border tint, "Didn't send", Retry.
- `stale`: content dims to 55%, "Out of date", actions disabled. *The template page names this state but shows no design for it; this is a proposal.*

**`action.style`:** primary (`.rds-btn--primary`) | secondary (`.rds-act--secondary`) | link (`.rds-act--link`) | danger (`.rds-act--danger`). Actions sit in `.rds-mc__actions` at the card foot, right-aligned, with at most one primary.
**`action.kind`:** send_prompt · fill_prompt · approve · deep_link · open_url · connect · open_viewer · retry · undo · stop · dismiss. Behaviour, not looks; `retry` is `[data-kind="retry"]`.
**Tones:** `[data-tone="success|warning|danger|info|neutral"]` set `--tone-bg`/`--tone-fg` for `.rds-tchip`, `.rds-tic`, `.rds-tbadge`.
**Updates:** a later card with the same `data.id` replaces the earlier one (draft → sending → sent).
