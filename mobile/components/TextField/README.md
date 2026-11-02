Class prefix `.c-text-field`. Styles ship in `components/bundle.css`; load `c-text-field.css` alone only outside this system. No script.

## 1. Job
Mobile form field: label + input; read-only; error; 2-col row.

## 2. Level
Component · Batch D (shared)

## 3. Source
`mobile-form.css` `.rds-field--mobile-form` · `editorInputField()`. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Group | `.c-field-group` (gap 24) · `.c-field-row` (2 cols) |
| Field | `.c-text-field` label (`data-required` *) + `.c-text-field__input` |
| Error | `[aria-invalid=true]` + `.c-text-field__error` |

## 5. Behaviour + tone
Focus = gilded ring. Read-only = hairline, muted text. Pickers → use c-dropdown.

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-text-field.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
