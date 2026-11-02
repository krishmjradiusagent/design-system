Class prefix `.c-streaming-text`. Styles ship in `components/bundle.css`; load `c-streaming-text.css` alone only outside this system. Behaviour: `c-streaming-text.js`.

Reusable vanilla DOM/JavaScript composition for MEL assistant answers. Canonical home: Radius UI Design System/components/c-streaming-text. Mobile-design-system/Components/c-streaming-text is a faithful consumer copy that supplies mobile foundations/build/radius.css. The MEL prototype's src/streaming-text.{js,css} distributes the same bytes. This component does not supply or change tokens, atoms, or shared control behavior.

## Anatomy and dependencies

Text body, trailing caret while incomplete, completion actions, optional source disclosure, optional follow-up buttons. Controls compose foundations/src/atoms.css: rm-btn + rm-btn--ghost + rm-btn--sm; citation links compose rm-chip; source rows compose rm-item and rm-item__body. Type roles are t-body, t-meta, t-caption and t-secondary. Container spacing uses space-2/space-3. No control dimensions, padding, typography, or color overrides.

## API

Import mountStreamingText(host, options). Returns update(callbacks/state) and idempotent destroy(). A React consumer only needs a ref, mount/cleanup effect, and callback bridge.

Options: text or content [{text,cite?}], sources [{name,domain,href,image}], followUps [string], stream (default false), busy, feedback ('like'|'dislike'|null), onDone, onProgress, onCopy(text), onRetry(), onFeedback(value), onFollowUp(text, index). The supplied cite:true placeholder selects the first source; numeric cite values support explicit zero-based source indices. Source word-token arrays use separating spaces; paragraph chunks with numeric citations preserve their exact whitespace. Citations only render for supplied metadata with an absolute HTTP(S) href; source preview links also reject other schemes. Images are optional data, not required by this layout. No external requests execute in this module.

Text and whitespace are emitted through safe text nodes. Each word token is added every 55ms. Citation tokens use the same stream clock. No blur effect, looping, fabricated citations or hardcoded source count. Citation entry: 250ms cubic-bezier(.23,1,.32,1); actions: 400ms opacity; follow-ups: 350ms cubic-bezier(.23,1,.32,1) fade-up, stagger 90ms; sources: 0fr/1fr and opacity, 300ms cubic-bezier(.23,1,.32,1).

Completion invokes onDone once for a stream, shows actions and enables inline citations. Restored messages use stream:false: immediate stable content and no onDone. destroy cancels timers and listeners without completion. Reduced motion completes immediately and disables decorative animation; a live media preference change also completes the stream.

All actions remain hidden until complete. Retry without a callback is disabled; busy disables retry/follow-ups. Sources start collapsed, aria-controls/expanded are synchronized, and collapsed source links are inert and removed from keyboard order. The body is hidden from accessibility during streaming; a status region announces composing and then the completed text once. The containing conversation must not be a word-by-word live region.

The application owns persistence, retry/follow-up local simulation, copy permission/errors, and scroll anchoring. onProgress must only scroll if the user stays near the bottom; the application's measured glass-header/dock clearance remains in effect.

## Evidence and limits — 10 October 2026

Implementation follows the parent-provided contract for Library Pasted text(2).txt (libfile_5acc3cf74d408191ad17d3003032e2e8). Library bytes were materialized locally and the complete source was read; readable size verified at 10,519 bytes. The authorized network-sandbox retry resolved the initial transfer failure. The attachment source is retained in the MEL checkout at .streaming-source/Pasted text(2).txt. The gallery's content and source domains were not imported.

Focused jsdom tests cover timing, completion once, cancellation, stable restored history, reduced motion, safe text/URLs, citation association, source count/disclosure, callbacks and trace sequence. App synthetic DOM tests cover existing composer, loader and rotated traces. Browser inventory was empty and the in-app browser was unavailable: 390×844 rendered review of streaming answers and light/dark/1.5× matrix remain pending. The user has approved the existing bottom glass; it is unchanged. No deployment or commit.
