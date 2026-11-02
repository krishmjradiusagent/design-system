Class prefix `.c-glass-footer`. Styles ship in `components/bundle.css`; load `c-glass-footer.css` alone only outside this system. No script.

## Purpose
Anchored footer surface for actions above scrolling content.

## Ownership
Canonical source: `components/c-glass-footer/c-glass-footer.css` in Radius UI Design System. The Radius mobile design-system copy lives in `Components/c-glass-footer/`; standalone prototypes must vendor the same component CSS faithfully.

## Anatomy
Apply `.c-glass-footer` to a semantic footer inside a positioned screen shell. The host supplies footer content, layout, and safe-area padding. The component anchors the footer to the shell bottom edge and adds no control geometry or interaction behavior.

## Supported variants
- Default `.c-glass-footer`: semantic glass surface with the standard border and shadow.
- `.c-glass-footer--soft-edge`: two masked blur layers begin 32px and 16px above the footer, using 4px and 8px blur. The lower layer fades from transparent into the existing `--bg-page` color at the bottom to soften scrolling content behind the action. Use for floating actions over a scroll view; the top edge stays transparent and the action remains sharp.

- `.c-glass-footer--content-coverage` (with `.c-glass-footer--soft-edge`): opt in for taller assemblies such as a shortcut row above a composer. Reuses the same 4px/8px backdrop layers, 32px/16px projections, and page-color fade. Each blur mask reaches full opacity at the footer's top edge, so the soft transition stays above the first control instead of stretching across 55–60% of the assembly height. Foreground controls remain at z-index 1; no new color, blur, or spacing tokens are introduced. The existing soft-edge variant is unchanged.

Browsers without backdrop-filter retain the page-color fade without blur. Users who request reduced transparency receive an opaque `--surface-raised` surface.

## Accessibility
Keep action labels legible over the surface. Add bottom scroll clearance matching the full footer height so the final content can scroll above it. The visual layer ignores pointer input and keeps footer children above it.
