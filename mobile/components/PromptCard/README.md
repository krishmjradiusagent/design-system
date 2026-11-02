# Prompt card

Tappable example prompt inside a Mel message, from the onboarding "what Mel can do" step. Each card shows a category icon, a title and an up-right arrow, with a two-line example prompt below at full width. Tapping a card opens a sample conversation; the agent can also type their own request. The card is a button, so no inline reset is needed.

```html
<div class="c-prompt-cards">
  <button type="button" class="c-prompt-card c-prompt-card--reach">
    <span class="c-prompt-card__top">
      <i class="ph ph-chat-circle c-prompt-card__icon" aria-hidden="true"></i>
      <span class="c-prompt-card__title t-body-strong">Send a text</span>
      <i class="ph ph-arrow-up-right c-prompt-card__go" aria-hidden="true"></i>
    </span>
    <span class="c-prompt-card__prompt t-meta">Send a text to Sarah Johnson asking if she is still interested in buying a home.</span>
  </button>
  <button type="button" class="c-prompt-card c-prompt-card--more"><span class="c-prompt-card__title t-body-strong">More examples</span><i class="ph ph-caret-down c-prompt-card__go" aria-hidden="true"></i></button>
</div>
```

- **Category icon colour.** Only the icon is coloured. Modifier classes: `--reach` (text, email), `--clients` (status, family, inactive clients), `--plan` (campaign, follow-up), `--insight` (hot buyers). No modifier gives the neutral `text-secondary` icon. Tokens: `icon-reach`, `icon-clients`, `icon-plan`, `icon-insight`, each with a light and a dark value. They are for these icons only, never for text, fills or status.
- **Arrow.** Always neutral (`text-tertiary`). It only says "tap".
- **Card.** Outlined, no fill, card radius, 1px `border-card`. The pressed state fills with `surface-tile`. There is no hover state; this is a touch component.
- **Text.** Title `t-body-strong`; prompt `t-meta` in `text-secondary`, clamped to two lines.
- **Mobile list.** One column. Show four cards, then a `--more` row. Eight cards in one column push the composer off screen. On wide screens a two-column grid is fine.
- **Hit area.** 44pt iOS, 48dp Android.
- **Colour expression.** The card does not change with `data-expression`. Every DS accent tone resolves to the same mint, so tone classes cannot colour-code cards; the four icon tokens exist for that reason.
- Semantic tokens only. Visual and the four icon colours approved by KJ on 16 October 2026.
- **Mel chat (28 October 2026).** Inside Mel chat, suggested prompts use `c-prompt-row` (fills the composer) or `c-suggest` (sends). Prompt cards stay for onboarding only.
