Class prefix `.c-image-generation`. Styles ship in `components/bundle.css`; load `c-image-generation.css` alone only outside this system. Behaviour: `c-generated-assets.js, c-image-generation.js`.

Reusable HTML/CSS/JavaScript DOM and canvas compositions. No React, JSX, motion or icon runtime imports. The existing MEL StreamingAnswer lifecycle mounts the vanilla API; no new React component.

## Source and scope

Behavior source: user implementation handoff for Library `libfile_0c4dbb8bf6b8819191cc2975b17a283c`, Pasted text(5).txt, expected 12,404 bytes. Local materialization failed after one retry; original byte parity remains unverified. The parent subsequently supplied the complete source code directly in a delegated message, allowing direct algorithm/state/transition comparison. Source behavior verification is complete; no further download was attempted.

Layout reference: `references/image-generation/layout-reference.png`, Library `libfile_f64b31e74d348191bfb47f0258ce8543`, 203,502 bytes verified and visually inspected. Two separate asset cards, photo preview, footer title/download/send; mobile dark DS replaces reference palette.

New composition gap: existing mobile `Components/c-image-rail` has a 232×92 first-photo gallery button and 148×92 subsequent buttons, without generation status or asset footer. Its internals are preserved. This new shared composition uses existing atoms and semantic tokens.

Canonical ownership: Radius UI Design System `components/c-image-generation/`. Mobile distribution: mobile-design-system `Components/c-image-generation/`. Consumer: MEL `src/image-generation/`. JS, CSS, artwork template and this documentation are distributed faithfully.

## Canonical atoms and variants

Mobile source `/Users/radius/Desktop/Architect/Radius/mobile-design-system/foundations/src/atoms.css`: rm-card (default), rm-chip (default), rm-btn--secondary/--sm (retry), rm-btn--ghost/--sm (download and send). Typography t-body-strong, t-meta, t-caption, t-secondary; geometry and colors from the generated `foundations/build/radius.css`. No new visual tokens. Canonical retry active scale remains .97; the source's .96 would override the required DS interaction state.

Phosphor regular Check, WarningCircle, DownloadSimple and PaperPlaneTilt paths; MIT notice included. Dither mark is a 2×2 visualization, not a replacement icon.

## API

`mountImageGeneration(host, {state, src, alt, variant, photoSrc, demo, fail, reducedMotion, interactive, onState, onDone, onRetry})` returns `setState(state)`, explicit `startDemo(fail)`, `state`, `assetUrl`, and idempotent `destroy()`.

`mountGeneratedAssets(host, {states, demo, fail, reducedMotion, onState, onDone, onSendPreview})` composes Social post and Story cards; returns states and destroy(). Production consumers supply real states and assets and omit demo. No backend is included.

## States and interaction

Queued 450ms → generating 2,200ms → refining 1,000ms → complete. Explicit fail simulates error after generating. Retry starts a fresh successful local demo; no automatic error retry.

Canvas: centered edge-inclusive 10px lattice (ceil(width/10)+1 columns, ceil(height/10)+1 rows; centered offsets); DPR capped at 2; sinusoidal drift periods 1700/2100 and amplitudes .12/.1; pointer interpolation .16 inside/.045 outside; radius .38×minimum dimension; smoothstep p²(3−2p); displacement influence²×9; dot radius .65+influence×.85; alpha .17+influence×.72. Fine hover only (and interactive not false), passive pointer listener, no touch listener or scroll cancellation. Active-state changes retain pointer continuity. Reduced motion fixes the cluster at the exact center with follow=1 and no drift. Canvas foreground and opaque overlay background map to DS text-primary and surface-tile. ResizeObserver when animated; static window-resize redraw under reduced motion. Terminal/destroy releases animation resources. Reduced motion stops RAF, pointer work and observers; preference detection permits accessibility changes.

Media blur/saturation/opacity/scale: queued 4/.75/0/1.02; generating 3/.85/0/1.015; refining 1.5/.95/.62/1.005; complete 0/1/1/1; error 2/.5/.28/1. 400ms ease-out; overlay 1/1/.48/0/0; terminal fade 250ms. Status label simultaneous 150ms enter +4px/exit −4px; dither mark makes full 360° turns over 2.4s ease-in-out with .55 opacity on its middle two dots. Reduced motion removes transforms/filter animation and uses immediate opacity.

Preview reserves 1:1. Social post and Story are separate compact cards stacked one per row and left aligned with the assistant column, capped at 256px through mobile spacing tokens. No carousel or invented pagination threshold. Image art fills the card edge to edge; the parent clips to its canonical outer radius. Footer actions retain canonical card inset below the image. Artwork keeps its photo, copy, and fictional details. The gray dither surface appears during active generation; completed art covers it. Active progress and errors stay visible. Completion hides the entire visible status row, including icon and row spacing, while a visually hidden polite live region retains the announcement.

During generating, the image status row mounts the existing `mountMelDots(host, 'Generating asset')` component from `src/mel-dots.js`. Its shipped `src/mel-dots.css` styles preserve the shared 3×3 loader and reduced-motion behavior. No helper API change. The row aligns horizontally with the asset footer and uses the canonical compact card-inner gap. It is destroyed when generation advances or the component unmounts; the image-canvas dither keeps running independently over the preview.

## Local sample asset

Self-contained 1080×1080 SVG social graphics. Existing local house-1.jpg and house-2.jpg from canonical web assets are embedded as data URLs; code-native house illustration is the fallback. Fictional 123 Example Lane, sample property details and demo label are baked into the artwork. Download saves the SVG; send displays a local preview notice, never sends/publishes. This prototype does not claim live AI generation.

## MEL wiring and proof

Mobile chat trigger: `generate asset`, trimmed and case-insensitive. Also accepts `generateasset`, `please generate an asset`, and `generate asset for …`. Setup chat retains setup routing. Assets sit outside the assistant text bubble and before its external reply action row. Existing 4px action gap stays intact. General reply-phase visuals remain owned by the host; the generated asset card owns only its local image status.

Snapshots persist per reply. Completed/error history renders immediately. Reload and navigation discard unfinished demo replies; cleanup cancels timers, canvas frames, observers, photo fetch and handlers. The existing hi cycle, task rows, metrics and mascot are preserved. Mobile host only; desktop host remains text-based.

Verified: state progression, explicit error retry, reduced motion, canvas DPR/lifecycle, download dispatch, local send notice, cancellation, per-message history, main and marketing routing, host mount boundary, external cards/actions; full checkout suite 68 tests passed before the direct-source follow-up; focused follow-up 29 tests passed, including numeric source-algorithm assertions. Build and token lint passed. Browser inventory empty: no rendered 390px audit or user visual approval claimed.


## Direct-source fidelity review — 10 October 2026

Compared against the complete source supplied by the parent: five state names, all media blur/saturation/opacity/scale numbers, 400ms media/overlay transition, .48 refining overlay and 250ms exit, DPR cap, drift amplitudes/periods, pointer interpolation, influence/radius/displacement/dot alpha and radius, centered grid anchoring, reduced-motion center, full-turn 2.4s mark rotation, .55 middle-dot opacity, and simultaneous 150ms status transitions. Numeric canvas and lifecycle tests cover the corrected algorithm.

Intentional adaptations: framework-free lifecycle; DS controls, radii, typography, semantic colors and Phosphor icons instead of Tailwind/Lucide; DS retry .97 rather than source .96; DS mark dot radii/size; actual loaded resolution rather than default 1024; explicit demo status copy; two full-width external cards stacked one per row rather than the source's compact 208px single preview; stronger terminal cleanup and static reduced-motion resize redraw. The source imports EASE_OUT/EASE_IN_OUT/SPRING_PRESS without their definitions, so exact imported cubic-bezier/spring parity is unavailable; CSS ease-out/ease-in-out and canonical press behavior are retained. No exact rendered-pixel parity or browser visual audit is claimed.

Latest visual feedback: rm-card padding created a gray wrapper around the square artwork. The card container now has zero internal padding, clips to its canonical radius, and caps at 256px; footer controls carry canonical card inset. Footer-to-art gap is 8px: zero margin plus the DS compact card-pad token. Footer control hit areas retain their 44px targets. The photo and typography embedded in the SVG remain intact. Completion removes the entire visible status row; the screen-reader announcement stays available.
