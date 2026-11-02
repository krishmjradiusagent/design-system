> MEL brand migration (15 October 2026): all components inherit the updated shared foundations. See `../foundations/docs/brand-migration.md`.

# Radius Mobile — Components

Reusable components built 1:1 from `transaction.html` / `index.html` (Transactions - office app), on the new foundations.
LLMs: read `../foundations/AGENTS.md` first. **Reuse these before building anything new.**

## Use a component
```html
<link rel="stylesheet" href="../foundations/build/radius.css">
<link rel="stylesheet" href="../Components/c-tx-row/c-tx-row.css">
<script src="../Components/c-tx-row/c-tx-row.js"></script>
```
Copy the markup from the component's `.html` page. Read its `.md` contract (anatomy, states, events, platform).
Every page supports `?compare=1&exp=accented&ts=1.5&platform=android` via the harness.

## Registry — Batch A (list + quick view)
| Component | What | CSS | JS | Depends on |
|---|---|---|---|---|
| `c-status-control` | status pill + picker menu | ✔ | ✔ | — |
| `c-tx-card-row` | Home "Active transactions" row | ✔ | — | — |
| `c-tx-row` | Transactions list row + swipe actions + price/earnings toggle | ✔ | ✔ | c-status-control |
| `c-image-rail` | property photo rail | ✔ | — | — |
| `c-quick-metrics` | 2-col compact metric grid | ✔ | — | c-status-control (status cell) |
| `c-person-tile` | role + avatar/name or avatar group | ✔ | — | c-quick-metrics |
| `c-tracker-card` | commission tracker ring + 6-step timeline | ✔ | ✔ | — |
| `c-quick-view` | quick view sheet (assembles all above) | ✔ | ✔ | all above · demo: list → tap → sheet |

## Registry — Batch B (transaction overview + details)
| Component | What | JS |
|---|---|---|
| `c-menu` | shared popover menu + `cMenu.attach()` | ✔ |
| `c-follow-up-actions` | action rows + Accept / Cancel pair (also in quick view) | — |
| `c-summary-cards` | status (tinted) · closing + roles · template cards | via children |
| `c-picker` | inline single-choice picker (template) | ✔ |
| `c-assigned-roles` | "Seller, Buyer +3" → full list | ✔ |
| `c-overview-card` | section summary + latest docs | — |
| `c-doc-chip` | document / envelope chip | — |
| `c-fact-list` | transaction facts with tinted icons | — |
| `c-section-card` | titled card with count | — |
| `c-person-row` | avatar + name + role/contact | — |
| `c-timeline` | step list (commission tracker) | — |
| `c-photo-strip` | large 4:3 photo strip | — |
| `c-fab-menu` | MEL primary FAB + add menu | ✔ |
| `c-action-bar` | glass Commission breakdown + ⋯ contract menu + FAB | ✔ |
| `c-glass-footer` | bottom-anchored glass surface for overlay actions | — |

Full screens built only from components: `_demo/transaction-overview.html`, `_demo/transaction-details.html`.

## Registry — Batch C (documents)
| Component | What | JS |
|---|---|---|
| `c-swipe` | generic swipe-to-reveal | ✔ |
| `c-checkbox` | filled checkbox (checked / mixed / disabled) | — |
| `c-form-row` | form row: tile · name · Start filling / ✓ View · ⋯ | via c-swipe, c-menu |
| `c-form-card` | card view of documents | — |
| `c-forms-toolbar` | List/Cards · count · Select / Select all | ✔ |
| `c-bulk-bar` | Create envelope (n) + delete + download | screen logic |
| `c-status-row` | audit issues · envelopes · status chips | — |
| `c-library-row` | library doc/package row | via c-menu |
| `c-dropdown` | custom select (native banned) | ✔ |
| `c-filter-sheet` | filters sheet, Reset/Cancel/Apply | ✔ |
| `c-upload-card` | upload item: progress, retry, cancel, inline options | ✔ |
| `c-upload-drop` | choose files card | — |
| `c-action-sheet` | Add document sheet | — |

Screens: `_demo/forms.html` · `_demo/audit-envelopes.html` · `_demo/library.html` · `_demo/upload.html`.

## Registry — Batch D (shared)
| Component | What | JS |
|---|---|---|
| `c-empty-state` | empty state + action | — |
| `c-toast` | confirmation toast (+ action) | ✔ |
| `c-avatar` | avatar + group | ✔ |
| `c-gallery` | full-screen photo viewer | ✔ |
| `c-text-field` | form field / row / error / read-only | — |
| `c-search` | search capsule + clear | ✔ |
| `c-task-sheet` | Add task sheet (searchable pickers) | ✔ |
| `c-m3-navbar` | Android navigation bar (auto-swaps with iOS dock) | — |
| `c-m3-topbar` | Android top app bar (auto-swaps with iOS header) | — |

`c-dropdown` now supports `data-searchable`. Screens: `_demo/home.html` (try `?platform=android`), quick view → ⋯ → Add task, tap a photo → gallery.

## Platform switch
`?platform=android` (or `data-platform="android"` on `<html>`): `.rm-dock` → `c-m3-navbar`, `[data-ios-only]` headers → `c-m3-topbar`, hit areas 48dp.

## Events (all bubble)
`c-status-change` {status} · `c-tx-open` {id} · `c-tx-action` {id, action} · `c-tx-amount-mode` {mode} · `c-qv-view` {id} · `c-qv-action` {id, action} · `c-picker-change` {value} · `c-fab-action` {action, group} · `c-contract-action` {action} · `c-swipe-action` {action, id} · `c-forms-selection` {ids} · `c-forms-view` {view} · `c-dropdown-change` {name, value, label} · `c-filters-apply` {values} · `c-upload-status` {status} · `c-upload-remove` · `c-search` {query} · `c-task-add` {title, transaction, assignee, due, type}

## Assets
Images load from `_assets/` (falls back to a house icon if missing). Copy once:
- `Pre-design system projects/Transactions - office app/assets/transactions/` → `Components/_assets/transactions/`
- `Pre-design system projects/Transactions - office app/assets/clients/` → `Components/_assets/clients/`
Quick view photos use the same Pexels URLs as the original.

## Rules
- Only `.c-*` classes here. Built from atoms + semantic tokens. Lint: `node ../foundations/scripts/lint-tokens.mjs .`
- Never restyle a component inline. New need → new component via `node ../foundations/scripts/new.mjs component <name> .`

## MEL AI chat composition

[`c-ai-chat-react`](c-ai-chat-react/README.md) provides a React companion using the real MIT-licensed beUI Message primitives with canonical Radius children. Existing controls and tokens are unchanged. See its contract for supported parts and source provenance.

## Registry — Batch E (Mel chat and voice, 28 October 2026)
| Component | What | JS |
|---|---|---|
| `c-mel-mark` | Mel brand mark, 8 states, 6 skills (replaces `.mel`) | state only |
| `c-mel-skill-pill` | skill name pill | — |
| `.rm-chat` + `typeset-chat` | Mel chat scope and message text | — |
| `c-trace` / `c-thinking` | chain of thought, thinking line | toggle |
| `c-prompt-row` | suggested prompt row, fills composer | — |
| `c-suggest` | suggestion chips, send | — |
| `c-chat-composer--compact` | compact composer + generating Stop | — |
| `c-float-nav` | frosted floating nav and top buttons | — |
| `c-skill-pills` | skill picker row above the composer | — |
| `c-code-boxes` | verification code boxes | ✔ |
| `c-voice` | full-screen voice | ✔ |
| `c-voice-link` / `-pick` / `-perms` / `-divider` | cards in voice, divider in chat | — |
| `c-voice-sheet` | voice settings sheet | ✔ |
| `c-voice-bubble` / `c-voice-drop` | minimised voice bubble, drop to end | ✔ |

`c-prompt-card` stays for onboarding only. `c-mobile-composer` and the voice pill are not part of the system.
