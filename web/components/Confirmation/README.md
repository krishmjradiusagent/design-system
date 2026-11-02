# Confirmation

Approval gate before Mel acts on the agent's behalf (AI Elements Confirmation). Cloud card with Mint Pale stroke, Mel mark in `attention`, title states the exact action and count, primary names it. After a choice the card settles to white with a Done mark or badge.

**Markup:** `.rds-confirm` > `__head` (Mel mark + `__title`, `__desc`) + `__actions` (`data-rds-confirm="approved|rejected"` buttons). `data-state` reflects the result.

- Do confirm every send, post, payment or delete. Never "OK / Cancel".
