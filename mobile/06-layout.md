# Layout: spacing, radius, sizes

## Spacing — audited from transaction.html (595 declarations)
Scale: `--space-0 · 0-5 · 1 · 1-5 · 2 · 2-5 · 3 · 4 · 5 · 6 · 8 · 10 · 12 · 16 · 24` = 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 96.
Never use a value outside the scale. Prefer the **named slot** below over a raw step.

| Slot | Token | px |
|---|---|---|
| Screen gutter | `--space-gutter` | 16 |
| Header top / header → content | `--space-header-top` | 16 |
| Title ↔ header actions | `--space-header-gap` | 12 |
| Between header actions | `--space-2` | 8 |
| Context line top / bottom | `--space-context-top` / `--space-context-bottom` | 12 / 16 |
| Section → section | `--space-section-gap` | 24 |
| First section | `--space-section-first` | 8 |
| Section heading → content | `--space-section-head` | 8 |
| Related blocks in one section (card → metric grid) | `--space-grid-after` via `.rm-group` | 12 |
| Card padding | `--space-card-pad` | 12 |
| Card padding compact (quick view metrics) | `--space-card-pad-compact` | 8 |
| Card heading → body | `--space-card-head` | 8 |
| Inside card (label → value, row → row) | `--space-card-inner` | 4 |
| Metric grid gap | `--space-grid-gap` | 8 |
| List row padding | `--space-row-y` / `--space-row-x` | 10 / 12 (x = 0 inside cards) |
| Row media ↔ text | `--space-row-media` | 12 |
| Activity rail + gap | `--space-rail` + `--space-3` | 16 + 12 |
| Timeline step gap | `--space-timeline-step` | 16 |
| Floating actions from edges | `--space-actions-inset` | 16 |
| Bottom scroll clearance | `--space-scroll-clearance` | 96 |
| Sheet gutter | `--space-sheet-gutter` | 16 |
| Sheet head top / bottom | `--space-sheet-head-top` / `-bottom` | 6 / 14 |
| Sheet body top / bottom | `--space-sheet-body-top` / `-bottom` | 4 / 14 |

Structure classes: `.rm-content` → `.rm-section` (24 apart) → `.rm-section-head` (8) → surface. Related blocks inside one section → `.rm-group` (12).
Parity exception: activity rows are 40px tall (below 44pt HIG) — kept on purpose to match transaction.html.

## Radius — by object, not by taste
| Object | Token | px |
|---|---|---|
| chip / badge | `--radius-badge` | 6 |
| input | `--radius-input` | 8 |
| button (non-pill), tile | `--radius-button` / `--radius-tile` | 10 |
| metric | `--radius-metric` | 12 |
| card | `--radius-card` | 14 |
| sheet top | `--radius-sheet` | 22 |
| pill buttons, search, segmented, dock | `--radius-pill` | full |
| Mel body / ring | `--radius-mel` / `--radius-mel-ring` | 38% / 42% |
Never another radius.

## Sizes
| Thing | Token | px |
|---|---|---|
| hit area iOS / Android | `--size-hit-ios` / `--size-hit-android` | 44 / 48 |
| control (glass icon btn, search) | `--size-control` | 36 |
| primary button | `--size-control-lg` | 44 |
| icon in rows / header / tab | `--size-icon-row/header/tab` | 16 / 20 / 24 |
| tile | `--size-tile` / `--size-tile-sm` | 32 / 28 |
| Mel inline / dock / hero | `--size-mel-*` | 26 / 40 / 64 |
Visual can be smaller than hit area; `.rm-btn` adds invisible hit slop automatically.

## Safe areas
`.rm-screen` already pads with `env(safe-area-inset-*)`. Never hardcode status bar or home indicator space.
