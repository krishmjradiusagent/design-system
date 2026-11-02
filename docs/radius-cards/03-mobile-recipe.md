# 03 · Mobile recipe (Radius Mobile → SwiftUI / Compose)

`mobile/` is HTML/CSS written as the **visual spec**. Apps do not ship it. Rebuild each part natively with the same tokens, structure and behaviour.

## 0. Setup once per app

1. Generate tokens: `python3 tools/gen_native_tokens.py` → `build/native/`
   - iOS: `ios/RadiusColors.swift` (`Color.rds.surfaceCard`, light + dark), `ios/RadiusTokens.swift` (`RDSSpacing`, `RDSRadius`, `RDSSize`, `RDSMotion`)
   - Android: `values/colors.xml` + `values-night/colors.xml` (`@color/rds_surface_card`), `values/dimens.xml`, `RadiusTokens.kt` (`RadiusLight`, `RadiusDark`, `RadiusSpacing` …)
   - Re-run after every export. Never edit generated files.
2. Font: Mona Sans variable, `web/fonts/MonaSans-VF.ttf`. Register it (iOS `UIAppFonts`, Android `res/font`).
3. Icons: Phosphor, regular weight (iOS `PhosphorSwift`, Android `phosphor-icon` Compose). `ph ph-caret-right` in HTML = `caret-right` natively.

## 1. Read a component

For `mobile/components/<name>/`:
- `preview.html` — exact structure and classes, shown in light and dark side by side. Open with `tools/preview.html?ds=mobile&c=<name>`.
- `README.md` — what it is, behaviour, states, platform notes (sheet vs page, OAuth, viewers).

Translate structure top-down: container → rows → text roles → tokens. Do not eyeball pixels; read the class, look it up below.

## 2. Type roles

| Class | Size (pt/sp) | Weight | Use |
|---|---|---|---|
| `t-large-title` | 28 | 700 | Screen hero |
| `t-page-title` | 20 | 600 | Page title |
| `t-sheet-title` | 17 | 700 | Sheet title |
| `t-row-title` / `t-section` | 15 | 600 | Row titles, section heads |
| `t-body` | 15 | 400 | Body text, values |
| `t-body-strong` | 15 | 500 | Titles inside cards, names |
| `t-meta` | 13 | 500 | Labels, captions in cards, footnotes |
| `t-caption` · `t-chip` · `t-eyebrow` | 12 | 500 · 600 · 700 | Captions, chips, eyebrows |
| `t-money` / `t-money-xl` | 24 / 28 | 700 | Money figures (tabular numerals) |

Colour modifiers: `t-secondary` → `text-secondary`, `t-tertiary` → `text-tertiary`. Default text = `text-primary`.
Scale: all sizes × Dynamic Type / fontScale, capped at 1.5×. Numbers use tabular figures.

## 3. Class → token → native

| HTML class | Tokens | SwiftUI | Compose |
|---|---|---|---|
| `rm-root[data-theme]` | theme switch | `.environment(\.colorScheme)` follows system | `isSystemInDarkTheme()` → `RadiusLight` / `RadiusDark` |
| `m-crm-card`, `m-draft`, `rm-card` | bg `surface-card`, 1px inset `border-card`, radius `radius-card`, padding `space-card-pad` | `VStack(alignment:.leading, spacing: RDSSpacing.space2)` `.padding(RDSSpacing.spaceCardPad)` `.background(Color.rds.surfaceCard)` `.overlay(RoundedRectangle(cornerRadius: RDSRadius.radiusCard).strokeBorder(Color.rds.borderCard))` `.clipShape(RoundedRectangle(cornerRadius: RDSRadius.radiusCard))` | `Column(Modifier.clip(RoundedCornerShape(RadiusRadius.radiusCard)).background(c.surfaceCard).border(1.dp, c.borderCard, RoundedCornerShape(…)).padding(RadiusSpacing.spaceCardPad), verticalArrangement = spacedBy(RadiusSpacing.space2))` |
| `sq-card` | bg `surface-card-bordered`, padding `space-4`, gap `space-5` | same as above with those tokens | same |
| `rm-tile` | 32×32, radius `radius-tile`, bg `tile-bg` (= `surface-tile`), icon `size-icon-row` | `Image(…).frame(width:32,height:32).background(Color.rds.surfaceTile, in: RoundedRectangle(cornerRadius: RDSRadius.radiusTile))` | `Box(Modifier.size(32.dp).background(c.surfaceTile, RoundedCornerShape(RadiusRadius.radiusTile)), contentAlignment = Center)` |
| `m-av` | 32 circle, `surface-tile`, 12/600 initials | `Circle()` + `Text` | `Box(Modifier.size(32.dp).clip(CircleShape)…)` |
| `m-prow` / `m-note__head` (header row) | `HStack(spacing: space-3)`; caption `t-meta` secondary; chevron `text-tertiary` 16 | `HStack { tile; Text(caption).font(meta).foregroundStyle(.rds.textSecondary); Spacer(); Image("caret-right") }` | `Row(verticalAlignment = CenterVertically, horizontalArrangement = spacedBy(12.dp))` |
| `m-note__body` | full width under the head, gap 2 | `VStack(alignment:.leading, spacing:2)` (no leading inset) | `Column(verticalArrangement = spacedBy(2.dp))` |
| `m-kv` | label `t-meta` secondary over value `t-body`; 1px top line `separator-on-card`; padding `space-2` vertical | `VStack(alignment:.leading, spacing:2)` + `Divider().overlay(Color.rds.separatorOnCard)` above | `Column` + `HorizontalDivider(color = c.separatorOnCard)` |
| `m-dfoot`, `m-acts`, `sq-foot` | top line + `HStack`, button on the right | `HStack { Text(foot); Spacer(); Button }` | `Row(horizontalArrangement = SpaceBetween)` |
| `m-link` | card row, tile + title/sub + caret; whole row tappable; min height hit | `NavigationLink` (push) styled as card | `Row(Modifier.clickable { nav.navigate(...) })` |
| `rm-chip.tone-*` / `sq-ch` | bg `--tone-bg`, fg `--tone-fg`, radius `radius-badge`, 12/500 | `Label(…).padding(.horizontal,8).padding(.vertical,4).background(tone.bg, in: RoundedRectangle(cornerRadius: RDSRadius.radiusBadge))` | `Surface(shape = RoundedCornerShape(6.dp), color = tone.bg)` |
| `sq-status` (badge with dot) | 8pt dot in tone fg + `t-meta` secondary | `HStack { Circle().fill(tone).frame(8); Text }` | `Row { Box(Modifier.size(8.dp).background(tone, CircleShape)); Text }` |
| `m-status` (status line under card) | dot `status-success-fg` (danger variant) + `t-meta` secondary | as above | as above |
| `rm-btn--primary` (`--sm`) | bg `action-primary`, fg `text-on-action`, height `size-control-lg` (`--sm` = `size-control-sm`), radius `radius-pill` | `Button` `.buttonStyle(RDSPrimary())` | `Button(colors = ButtonDefaults.buttonColors(c.actionPrimary, c.textOnAction))` |
| `rm-btn--secondary` | bg `surface-raised` (+ hairline `border-card` on cards) | custom style | `OutlinedButton` with tokens |
| `rm-btn--link` | transparent, fg `text-accent` | `.buttonStyle(.plain).foregroundStyle(.rds.textAccent)` | `TextButton` |
| `rm-btn--danger` | bg `status-danger-bg`, fg `status-danger-fg` | custom style | custom colors |
| `c-prompt-row` | `text-accent` text + glyph, 1px `border-card` between rows, 44/48 min height | `Button { composer.text = prompt }` | `Row(Modifier.clickable { composer.value = prompt })` |
| `m-rail` | horizontal scroll, snap, bleeds to card edge | `ScrollView(.horizontal) { LazyHStack }` + `.scrollTargetBehavior(.viewAligned)` | `LazyRow` + `rememberSnapFlingBehavior` |
| `m-pick-grid`, `m-style-grid`, `m-cards`, `m-stats` | 2 columns, gap `space-2`/`space-3` | `LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())])` | `LazyVerticalGrid(GridCells.Fixed(2))` or `FlowRow` |
| `rm-sheet` (+ `rm-sheet__grab`) | `surface-sheet`, radius `radius-sheet`, grab 38×4 | `.sheet { … }.presentationDetents([.medium, .large]).presentationDragIndicator(.visible)` | `ModalBottomSheet(containerColor = c.surfaceSheet)` |
| `m-pushed` (pushed page) | back caret + centred title | `NavigationStack` push | `NavHost` destination with `TopAppBar` |
| `m-exp`, `m-imgcard` → viewer | full-screen viewer | `.fullScreenCover` with zoom / share | full-screen `Dialog(properties = DialogProperties(usePlatformDefaultWidth = false))` |
| `c-alert--<tone>` | `status-<tone>-bg` / `-fg` | `HStack` card with tone colours | same |
| `c-trace`, `c-thinking` | spinner 0.8s linear, shimmer 1.6s, summary 44pt | `ProgressView()` + shimmer modifier; `DisclosureGroup` for steps | `CircularProgressIndicator`; `AnimatedVisibility` for steps |
| `m-status__dot--live` | pulse 1.4s ease-in-out | `.opacity` repeat animation; off with Reduce Motion | `rememberInfiniteTransition`; off when animations disabled |

Tone variables: `tone-success` → `status-success-fg/bg`, `tone-warning` → `status-warning-*`, `tone-danger` → `status-danger-*`, `tone-info` → `status-info-*`, accent tones (`tone-sapphire`, `tone-jade`, `tone-iris`, `tone-gold`, `tone-terracotta`, `tone-teal`, `tone-plum`, `tone-sage`) → accent families in `tokens.json` (`accent-<name>-0…10`). In CSS: light `fg = accent-<name>-7`, `bg = accent-<name>-1`; dark `fg = accent-<name>-2`, `bg = accent-<name>-8`. Check the `--palette-<name>-*` lines in `mobile/components/bundle.css` for each family.

## 4. Navigation rules (non-negotiable)

| Web does | Mobile does |
|---|---|
| Right panel | Pushed page |
| Popover / dropdown / share menu | Bottom sheet (`.medium` then `.large`) |
| Media viewer / lightbox | Full-screen viewer |
| Long list inline | First 3–5 rows inline + "+N more" / "Show all" → sheet or pushed page |
| OAuth popup | `ASWebAuthenticationSession` / Custom Tab |
| Open link | `SFSafariViewController` / Custom Tab |
| Colour picker | `UIColorPickerViewController` / colour sheet |
| File upload | `UIDocumentPickerViewController` / `ActivityResultContracts.GetContent` |
| Confirm dialog | `confirmationDialog` / M3 `AlertDialog` (only for destructive actions; cards are their own confirm) |

## 5. Platform differences

- iOS: SF-style navigation, sheets with detents, swipe back, haptics on approve (`.success`).
- Android: M3 top app bar, system back, ripple on tap, snackbar for toasts.
- Same tokens, same layout, same copy on both.

## 6. Accessibility

- Every tappable element ≥ 44pt / 48dp. Icon-only buttons have labels.
- Cards read as one element with `fallback_text` as the accessibility label when they have no actions; otherwise children are focusable.
- Respect Reduce Motion: no pulse, no shimmer, no spinner rotation (show static icon).
- Text scales to 1.5×; nothing truncates important values (wrap instead).

## 7. Worked example: `message_draft_card` (SwiftUI)

```swift
struct MessageDraftCard: View {
    let data: MessageDraftData            // from shared/protocol/examples/message_draft_card.json
    @State var state: CardState           // .draft, .working, .done, .failed
    var onSend: () async -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: RDSSpacing.space2) {
            HStack(spacing: RDSSpacing.space3) {                       // header row
                Tile(icon: data.channel == .email ? "envelope-simple" : "chat-circle")
                Text("\(data.channel.label) to \(data.to.name)")
                    .font(.rds.meta).foregroundStyle(Color.rds.textSecondary)
            }
            if let s = data.subject { Text(s).font(.rds.bodyStrong) }
            Text(data.body).font(.rds.body).foregroundStyle(Color.rds.textPrimary)   // full-width body
            Divider().overlay(Color.rds.separatorOnCard)
            HStack {
                Text(data.footnote).font(.rds.meta).foregroundStyle(Color.rds.textSecondary)
                Spacer()
                switch state {
                case .done:    Label("Sent", systemImage: "checkmark").foregroundStyle(Color.rds.statusSuccessFg)
                case .working: ProgressView()
                default:       Button("Send") { Task { await onSend() } }.buttonStyle(RDSPrimarySmall())
                }
            }
        }
        .padding(RDSSpacing.spaceCardPad)
        .background(Color.rds.surfaceCard, in: RoundedRectangle(cornerRadius: RDSRadius.radiusCard))
        .overlay(RoundedRectangle(cornerRadius: RDSRadius.radiusCard).strokeBorder(Color.rds.borderCard))
    }
}
```

`Tile`, `RDSPrimarySmall`, `.rds.meta` etc. are your app's thin wrappers over the generated tokens. Build them once; every card reuses them.
