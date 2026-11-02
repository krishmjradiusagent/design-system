# Typography

Font: **Mona Sans** for every role. Mobile sizes are retained; marketing display sizes are not applied to controls.
Use `.t-<role>`. Never set size/weight/line-height yourself. Atoms never set type either.

| Role | Class | Spec | Use |
|---|---|---|---|
| Large title | `.t-large-title` | 700 28/1.15 −0.02em | tab screens (collapse to 17 on scroll) |
| Welcome title | `.t-welcome-title` | Mona Sans 700 24/1.15 −0.02em | welcome screen introduction |
| Page title | `.t-page-title` | Mona 600 20/1.4 −0.02em | pushed pages, beside back button |
| Sheet title | `.t-sheet-title` | 700 17/1.2 | sheets, modals |
| Section | `.t-section` | 600 15/1.2 | section headers |
| Row title | `.t-row-title` | 600 15/1.3 | list rows, card titles, names |
| Body | `.t-body` | 400 15/1.35 | copy |
| Body strong | `.t-body-strong` | 500 15/1.35 | button labels, emphasis |
| Meta | `.t-meta` | 500 13/1.25 | info under titles (add `.t-secondary`) |
| Caption | `.t-caption` | 500 12/1.25 | timestamps, labels |
| Chip | `.t-chip` | 600 12/1 | text inside `.rm-chip` |
| Eyebrow | `.t-eyebrow` | 700 12 +0.08em caps | one block label per card, max |
| Money XL | `.t-money-xl` | 700 28 tabular | hero amount |
| Money | `.t-money` | 700 24 tabular | card amount |
| Money S | `.t-money-sm` | 600 15 tabular | metric values, row amounts |
| Badge | `.t-badge` | 700 11 tabular | numbers in `.rm-badge` only |
| Address | `.t-address` | Mona 500 16 −0.02em | property address pull-out |

## Rules
- 13px is the floor for meaningful text. 11–12 only for badge/chip/caption.
- Money, counts, dates → tabular role or `.t-num`.
- Sentence case everywhere. No ALL CAPS except `.t-eyebrow`.

## Dynamic Type
`--type-scale` on `<html>` (1 → 1.5 max). All roles scale and cap at 1.5×. Test every screen at 1.5× (`?ts=1.5`).
Native: iOS Dynamic Type / Android fontScale map to the same roles.

## Long-form (Mel replies, notes)
Use shadcn **Typeset** wrapped with our fonts/colors (**not shipped yet — next step**, do not hand-roll). Presets: `typeset-mel` (chat), `typeset-note` (notes). Not for UI chrome.
