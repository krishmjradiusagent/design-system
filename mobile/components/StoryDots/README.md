# Story dots

Pager for the welcome story stack: one dot per story, the current dot at full opacity. Replaces any icon pill or tab bar under the stack. Each dot is a button 44pt (iOS) or 48dp (Android) square around a small visible dot, so every dot meets the touch-target minimum. The app copy used 24 wide; the dots now sit further apart.

```html
<div class="c-story-dots" role="group" aria-label="Choose story">
  <button type="button" class="c-story-dots__dot" aria-label="Property search example" aria-pressed="true" data-current><span></span></button>
  <button type="button" class="c-story-dots__dot" aria-label="Listing marketing example" aria-pressed="false"><span></span></button>
  <button type="button" class="c-story-dots__dot" aria-label="Client organization example" aria-pressed="false"><span></span></button>
</div>
```

Set `data-current` (or `aria-pressed="true"`) on the active dot. Colours use `text-primary`, so it follows the theme. Sits about 16px below the stack, centred. Do not replace the dots with icons, tabs or a segmented control. Copied from `welcome-mobile.css` in the MEL onboarding project; no new tokens. Visual approved by KJ on 16 October 2026; touch target widened to 44pt the same day.
