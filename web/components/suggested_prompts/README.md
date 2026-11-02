# suggested_prompts

**JSON `type`:** `suggested_prompts` · Mel Chat Templates v0.2.1.


Rows under a reply. **Tapping one fills the composer; it never sends.** They are sent at the top level of the reply as `prompts`, next to `cards`.

**Styles:**
- `standard`: CTA Deep Teal 600, the default
- `more`: secondary, Slate 500 (`.rds-prompt-row--more`)
- `destructive`: Error red (`.rds-prompt-row--destructive`)

**Markup:**
- `.rds-prompt-rows` > `button.rds-prompt-row` (`.rds-prompt-row__glyph` + `.rds-prompt-row__text`)
- Quiet in-thread variant: `.rds-prompt-rows--quiet`
- Chips: `.rds-follow-chip`
- Inside `[data-rds-chat]`, a tap fills that scope's `.rds-prompt__field` and flashes the composer's focus glow.

**Rules:** 2–3 rows (6 only for an opening list). They appear after the reply finishes streaming, with an 80ms stagger.
