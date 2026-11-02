Class prefix `.c-story-stack`. Styles ship in `components/bundle.css`; load `c-story-stack.css` alone only outside this system. No script.

Canonical source: `components/c-story-stack/c-story-stack.css` in Radius UI Design System.

This component composes the existing Radius mobile `rm-card` atom and `.t-*` roles. Load `/Users/radius/Desktop/Architect/Radius/mobile-design-system/foundations/build/radius.css` first. Do not load the web foundation on the same screen. The mobile foundation remains the source for atom geometry, typography and theme tokens; this canonical component owns only stack composition and the opt-in suggestion variant.

## Variants

- Default: existing 200px cards in a 240px shallow fan; behavior unchanged.
- `c-story-stack--suggestions`: equal 320px cards in a 352px fan, canonical 12px card padding; small capability label, page-title benefit, a labeled example request, and a row-title/meta explanation of MEL’s help and the user’s review. Head/row spacing uses existing 4px card-inner slot, row separator uses existing 8px spacing and separator-on-card. Each card carries `data-theme="light"` and `tone-gilded`; the shared variant maps the existing tone-metric-bg to surface-card, producing existing warm ivory #FFFBF0. No new tokens or type roles. No nested cards or added icons. The suggestion variant uses a top-aligned 12px gap rather than stretching its content with space-between.

Use `.rm-stack.c-story-stack__suggestion-head` for capability label/headline and `.rm-stack.c-story-stack__suggestion-row` for the example request and MEL response/detail pair. Rear layers are aria-hidden. Active layer remains readable. Existing reduced-motion transition rule applies.

## Listing and client conversation cards

Listing and client scenes use one shared `c-story-stack__layer--conversation` composition with `c-story-stack--chat-results`. Each layer is 340px × 400px with equal `space-4` outer padding, the canonical `t-sheet-title`, a right-aligned `c-ai-message--user` request bubble, then a 24px break before the flat `mel--inline` reply header and inset result panel. The client panel presents three compact priority-client rows with the documented mobile `c-avatar` default initials variant, color-coded name/role text, muted location text, and teal Call/plum Message actions using `rm-btn--bare-icon`. The result panel retains its canonical 12px inset and 8px row gap; it has no search field. Call and Message actions only announce simulated prototype feedback and start no communication. Listing uses the opt-in `c-story-stack--listing-assets` composition: two image-first `rm-card` assets in a two-column rail, each with a full-width 120 × 80 property image and a compact footer. The footer keeps the `t-caption` format label on the left and Download/Send actions on the right. Labels inherit the card tone; action glyphs use existing teal and plum tones. Local sample photos are used; actions are prototype-only and no asset generation or transmission occurs. No new tokens or typography roles.

## Synchronization

Edit this canonical CSS only, then copy byte-for-byte to `mobile-design-system/Components/c-story-stack/c-story-stack.css` and consuming prototype vendor paths. Mobile mirror must not diverge. The mobile contract links back here. This component promotes the original mobile stack unchanged and adds the approved suggestion variant (9 October 2026). User provides final visual approval.

## Property search composition

`c-story-stack--property-search` reserves a 432px fan. The opt-in `c-story-stack__layer--property-search` is exactly 320px × 400px with no front scale and a shallow 3% rear spread. Its `c-story-stack__property-surface` sets the supported card padding slot to `space-4` (16px equally); nested canonical card atoms retain their 12px default. The existing ivory suggestion palette is unchanged. Header uses the property `HouseLine` regular Phosphor icon and `tone-sapphire` mapping from mobile `c-fact-list`, a `rm-chip`, and the canonical 15px `t-row-title`. User/assistant semantic layout comes from `components/ai-chat/c-ai-chat.css`; assistant uses `mel--inline` from mobile `foundations/src/mel.css`. Two thumbnail result rows compose `rm-row`, `rm-grow`, and existing type roles with 32px media, token radius, and token gaps. Bottom uses canonical `components/c-search/c-search.css` with a read-only search input. The illustration does not execute a property query. Product chrome contains no demo/sample labels. This variant introduces no visual tokens and does not alter default/listing/control behavior.

## Chat results composition (beUI reference)

`c-story-stack--chat-results` is opt-in alongside suggestions/property-search. All three front cards are exactly 340px × 400px with equal 16px card padding and no scale. The stack height and rear layers follow the active card, using a shallow 2% spread and 4-degree rotation.

Source structure adapted from `Mel onboarding/references/beui/src/components/motion/prediction-market-card.tsx`, installed `PredictionMarketCard`: outer article surface; media/header; inset light panel; vertical rows with media, flexible central text, and a prominent right value. Here the outer response header uses canonical `mel--inline`; outcome rows become two property rows; price metrics replace percentage CTAs. Betting odds, probability bars, volume/chart/bookmark and trading behavior are omitted because they do not describe property results. No new React root is introduced; markup is generated within the existing HTML/JS welcome controller.

Radius-required adaptations: Mona Sans canonical mobile type roles, 14px `radius-card` instead of beUI rounded-3xl, token-backed surface-tile/surface-raised, 48px token thumbnail size, and existing `rm-metric--compact tone-success` price presentation. Equal 16px outer padding remains canonical slot-driven. Existing `c-ai-message` semantic wrappers and `c-search` implementation are reused. No new colors or type sizes. Screenshot likeness is structural rather than pixel identity because Radius tokens govern styling.

The consuming welcome container places dots 8px visually below the active card using the existing 44px hit targets; there is no fixed tall fan spacer. Existing automatic rotation/swipe/manual-dot behavior remains controller-owned.

## Property surface and conversation spacing

The chat-results property surface uses the existing light `surface-raised` white
slot instead of the suggestion gilded surface. Other cards retain gilded. Property
heading uses Mona Sans `t-sheet-title` (17px) with the existing nowrap composition.
A 12px assistant-container margin combines with the existing 12px card gap for
a 24px user-to-MEL break. Reply header vertical padding and property-result row
gap use `space-2` (8px), preserving the 340 × 400px card, equal 16px padding,
canonical controls, and existing dots placement.


## Listing asset previews

`c-story-stack--listing-assets` applies only to the listing-marketing scene. The gray MEL response contains two image-first `rm-card` assets in equal columns with an 8px outer inset, 8px gap, and 8px card padding. Each card places its 120 × 80 property image above a compact footer: color-coded `t-caption` label at left, then Download and Send at right. Upload and landscape-symbol actions are absent.

The exported `rm-btn--bare-icon` control variant composes the canonical `rm-btn rm-btn--ghost` foundation control. It combines existing `space-6` and `space-1` for a transparent 28px layout/hit box, a 16px Phosphor glyph, and the active tone’s `tone-solid`; it adds no circle, background, shadow, or new token. Adjacent actions have non-overlapping hit boxes. Download saves that card’s sample photo; Send gives local prototype feedback and transmits nothing.
