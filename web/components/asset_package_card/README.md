# asset_package_card

**JSON `type`:** `asset_package_card` · Mel Chat Templates v0.2.1.

A generated set of marketing pieces, shown as one tappable card that opens the Viewer panel (Marketing skill; Mel web `.m-pkg`).

**Anatomy:**
- Channel tile, count title ("Instagram · 12 pieces"), mix line, expand button.
- A 4-up strip with "+N" on the last tile (`--big`: 3-up).

**States:** hover lifts 3px (`--duration-hover-card`). Pressed or open (`aria-pressed="true"`) gets a 1.5px Deep Teal ring while the panel shows it.
**Images:** real listing photos go in `.rds-ph > img`; the gradients are stand-ins.
