# Current decisions — MEL mobile system

## Dark palette N (neutral) — user approval, 15 October 2026
- Page: `#121414`.
- Cards and sheets (default and bordered): `#1B1E1E`.
- Inputs, composer and raised controls: `#252928`.
- Tiles: `#313635`. Card borders: `#343A39`.
- Text: primary White `#FFFFFF`; secondary `#C6CECC`; tertiary `#AEB8B5`.
- Accent text and links: Mint `#3DDC97`.
- Primary and voice action: Mint `#3DDC97` with a Deep Teal `#0E2B30` label. Hover `#5ED6A0`, pressed Mel Green `#12A867` (unchanged).
- Mel tint and chip fill: `#1F2E28`.
- Info status has its own blue: light `#1A5C8E` on `#DCEBF6`, dark `#A9D4F5` on `#1E3441`. Success stays mint and green. Running states use `tone-info`.
- Destructive text and icons: `#FCABAB`, with a Deep Teal label when on a filled badge.
- In-card separators: white at 8% opacity.
- Mel and assistant identity colours, with the white dot, are the same in both themes.
- Neutral charcoal surfaces are a coordinated extension, not brand-kit values; the kit defines no dark mode. Teal and Mint appear only on actions, Mel and chips. Replaces dark Option A (all-teal surfaces), which was rejected for depth and look.
- Contrast: 0 failures against WCAG 2 AA and APCA Lc 60 across 688 audited dark elements and 688 light elements in 68 previewed components (quiet expression). Lowest ratio 4.53:1. Decorative back layers of the story stack (aria-hidden, partly transparent) are not scored.
- Icon category colours, approved by KJ on 16 October 2026 for `c-prompt-card` icons only: `icon-reach` `#1F6FB5` / `#7DB8F0`, `icon-clients` `#6558D3` / `#B3A9FF`, `icon-plan` `#9A5B00` / `#F2B24C`, `icon-insight` `#C0481A` / `#FF9E73` (light / dark). Never for text, fills or status. Every accent tone class still resolves to the same mint, so these four tokens are the only category colours.
- No further palette changes without explicit user instruction.
- Light theme, mascot, accents, typography and geometry remain unchanged.

15 October 2026. User approved migrating the entire mobile system to the supplied
`/Users/radius/Downloads/Mel Brand Guidelines (3).html`, with **eyes for every mascot
state**, **light + coordinated dark**, and **Mona Sans only**. This supersedes the
previous gold/rose, Hubot, neutral-black and bright-blue identity. Final visual
approval remains with the user. No delegation used.

## Shared implementation
- Tokens JSON is the source; regenerate `build/` with `scripts/build-tokens.mjs`.
- Keep `rm-*`, `.mel`, `.tone-*`, and `build/radius.css` APIs compatible.
- Components consume semantic tokens; pages compose components without overrides.
- Entire active shared system receives the brand. Historical `Pre-design system projects/` stays read-only.
- Copied vendor bundles in other projects are separate distributions; this migration does not silently publish or overwrite them.

## Brand and themes
- Light default: White page, Cloud cards, Deep Teal text/actions, Slate secondary text, mint/sky accents.
- Dark: palette N (see the dark palette section above). Neutral charcoal page, cards and raised surfaces, White primary text, Mint primary actions with Deep Teal labels.
- Brand greens: Mel Green for identity/accent actions; Green Text for links on light. White small text is not used on Mel Green actions.
- Warning and danger remain orange/red semantic exceptions, never decorative hues.
- Category hues use the MEL ramp; distinguish categories by labels and icons. Old family names remain compatibility aliases.
- Legacy `gold` tokens/classes now resolve to MEL green; they no longer mean literal gold.
- One primary action per screen. Accent/voice actions use green with Deep Teal text.
- Focus uses a visible green/mint outline with a page-color separation gap.
- Black remains limited to scrims/shadows.

## Typography and layout
- Mona Sans for all UI, including page titles and addresses. Display alias points to Mona.
- Existing mobile type sizes remain: large title 28, page title 20, body 15, meta 13, caption 12.
- Existing spacing remains: gutter 16, card padding 12, section gap 24.
- Pill buttons retain native mobile geometry; do not apply marketing-page type scales to mobile controls.
- Cards are filled and borderless by default; bordered and outline variants remain.
- Dynamic Type up to 1.5; iOS 44pt / Android 48dp hit targets.
- iOS and Android navigation/system-control behavior stays platform-specific.
- Phosphor icons remain canonical. Brand mascot artwork is not a generic icon.

## Mascot (superseded on 28 October 2026 by the Mel mark, see "Mel chat and voice update")
- Exact approved asymmetric silhouette; flat Mel Green; original arched eyes in white.
- Every state uses eyes: idle, ready, listening, working/thinking, speaking, done, attention/heads-up, paused/offline.
- Done uses smiling eyes, never a check. Working uses gaze movement, never a dot loader.
- Body remains stationary. Reduced motion keeps meaningful static expressions.
- Existing inline/dock/hero sizing and external footprint remain compatible.

## Behavior preserved
- No navigation, business rules, event handlers, or product flow changes.
- Esc closes only the topmost layer.
- Do not mix old web `_ds/` CSS into this mobile system.
- Native developers consume tokens and equivalent platform semantics; HTML is a reference implementation.
- Switch, alert and text area approved by KJ on 16 October 2026: `rm-switch` (iOS and Android), `c-alert` (inline banner in four status tones, plus a confirm dialog with a filled red destructive button) and `c-text-area` (field, error, auto-grow composer, Save and Cancel footer). New token `switch-thumb`, white in both themes. Rules from KJ: hint and subtext stay on one line, the count never wraps, toasts size to their text. Fixed `c-toast` so it no longer wraps at half width. The only audit rows under 4.5:1 in the new previews are the disabled Save button, which WCAG exempts.
- `c-chat-composer` approved by KJ on 16 October 2026, lifted from the Mel app composer. Empty: plus on the left, mic and Speak on the right. Typing: plus, mic and Speak hide and only the send arrow shows. Plus and mic use a neutral tint (`text-primary` at 10% over `surface-input`), never mint. Audit note: light-mode Speak (`rm-btn--voice`, Deep Teal on `action-voice`) measures 4.8:1 WCAG but APCA Lc 43, below the Lc 60 bar. It is the existing voice button colour, so it is unchanged and open for KJ to decide.
- `c-radio` and `c-dupe-row` approved by KJ on 16 October 2026 for the contact import duplicate step. Choices are `skip`, `update` (Update existing) and `both` (Keep both). Design: a "For all" `c-radio` group sets every row with `cDupeRow.setAll`, and a review list of `c-dupe-row` rows lets the agent override one row through a `c-menu` chip. `c-dupe-row.js` needs `c-menu.js`. Interaction tested in a browser: chip opens the menu, choice updates label and `data-choice`, `c-dupe-row:change` fires, Esc and arrows work, native radio arrow keys work. The only rows under 4.5:1 are disabled text. `c-progress`, `c-map-row` and `c-data-preview` followed the same day (next item).
- `c-progress` (steps and bar), `c-map-row` and `c-data-preview` approved by KJ on 16 October 2026 for the contact import flow. Choices: progress = segmented flow bar plus a count bar; map row = stacked file column, example and field picker through `c-menu`; data preview = one sample row at a time with Previous and Next. Each ships a script (`c-progress.js`, `c-map-row.js`, `c-data-preview.js`), all tested in a browser: step and bar updates, indeterminate state, one-field-once menu locking, unresolved count gating Continue, Esc and focus return, arrow keys on the preview. The only rows under 4.5:1 are disabled text.

## Mel chat and voice update — KJ approval, 28 October 2026
Sources: Assistants mobile canvas, Mel voice mode canvas, Mel Brand Guidelines (Copy). Supersedes the canvas-only CSS ("pending DS decision") in both canvases.
- **Mel mark replaces the eyes mascot.** Brand shape + living white dot, states from 07 Mel in motion (done = check, working = three dots, speaking = bars). `.mel` stays as a compatibility alias and renders the mark. Supersedes the 15 October mascot rules.
- **Skill accents = brand 10 Assistants values.** Marketing Coral `#EE6A4C`, CRM Lagoon `#0FA3B1`, Campaign Honey `#E9A320`, Client Rose `#E0588A`, Compliance Harbor `#4479B3`, Documentation Cocoa `#9C6B4F`. Mark and pill only. MLS has no brand accent and uses Mel Green. The canvas amber values (MLS `#E9A320`, Campaign `#DFA641`) were not taken. Old `mel-assistant-*` tokens alias the new accents.
- **Dark skill pills are derived:** accent at 18% over `#1B1E1E`, text lightened to pass 4.5:1. All six pass (lowest 4.50:1, Marketing).
- **Chat-only neutral grey surfaces in light** (`.rm-chat`, v102). Dark unchanged.
- **Chat messages.** Mel replies are plain text in `typeset-chat` (16px, 1.6; 1.7 in dark). User bubble filled, no border.
- **New components:** MelMark, MelSkillPill, MelChat rules, Trace and thinking, PromptRow, Suggest, FloatNav, SkillPills, CodeBoxes, Voice, VoiceCards, VoiceSheet, VoiceBubble.
- **Composer.** One composer: `c-chat-composer` gains `--compact` and a generating state with Stop. `c-mobile-composer` is not added.
- **Footer.** Voice canvas wins: nav floats as frosted glass (`c-float-nav`), composer solid, chat scrolls under. The flat no-blur footer from the Assistants canvas is not added.
- **Prompt cards** stay for onboarding; Mel chat uses prompt rows or suggest chips. Both fill the composer (changed 2 November 2026).
- **Voice End** is `action-end` `#B42318` with a white icon, both themes. Drop-to-end target stays neutral.
- **iOS background states** (Dynamic Island, Live Activity, widgets) are documented only (16-ios-background).
- **Not taken:** voice concepts B (aurora) and C (wave line), the minimised pill (replaced by the bubble), placeholder voice copy (waits for Biju).
- **Contrast.** 0 fails in the 14 new and changed previews. Two items decided by KJ on 28 October 2026: unspoken caption words in voice stay faint by design (light 1.78:1, dark 2.32:1; the lit words carry the meaning, decorative); the voice sheet speed value text darkened to `#096B43` in light (new token `voice-value-fg`, now passes 4.5:1).

## Mel motion aligned to the brand — KJ approval, 28 October 2026
Checked against Mel Brand Guidelines 07 Mel in motion and 09 Motion & interactions.
- State changes cross-fade the centre only: 240ms, scale 0.92→1, Mel ease. Every centre layer stays in the markup.
- Listening: three rings, 0.6s stagger. Speaking: the five brand bar ranges. Done: dot grows 13→22→20 before the check. Needs you: badge pulses 11→13.
- Reduced motion keeps colour and opacity changes (cross-fade, attention blink), stops all movement.
- Composer shows the Mel icon on send: working dots, then a check.
- Voice mark grows up to 6% with each spoken word (script-driven).
- Brand conflict settled: 07 idle float stays; 09 "shape never moves" applies to state changes.
- Voice canvas: concepts B and C removed; A is the approved voice background.

## Mel Chat Templates alignment — KJ approval, 2 November 2026
Source: Mel Chat Templates v0.2.1 (source of truth for iOS, Android, web, backend). Small fixes only; mobile look, navigation and dark/light themes unchanged.
- **Suggestions fill, never send.** `c-suggest`, `c-prompt-row`, `c-skill-pills`, InsightCards follow-ups and widget rows put the text in the composer.
- **Names.** Prompt style `--destructive` (alias `--danger`); toast `--danger` (alias `--error`); new button styles `rm-btn--link` and `rm-btn--danger`, both on semantic tokens, so light and dark follow.
- **Trace copy.** "Thinking…" before the first step; done summary "Checked N things".
- **Card protocol.** States draft | working | done | partial | failed | stale; old component state names stay as aliases (table in README). Cards replace by `data.id`.
- **Web → mobile patterns.** Mobile never uses web side panels or popovers. Right panel → pushed page. Popover, menu, share menu → bottom sheet. Media viewer → full-screen `c-gallery`. Table view → pushed page. Question and picker cards stay inline in chat; long pickers open a sheet.
- **Header row + full-width body.** Cards with a caption and a body: icon + caption (+ chevron if the card is a tap) in one row; title and text full width below, starting at the card edge. No chevron when the card has its own buttons. Applied to client_note_card, offer_card, message_draft_card; rule for all new cards.
