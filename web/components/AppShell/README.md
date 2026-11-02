# AppShell

The Mel assistant web layout, assembled: Sidebar (260px Cloud) + main column with a 56px top bar (assistant pill, Share), Conversation (720px column) and the docked PromptInput. Start every Mel web screen from this.

**Markup:** `.rds-shell` > `aside.rds-sidebar` + `main.rds-shell__main` > `.rds-shell__top` · `.rds-conversation` · `.rds-dock`. In product, the shell fills the viewport inside a white frame with `radius-3xl`.

- Do keep the chat column centred at 720px; result cards and confirmations sit in it.
