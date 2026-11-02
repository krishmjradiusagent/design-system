# Conversation

The scrolling chat thread (AI Elements Conversation, Mel web `.g-thread`). Column max `chat-column` (720px), 22px between turns, newest at the bottom, composer docked below.

**Markup:** `.rds-conversation` > `.rds-conversation__col` > turns (Message, Artifact, Tool, Suggestions…). Dock: `.rds-dock` > PromptInput. Wrap both in `.rds-chat-scope` (or `.rds-shell`) so suggestions find the composer. Optional `.rds-conversation__jump` button ("Jump to latest").

- Do keep Mel's turns as plain text; result objects follow as cards.
