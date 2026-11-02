# Field

Layout wrapper for a label, control, help and error (shadcn Field / Form).

**Parts:** `.rds-fieldset` (+ `__legend`) groups fields at 16px; `.rds-field` stacks label → control → `__help` / `__error` at 6px; `--row` puts a checkbox or switch beside its label.

- Do put help under the control, error replaces help.
- Don't put more than two fields in a row.
