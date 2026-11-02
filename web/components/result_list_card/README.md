# result_list_card

**JSON `type`:** `result_list_card` · Mel Chat Templates v0.2.1. Web only in the designs so far. May merge with `status_list_card` later.


A header with an icon and a summary line, then one row per person saying what happened.

**Fields:** `data.title`, `data.subtitle`, `data.items[]{title, status, tone}`. A warning tone turns the status amber and a danger tone turns it red; success stays Slate.
