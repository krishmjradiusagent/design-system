# 02 · Web recipe (Radius UI)

Plain HTML + CSS + `bundle.js`. Light theme only. Font: Mona Sans. Icons: Lucide via `data-icon`.

## Load

```html
<link rel="stylesheet" href="radius-design-system/web/tokens.css">
<link rel="stylesheet" href="radius-design-system/web/components/bundle.css">
<script src="radius-design-system/web/components/bundle.js"></script>
```

- Wrap everything in `.rds`. Wrap a chat thread in `[data-rds-chat]` so suggestions find the composer (`.rds-prompt__field`).
- After inserting markup at runtime: `RadiusUI.init(el)`.
- API: `RadiusUI.init`, `RadiusUI.toast({title, description, variant})`, `RadiusUI.traceLive(el)`, `RadiusUI.open('#id')`, `RadiusUI.close('#id')`, `RadiusUI.icon(name)`.

## Card parts (compose cards only from these)

| Part | Markup |
|---|---|
| Card shell | `.rds-mc` + size `--sm` (360) · `--md` (480) · `--lg` (560). List card `--list`. Whole card tappable `--tap`. Empty `--empty`. |
| Head | `.rds-mc__head` > `.rds-mc__tile` (icon) or `.rds-mc__av` (initials) + `.rds-mc__ht` > `.rds-mc__t` (title) + `.rds-mc__m` (meta) |
| Header row + body (rule) | `.rds-note__head` > `.rds-mc__tile` + `.rds-mc__m.rds-note__cap` (+ `<i data-icon="chevron-right">` when tappable) · `.rds-note__body` > `.rds-mc__t` + `.rds-mc__b` (`.rds-mc__clamp` = 2 lines). Add `.rds-note` to a `--tap` card. |
| Body text | `.rds-mc__b` |
| Key-value rows | `.rds-mc__kv` (`--3` for three columns) > `div` > `.rds-mc__m` (label) + `.rds-mc__b` (value). Old value in `<s>`. |
| Foot | `.rds-mc__foot` > `.rds-mc__m` (footnote) + button(s) on the right |
| Link row | `a.rds-link-row` > `.rds-mc__tile` + `.rds-link-row__t` + chevron |
| Status line | `.rds-mstatus` (`--sent`, `data-state="error"`) |
| Badge | `.rds-tbadge[data-tone]` > `<i></i>` dot + text |
| Chip | `.rds-tchip[data-tone]` (icon + count) |
| Sequence | `.rds-seq` (campaign timelines; see `campaign_sequence_card`) |
| Prompt rows | `.rds-prompt-rows` > `button.rds-prompt-row` > `i.rds-prompt-row__glyph[data-icon="prompt-glyph"]` + `.rds-prompt-row__text`. Styles `--more`, `--destructive`. |
| Inline alert | `.rds-ialert[data-tone]` > `.rds-ialert__body` (`__t`, `__m`, `button.rds-ialert__act`) |
| Buttons | `rds-btn rds-btn--primary rds-btn--sm` · `rds-btn rds-act--secondary rds-btn--sm` · `rds-act--link` · `rds-act--danger` |

`rds-btn--sm` alone is not primary. Always add the style class.

## Behaviours (no custom JS needed)

| Attribute | Does |
|---|---|
| `data-rds-send` on a button | sending spinner (≥600ms) → done; swaps in `.rds-mc__sent` |
| `data-kind="retry"` | retry handler on partial / failed cards |
| `data-rds-refresh` | stale → refresh |
| `.rds-prompt-row` click inside `[data-rds-chat]` | fills the composer, never sends |
| `data-prompt` on skill / listing rows | fills the composer with that prompt |
| `data-rds-trace-live` | animated reasoning trace (demo) |
| `data-rds-job-demo` | animated job status (demo) |
| `data-rds-root` + `data-rds-trigger` | disclosures, menus, accordions |
| `data-rds-floating` | closes on outside click and Esc |
| `data-rds-open="#id"` / `data-rds-close` | overlays (dialog, sheet, right panel) |

## Web-only patterns

- Right panel (`RightPanel`) for detail, tables (`TableView`), media (`MediaViewer`). These become pushed pages / full-screen viewers on mobile.
- Popovers and menus are fine on web. They become bottom sheets on mobile.

## React / other frameworks

- Keep the DOM and class names from `preview.html`. Convert `class` → `className`.
- Call `RadiusUI.init(ref.current)` in `useEffect` after mount and after list updates.
- Do not wrap with a UI library, do not restyle with Tailwind or inline styles. If a prop is needed, map it to a class or `data-*` that already exists.

```jsx
function StatsCard({ data }) {
  const ref = useRef(null);
  useEffect(() => { window.RadiusUI?.init(ref.current); }, [data]);
  return (
    <div ref={ref} className="rds-mc rds-mc--lg" aria-label="Import result">
      <div className="rds-mc__stats">
        {data.stats.map(s => (
          <div className="rds-mc__stat" key={s.label}><b>{s.value}</b><span className="rds-mc__m">{s.label}</span></div>
        ))}
      </div>
      {data.warning && <div className="rds-mc__warn"><i data-icon="alert-triangle" /><span><b>{data.warning.title}</b> · {data.warning.text}</span></div>}
    </div>
  );
}
```

## Tokens

Use semantic CSS variables (`--background`, `--foreground`, `--primary`, `--muted`, `--muted-foreground`, `--border`, `--success`, `--warning`, `--info`, `--destructive` and their `-muted` pairs). `--mel-*` primitives only where `web/README.md` names them (marks, icon tiles, gradients). Full list: `web/tokens.json`.
