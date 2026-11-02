# 05 · Card catalog (all 54 Mel Chat Templates types)

Generated from the design system export. One row per JSON `type`. Paths are relative to the repo root.

**Columns:** JSON type · what it is · web component · mobile component · example payload · source of the mobile design.

**Source key:** `template` = Mel Chat Templates mobile design · `alias` = template design built from existing Radius Mobile parts · `adapted` = no mobile design on the templates page; adapted from web and approved by KJ · `superseded` = do not build; emit the replacement.

## Mel speaking and working

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `mel_text` | Mel's plain reply: no card, no bubble. Paragraphs, bold, lists. | `web/components/mel_text/` | `mobile/components/mel_text/` | `shared/protocol/examples/mel_text.json` | alias |
| `thinking` | One line while Mel works and has no steps to show yet. | `web/components/thinking/` | `mobile/components/thinking/` | `shared/protocol/examples/thinking.json` | alias |
| `reasoning_trace` | The steps Mel took: open with a spinner while running, collapsed to "Checked N things" when done. Tap the summary to open or close. | `web/components/reasoning_trace/` | `mobile/components/reasoning_trace/` | `shared/protocol/examples/reasoning_trace.json` | alias |
| `job_status` | A one-line status for long work: pulsing dot, what Mel is doing, progress. Same `data.id` replaces the line as work moves; the finished card replaces it at the end. | `web/components/job_status/` | `mobile/components/job_status/` | `shared/protocol/examples/job_status.json` | template |
| `suggested_prompts` | Prompt rows under a reply or in an empty chat. Tap fills the composer; it never sends. | `web/components/suggested_prompts/` | `mobile/components/suggested_prompts/` | `shared/protocol/examples/suggested_prompts.json` | alias |
| `skill_cards` | What Mel can do, as 2-up cards: the skill mark in its colour plus a task. Shown in an empty chat. | `web/components/skill_cards/` | `mobile/components/skill_cards/` | `shared/protocol/examples/skill_cards.json` | template |
| `capability_carousel` | Intro carousel for a new agent: one card per skill with a live-looking preview, the skill mark, name and one line. Snaps card by card; dots show position. | `web/components/capability_carousel/` | `mobile/components/capability_carousel/` | `shared/protocol/examples/capability_carousel.json` | template |

## CRM

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `stats_card` | Result of a contact import. Up to 4 stat tiles in a 2×2 grid, one warning line for anything the agent must fix, then a link row to the CRM. | `web/components/stats_card/` | `mobile/components/stats_card/` | `shared/protocol/examples/stats_card.json` | template |
| `contact_card` | Answer to "Find Jordan". Head: initials, name, type and stage. Rows: phone, email, looking for, last contact. Stacked label over value (mobile has no room for a 2×2 grid). | `web/components/contact_card/` | `mobile/components/contact_card/` | `shared/protocol/examples/contact_card.json` | template |
| `change_card` | Before → after review for a CRM update. Old value struck through in secondary text, new value in primary. Unchanged fields say "no change". | `web/components/change_card/` | `mobile/components/change_card/` | `shared/protocol/examples/change_card.json` | template |
| `message_draft_card` | A message Mel wrote for the agent to approve. Row 1: channel tile (text or email) + "Text to Jordan Lee". Below, full width: the message. Foot: where it sends from and one Send button. | `web/components/message_draft_card/` | `mobile/components/message_draft_card/` | `shared/protocol/examples/message_draft_card.json` | template |
| `reminder_card` | A timed follow-up, meeting or showing in one chrome: icon tile, title, when, rows, optional actions. Replaces legacy `client_reminder`, `meeting`, `property_visit`. | `web/components/reminder_card/` | `mobile/components/reminder_card/` | `shared/protocol/examples/reminder_card.json` | template |
| `campaign_plan_card` | A short check-in plan for a group: title, who it reaches, one row per week with channel and first line, then the stop rule. | `web/components/campaign_plan_card/` | `mobile/components/campaign_plan_card/` | `shared/protocol/examples/campaign_plan_card.json` | template |
| `people_list_card` | Ranked or matching people: initials, name, context line, trailing note. Used for top buyers, duplicates and search results. | `web/components/people_list_card/` | `mobile/components/people_list_card/` | `shared/protocol/examples/people_list_card.json` | template |
| `empty_card` | Nothing to show: a title and one line. Mel follows it with prompt rows. | `web/components/empty_card/` | `mobile/components/empty_card/` | `shared/protocol/examples/empty_card.json` | alias |
| `info_alert_card` | A heads-up in chat: title, one or two lines, one action. | `web/components/info_alert_card/` | `mobile/components/info_alert_card/` | `shared/protocol/examples/info_alert_card.json` | alias |
| `property_card` | One listing: photo, price, address, beds · baths · sqft, Status and MLS rows, then "Open listing". Replaces legacy `property`. | `web/components/property_card/` | `mobile/components/property_card/` | `shared/protocol/examples/property_card.json` | template |
| `search_board_card` | A saved client search: name and area, beds/baths, budget, and "Open search board". Replaces legacy `search_board`. | `web/components/search_board_card/` | `mobile/components/search_board_card/` | `shared/protocol/examples/search_board_card.json` | template |

## Campaigns

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `audience_card` | Who a campaign will reach before anything is written: total matches, how many are ready per channel, and who is excluded (no consent). | `web/components/audience_card/` | `mobile/components/audience_card/` | `shared/protocol/examples/audience_card.json` | template |
| `campaign_sequence_card` | The full campaign: name, touchpoints and length, status badge, then a numbered timeline. Each step shows day, channel chip, title and the whole message. | `web/components/campaign_sequence_card/` | `mobile/components/campaign_sequence_card/` | `shared/protocol/examples/campaign_sequence_card.json` | template |
| `sequence_step_card` | One edited step of a campaign, shown after "change day 3". Same chrome as `campaign_sequence_card` with a single step. | `web/components/sequence_step_card/` | `mobile/components/sequence_step_card/` | `shared/protocol/examples/sequence_step_card.json` | template |
| `approval_summary_card` | The last check before a campaign goes live: campaign, audience, goals, channels, sequence, start. One primary button under the card. | `web/components/approval_summary_card/` | `mobile/components/approval_summary_card/` | `shared/protocol/examples/approval_summary_card.json` | template |
| `campaign_status_card` | A running campaign: name, Live badge, next send, recipients per channel. | `web/components/campaign_status_card/` | `mobile/components/campaign_status_card/` | `shared/protocol/examples/campaign_status_card.json` | template |
| `delivery_result_card` | How a send went: sent, bounced or failed, and what goes out next. | `web/components/delivery_result_card/` | `mobile/components/delivery_result_card/` | `shared/protocol/examples/delivery_result_card.json` | template |
| `connect_card` | The tools Mel needs before it can act: one row per tool, what it unlocks, and a Connect button. | `web/components/connect_card/` | `mobile/components/connect_card/` | `shared/protocol/examples/connect_card.json` | template |

## Client experience

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `portal_card` | A link card for the agent's client portal: thumbnail in their brand colours, site address with a Live dot, title, and copy. | `web/components/portal_card/` | `mobile/components/portal_card/` | `shared/protocol/examples/portal_card.json` | template |
| `portal_status_card` | Where the client portal stands: title, one line, status badge (Not built, Building, Live). | `web/components/portal_status_card/` | `mobile/components/portal_status_card/` | `shared/protocol/examples/portal_status_card.json` | template |
| `feature_list` | A plain list of what something does, grouped by audience: bold heading with an emoji, one line, one secondary line. No card chrome; it reads as Mel's reply. | `web/components/feature_list/` | `mobile/components/feature_list/` | `shared/protocol/examples/feature_list.json` | template |
| `invitation_preview_card` | The invitation clients will get, per channel, with one approve button at the foot. | `web/components/invitation_preview_card/` | `mobile/components/invitation_preview_card/` | `shared/protocol/examples/invitation_preview_card.json` | template |
| `send_summary_card` | One-line result after a send: icon, what happened, per-channel counts. Warning variant when some failed. | `web/components/send_summary_card/` | `mobile/components/send_summary_card/` | `shared/protocol/examples/send_summary_card.json` | template |
| `insights_card` | Portal activity at a glance: three count tiles, then the hot list. Each person row pushes their client page. | `web/components/insights_card/` | `mobile/components/insights_card/` | `shared/protocol/examples/insights_card.json` | template |
| `escalation_card` | A client question Mel handed to the agent: who, where, when, a Needs you badge, and the short thread. | `web/components/escalation_card/` | `mobile/components/escalation_card/` | `shared/protocol/examples/escalation_card.json` | template |

## Marketing

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `listing_picker_card` | Pick which listing to market. Each row is a prompt row: tap fills the composer with "Use 123 Ocean View Drive"; it never sends. | `web/components/listing_picker_card/` | `mobile/components/listing_picker_card/` | `shared/protocol/examples/listing_picker_card.json` | template |
| `option_picker_card` | Pick one or more things to create. 2-up tiles; a selected tile gets a 2px primary ring and a check. | `web/components/option_picker_card/` | `mobile/components/option_picker_card/` | `shared/protocol/examples/option_picker_card.json` | template |
| `style_picker_card` | Pick one design style. 2-up 3:4 tiles with the style name on a dark shade; the last tile spans the row at 16:9. | `web/components/style_picker_card/` | `mobile/components/style_picker_card/` | `shared/protocol/examples/style_picker_card.json` | template |
| `brand_kit_card` | The agent's brand before designs are made: a live preview tile in their colours, then chips for Primary, Accent and Logo. | `web/components/brand_kit_card/` | `mobile/components/brand_kit_card/` | `shared/protocol/examples/brand_kit_card.json` | template |
| `asset_package_card` | A finished package of designs. The whole card is one button: title, count, a strip of thumbnails with "+N" on the last. | `web/components/asset_package_card/` | `mobile/components/asset_package_card/` | `shared/protocol/examples/asset_package_card.json` | template |
| `social_post_review_card` | Social posts to approve: channel head, a sideways rail of pieces (4:5 image, 2-line caption, tags), then one post button. | `web/components/social_post_review_card/` | `mobile/components/social_post_review_card/` | `shared/protocol/examples/social_post_review_card.json` | template |
| `email_review_card` | An email to approve: channel head, recipients on one line with "Show all", add buttons, subject, body with its image, then Send. | `web/components/email_review_card/` | `mobile/components/email_review_card/` | `shared/protocol/examples/email_review_card.json` | template |
| `website_review_card` | A property website to approve: head with Copy link, one 16:9 preview, then Publish. | `web/components/website_review_card/` | `mobile/components/website_review_card/` | `shared/protocol/examples/website_review_card.json` | template |
| `status_list_card` | Where things went, one row per destination: icon, name, what happened, then a status chip or a Connect / Reconnect button. | `web/components/status_list_card/` | `mobile/components/status_list_card/` | `shared/protocol/examples/status_list_card.json` | template |

## Nudges and pickers

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `ytd_progress_card` | Before → after numbers when a deal closes or is about to: volume, GCI, sides, team rank. | `web/components/ytd_progress_card/` | `mobile/components/ytd_progress_card/` | `shared/protocol/examples/ytd_progress_card.json` | adapted |
| `contact_picker_card` | Pick clients for an action. In chat it is a small card with the current pick; "Choose clients" opens a bottom sheet with search, Select all, a check per client and a sticky footer. | `web/components/contact_picker_card/` | `mobile/components/contact_picker_card/` | `shared/protocol/examples/contact_picker_card.json` | adapted |
| `result_list_card` | A header with an icon and summary, then one row per person saying what happened. | `web/components/result_list_card/` | `mobile/components/result_list_card/` | `shared/protocol/examples/result_list_card.json` | adapted |

## Existing app cards (legacy, travel in `actions`)

| JSON type | What it is | Web | Mobile | Example | Source |
|---|---|---|---|---|---|
| `meeting_card` | Superseded. Emit **reminder_card (kind: meeting)**. | — | — | `shared/protocol/examples/meeting_card.json` (legacy shape) | superseded |
| `property_visit_card` | Superseded. Emit **reminder_card (kind: showing)**. | — | — | `shared/protocol/examples/property_visit_card.json` (legacy shape) | superseded |
| `client_card` | A compact pointer to a client. The whole card is the tap target and pushes the client page. | `web/components/client_card/` | `mobile/components/client_card/` | `shared/protocol/examples/client_card.json` | adapted |
| `client_note_card` | Confirms Mel saved a note. Row 1: pencil tile, caption "Created a note · client", chevron on the right. Below, full width from the card edge: note title and a 2-line preview. The whole card is the tap target and pushes the client page scrolled to the note. | `web/components/client_note_card/` | `mobile/components/client_note_card/` | `shared/protocol/examples/client_note_card.json` | adapted |
| `client_reminder_card` | Superseded. Emit **reminder_card (kind: reminder)**. | — | — | `shared/protocol/examples/client_reminder_card.json` (legacy shape) | superseded |
| `offer_card` | Points to an offer. Row 1: file tile, caption "Offer documents for client", chevron on the right. Below, full width: the property address. The whole card pushes the offer page. | `web/components/offer_card/` | `mobile/components/offer_card/` | `shared/protocol/examples/offer_card.json` | adapted |
| `document_card` | A file Mel produced or found: page thumbnail, name, type, size, pages, and Preview. | `web/components/document_card/` | `mobile/components/document_card/` | `shared/protocol/examples/document_card.json` | adapted |
| `image_card` | One image at full card width, keeping its own aspect ratio (4:3 shown). | `web/components/image_card/` | `mobile/components/image_card/` | `shared/protocol/examples/image_card.json` | adapted |
| `web_sources` | Sources under an answer: up to five overlapped site icons in one pill, "Sources", "+N more". Tap opens a bottom sheet listing every source. | `web/components/web_sources/` | `mobile/components/web_sources/` | `shared/protocol/examples/web_sources.json` | adapted |
| `credits_banner` | Shown when an action needs credits the agent doesn't have: what is blocked, when credits renew, a used meter, and View billing. | `web/components/credits_banner/` | `mobile/components/credits_banner/` | `shared/protocol/examples/credits_banner.json` | adapted |

## Parts that are not JSON types

Web-only building blocks used inside cards or pages: `ChatTable`, `TableView`, `RightPanel` (web only; mobile uses a pushed page), `MediaViewer` (mobile: full-screen viewer), `PageCardLink`, `ReportBlocks`, `DataNotices`, `MotionSystem`, `MelCard`, `MelInline`, `CardProtocol`. They are in `web/components/`.

Mobile chat parts: `MelChat`, `StreamingText`, `Trace`, `PromptRow`, `Suggest`, `SkillPills`, `Alert`, `Toast`, `ChatComposer`, `InsightCards`. They are in `mobile/components/`.
