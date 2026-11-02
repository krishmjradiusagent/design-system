# Dialog

Modal for a focused task. 480px, `radius-2xl` (18), `shadow-lg`, 24px padding, Night 45% scrim, pops in 240ms.

**Markup:** `.rds-overlay[id]` > `.rds-dialog[role=dialog][aria-modal][aria-labelledby]` > `__close`, `__header` (`__title`, `__desc`), body, `__footer`. Open with `data-rds-open="#id"` or `RadiusUI.open('#id')`; `data-rds-close`, scrim click and Esc close.

- Do put the primary action last (right). Title says the task, not "Are you sure".
