# capability_carousel

**JSON `type`:** `capability_carousel` · Mel Chat Templates v0.2.1.


Swipeable cards that show what a skill produces, with page dots. Used in skill intros.

**Fields:** `data.items[]{skill, title, text, preview{kind: image | stats | steps | chat | list | document, …}}`.
**Card:** 280px wide, 4:3 preview, then a skill mark, title, and a 2-line description.
**Preview kinds:**
- `image`: a photo
- `stats`: a 2×2 grid of white tiles
- `steps`: rows with a dot (outlined while pending)
- `chat`: in and out bubbles
- `list`, `document`: rows

**Markup:** `.rds-capr` > `button.rds-capc` (`.rds-capc__prev` > `.rds-ph | .rds-capv--stats|steps|chat`, `.rds-capc__body`) + `.rds-dots`.
