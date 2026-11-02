# mel_text

**JSON `type`:** `mel_text` · Mel Chat Templates v0.2.1. Not a card: it is `reply` in the JSON, `ai_response` in the stream.


Mel's own words, with no bubble. It types in as it streams (one word per `--duration-stream-word` 60ms).

**Markdown:**
- paragraphs and **bold**
- bullet and numbered lists
- emoji section headers (a lead emoji is allowed here and in `feature_list` only)
- links in Green Text

**Type:** 16/24 body, Deep Teal; bold is 600. Max width 720px.
**Markup:** `.rds-mtext` > `p`, `strong`, `ul`/`ol`, `a`.
**Copy:** the end of a reply is the question or next step. Prompts come after it as `suggested_prompts`.
