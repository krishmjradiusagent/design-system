# Vocabulary — one meaning per word

| Level | What it is | Prefix / where | Example | Who may create it |
|---|---|---|---|---|
| **Token** | A named value. Tier 1 = raw (`--p-*`, `--accent-*`). Tier 2 = semantic (meaning). | `tokens/*.json` → `--*` | `--surface-card`, `--text-gold` | KJ only |
| **Role** | Named type style | `.t-*` | `.t-row-title` | KJ only |
| **Tone** | Named color intent applied by class | `.tone-*`, `.role-*` | `.tone-sapphire`, `.role-buyer`, `.tone-warning` | KJ only |
| **Atom** | Smallest UI building block. Styled from tokens. | `.rm-*` | `.rm-card`, `.rm-chip`, `.rm-btn--primary` | KJ only |
| **Component** | Reusable UI made of atoms + tokens, with a contract `.md` | `.c-*` in `Components/<name>/` | `.c-tx-row`, `.c-status-card` | LLM proposes → KJ approves |
| **Pattern** | Fixed arrangement of components for one job | doc + HTML in `Components/patterns/` | "Mel insight row", "Metric strip" | LLM proposes → KJ approves |
| **Section / group** | Vertical block inside a screen; group = related blocks inside one section | `.rm-section`, `.rm-group` | "Details" section | LLM builds |
| **Screen** | One full view of the app. Exactly one `.rm-screen`. | `<name>.html` from a screen template | Home, Transaction detail | LLM builds |
| **Sheet** | Modal layer over a screen. Not a screen. | `.rm-sheet` | Add document, Quick view | LLM builds |
| **Mel** | The AI character. Not an icon, not a button. | `.mel` | dock Mel, inline Mel | KJ only |

## Words you must not mix up
- **Screen** ≠ **page section**. A screen is the whole viewport. A section is a `<section>` inside it.
- **Tab screen** (has dock, large title) ≠ **pushed page** (back button, page title, no dock). See `screens.md`.
- **Card** = `.rm-card` surface. **Metric** = `.rm-metric` (small number tile). **Tile** = `.rm-tile` (icon square). Never call a metric a card.
- **Chip** = label/status (`.rm-chip`). **Badge** = numeric count only (`.rm-badge`).
- **Primary** = the MEL primary CTA. **Accent** = categorical tone family. **Status** = success/info/warning/danger meaning.
- **Separator** = line between rows. **Border** = outline around a card variant. Different tokens.
- **Light / dark** = theme. **Quiet / accented / colorful** = expression. Different switches.
