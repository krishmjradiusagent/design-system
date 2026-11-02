# web_sources

**JSON `type`:** `web_sources` · Mel Chat Templates v0.2.1 · legacy `google_search` (design pending on the templates page).

**Status:** Mel-style design approved by KJ on 2 Nov 2026. There is no Mel web board for it yet.


The sources under an answer: up to five site icons overlapped in one pill, "Sources", and "+N more". Tapping opens the list of sources (title and domain), as a popover on web and a sheet on mobile.
**Site icons:** each site's favicon in a 20px circle. Without one, the first letter shows on Sky Mist (shown). No brand logos are drawn.
**Markup:** `button.rds-sources` > `.rds-sources__favs > .rds-fav` ×≤5 + label + `.rds-sources__more`, then `.rds-srclist`.
