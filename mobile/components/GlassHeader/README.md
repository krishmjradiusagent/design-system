Class prefix `.c-glass-header`. Styles ship in `components/bundle.css`; load `c-glass-header.css` alone only outside this system. No script.

## Purpose
Soft top surface for a fixed or sticky header above scrolling content.

## Ownership
Canonical source: `components/c-glass-header/c-glass-header.css` in Radius UI Design System. The Radius mobile design-system copy lives in `Components/c-glass-header/`; standalone prototypes vendor the same CSS faithfully.

## Supported variant
- `.c-glass-header--soft-edge`: transparent header surface with two blur layers spanning the full header. Their masks fade for 32px and 16px below its bottom edge, using 4px and 8px blur. Header content stays sharp above the layers. No border or shadow.

The host owns sticky or fixed placement, z-index, content padding, and initial scroll clearance. Place a sticky header as the first child of its scroll area so its natural height reserves that clearance, including when text wraps. The layers ignore pointer input. Browsers without backdrop-filter and reduced-transparency preference use an opaque `--bg-page` header without projecting layers.
