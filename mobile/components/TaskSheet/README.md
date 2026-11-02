Class prefix `.c-task-sheet`. Styles ship in `components/bundle.css`; load `c-task-sheet.css` alone only outside this system. Behaviour: `c-task-sheet.js`.

## 1. Job
Add task sheet: title · transaction · assign to · due · type.

## 2. Level
Component · Batch D (shared)

## 3. Source
index `openTaskEditor()` · `#transactionManager`. Colors, type, radius, spacing from the new system; borderless; Phosphor icons.

## 4. Anatomy
| Part | Class |
|---|---|
| Sheet | `section.rm-sheet.c-task-sheet` (+ `__scrim`) |
| Fields | c-text-field + c-dropdown (searchable) |
| Foot | Cancel · gilded Add task (disabled until valid) |

## 5. Behaviour + tone
`cTaskSheet.open(sheet, {transaction:{id,label}|null})` — fixed read-only transaction when opened from one, else searchable picker. Becomes a full page on short screens. Emits `c-task-add` {title, transaction, assignee, due, type}. Wired: quick view ⋯ → Add task.

## 6. States
default · interactive states · long text · Dynamic Type 1.5× · dark/light · quiet/accented/colorful · iOS/Android

## 7. Tokens consumed
Semantic only — see `c-task-sheet.css` (linted).

## 8. Accessibility
Real buttons/links/inputs · labels on icon-only controls · dialogs trap background (inert) and return focus · live regions for toasts · focus ring from foundations · reduced motion respected.

## 9. Review
- [x] lint clean · [x] matrix renders · [x] no new tokens/atoms · [ ] Approved by KJ
