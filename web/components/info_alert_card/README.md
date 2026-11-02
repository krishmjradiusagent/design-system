# info_alert_card

**JSON `type`:** `info_alert_card` · Mel Chat Templates v0.2.1.


A tinted notice with a title, one line and one action. Used for paused work ("Your import is waiting") and recoveries.

**Fields:** `data.tone` (info | warning | danger | success), `data.title`, `data.text`, `data.actions[1]` (link style).
**Markup:** `.rds-ialert[data-tone]` > icon + `.rds-ialert__body` (`__t`, `__m`, `button.rds-ialert__act`).
