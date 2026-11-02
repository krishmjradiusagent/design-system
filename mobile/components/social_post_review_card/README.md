# social_post_review_card

Social posts to approve: channel head, a sideways rail of pieces (4:5 image, 2-line caption, tags), then one post button.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `social_post_review_card`. Web twin: Radius UI `social_post_review_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.channel`, `data.handle`, `data.items[]{media_url, kind, caption, tags}`, `data.action{kind: approve, label}`.
**Behaviour:** the rail scrolls sideways and bleeds to the card edge. The expand button on a piece opens it full screen with the whole caption. Edit by asking ("Shorter caption on the reel"). States follow the card protocol (sending → done "Posted").
