# Alert

Two parts. The **inline banner** sits in the page and tells the agent something. The **dialog** blocks the screen and asks before a destructive or lossy action. Class prefix `.c-alert`. Styles ship in `components/bundle.css`. No script.

```html
<div class="c-alert c-alert--warning" role="alert">
  <i class="ph ph-warning c-alert__icon" aria-hidden="true"></i>
  <div class="c-alert__body">
    <p class="t-body-strong">Approaching your limit</p>
    <p class="t-meta">You have 3 requests left today.</p>
    <button type="button" class="c-alert__action t-meta">Upgrade</button>
  </div>
  <button type="button" class="c-alert__close" aria-label="Dismiss"><i class="ph ph-x"></i></button>
</div>

<div class="c-alert-scrim">
  <div class="c-alert-dialog" role="alertdialog" aria-labelledby="t1">
    <h2 class="c-alert-dialog__title t-sheet-title" id="t1">Delete this chat?</h2>
    <p class="c-alert-dialog__text t-meta">This removes the chat and its drafts. You cannot undo this.</p>
    <div class="c-alert-dialog__actions">
      <button type="button" class="rm-btn rm-btn--secondary">Cancel</button>
      <button type="button" class="rm-btn c-alert-dialog__danger">Delete</button>
    </div>
  </div>
</div>
```

- **Banner tones.** `--info`, `--success`, `--warning`, `--danger`, from the `status-*` tokens. The tone carries meaning, so never use one for decoration.
- **Banner parts.** Icon, title, one or two lines, one underlined action, dismiss. The dismiss target is 44pt iOS, 48dp Android and is pulled into the padding so the banner does not grow.
- **Dialog.** Centred on a scrim, `surface-sheet`, sheet radius. iOS stacks full-width buttons and centres text. Android left-aligns and puts the buttons in a row, confirm last.
- **Destructive.** The destructive action is a filled red button (`c-alert-dialog__danger`), never plain red text. The safe choice sits above it as `rm-btn--secondary`.
- **Copy.** Title is a question or a plain statement. Body says what is lost. No apology, no exclamation mark.
- **Focus.** The dialog traps focus, returns it on close, and closes on the safe choice only.
- Semantic tokens only. Approved by KJ on 16 October 2026.
