Class prefix `.c-ai-chat-react`. Styles ship in `components/bundle.css`; load `c-ai-chat-react.css` alone only outside this system. No script.

This shared React composition uses the actual MIT-licensed beUI `Message` and `MessageContent` implementation from https://beui.dev/r/message.json. Original source is retained in `message.upstream.tsx.txt`; license is retained in `LICENSE`.

## Supported parts and states

- `Message`: `from="user" | "assistant"`, optional `animateIn`, reduced-motion handling, semantic article labels, trailing-edge entrance, inherited role context.
- `MessageContent`: role-aware alignment and composable content.
- Canonical Radius buttons, fields, cards, and typography remain external children; this component never replaces their styling.

## Adaptation

Select only these two primitives; unused bubble/scroller exports are removed. Imports resolve locally. Tailwind layout classes are replaced with equivalent `.c-ai-message` classes using existing Radius spacing. Message animation logic and comments are preserved. No new tokens are introduced. JSX uses the automatic React runtime.

## Prototype distribution

The MEL onboarding prototype vendors this shared source faithfully for an independently served static bundle. `high-fidelity/REUSE.md` records both source locations and asset hashes. React controls use canonical supported component classes rather than new visual equivalents.

## Verification

Build and synthetic DOM tests are performed in the MEL onboarding project. Rendered appearance and final visual approval remain with the designer.
