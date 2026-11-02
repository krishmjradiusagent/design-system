# Voice

Mel voice mode. Full screen, iOS and Android. Top: minimise, title and live status, settings. Stage: Mel mark and a two-line live caption. Dock: card slot and controls. Behind: the living dot field (concept A). Script drives captions, ripples and state.

```html
<section class="c-voice" data-state="speaking" aria-label="Mel voice">
  <div class="c-voice__field" aria-hidden="true"></div>
  <div class="c-voice__zone" aria-hidden="true"><div class="c-voice__ripple"></div></div>
  <header class="c-voice__top">
    <button type="button" class="c-voice-btn c-voice-btn--x c-voice-glass" aria-label="Minimise voice"><i class="ph ph-caret-down"></i></button>
    <div class="c-voice__id"><h1 class="c-voice__title">Mel</h1><p class="c-voice__status">Speaking</p></div>
    <button type="button" class="c-voice-btn c-voice-btn--x c-voice-glass" aria-label="Voice settings"><i class="ph ph-sliders-horizontal"></i></button>
  </header>
  <div class="c-voice__stage">
    <button type="button" class="c-voice__mark" aria-label="Pause Mel"><span class="c-mel-mark" data-state="speaking">…</span></button>
    <div class="c-voice__capwin"><p class="c-voice__cap"><span class="c-voice__w" data-lit="true">Sarah</span> …</p></div>
  </div>
  <div class="c-voice__dock">
    <!-- optional card: c-voice-link, c-voice-pick or a draft card; set data-card="true" on .c-voice -->
    <div class="c-voice__ctrls">
      <button type="button" class="c-voice-btn c-voice-glass" aria-pressed="false" aria-label="Mute"><i class="ph ph-microphone-slash"></i></button>
      <button type="button" class="c-voice-btn c-voice-glass" aria-label="Type instead"><i class="ph ph-keyboard"></i></button>
      <button type="button" class="c-voice-btn c-voice-btn--end" aria-label="End voice"><i class="ph-fill ph-phone-x"></i></button>
    </div>
  </div>
</section>
```

- **States** (`data-state` on `.c-voice` and the mark): connecting, listening, thinking/working, speaking, interrupted, needs you (`attention`), done, ended, minimised. The status line names the state in words. Paused or offline sets `data-tone="off"` on the status.
- **Mark.** `size-voice-mark` 140. Tap pauses or resumes. Mark motion alone carries state: no halo, no breathing circle, no gradient wash. While Mel speaks the mark also grows with each word, up to 6% (`scale(1 + 0.06 × envelope)`; each word's stress sets the peak, rise 80ms, decay 380ms). The app's script drives it; it stops under reduced motion.
- **Captions.** Last two lines only (`c-voice__capwin`, 2 × 34px). Words light up as spoken (`data-lit`); older lines roll off the top. Your words show in `text-secondary`. Interrupted text strikes through (`c-voice__cut`). Hints use `c-voice__hint`.
- **Dot field.** `c-voice__field` plus one ripple per spoken word (`c-voice__ripple`, `--vr` radius, `--s` strength), 4.5s travel, faded by distance from Mel. Pauses = no rings. Decorative; stops under reduced motion.
- **Controls.** 62px glass circles: Mute (`aria-pressed`), Keyboard, End. End is `action-end` red with a white icon. Dictating turns the mic into a stop square (`c-voice-btn--dictstop`).
- **Cards in voice.** A card sits in the dock above the controls; set `data-card="true"`: the mark shrinks to 96 and the stage moves up. See `VoiceCards`.
- **Ending.** End returns to chat with a `c-voice-divider` in the thread. Minimise shows `c-voice-bubble` on every tab.
- **Copy.** Status and caption text in the canvas is placeholder until Biju signs it off. Do not ship it.
- Approved by KJ, 27–28 October 2026. Concepts B (aurora) and C (wave line) are not part of the system.
