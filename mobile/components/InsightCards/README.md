Class prefix `.c-insight-cards`. Styles ship in `components/bundle.css`; load `c-insight-cards.css` alone only outside this system. Behaviour: `c-insight-cards.js`.

## Job and level
Reusable vanilla HTML/CSS/JavaScript composition for comparison, anomaly and allocation insights in a manually operated carousel. React is an optional mount/cleanup/callback adapter, not the renderer. No runtime dependencies, timers, requests or external operations.

## Source and ownership
User attachment: `libfile_93cd4b3d539c81919953b721c01f930c`, `Pasted text(4).txt`, 20,200 readable bytes, materialized and fully read in this executor. Source behavior is a manual wraparound carousel; its autoplay comment has no corresponding autoplay code. The anomaly is a line chart, despite its bars comment.

Canonical: `/Users/radius/Desktop/Design OS/Radius UI Design System/components/c-insight-cards/c-insight-cards.{js,css,md}`. Faithful mobile distribution: `/Users/radius/Desktop/Architect/Radius/mobile-design-system/Components/c-insight-cards/`. Consumer: `high-fidelity/src/metrics/`. Sync canonical → mobile → consumer. Consumer demo data and React adapter remain separate.

## Anatomy and Radius dependencies
`c-insights` section with a quiet canonical card separator above the `Insights` heading, dynamic compact `rm-chip--pill` page count, Previous/Next controls, prose, metric card and follow-up. Space-3 above and space-2 below the one-pixel `separator-on-card` line separate it from the reply and badge. The count exposes an accessible “N of M insights” label; no visible sample-data label is added. Pager chevrons and all three follow-up labels use the canonical `t-gold` text token. Gold is set on the chevron itself and a text span inside each follow-up, so canonical ghost/secondary button colors and surfaces stay intact. Cards compose `rm-metric--bordered`, `rm-card--bordered`, `rm-btn--ghost/secondary/--sm`, and `rm-segmented` from mobile `foundations/src/atoms.css`. Typography uses `t-row-title`, `t-money`, `t-caption`, `t-meta`, `t-secondary`, `t-tertiary`, `t-num`. Metric values use canonical `rm-metric__value`. Controls retain canonical geometry and states. The shared mobile foundation is the documented mobile distribution of Radius controls; web and mobile foundations remain separate (`REUSE.md`).

## Variants
- `compare`: two or more supplied line series, latest values, deltas against first measurement, dated cursor tooltips, legends and data summary.
- `anomaly`: selected metric line, numeric review threshold, latest value, delta against supplied baseline, canonical segmented tabs and summary.
- `allocation`: listing total, proportional count-based bar, selectable canonical button legends, selected count/share/details. The noninteractive bar avoids tiny segment touch targets; the legend is the selection control.

## Data contract
`mountInsightCards(host, {pages, title?, state?, onStateChange?, onFollowUp?})` returns `{update(options), getState(), destroy()}`. Pages have `{key, title, prose, followUp?, followUpLabel?}` and their variant data:

Comparison: `series: [{name, values: number[], dates: string[], unit: 'percent'|'USD'|string, tone: 'info'|'warning'|'success'|'danger'}]`.
Anomaly: `metrics: [{key, name, values, dates, unit, threshold: number, baseline: number}]`.
Allocation: `segments: [{key, name, value: nonnegative count, tone, detail}]`.

Supply aligned dated observations to comparison series. Missing date labels become `Snapshot N`, never fabricated dates. Nonfinite measurements are excluded; empty data shows an explicit empty message, one observation shows a point, flat data receives a nonzero y-domain. Allocation ignores negative/nonfinite counts and derives shares from counts; all-zero totals show zero shares. Supplied strings use `textContent`. Follow-up labels should be short enough for the canonical compact button; a separate prompt can retain full intent.

## Interpolation and fidelity
SVG viewBox320×166 follows the source's166px chart at320px width and scales responsively. Comparison retains nine samples per segment but uses monotone cubic Hermite rather than overshooting Catmull-Rom. This preserves smoothness without inventing maxima/minima. The visible notice distinguishes the visual guide from measured observations; cursor/tooltips snap to actual dated observations, not interpolated estimates. Anomaly remains a straight trend line with grid and threshold. No canvas chart-window expiry or wall-clock-dependent data.

## Tokens and expression
Existing surface-input/raised/card, radius-button/pill/metric/card, semantic status info/warning/success/danger foregrounds, separator-on-card, focus-ring, spacing and control-size tokens only. No new tokens, raw colors, fonts, gradients, or atom style overrides. Foundation controls support existing themes/expressions; graph colors are semantic and update through CSS without a theme observer.

## Interaction and state
Carousel is manual, wraps, shows current/total, disables navigation for fewer than two pages, and restores keyboard focus after navigation without programmatically forcing pointer focus onto recreated controls. Mouse/touch pointer inspection, pointer capture, pan-y touch scrolling; keyboard Left/Right/Home/End/Escape as an alternative. Tooltip labels include series, date and units, clamp inside the chart, and recompute on ResizeObserver changes. Metric tabs support roving tabindex/arrow keys, unique controls/panel IDs. Legends are native pressed buttons. State stores page, metric, selected segment and measured cursor indices per page; no expiry. destroy removes every event listener and observer and is idempotent.

## Accessibility and motion
Native buttons, labelled chart keyboard group, live inspected values, tab/panel semantics, allocation summary and expandable full dated data summary. All animation/transition is disabled under reduced motion; no animation or autoplay is introduced. No live business claims. Fixed consumer fixtures label all data and thresholds simulated.

## MEL integration and triggers
Mobile main and assistant chat: `show metrics` / `show insights` display all3. Compare/comparison/neighborhood with listing/price/metrics terms selects comparison; spend/leads/anomaly selects anomaly; pipeline/allocation or Active→Pending→Closed selects allocation. Setup and unrelated prompts show no metrics. Specific examples: `Compare neighborhood listing metrics`, `Review listing marketing spend and leads`, `Review Active Pending Closed pipeline allocation`.

The existing send path retains loader2000ms → trace800ms → streamed reply; cards appear when streaming completes. `metrics-state` persists per-message selection and carousel state; restored replies are stable. Follow-ups fill the composer with the full prompt; they never send (KJ, 2 November 2026). TaskRows remains exact `show tasks` in main chat. Approved glass, shortcuts, Speak and current header are preserved.

## Platform and verification
Foundation rm-btn hit areas and segmented controls are reused; segmented buttons compose canonical rm-btn--sm for the standard44/48px hit pseudo-element, with a44/48px outer control row. Pager wrappers reserve separate44/48px footprints to avoid overlapping targets. Synthetic DOM tests cover all variants, bounded smoothing, empty/single/flat, clamp/scrub/keyboard, toggle, selection, callback, restore, cleanup, safe text, routing, cancellation and App lifecycle. Canonical token lint scans actual component files via the staging copy (the linter skips `src/`). Production build and full regression results are recorded in MEL `REUSE.md`.

390×844 rendered browser audit and user visual approval remain pending; browser inventory was empty. No authentication, live data, external AI execution, commit, push, publishing or deployment.

## Visual feedback correction — 10 October 2026

The prior visual audit failed. User screenshot `libfile_da00682cfd5c8191bcb096d01a832e24` was materialized locally as `.metrics-source/metrics-review.png` (93,826 readable bytes) and viewed. Confirmed deviations: carousel/card titles had equal15px/600 emphasis, body-sized prose competed with the visualization, the metric switch stretched full-width, threshold copy crowded the control/plot, and pager angle text glyphs received a scripted focus ring after pointer navigation. Token lint did not establish visual acceptance.

| Element | Before at type-scale1 | After at type-scale1 |
| --- | --- | --- |
| Carousel heading | t-row-title:Mona Sans15px,600,line1.3,primary | t-meta:Mona Sans13px,500,line1.25,secondary |
| Count / sample label | Plain count within strong heading;visible “Sample data” label | Canonical rm-chip--pill:t-caption12px;dynamic `N / M`;label removed;accessible “N of M insights” |
| Reply boundary | No divider between streamed reply and insight panel | separator-on-card one-pixel rule;space-3 before and space-2 after;count remains separate |
| Insight prose | t-body:Mona Sans15px,400,line1.35,primary;multiple sentences | t-meta:Mona Sans13px,500,line1.25,secondary;one short sentence |
| Card title | t-row-title15px/600,line1.3 | Same canonical type role;one card title;anomaly title and toggle share a wrapping toolbar |
| Metric amount | t-page-title:Mona Sans20px,600,line1.4 | rm-metric__value+t-money:Mona Sans24px,700,line1.15;separate12px label |
| Threshold | t-meta13px/500 above plot | t-caption12px/500 below plot/date axis;weekly context retained |
| Internal flow | space-card-inner4px on card | space-2=8px on inner composition wrapper;canonical rm-metric gap/padding unchanged |
| Card inset | space-card-pad12px | Same canonical12px;control geometry untouched |
| Pager / follow-up labels | caption-sized angle characters;neutral pager/follow-up text;forced focus after every click | Official Phosphor2.1.7 regularCaretLeft/Right SVG,size-icon-row16px,canonical t-gold on transparent button;all3 follow-up labels t-gold on existing neutral secondary fills;keyboard-only restoration |
| Pager targets | Compact buttons with unreserved44px hit extensions | Separate rm-hit footprints44px iOS/48px Android;space-1=4px between wrappers |
| Metric selector | rm-segmented full card width | Intrinsic-width rm-segmented inside44/48px control wrapper;buttons compose rm-btn--sm hit areas |

All values above come from `mobile-design-system/foundations/build/radius.css`, generated from existing atoms and typography; font-size remains Dynamic Type-aware. Specific canonical examples inspected: `Components/c-quick-metrics/c-quick-metrics.{css,html}` (caption labels and rm-metric__value numeric roles), `foundations/src/atoms.css` (rm-metric,rm-btn,rm-segmented), and `foundations/build/radius.css` (actual type roles,focus rules,sizes). Icons copy exact regular paths from `@phosphor-icons/react/dist/defs/CaretLeft.es.js` and `CaretRight.es.js`;MIT notice is preserved in PHOSPHOR-LICENSE alongside each shared distribution. No new token or shared-control behavior change.

Short fixture summaries avoid repeated simulation paragraphs. The upstream chat response still identifies the values as simulated;the card adds no visible sample-data label. Comparison guide notes remain visible;full dated data and interpolation explanation stay in the disclosure. Geometry,dates,values,threshold math,manual carousel and pointer/keyboard interaction remain unchanged. Shared main.jsx/flow.js were not edited for these visual updates. The longer streamed-reply disclaimer lives in flow.js and remains under its current owner.

Verification:11 focused metrics tests cover the App lifecycle, canonical dynamic chip, removed visible sample label, gold chevrons and follow-ups, neutral secondary fills, and reply separator;production build passed. These are source and synthetic DOM checks. The browser tool returned“Browser is not available:iab”;no390px revised rendered audit or user visual acceptance is claimed.
