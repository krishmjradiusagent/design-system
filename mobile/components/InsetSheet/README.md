Class prefix `.c-inset-sheet`. Styles ship in `components/bundle.css`; load `c-inset-sheet.css` alone only outside this system. No script.

## 1. Job
Floating, inset sheet with a centered grabber, left-aligned title and subtitle, glass close control, and independently scrollable content.

## 2. Level
Shared composition · mobile overlays

## 3. Foundation
Composes canonical `.rm-sheet`, `.rm-sheet__grab`, `.rm-btn.rm-btn--glass`, and `t-sheet-title`. The base `.rm-sheet` remains edge-attached. This composition adds inset placement and all-corner radius using existing sheet and spacing tokens.

## 4. Anatomy
| Part | Class |
|---|---|
| Surface | `section.rm-sheet.c-inset-sheet` |
| Grabber wrap | `.c-inset-sheet__grab-wrap` |
| Header and copy | `.c-inset-sheet__head`, `.c-inset-sheet__head-copy` |
| Supporting text | `.c-inset-sheet__subtitle` |
| Scroll region | `.c-inset-sheet__body` |

## 5. Tokens
Uses existing `--space-2-5`, `--space-5`, sheet gutter/head/body spacing, `--radius-sheet`, and semantic text colors. No new tokens or base sheet behavior changes.

## 6. Accessibility
Use dialog labeling, a real labeled close button, and preserve focus management in the owning flow.
