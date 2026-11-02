# Voice bubble

Minimised voice across tabs (KJ, 28 October 2026). A floating Mel bubble shows on every tab, chat included, while voice stays live. Replaces the pill above the composer. Script handles drag, snap and drop.

```html
<div class="c-voice-bubble" data-side="right">
  <button type="button" class="c-voice-bubble__btn" aria-label="Back to voice. Mel is listening">
    <span class="c-mel-mark" data-state="listening" role="img" aria-label="Mel, listening">…</span>
  </button>
  <!-- needs you: data-kind="attn" on the bubble, attention mark, plus -->
  <span class="c-voice-bubble__label">Pick a Sarah</span>
</div>
<div class="c-voice-drop" data-hot="false"><span class="c-voice-drop__x"><i class="ph ph-x"></i></span><span class="c-voice-drop__t">Drop to end</span></div>
```

- **Tap** = back to full voice. **Drag** = move; on release it snaps to the nearest side (`data-side`). **Drop on the cross** = End voice. The drop target shows only while dragging; `data-hot="true"` when the bubble is over it.
- **Live ring** pulses Mel Green every 2.4s. **Needs you:** `data-kind="attn"`, attention mark, faster mint ring, and a label beside the bubble; Mel also says it.
- **Size.** `size-voice-bubble` 64, mark 48. Glass `glass-float`.
- **Drop target** stays neutral; only full-screen End is red.
- **Accessibility.** The button label names the state. Provide an End action in the button's actions menu for people who cannot drag.
- **Reduced motion.** No ring pulse; the mark shows a still frame.
