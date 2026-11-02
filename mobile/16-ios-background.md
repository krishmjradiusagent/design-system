# iOS background states

28 October 2026. Docs only: native iOS builds these with ActivityKit and WidgetKit. No HTML components ship for them. Source: Mel voice mode canvas, "Background states" boards.

## Rules
- iOS only. Android background states are not designed yet.
- Accent on the Mel mark only. Green `#12A867` on light surfaces, mint `#3DDC97` on the black island and in dark. No skill colours here.
- Mark motion follows 07 Mel in motion. Paused mark is static grey.
- End = `action-end` red with white icon. Open, Open chat, Try again = brand Accent button (Mel Green, Deep Teal label). Mute = outline on dark, secondary on light.
- Buttons here follow brand 08 Buttons: pill, 48px, Mona Sans 600 16px, padding 0 22px, mint focus ring.
- Prompt rows in widgets = `c-prompt-row` (tap = open chat with the prompt in the composer; never sends. KJ, 2 November 2026).
- Copy is placeholder until Biju signs it off.

## Dynamic Island
- **Compact, voice.** Mark left, live dot field (4 × 3 mint dots) right. Speak = ripple out, listen = ripple in, think = shimmer.
- **Compact, chat task.** Mark left, ring progress or a short label right ("Drafting", "Needs you" in mint, "Failed" in soft red).
- **Minimal.** Mark only, when another app shares the island.
- **Expanded.** Mark 40, title and subtitle, live caption (one line), a two-line draft preview, progress bar, actions: Mute, End (voice) or Open (task).
- Tap compact = expand. Tap away = collapse.

## Lock screen Live Activity
Same content as expanded, on theme glass (`blur 30px, saturate 160%`). Light: white glass, Deep Teal text. Dark: charcoal glass, white text.

## Widgets
- **Home small.** Mark, one line of status or a Talk button (Mel Green circle).
- **Home medium.** Ask pill with a voice button, plus one info line.
- **Home large.** Ask pill and up to five `c-prompt-row` suggestions; empty state when there is nothing to suggest.
- **Lock screen.** Circular (mark) and rectangular (mark + two lines). iOS renders these monochrome.

## Edge states
Voice ended (island shows "Voice ended", then hides), connection lost, task failed (Try again), needs you (attention mark + mint label), muted.

## Flow: leave the app mid-voice
Voice keeps running; island goes compact; returning to the app restores full voice. Ending from the island returns the chat with a voice divider.
