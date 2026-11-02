# Screens — types, structure, platform rules

Every screen = one `.rm-screen`. Start from a template (`scripts/new.mjs`). Never start blank.

## 1. Tab screen  (`screen-tab`)
Top level: Home, Tasks, Transactions, Calendar.
```
statusbar
header: .t-large-title  + optional glass actions (search, add)
content: .rm-content → .rm-section × n
dock (outside .rm-screen): iOS → .rm-dock (pill + dock Mel) · Android → M3 navigation bar component
```
- Large title collapses to 17px inline title on scroll (iOS). Android: M3 top app bar (same text).
- Exactly one dock Mel.

## 2. Pushed page  (`screen-pushed`)
Detail views: transaction, person, document.
```
statusbar
header: glass back · .t-page-title (Mona 20, 1 line, ellipsis) · glass actions
context line: .rm-screen__context .t-meta .t-secondary (optional)
content: .rm-content → .rm-section × n
optional .rm-fab (MEL primary, outside .rm-screen) for the main add action
```
- No dock. No large title. Android: back arrow + M3 top app bar, system back works.

## 3. Sheet  (`sheet`)
Modal task over a screen: add document, filters, quick view, quick actions.
- Grab handle · `.t-sheet-title` · close glass button · content · one primary action at bottom.
- iOS: sheet detents (medium/large). Android: M3 bottom sheet. Scrim `--overlay-scrim`.
- A sheet never contains another sheet. Need more depth → push a page.

## Section anatomy (inside any screen)
`.rm-section` → optional `.rm-section-head` (`.t-section` + "See all" `.t-gold`) → one surface (`.rm-card`, `.rm-grid` of metrics, or list card). Related blocks in one section → `.rm-group`.

## Platform split (summary)
| | iOS (HIG) | Android (M3) |
|---|---|---|
| Primary nav | `.rm-dock` | M3 navigation bar |
| Back | glass back button + swipe | top app bar arrow + system back |
| Menus/drawer | none; avatar → page | modal drawer allowed |
| Switch / checkbox / date picker / snackbar | HIG controls | M3 controls |
| Hit area | 44pt | 48dp (`data-platform="android"`) |
Brand atoms (cards, buttons, chips, metrics, Mel) are identical on both.
Android components ready in `../Components/`: `c-m3-navbar` (replaces `.rm-dock`), `c-m3-topbar` (replaces headers marked `data-ios-only`). They switch automatically with `data-platform`.

## Copy voice
Blunt, plain verbs, sentence case. No apology words. No exclamation marks. CTA says the result ("Send reminder", not "Submit").
