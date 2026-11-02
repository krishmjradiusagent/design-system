# MelCard

**Web only · not in Mel Chat Templates yet.** Built from the Mel web boards; the backend needs a template type before apps can send it.

The base every Mel result card is built from (Mel web `.w-cardbox`): 1px Line border, 16px radius, 14×16 padding, white.

**Markup:**
- `.rds-mc.rds-mc--sm|md|lg[data-state]`
- `.rds-mc__head` > `.rds-mc__tile | .rds-mc__av` + `.rds-mc__ht` (`.rds-mc__t`, `.rds-mc__m`)
- `.rds-mc__kv(.rds-mc__kv--3)` > `div` > `.rds-mc__m` + `.rds-mc__b`
- `.rds-mc__foot` (`.rds-mc__m` + `.rds-btn.rds-btn--primary.rds-btn--sm`)
- Optional parts: `.rds-mc__stats > .rds-mc__stat`, `.rds-mc__warn`, `.rds-mc--list > .rds-mc__row`, `.rds-mc__note(--warn|--ok)`

**Rules:**
- One primary action per card, always on the right.
- The card holds facts; Mel's sentence above it explains them.
- Below the card come prompt rows, never more buttons.
- `[data-rds-send]` on the button runs sending → done (600ms minimum spinner) and swaps in `.rds-mc__sent`.
