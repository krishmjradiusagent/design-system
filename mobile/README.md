Mobile (iOS and Android) design system for the Radius Office app, in the MEL brand. Authored in HTML, CSS and JS. Compose from what exists and never invent: if a token, class or component is not here, it does not exist. Where a rule is unclear, stop and ask KJ with a `Rec:` proposal. Locked decisions are in the Decisions section and cannot be changed by an agent.

## How to use it

- Link `components/bundle.css` for foundations and component styles. It is the shipped `radius.css` (tokens, type roles, tones, Mel, atoms) followed by each component's own CSS. Nothing else styles foundations.
- Themes switch with `data-theme="light"` or `data-theme="dark"` on `<html>` or any subtree. Expression is a separate switch: `data-expression="quiet | accented | colorful"`. Never confuse theme with expression.
- Every screen must work in dark and light, in all three expressions, at Dynamic Type 1.5×, with 44pt iOS and 48dp Android hit areas.
- Build from approved components first (`.c-*`), then atoms (`.rm-*`). Never restyle either, and never write inline overrides. A new need becomes a new component with a contract, and KJ approves it.
- Screen types: tab screen (large title, dock Mel), pushed page (back button, page title, no dock), sheet (grab handle, one primary action, never contains another sheet). One `.rm-screen` per view; section structure is `.rm-content` → `.rm-section` → `.rm-section-head` → one surface.
- State in every reply: screen type, template, expression, components reused, new components if any.

## Content fundamentals

- Sentence case everywhere. No ALL CAPS except the `eyebrow` style, one per card at most.
- Blunt, plain verbs. No apology words. No exclamation marks.
- A call to action names the result: "Send reminder", not "Submit".
- Money, counts and dates use a tabular role (`money-xl`, `money`, `money-sm`, `badge`) so digits align.
- Category is told by label and icon, never by hue alone.

## Visual foundations

**Color.** Use semantic tokens only: `bg-*`, `surface-*`, `text-*`, `action-*`, `status-*`, `border-*`, `separator-*`. Never use raw hex, the tier-1 `--p-*` variables, or the `accent-*` ramps directly in components.
- Light: `bg-page` white, `surface-card` Cloud `#f3f9f6`, `text-primary` Deep Teal, `text-secondary` Slate.
- Dark: `bg-page` `#121414`, cards and sheets `#1b1e1e` (`surface-card`), raised and inputs `#252928` (`surface-input`), `text-primary` white, accent text and primary action Mint `#3ddc97`. This is dark palette N (neutral), approved by KJ on 15 October 2026; do not change it without explicit instruction. Mel and assistant colours are the same in both themes.
- One primary action per screen: `action-primary`. Light is Deep Teal with a white `text-on-action` label (hover Teal 2, pressed Night), matching the brand kit. Dark is Mint with a Deep Teal label. White small text is never set on Mel Green. Voice and accent actions use `action-voice` (Mel Green in light, Mint in dark) with `text-on-voice`.
- Links and MEL text use `text-mel` / `text-accent` (Green Text on light).
- Info has its own blue (light `#1a5c8e` on `#dcebf6`, dark `#a9d4f5` on `#1e3441`); Running states use `tone-info`.
- Status uses `status-success`, `status-info`, `status-warning`, `status-danger` pairs (`-bg` with `-fg`). Warning and danger stay orange and red; they are the only non-brand hues. Status never signals a category and a category never signals status.
- Gold-, sapphire- and other family names (`text-gold`, `tint-gold-bg`, `accent-sapphire-*`) are compatibility aliases. They now resolve to the MEL green ramp; describe things by role, not by the old name.
- Black is banned in UI. It appears only as `overlay-scrim` and in shadows.
- Focus is a visible green outline (`focus-ring`) with a gap in the page color.

**Type.** Mona Sans for everything, including page titles and addresses. Set type only with the roles (`large-title` 28, `page-title` 20, `body` 15, `meta` 13, `caption` 12 and the rest of the scale); never set size, weight or line height by hand. 13px is the floor for meaningful text; 11–12 only for badge, chip and caption. Roles scale with the `--type-scale` multiplier, capped at 1.5.

**Spacing and shape.** Use the spacing scale and the named slots (`space-gutter` 16, `space-card-pad` 12, `space-section-gap` 24). Radius by role: `radius-badge` 6, `radius-input` 8, `radius-button` 10, `radius-tile` 10, `radius-metric` 12, `radius-card` 14, `radius-sheet` 22, `radius-pill` full.

**Cards and surfaces.** Cards are filled and borderless by default (`.rm-card`). Borders only through the `--bordered` and `--outline` variants. Gradients are allowed only where `gradient-*` tokens exist and are decorative: never behind body copy.

**Motion.** Brand timings are 150ms, 240ms and 360ms (`motion-fast`, `motion-base`, `motion-slow`). Reduced motion removes animation and keeps each state's static expression.

**Tone and expression.** Color a thing with `.tone-*` or `.role-*`, never by picking colors. `quiet` is the default; use `accented` for data-heavy screens and `colorful` only when asked. At most four accent families per screen, and never the same family on two neighbours. Status tones always show at every expression level.

## Mel

Mel is shown by the Mel brand mark: the rounded shape with a living white dot (approved by KJ, 28 October 2026; replaces the eyes mascot). Use `.c-mel-mark` with `data-state`; sizes inline 26, dock 40, hero 64, hero-large 76. One dock or hero mark per screen. Full rules in the Mel section and the MelMark component.
- States follow brand 07 Mel in motion: idle, ready, listening, thinking/working (three dots), speaking (bars), done (check), attention (Deep Teal, mint dot), paused (grey).
- Skills colour the shape only (`mel-skill-*`); the dot stays white.
- Give a visible text status when a state carries critical information; the mark alone is not a notification.
- Old `.mel` markup still renders, as the mark.

## Mel chat and voice

- Chat screens add `.rm-chat` (neutral grey surfaces in light). Mel replies are plain text in `.typeset.typeset-chat`; the user bubble is filled with no border.
- After a reply: `c-suggest` chips or `c-prompt-row` rows. Both fill the composer and never send. Working: `c-thinking` or `c-trace`.
- Footer: `c-chat-composer--compact` above the frosted `c-float-nav`.
- Voice: `c-voice` full screen, cards in the dock, `c-voice-sheet` settings, `c-voice-bubble` when minimised. End is `action-end` red.
- iOS Dynamic Island, Live Activity and widgets: see the iOS background section (docs only).

## Mel chat card protocol (Mel Chat Templates v0.2.1)

Every chat result card uses the template's JSON `type`, fields and states, shared with Radius UI (web). Mobile keeps its own look, navigation, and dark and light themes.

| Protocol state | Mobile names that map to it |
|---|---|
| draft | default, ready |
| working | running, generating, refining, uploading, queued, active, indeterminate, `data-running` |
| done | complete, uploaded, done |
| partial | (new) some parts failed |
| failed | error, cancelled |
| stale | (new) data is out of date |

- **Action styles:** primary `rm-btn--primary` · secondary `rm-btn--secondary` · link `rm-btn--link` · danger `rm-btn--danger`.
- **Tones:** success · warning · danger · info · neutral (`status-*` pairs; neutral = `surface-tile` with `text-secondary`).
- **Replace by id:** a later card with the same `data.id` replaces the earlier one in place.
- **Suggestions fill the composer and never send.**
- **Mobile is not web.** No side panels and no popovers on mobile:
  - The web right panel becomes a pushed page.
  - Popovers and menus (share and the like) become a bottom sheet.
  - The media viewer becomes the full-screen `c-gallery`.
  - Table view becomes a pushed page.
  - Question and picker cards stay inline in chat; a long picker opens a sheet.
- **Header row + full-width body (KJ rule, 2 November 2026).** Any card with a caption and a body uses this layout:
  - Row 1: icon tile + caption (`t-meta`, secondary) + chevron on the right when the whole card is a tap.
  - Below, full width from the card's left edge, not indented under the caption: title (`t-body-strong`), then text (2-line clamp for previews).
  - No chevron when the card has its own buttons (Send, Post, Publish); those stay at the foot.
  - One-line pointers (client_card, link rows) stay a single row.
  - Markup: `.m-note` > `.m-note__head` (`.rm-tile` + `.m-note__cap` + `.m-link__go`) + `.m-note__body`. Live in client_note_card, offer_card, message_draft_card.

## Iconography

Phosphor only: `ph` regular for all icons, `ph-fill` for the active tab only. No emoji. No hand-drawn SVG icons. The Mel mark is brand artwork, not a generic icon. No logo files are part of this source.

## Platform

Brand atoms (cards, buttons, chips, metrics, Mel) are identical on iOS and Android. Navigation and system controls follow the platform: iOS uses the dock, glass back button and sheet detents; Android uses the `M3Navbar` and `M3Topbar` components (M3), the system back and M3 controls. Set `data-platform="android"` to swap them and to get 48dp targets.

## Not synced

Not brought in: the motion easing curve beyond the three durations, gradients that depend on runtime variables (`gradient-atmosphere-bubble`), the React `AiChatReact` source (README and CSS only), the JS-driven components with no static page (listed with a README and no preview), the `_demo` screens, the harness, scripts, lint and tests. `tokens.json`, `bundle.css` and docs 01 and 04 follow dark palette N. The source `color.semantic.json` in the local folder still holds dark Option A until it is updated separately.
