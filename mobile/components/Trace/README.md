# Trace and thinking

Shows what Mel is doing. `.c-trace` is a chain of thought (shadcn pattern) on DS tokens; `.c-thinking` is the one-line version. Script only toggles `aria-expanded`.

```html
<div class="c-trace" data-running="true">
  <button type="button" class="c-trace__sum" aria-expanded="true">
    <span class="c-trace__spin" aria-hidden="true"></span><span class="c-trace__title">Finding quiet clients</span>
    <i class="ph ph-caret-down c-trace__chev" aria-hidden="true"></i>
  </button>
  <div class="c-trace__steps">
    <div class="c-trace__line"><span class="c-trace__icon"><i class="ph ph-check"></i></span><span class="c-trace__text">Read 42 contacts</span></div>
    <div class="c-trace__line" data-status="running"><span class="c-trace__icon"><span class="c-trace__spin"></span></span><span class="c-trace__text">Checking last replies</span></div>
  </div>
</div>
<div class="c-thinking"><span class="c-trace__spin" aria-hidden="true"></span><span class="c-thinking__text">Thinking…</span></div>
```

- **Running.** Open, spinner, title in `text-primary`. **Done.** Collapsed, success check, summary names the result. Tap the summary to open or close.
- **Thinking line.** Spinner plus shimmer text, 13px. Use when there are no steps to show.
- **Text.** Before the first step, `.c-thinking` reads "Thinking…". Step lines say what Mel did, with what it found ("Read 42 contacts"). Done summary reads "Checked N things". Matches Mel Chat Templates v0.2.1 (KJ, 2 November 2026).
- **Reduced motion.** Spinner and shimmer stop; text shows in `text-secondary`.
- **Hit area.** Summary row 44pt.
- Approved by KJ (chat intimation, 27 October 2026).
