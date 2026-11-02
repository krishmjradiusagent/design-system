# Card

Container for a group of content. White, 1px `border`, 14px radius (`radius-xl`), no shadow at rest: borders do the work.

**Parts:** `.rds-card` > `__header` (`__title`, `__desc`; `--row` for title + action) · `__content` · `__footer` (top border, actions).
**Variants:** `--soft` (Mint Mist), `--sky` (Sky Mist), `--dark` (Deep Teal gradient panel, white text), `--selected` (Mel Green stroke on Cloud, Mel web `.w-lc.on`), `--interactive` (hover lifts 3px with `shadow-card-hover` and a Mint Pale border).

- Do keep one primary action per card.
- Don't use coloured left borders or drop shadows at rest.
