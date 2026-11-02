# Button

Pill-shaped action. Deep Teal is the default action, Mel Green (`--brand`) is only for Mel-specific actions like Ask Mel.

**Markup:** `<button class="rds-btn rds-btn--{variant} rds-btn--{size}">`. Always set a variant.

| Variant | Use |
|---|---|
| `primary` | The one main action per surface (Send, Save, Start free trial) |
| `brand` | Mel-specific actions only (Ask Mel, Let Mel draft). Deep Teal text |
| `outline` | Secondary actions in product UI (Mel web `.w-btn--sec`, Share) |
| `strong` | Marketing secondary: 1.5px Deep Teal border (Brand · 08 Secondary) |
| `secondary` | Soft Cloud fill for low-emphasis actions |
| `ghost` / `link` | Tertiary actions; `link` is Green Text |
| `destructive` | Irreversible actions, always behind a confirm |
| `on-dark` | Outline on Deep Teal panels |

**Sizes:** `sm` 32px/13px (chat cards), default 36px/14px, `lg` 40px (New chat), `xl` 48px/16px and `2xl` 56px/17px (marketing). `icon` makes it square-round. Add `rds-btn--lift` on marketing for the hover lift.

**States:** hover darkens (Teal 2), press shrinks to .97 and goes Night, focus shows `shadow-focus` (3px white + mint ring), disabled fills `mel-line-soft`, loading swaps the icon for `.rds-spinner` and sets `aria-busy`.

- Do keep one `primary` per view; sentence case, verb first.
- Don't put Mel Green on non-Mel actions or use white text on it.
- Icon-only buttons need `aria-label`.
