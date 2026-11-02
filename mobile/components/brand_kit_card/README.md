# brand_kit_card

The agent's brand before designs are made: a live preview tile in their colours, then chips for Primary, Accent and Logo.

**Source:** Mel Chat Templates v0.2.1, mobile design for JSON `type` `brand_kit_card`. Web twin: Radius UI `brand_kit_card`.
**Native rules:** full width in the chat column. No side panels or popovers: previews open a full-screen viewer (pushed page), lists and choices open a bottom sheet. Tap targets 44pt iOS / 48dp Android.

**Fields:** `data.primary`, `data.accent`, `data.logo_url`.
**Behaviour:** a colour chip opens the system colour picker (iOS UIColorPickerViewController sheet / Android colour sheet). Logo opens the system photo picker. The preview updates as they change.
**Brand colours** are the agent's sample data, not Radius tokens.
