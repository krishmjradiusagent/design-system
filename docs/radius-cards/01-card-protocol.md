# 01 · Card protocol (Mel Chat Templates v0.2.1)

Same JSON on web, iOS and Android. Examples for all 54 types: `shared/protocol/examples/<type>.json`.

## Envelope

```json
{
  "type": "stats_card",          // JSON type = component name
  "tool_name": "import_contacts", // which tool produced it (analytics, not rendering)
  "v": 1,                         // schema version
  "data": { "id": "import_01", "state": "done", … },
  "fallback_text": "Imported: 1,248 …" // plain text for old clients, notifications, screen readers
}
```

Three special shapes:

| Type | Shape | Render as |
|---|---|---|
| `mel_text` | `{ "reply": "markdown" }` | Mel's plain text (no card, no bubble). Markdown: paragraphs, bold, lists. |
| `thinking` | `{ "event": "thinking" }` | One "Thinking…" line. Replaced by the next item. |
| `suggested_prompts` | `{ "prompts": [{ "text", "style" }] }` | Prompt rows under the reply. |

Legacy app cards (`client`, `client_note`, `offer`, `file`, `image`, `google_search`, `insufficient_credits`, `meeting`, `property_visit`, `client_reminder`) travel in `actions` in their old shape (`{ type, data }`). Map them with `05-card-catalog.md`. `meeting`, `property_visit` and `client_reminder` render as `reminder_card` (kind `meeting`, `showing`, `reminder`).

**Unknown `type`:** render `fallback_text` as `mel_text`. Never crash, never show raw JSON.

## Common `data` fields

| Field | Meaning |
|---|---|
| `id` | Stable id. Same id = replace the earlier card in place. |
| `state` | `draft · working · done · partial · failed · stale` (see below). |
| `title`, `subtitle` | Card head. |
| `rows[]` | `{ label, value }` plus optional `tone`, `icon`, `chips[]{text,tone}`, `badge{text,tone}`, `from`/`to`. |
| `badge` | `{ text, tone }` status pill in the head (Draft, Live, Needs you). |
| `items[]` | List rows (people, listings, destinations). |
| `more_count` | Rows not shown. Renders "+N more". |
| `link` | `{ title, subtitle?, kind, value }` one link row. |
| `actions[]` | `{ label, style, kind, value? }` buttons. |
| `footnote` | One meta line in the card foot ("Sends from your Radius number"). |

## States

| State | Meaning | UI |
|---|---|---|
| `draft` | Ready for the agent to approve. | Primary action enabled. |
| `working` | Mel is doing it. | Spinner on the action (≥600ms), or pulsing dot for `job_status`. |
| `done` | Finished. | Action replaced by a success line ("✓ Sent", "Saved to Radius CRM"). |
| `partial` | Some parts failed. | Warning tone + `retry` for the failed part. |
| `failed` | Nothing worked. | Danger tone + `retry`. |
| `stale` | Data is old. | Secondary "Updated 2h ago" + refresh prompt. |

Older mobile names map to these (table in `mobile/README.md` → "Mel chat card protocol").

## Actions

**`style`** (looks):

| style | Web class | Mobile class |
|---|---|---|
| `primary` | `rds-btn rds-btn--primary` | `rm-btn rm-btn--primary` |
| `secondary` | `rds-btn rds-act--secondary` | `rm-btn rm-btn--secondary` |
| `link` | `rds-btn rds-act--link` | `rm-btn rm-btn--link` |
| `danger` | `rds-btn rds-act--danger` | `rm-btn rm-btn--danger` |

**`kind`** (behaviour):

| kind | Does |
|---|---|
| `send_prompt` | Sends `value` as a user message. Only for explicit buttons, never for suggestions. |
| `fill_prompt` | Puts `value` in the composer. Default for every suggestion. |
| `approve` | Confirms the card (Send, Save, Launch). Card goes `working` → `done`. |
| `deep_link` | Opens an in-app route (`radius://…`). Mobile: pushed page. Web: navigate or right panel. |
| `open_url` | Opens a web page. Mobile: in-app browser (SFSafariViewController / Custom Tab). |
| `connect` | Starts OAuth for `value`. Mobile: system auth sheet. Same `id` returns with `connected: true`. |
| `open_viewer` | Opens media/doc full screen (mobile) or the media viewer (web). |
| `retry` | Re-runs the failed part. |
| `undo` | Reverts the last change. |
| `stop` | Stops running work. |
| `dismiss` | Hides the card. |

## Tones

`success · warning · danger · info · neutral`. Always pair a tone with a word or icon; colour alone never carries meaning.

| Tone | Web tokens | Mobile tokens |
|---|---|---|
| success | `--success`, `--success-muted` | `status-success-fg`, `status-success-bg` |
| warning | `--warning`, `--warning-muted` | `status-warning-fg`, `status-warning-bg` |
| danger | `--destructive`, `--danger-muted` | `status-danger-fg`, `status-danger-bg` |
| info | `--info`, `--info-muted` | `status-info-fg`, `status-info-bg` |
| neutral | `--muted-foreground`, `--muted` | `text-secondary`, `surface-tile` |

## Rendering order in a turn

1. `thinking` → `reasoning_trace` (steps) or `job_status` (long work)
2. `mel_text` (one or two sentences that explain the card)
3. the card(s)
4. `suggested_prompts` (prompt rows)
