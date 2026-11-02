# thinking

**JSON `type`:** `thinking` · Mel Chat Templates v0.2.1.


A spinner and a shimmering "Thinking…" shown before the first word or trace step arrives. It is a client-side state with no JSON. It ends when the first token or the first `reasoning_trace` step arrives.

**Markup:** `p.rds-thinking[role=status]` > `.rds-spin` + `.rds-thinking__text`.
**Motion:** spinner `--duration-spin` 800ms linear · shimmer `--duration-shimmer` 1.6s linear. Reduced motion: static text.
