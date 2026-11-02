# Command

Search-first command palette (cmdk). 44px search row, grouped results, keyboard hints, live filter in `bundle.js`; empty state hands the query to Mel.

**Markup:** `.rds-command` > `.rds-command__search > input` + `.rds-command__list` > `.rds-command__group` (`.rds-menu__label` + `.rds-menu__item`s) + `.rds-command__empty`. Put it in a Dialog for ⌘K.
