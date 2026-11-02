# Message

One chat turn. **User:** right-aligned Cloud bubble, `radius-3xl` (22), 16/24 text, max 80% width. **Mel:** plain text, no bubble, full column width (Mel web rule v106), 16/24 with lists and bold; Actions row below.

**Markup:** `.rds-msg.rds-msg--user|--assistant` > `.rds-msg__content` (+ optional `__head`, `__attach`, Actions).

- Don't put Mel's text in a card or bubble. Don't add avatars to every turn.
