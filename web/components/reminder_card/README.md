# reminder_card

**JSON `type`:** `reminder_card` · Mel Chat Templates v0.2.1.


A timed CRM follow-up, calendar meeting or property showing, all in the same chrome: icon tile, title, when, key-value rows, and optional actions. It replaces the legacy `client_reminder`, `meeting` and `property_visit` cards.

**Fields:**
- `data.kind`: reminder (default) | meeting | showing
- `data.icon`: phone | calendar | home
- `data.title`, `data.when` (ISO), `data.when_text`, `data.rows[]{label, value}`
- `data.actions[]`
- `data.id`: `reminder:<id>` | `meeting:<event_id>`

**Actions:** a meeting gets "Open calendar" (secondary) and "Join meeting" (primary). A showing gets "Open calendar".
**Kind tint:** meeting uses an info tile, showing uses a success tile.
