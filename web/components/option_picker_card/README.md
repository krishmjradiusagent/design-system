# option_picker_card

**JSON `type`:** `option_picker_card` · Mel Chat Templates v0.2.1.


Multi-select options, each with a letter key, a name and a short description. Choices build a sentence in the composer ("Create social posts and a flyer for 123 Ocean View Drive"). Picking never sends; Send fills the composer.

**Fields:**
- `data.title`
- `data.multi` (true = pick one or more)
- `data.sentence` ("Create {items}")
- `data.options[]{id, icon, title, subtitle, say}`

**States:**
- Open: keys A, B, C…, Send disabled until a pick.
- Picked: the key turns into a green check.
- Answered: `data-locked`, unpicked options fade to 42%.

The last option is always "Type your own".
**Markup:** `.rds-qcard[data-multi][data-sentence]` > `.rds-qcard__opt[aria-pressed][data-say]` … + `.rds-qcard__foot .rds-btn`.

Try it: pick B and E, then press Send.
