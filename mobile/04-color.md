# MEL color system

Source: `tokens/color.primitive.json` (brand palette) and `tokens/color.semantic.json` (product roles).
Components use semantic tokens only; never raw colors or tier-1 `--p-*` / `--accent-*` variables.

| Role | Light | Dark extension |
|---|---|---|
| Page | White #FFFFFF | #121414 |
| Card | Cloud #F3F9F6 | #1B1E1E |
| Raised / input | Cloud / Sky Mist | #252928 |
| Tile | Mint Mist #E2F5EA | #313635 |
| Main text | Deep Teal #0E2B30 | White #FFFFFF |
| Secondary text | Slate #4A5E61 | #C6CECC (tertiary #AEB8B5) |
| Primary action | Deep Teal + White | Mint #3DDC97 + Deep Teal |
| Accent / voice | Mel Green + Deep Teal | Mint #3DDC97 + Deep Teal |
| Info status | `#1A5C8E` on `#DCEBF6` | `#A9D4F5` on `#1E3441` |
| Link / MEL text | Green Text #0B7A4D | Mint #3DDC97 |
| Border | Line #DCE8E4 | #343A39 |

Dark neutrals are coordinated extensions, not claimed to be explicit brand-guide values.

Cards use `.rm-card`, `.rm-card--bordered`, or `.rm-card--outline` unchanged.
Buttons use `.rm-btn--primary`, `--secondary`, `--ghost`, `--accent`, or `--voice`.
Gold-named tokens/classes are compatibility aliases to green; new work should describe them by role.
Success uses mint/green. Info uses its own blue. Warning and danger preserve their semantic orange/red pairs.
Category tone aliases share the MEL ramp; labels/icons must distinguish categories.

## Dark palette N (neutral) — 15 October 2026
The dark column above is the approved palette. Page `#121414`; cards and sheets `#1B1E1E`; inputs and raised `#252928`; tiles `#313635`; borders `#343A39`; primary text `#FFFFFF`; secondary `#C6CECC`; tertiary `#AEB8B5`; Mel tint and chip fill `#1F2E28`; accent text `#3DDC97`; primary and voice action `#3DDC97` with a Deep Teal label (hover `#5ED6A0`, pressed `#12A867`); destructive text `#FCABAB`; card separators white at 8%. Light colors unchanged. It replaces dark Option A (all-teal surfaces).

## Icon category colours — 16 October 2026
Icon-only colours for `c-prompt-card`. Never for text, fills or status. Contrast on the page is at least 4.7:1 in light and 8:1 in dark.

| Token | Group | Light | Dark |
|---|---|---|---|
| `icon-reach` | Reach out (text, email) | `#1F6FB5` | `#7DB8F0` |
| `icon-clients` | Clients (status, family, inactive) | `#6558D3` | `#B3A9FF` |
| `icon-plan` | Plan (campaign, follow-up) | `#9A5B00` | `#F2B24C` |
| `icon-insight` | Insight (hot buyers) | `#C0481A` | `#FF9E73` |

All accent tone classes (sapphire, jade, gilded, terracotta, iris and the rest) resolve to the same mint tint and deep teal fill, so they cannot colour-code anything. Use these four tokens when an icon must carry a category.

## Switch thumb — 16 October 2026
`switch-thumb` is white (`#FFFFFF`) in light and dark. It is the thumb of `rm-switch`, not a label colour, so the rule against white on Mel Green does not apply to it.

## Mel chat and voice — 28 October 2026
| Token | Light | Dark | Use |
|---|---|---|---|
| `mel-mark` | `#12A867` | `#12A867` | Mark shape |
| `mel-mark-dot` | `#FFFFFF` | `#FFFFFF` | Living dot |
| `mel-mark-attention` / `-dot` | `#0E2B30` / `#3DDC97` | `#1E4D45` / `#3DDC97` | Needs you |
| `mel-mark-paused` / `-dot` | `#DCE8E4` / `#FFFFFF` | `#3A4542` / `#8A9894` | Paused |
| `mel-skill-crm` | `#0FA3B1` | same | pill `#D5F1F3`/`#0A5F68`, dark `#193638`/`#1DA9B6` |
| `mel-skill-marketing` | `#EE6A4C` | same | pill `#FDE6DF`/`#9A3418`, dark `#412C26`/`#EF7357` |
| `mel-skill-campaign` | `#E9A320` | same | pill `#FCEFD3`/`#7A5200`, dark `#40361E`/`#E9A320` |
| `mel-skill-client` | `#E0588A` | same | pill `#FBE2EB`/`#9A2351`, dark `#3E2831`/`#E46F9A` |
| `mel-skill-compliance` | `#4479B3` | same | pill `#E1EAF5`/`#244B78`, dark `#222E39`/`#7199C5` |
| `mel-skill-document` | `#9C6B4F` | same | pill `#F3E8E1`/`#6A3E26`, dark `#322C27`/`#B28C76` |
| `chat-surface-card` / `-input` / `-tile` / `chat-border` | `#F4F5F6` / `#EEF0F1` / `#E8EAEC` / `#DDE0E3` | palette N | Inside `.rm-chat` only |
| `action-end` / `-pressed` / `text-on-end` | `#B42318` / `#8F1C13` / `#FFFFFF` | same | End voice |
| `glass-float` | `rgba(247,250,249,.82)` | `rgba(32,36,35,.78)` | Floating nav, top buttons, bubble |
| `nav-active-bg` / `-fg` | `rgba(18,168,103,.14)` / `#0B7A4D` | `rgba(61,220,151,.16)` / `#3DDC97` | Active nav item |
| `voice-value-fg` | `#096B43` | `#3DDC97` | Speed value pill text in the voice sheet |
| `voice-*` | see tokens.json | | Status dot, caption dim (decorative, below 3:1 by design), ripple, settings selection |

Skill accents never colour text, buttons or backgrounds, and two skills never share one place.
