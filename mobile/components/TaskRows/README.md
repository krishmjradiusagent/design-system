Class prefix `.c-task-rows`. Styles ship in `components/bundle.css`; load `c-task-rows.css` alone only outside this system. Behaviour: `c-task-rows.js`.

## 1. Job
Show supplied task statuses and expandable details as one continuous, mobile-sized list.

## 2. Level
Reusable plain HTML/CSS/JavaScript component. It composes existing atoms; no new atom or visual token.

## 3. Source
User attachment: Library ID libfile_bc4f1be396b08191addd3c7e83e7d1f5, Pasted text(3).txt, 10,284 readable bytes. The React/Tailwind TaskRows behavior was translated to vanilla DOM. Latest user direction selects List only. Canonical geometry, typography and status colors replace source styling. Official Phosphor 2.1.7 regular Check, X, CaretDown and ArrowClockwise paths are embedded with MIT notice; the running ring is a data visualization, not a drawn icon.

Ownership: Radius UI Design System/components/c-task-rows/c-task-rows.{js,css,md} is the canonical component. Mobile distribution: mobile-design-system/Components/c-task-rows/. MEL consumer: high-fidelity/src/task-rows/. Sync canonical to mobile to consumer; never edit foundation copies or tokens.

## 4. Anatomy
Root: c-task-rows c-task-rows--list rm-card rm-card--list. Rows are continuous sections with token separators, without individual card surfaces.
Header: native button + rm-item, fixed 24px status column, flexible rm-item__body and canonical rm-item__chev.
Text: t-row-title, t-meta/t-secondary/t-num; status: rm-chip rm-chip--pill t-chip tone-success/danger.
Details: animated grid, fixed status-column rail, left labels and right metadata. Status and amount sit under the full-width title and wrap independently at 390px.

## 5. Variants
List is the only delivered presentation. Capsules/card presentation is intentionally absent per the latest explicit user requirement.

## 6. States
done, running, pending, failed; sequence is demo-capable pending. Empty rows produce an empty list. Long data wraps. Dynamic Type uses the inherited foundation roles. No working retry control is invented; failed retry glyph is decorative.

## 7. Tokens consumed
surface-card and radius-card via rm-card; card/list/row padding, chip geometry and tone slots via atoms. Component CSS consumes space-0-5/1/1-5/2/row-media/row-y, size-icon-tab/row, radius-pill/button, separator-on-card, focus-ring, text-secondary, chip-bg/fg. Local delay variables affect animation only.

## 8. Tone + expression
Inherited dark/light foundation. Quiet/accented/colorful share neutral surfaces; success/danger tones remain semantic in every expression. No new color family or font.

## 9. Behaviour
Import mountTaskRows(host, options), retain its API and destroy on unmount.
Options: rows [{key,label,amount,status,step?,details:[{label,meta}]}], labels {completed,failed,running,pending}, className, onToggleRow(key,open), onStateChange(state), demo (default false), state, reducedMotion.
Production callers supply done/running/pending/failed and update({rows}). sequence without demo remains pending. No runtime dependencies, network calls, task execution, retry action, or external side effect.

demo:true opts into the original once-only schedule: ticks at 600,1500,3900,5300,7700ms; tick5 is final. sequence pending before3900, failed3900–5300, then done. index auto-expands1500–3900 only absent manual override. running/done retain their statuses. The running ring is a rotating28% arc at1.1s; failed retry spins1.2s. Row entry450ms/stagger80, badge300ms, pill200ms, detail grid and chevron300ms, lines300ms/stagger120+j*100. Reduced motion snaps the scripted sequence to its final state and disables movement.

API: update(options), getState(), destroy(). State includes tick, startedAt and manualOpen. Timers use elapsed time when remounting, rather than replaying. Consumer history normalizes restored demo messages to tick5 and retains manual choices. destroy clears timers and media listener; repeated destroy is safe.

## 10. Platform
iOS44pt / Android48dp header targets come from rm-item and inherited --rm-hit. Native equivalent: disclosure button and nested status list. Only the inherited hit-area setting differs.

## 11. Accessibility
Native buttons provide Enter/Space behavior. aria-expanded and instance-unique aria-controls match inert/aria-hidden detail regions. Task labels, amounts and statuses form meaningful button labels. SVG and rail are decorative. No live-region spam. Supplied strings render through textContent.
Canonical tones/focus are reused; no rendered contrast, keyboard or mobile layout audit is claimed in this environment.

## 12. Do / Don't
Do pass real statuses for real tasks and persist state per message. Do destroy on removal. Do label any fixture as a simulation.
Do not imply external task/email execution or make the decorative retry glyph actionable. Do not override atom geometry or restart history animations.

## 13. Review
Token lint: Clean, two actual component files scanned (src paths are skipped by the canonical linter, so it ran on the identical staging distribution).
Source/timing/DOM regression tests and production build: see MEL tests/task-rows.test.cjs and task-rows-integration.test.cjs.
Browser matrix/rendered390px audit and user visual approval: pending; browser inventory was empty.
New tokens/atoms: none. Latest user authorizes mobile List and main chat; Assistants placement remains deferred.
