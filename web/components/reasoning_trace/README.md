# reasoning_trace

**JSON `type`:** `reasoning_trace` · Mel Chat Templates v0.2.1.


One summary line for the steps Mel took. While running it is open with a spinner. When done it collapses to a check and "Checked N things". Tap to reopen.

**Fields:** `data.id`, `data.state` (working | done), `data.title` (running line), `data.done_title` ("Checked 2 things"), `data.steps[]{text, state}`. No `tool_name`.
**Markup:**
- `.rds-trace[data-running]` > `button.rds-trace__sum[aria-expanded]` + `.rds-trace__steps`
- Each step: `.rds-trace__line[data-status="done|running|queued"]`
- Live demo: `[data-rds-trace-live]` or `RadiusUI.traceLive(el)`

**Timing:**
- 800ms from send to Mel starting (1400ms on a skill switch), then `thinking`.
- One step per 700ms.
- Collapses when the reply starts.
- Reply streams one word per 60ms.
- Prompts rise in after the reply.

**Copy:** each step says what Mel did plus what it found. The summary is always "Checked N things".
