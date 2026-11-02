# MEL brand migration — 15 October 2026

## Approved scope
Entire shared mobile system; no delegation. Approved guideline silhouette with
our eyes in every state; brand light plus coordinated dark; Mona Sans throughout.
Source: `/Users/radius/Downloads/Mel Brand Guidelines (3).html`.

## Before → after
- Neutral gray backgrounds → white/cloud light surfaces and night/teal dark surfaces.
- Gold primary action → flat Deep Teal (light) / Mint (dark, palette N).
- Blue voice action → Mel Green with Deep Teal label (Mint in dark).
- Rose glossy mascot → exact flat brand silhouette with expressive eyes.
- Mona + Hubot → Mona only, locally bundled font.
- Multicolor category families → compatible names mapped to MEL ramp.
- 120/180/260ms motion → 150/240/360ms brand timings.
- Spacing, card geometry, control sizes and existing mobile type sizes retained.

## Added shared capabilities
- Brand primitive palette, coordinated surface and action semantics.
- Primary hover/pressed tokens and `.rm-btn--accent` variant.
- Hero wash / Morning gradient tokens.
- Eight eye states with legacy state aliases and reduced-motion support.
- `preview/mel-brand.html` for a focused two-theme review.

## Boundaries
Warning/error colors remain functional exceptions. Dark shades beyond the named
brand palette are derived product values. Existing old class/token names remain
compatibility aliases; do not interpret `gold` or `sapphire` literally.

The canonical implementation is this mobile system's `foundations/src/` and
`tokens/`, reused by `Components/`. The older web Button source was inspected for
reference; web CSS was not mixed into mobile.

Historical project folders and other projects' vendored copies are unchanged.
Onboarding adoption is a separate consumer update; it must remove conflicting
local green/glossy overrides when it adopts this new shared distribution.

## Review
Open `preview/mel-brand.html` for light/dark mascot, cards, actions, input and
status examples. This preview uses shared atoms, not parallel control styling.
Final visual approval belongs to the user.
