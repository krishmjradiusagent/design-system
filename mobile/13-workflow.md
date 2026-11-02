# Workflow — the harness loop

Run commands from the `foundations/` folder. Node 18+. Zero dependencies.

## 0. Before anything
Restate the task in 3 lines: **what** (screen / sheet / component), **which template**, **expression level**. List assumptions. If an assumption touches `decisions.md` → ask KJ first.

## 1. Scaffold — never start from blank
```bash
node scripts/new.mjs screen-tab     home               "../Post-design system projects/office-app"
node scripts/new.mjs screen-pushed  transaction-detail "../Post-design system projects/office-app"
node scripts/new.mjs sheet          add-document       "../Post-design system projects/office-app"
node scripts/new.mjs component      deal-card          ../Components
```
Paths to `build/radius.css` + `harness.js` are fixed automatically.

## 2. Compose
1. Reuse an approved component from `../Components/` if one fits. Read its contract `.md`.
2. Otherwise pick atoms from `build/manifest.json` → `classes`.
3. Text → `.t-*` role. Color → `.tone-*` / `.role-*`. Surfaces → `.rm-card` variants. Spacing → named slots.
4. Need something neither can express? → it's a **new component** (`.c-*`): scaffold it, write its contract `.md`, ask KJ.
5. Mel → `<span class="mel mel--inline|dock|hero" data-state="…"></span>`.

## 3. Lint
```bash
node scripts/lint-tokens.mjs <your file or folder>
```
Must print `Clean`. It catches: raw colors, tier-1 tokens, black, raw font-size, new gradients, native select, hand-written Mel, **invented tokens**, **invented classes**.
`lint-ignore: <reason>` is allowed only for harness/preview chrome. Never in product UI.

## 4. Self-review in the harness
Open the file in a browser with:
- `?compare=1` → dark + light side by side
- `&exp=quiet|accented|colorful`
- `&platform=android` → 48dp hit areas
- `&ts=1.5` → Dynamic Type max
Check `harness/checklist.md` line by line.

## 5. Hand off
Reply to KJ with: screenshot(s) or link · expression used · any new component + its contract · open questions with `Rec:`.

## Changing the system (KJ only)
Edit `tokens/*.json` or `src/*.css` → `node scripts/build-tokens.mjs` → lint all → update `docs/decisions.md`.
