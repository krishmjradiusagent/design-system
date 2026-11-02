# RightPanel

**Web only · not in Mel Chat Templates yet.** Built from the Mel web boards; the backend needs a template type before apps can send it.

The right panel, where cards open full size (Mel web `.lb-view`, `.g-view`). It is 660px wide (600px for the media viewer) and the chat stays live on the left.

**Anatomy:**
- Top 56px: icon, title, scope, Share menu, Refresh, Close.
- Status strip: source dot and "As of" (`data-state="refreshing|warn"`).
- Scrolling body.
- "Ask Mel about this page" foot; the answer lands in chat with a `.rds-ctx-chip` ("About Team leaderboard").

**Motion:**
- Panel in: `--duration-reveal`, 16px.
- Share menu: rises 4px over `--duration-base`.
- Refresh: icon spins `--duration-refresh-spin` and the status pulses while it reloads.

Try it: Share, Refresh.
