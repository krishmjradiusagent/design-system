# Tool

A tool call Mel made (AI Elements Tool). Collapsed row: Mint Mist icon chip, plain-language name + muted argument, status badge (Running · Done · Failed · Needs approval), chevron. Expanded: Input / Output code blocks.

**Markup:** `.rds-tool[data-rds-root]` > `.rds-tool__head[data-rds-trigger]` > `__icon`, `__name` (`small`), badge, `.chev` + `.rds-tool__body` > `__section-label`, `pre.rds-tool__code`.

- Do name tools as actions the agent understands ("Searched clients"), not API names.
