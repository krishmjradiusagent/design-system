# Voice sheet

Voice settings bottom sheet, opened from the sliders button in voice. Voice cards, speed, toggles. One sheet; it never opens another sheet.

```html
<button type="button" class="c-voice-sheet__scrim" aria-label="Close settings"></button>
<section class="c-voice-sheet" role="dialog" aria-label="Voice settings">
  <div class="c-voice-sheet__handle"></div>
  <div class="c-voice-sheet__head"><span></span><h2>Voice</h2><button type="button" class="c-voice-sheet__x" aria-label="Close"><i class="ph ph-x"></i></button></div>
  <div class="c-voice-sheet__sec"><p class="c-voice-sheet__label">Voice</p>
    <div class="c-voice-sheet__row"><button type="button" class="c-voice-sheet__card" aria-pressed="true"><b>Calm</b><span>Warm, steady</span></button>…</div></div>
  <div class="c-voice-sheet__sec"><p class="c-voice-sheet__label">Speed</p>
    <div class="c-voice-sheet__speed"><div class="c-voice-sheet__speed-fill"></div><div class="c-voice-sheet__speed-knob"></div><input type="range" aria-label="Speaking speed"></div>
    <p class="c-voice-sheet__value">1.0×</p></div>
  <div class="c-voice-sheet__list"><button type="button" class="c-voice-sheet__item" role="switch" aria-checked="true">Captions …</button></div>
</section>
```

- **Selected card.** `aria-pressed="true"`: `voice-select-bg` tint with a 1.5px `voice-select-border`.
- **Speed.** Native range input over a filled track; value pill below in `nav-active-*`. Tapping a voice card plays a short sample.
- **Toggles.** Use `rm-switch`. The canvas `vs-switch` is not added.
- **Close.** X, scrim tap or swipe down. Esc closes only this sheet.
- Voice names and descriptions are placeholders until Biju signs them off.
- Approved by KJ (Grok reference), 27 October 2026.
