# Sidebar

The Mel web app sidebar (`.g-side`): 260px, Cloud ground, `sidebar-border` right edge. Head with the mel lockup and icon buttons, Deep Teal **New chat** pill, 38px nav rows, "Recents" label, 13.5px history items, user row pinned to the bottom with credits in Green Text.

**Parts:** `.rds-sidebar` > `__head` (`__brand`, `.rds-iconbtn`s) · `__new` · `__nav[aria-current=page]` (optional trailing badge) · `__label` · `__item[aria-current]` · `__more` · `__spacer` · `__me`.

- Do mark the active row with `aria-current`; hover and active both use `sidebar-accent` (Line).
