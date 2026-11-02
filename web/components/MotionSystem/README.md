# MotionSystem

**Web only · not in Mel Chat Templates yet.** Built from the Mel web boards; the backend needs a template type before apps can send it.

The motion system (Brand · 07 Mel in motion, 09 Motion & interactions, plus the Mel web chat timings). Every value is a token in `tokens.json` (`easing`, `duration`, `movement`) and a CSS variable in `tokens.css`.

**Core:**
- `--ease-mel` cubic-bezier(0.2, 0.8, 0.2, 1)
- `--duration-fast` 150ms (hover, press, focus)
- `--duration-base` 240ms (swaps, cards)
- `--duration-reveal` 360ms (expand, slide-in)

**Chat:**
- `--duration-reply-delay` 800ms
- `--duration-trace-step` 700ms
- `--duration-stream-word` 60ms
- `--duration-spin` 800ms
- `--duration-shimmer` 1.6s
- `--duration-pulse` 1.4s

**Mel mark:**
- idle 3.2s, ready 2.4s, listening 1.8s, working dots 1.2s, voice bars 0.9s, done 0.6s
- return to ready after 2s

**Helpers:** `.rds-anim-step-in`, `.rds-anim-fade-up`, `.rds-anim-stagger`, `.rds-spin`, `RadiusUI.traceLive(el)`.
**Reduced motion:** `prefers-reduced-motion: reduce` turns off every loop and slide in `bundle.css`.
