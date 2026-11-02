# MEL — brand mark

28 October 2026. KJ approved replacing the eyes mascot with the Mel brand mark from the Mel Brand Guidelines (01 Logo, 07 Mel in motion, 10 Assistants). This supersedes the 15 October "eyes in every state" decision.

Use `.c-mel-mark` (see the MelMark component). The mark is the rounded shape with a living white dot at its centre. Copy the SVG exactly: never retype, redraw, stretch, rotate, recolor outside the tokens or add effects.

| State | What moves |
|---|---|
| idle | shape floats 4px, dot breathes, soft ring 13→30px, 3.2s |
| ready | stronger, quicker ring 13→34px, 2.4s |
| listening | three rings draw in 40→15px toward the dot, 1.8s, 0.6s stagger |
| thinking / working | three dots step, 1.2s, 0.15s stagger |
| speaking | five voice bars (10/26, 22/8, 30/14, 14/30, 10/20), 0.9s, 0.11s stagger |
| done | dot grows 13→22, settles at 20, check draws, then holds |
| attention / needs you | Deep Teal shape, mint dot blinks, badge pulses 11→13, 0.9s; use sparingly |
| paused / offline | static grey shape |

Sequence: Ready → Listening → Working → Speaking or Done; back to Ready after 2 seconds.
Easing: ease-in-out for loops, ease-out (0.2, 0.8, 0.2, 1) for one-time transitions.
State change (brand 09): only the centre cross-fades, scale 0.92→1, 240ms, Mel ease. The shape never moves on a change; the idle float is the resting loop (KJ, 28 October).
Reduced motion (brand 09): no movement; colour and opacity changes stay (cross-fade, attention blink). Each state is a still frame (dot, rings, three dots, bars, check).
Composer: on send the Mel icon next to Stop shows working dots, then a check, then hides after 2 seconds.
Voice: while speaking the mark grows with each word, up to 6%.

Sizes: inline 26, dock 40, hero 64, hero-large 76, nav 52 circle, voice 140 (96 with a card), bubble 48 inside 64.
Below 24px the dot stays still. One dock or hero mark per screen; the hero glow (`--glow`) only once.

Skills: the shape takes the skill accent (`mel-skill-*`), the dot stays white. MLS has no brand accent and uses Mel Green.

Give a visible text status when a state carries critical information; the mark alone is not a notification. Update `aria-label` when the state changes.

Compatibility: `.mel` markup still renders, now as the brand mark (shape plus a pulsing dot); its eyes and smile are hidden. New work uses `.c-mel-mark`.
