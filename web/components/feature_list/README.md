# feature_list

**JSON `type`:** `feature_list` · Mel Chat Templates v0.2.1.


Short sections, each with an emoji header and a paragraph. Explains what clients (or the agent) can do. It is part of the reply text, with no card chrome.

**Fields:** `data.items[]{emoji, title, text}`; an optional quiet second line uses `.is-quiet`.
**Rule:** this and `mel_text` headers are the only places emoji are allowed.
