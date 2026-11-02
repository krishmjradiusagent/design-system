Radius UI is the one system for every Radius and Mel surface: product UI, the Mel assistant web app, and marketing. Anatomy and foundations come from **shadcn/ui**; every colour, type style, radius and motion comes from the **Mel Brand Guidelines** and the shipped **Mel Assistant Web** screens. A design built from this system must read as the Mel assistant web app.

## Using the system

- Load `tokens.css`, then `components/bundle.css`, then `components/bundle.js`. Wrap UI in an element with class `rds` (or `body.rds-body`).
- Markup is plain HTML with `rds-` classes. `bundle.js` exposes `window.RadiusUI` and hydrates on load: `<i data-icon="send"></i>` becomes a Lucide icon, `<span class="rds-mel-mark" data-state="ready"></span>` becomes the Mel mark. Call `RadiusUI.init(el)` after inserting markup.
- Interaction is declarative: `data-rds-root` + `data-rds-trigger` (disclosures, menus, accordions), `data-rds-floating` (closes on outside click and Esc), `data-rds-open="#id"` / `data-rds-close` (overlays), `data-rds-single` (single-select groups), `RadiusUI.toast({title, description, variant})`.
- Use semantic tokens (`--primary`, `--muted-foreground`, `--border`) in product UI. Use `--mel-*` primitives only where the brand board names them (marks, icon tiles, gradients, dark panels).
- Light theme only. Mel brand is light-only today; there is no dark theme.

## Content fundamentals

- **Voice:** calm, confident, real-estate specific. Mel follows up, drafts, books and files; say what it did ("Replied to Jordan R. in 40s · Booked Saturday at 10:00").
- **Casing:** sentence case for buttons, titles, menus and nav. Uppercase only for `ui-label` / `brand-label` eyebrows and label pills ("MEET MEL · YOUR REAL ESTATE AI").
- **Person:** the agent is "you". Mel speaks in first person sparingly ("I drafted three posts for 12 Oak St.").
- **Plain words:** no "supercharge", "unleash", "effortless". No apology language, no exclamation marks.
- **Mel speaks in plain text.** Assistant turns have no bubble or card; only user turns get the Cloud bubble. Result objects (drafts, lists, forms) are cards under Mel's text.
- **Suggestions fill, never send.** A suggestion row (`↳ Make the caption shorter`) puts its text in the composer for the agent to edit.
- **No filler.** No invented stats, badges or emoji. Empty is a real empty state.
- **Numbers** use Mona Sans tabular figures (`.rds-num`), right-aligned in tables.

## Colour

Crisp white leads. Deep Teal carries the words, Mel Green signals Mel at work, tints are used sparingly. **No purple and no bright blue.**

| Role | Token | Use |
|---|---|---|
| Page | `background` = `mel-white` #FFFFFF | ~72% of every surface |
| Text | `foreground` = `mel-deep-teal` #0E2B30 | Headlines, body, primary buttons. 14.9:1 on white |
| Secondary text | `muted-foreground` = `mel-slate` #4A5E61 | 6.9:1 on white, 6.4:1 on Cloud |
| Tertiary text | `subtle-foreground` = `mel-slate-light` #7A8D90 | Placeholders, timestamps, `↳` glyphs only (3.5:1) |
| Action | `primary` Deep Teal → `primary-hover` Teal 2 → `primary-active` Night | Every default action |
| Mel action | `brand` = `mel-green` #12A867, Deep Teal text | Ask Mel and Mel-specific actions only |
| Accent words | `mel-green-text` #0B7A4D | Links, success, credits. 5.4:1 on white |
| Grounds | `mel-cloud` #F3F9F6 · `mel-mint-mist` #E2F5EA · `mel-sky-mist` #E8F1F6 | Sidebar and user bubble · selected / icon tiles · second soft card |
| Lines | `border` = `mel-line` #DCE8E4 · `mel-line-soft` #E6EEEB | All 1px borders · separators inside cards, disabled fills |
| Focus | `ring` = `mel-mint-ring` #5ED6A0 via `shadow-focus` | 3px white gap + 3px mint ring |
| Error | `destructive` = `mel-error` #B42318 | 6.6:1 on white |

- **Proportion:** white 72 · Cloud 6 · Deep Teal 14 · Mint Mist 4 · Mel Green 4.
- **Mel Green is never small text.** White on Mel Green is 3.1:1 (large text only); put Deep Teal on it (4.8:1).
- **Status** (from Mel web tones): `success`/`success-muted`, `warning` #9A5B00 / `warning-muted` #FDF1E1, `info` #1F5A7A / `info-muted` (Sky Mist), `danger`/`danger-muted`. Always pair status colour with a word or icon.
- **Tags:** `tone-teal`, `tone-terracotta`, `tone-iris`, `tone-plum`, `tone-sage` (`-bg` + `-fg`) for categorical labels. All pass 4.5:1.
- **Assistants:** six accents (`assistant-coral`, `-lagoon`, `-honey`, `-rose`, `-harbor`, `-cocoa`), each with `-pill` and `-text`. An accent colours only its own assistant's mark, pill and small highlights. Never body text, buttons or backgrounds; never two assistant colours in one place. Mel Green stays Mel's own.
- **Charts:** `chart-1`…`chart-5` are shadcn's default light palette (Mel has none). Label series directly.
- **On Deep Teal panels:** text white, secondary `mel-on-dark-text`, meta `mel-on-dark-muted`, outline buttons `mel-on-dark-line`, accents `mel-mint`.

## Gradients and pattern

- Gradients are soft light, never loud: `gradient-hero` (light hero), `gradient-morning` (cards, image placeholders), `gradient-mint-glow` (only behind the Ask box or the Mel mark), `gradient-deep-teal` (dark bands), `gradient-signal` (progress, tiny accents), `gradient-sky` (section transitions).
- Never set text on `gradient-signal` or the brightest part of a glow.
- One pattern: the 12px dot grid, `.rds-dots-bg` (1.4px dots, Deep Teal 12%). One per surface, faded or cropped. Never enlarge, recolour or layer it.

## Typography

**Mona Sans only**, variable 200–900, self-hosted (`fonts/MonaSans-VF.ttf`). Hubot Sans, Inter and serif display faces are retired.

- **Product** (`ui-*`): `ui-body` 14/20 is the default; `ui-chat` 16/24 for chat messages; `ui-body-lg` 15/22 for the composer; `ui-small` 13/18 medium for chips, small buttons and list rows; `ui-caption` 12/16 for meta (never body); `ui-label` 11px 600 uppercase +0.08em for section labels; headings `ui-h1` 30 → `ui-h4` 16, all 600.
- **Brand** (`brand-*`, marketing only): `brand-display` 96, `brand-h1` 64 and `brand-h2` 44 are set **light and open** (400/500, tracked −0.03em); `brand-body` 17/1.55; `brand-label` 12px 500 uppercase +1px.
- Weight and size carry hierarchy; colour does not. Buttons are 600.

## Spacing, size, radius, elevation

- **Spacing** is shadcn's 4px scale: `space-1` 4 … `space-6` 24 … `space-18` 72. Card padding `space-4`; chat column gap 22; page gutters `space-6`.
- **Controls:** `control-sm` 32 (chat cards), `control-md` 36 (default), `control-lg` 40 (New chat), `control-xl` 48 and `control-2xl` 56 (marketing).
- **Radius never one-size:** `radius-sm` 6 badges and kbd · `radius-md` 8 inputs, menu items · `radius-lg` 10 nav items, tiles · `radius-xl` 14 cards, popovers · `radius-2xl` 18 chat result cards, dialogs · `radius-3xl` 22 user bubble · `radius-4xl` 26 composer · `radius-full` every button, chip and pill.
- **Elevation is quiet:** borders do the work. `shadow-xs` inputs, `shadow-md` menus, `shadow-lg` dialogs, `shadow-composer` the chat box, `shadow-card-hover` / `shadow-button-hover` on marketing hover only.

## Motion

- **Mel ease** `cubic-bezier(0.2, 0.8, 0.2, 1)` (`--ease-mel`). Fast 150ms (hover, press, focus), base 240ms (icons, cards, swaps), reveal 360ms (panels, sheets).
- Press shrinks (`scale(.97)`); hover lifts only on marketing cards and buttons (`.rds-btn--lift`, `.rds-card--interactive`).
- **Mel is a living dot.** `rds-mel-mark` states: `idle` (float + soft ring, 3.2s), `ready` (ring 2.4s), `listening` (rings draw in), `thinking` (three dots step, 1.2s), `speaking` (voice bars, 0.9s), `done` (dot opens into a check), `attention` (Deep Teal shape, blinking mint dot), `offline` (grey, still). Sequence: Ready → Listening → Working → Speaking or Done → back to Ready after 2s.
- Reduced motion stops every animation; each state stays legible as a still frame.
- **Chat timings (Mel web):** send → first token 800ms (1400ms on a skill switch) → `Thinking…` shimmer (1.6s) → one trace step every 700ms (spinner 800ms → green check) → trace collapses to "Checked N things" as the reply starts → reply streams one word per 60ms → prompt rows rise 4px with an 80ms stagger. Action spinners stay at least 600ms before the check. Panels slide 16px over 360ms.
- All motion values are tokens: `easing`, `duration`, `movement` families (`--ease-*`, `--duration-*`, `--stagger-*`, `--move-*`, `--scale-*`). Never move anything more than 16px; no bounce, no overshoot. See the **MotionSystem** and **MelTrace** cards.

## Iconography

- **UI icons:** Lucide (shadcn's set), 24 grid, stroke 1.8, round caps (`RadiusUI.icon(name)` or `<i data-icon>`). 16px in controls, 18–20px in nav, 24px in empty states. Icons are `currentColor`: Deep Teal or Slate.
- **Brand icons:** every product icon lives inside the Mel shape: `.rds-icon-tile` with `data-glyph` (campaigns, design, crm, client-experience, documentation, compliance, commissions, calendar, voice, working, ask). Fill `mel-icon-tile`, glyph `mel-icon-ink`, 5px stroke at 120 grid. Use tiles in cards, empty states and menus of Mel products; use bare Lucide glyphs inside buttons, menus and tables.
- No emoji, no Unicode glyph icons (the `↳` suggestion marker is the one sanctioned glyph).

## Logo

- The Mel mark is the rounded shape with a living dot. Pair with the lowercase wordmark **mel** (Mona Sans 600, −0.045em) as `.rds-mel-lockup`. Never recolour, stretch, rotate or add effects; only assistant marks change the shape colour.
- Clear space: twice the dot's width. Minimum: lockup 80px wide, mark 16px; below 24px the dot stays still (`data-still`).

## Components

shadcn/ui's full set, plus agentic chat (AI Elements anatomy, Mel web design wins where both exist) and Mel identity components. Each component folder has a live preview and a guideline README.

- **Mel web wins:** buttons are pills; primary is Deep Teal; selected states use Mint Mist with a Mel Green stroke; checkboxes, radios, switches and sliders fill Mel Green; tabs are a pill segmented control.
- **Intentional additions** beyond shadcn: Mel mark, mascot, icon tile, assistant pill, skill pills, Ask box, app shell, and the agentic chat set (conversation, message, prompt input, suggestion, reasoning, chain of thought, tool, task, plan, queue, confirmation, sources, inline citation, code block, artifact, actions, branch, loader, shimmer, context, checkpoint, image) because Mel is an assistant product.
- **Mel chat cards** (from the 222 live Mel web boards): build results on the Mel card base (`.rds-mc`): Contact, Change, Draft, Follow-up, Ranked list, Import result — plus Sequence (campaigns), Question card, Package, Channel draft, Style picker, Confirm summary, Asset row and Brand preview. Facts go in the card, Mel's sentence goes above it, prompt rows go below it. One primary pill per card, always on the right.
- **Tables and panels:** small tables sit in the reply (≤5 rows); large tables get a header bar, a capped height and "Show all", and open in the 660px right panel (Table view). Generated pages (leaderboard, year to date) appear in chat as a Page card and open in the right panel with Share, Refresh and "Ask Mel about this page". Marketing pieces open in the Media viewer.

