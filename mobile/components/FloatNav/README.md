# Float nav

Frosted floating footer and top buttons for Home and Mel chat (voice canvas, 27 October 2026). The nav floats as glass and content scrolls under it. Replaces the soft-edge glass footer on these screens. No script.

```html
<footer class="c-glass-footer c-glass-footer--float">
  <form class="c-chat-composer c-chat-composer--compact">…</form>
  <div class="c-float-navrow">
    <button type="button" class="c-float-btn c-float-btn--nav c-float-btn--mel c-float-glass" aria-current="page" aria-label="Mel"><span class="c-mel-mark" data-state="idle">…</span></button>
    <nav class="c-float-nav c-float-glass" aria-label="Main">
      <button type="button" class="c-float-nav__item" aria-label="Dashboard"><i class="ph ph-squares-four"></i></button>
      <button type="button" class="c-float-nav__item" aria-label="Clients"><i class="ph ph-users"></i></button>
      <button type="button" class="c-float-nav__item" aria-label="Transactions"><i class="ph ph-house-line"></i></button>
    </nav>
    <button type="button" class="c-float-btn c-float-btn--nav c-float-glass" aria-label="Inbox"><i class="ph ph-tray"></i></button>
  </div>
</footer>
```

- **Row.** Mel circle (52) | Dashboard, Clients, Transactions (icon only) | Inbox (52).
- **Active.** `aria-current="page"`: `nav-active-bg` fill, `nav-active-fg` icon, `ph-fill`. The Mel circle breathes a Mel-green tint when not selected and holds it steady when selected.
- **Top.** Avatar initial and bell as 48px `.c-float-btn.c-float-glass`; title centred (`voice-title` 17/600). New-item dot on the bell.
- **Glass.** `.c-float-glass` = `glass-float` with blur 40px, saturate 150%. Reduced transparency or no blur support falls back to `surface-raised`.
- **Composer.** Stays solid; only the nav and top buttons are glass.
- **Footer.** `.c-glass-footer--float` removes the footer fill and soft edge. Keep bottom scroll clearance equal to the footer height.
- **Android.** Use `c-m3-navbar` instead.
- Approved by KJ on 27 October 2026 (voice canvas wins over the flat Assistants footer).
