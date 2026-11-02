# email_review_card

**JSON `type`:** `email_review_card` · Mel Chat Templates v0.2.1.


An email blast before it sends: recipients (collapsible), subject, the asset and Send. With no recipients it offers Upload CSV and Add a client, and Send stays disabled.

**Fields:**
- `data.id`, `data.state` (draft → working → done | failed)
- `data.title`, `data.subtitle`
- `data.to{label, emails[], more_count}`, `data.subject`, `data.asset{kind, url}`
- `data.actions[]` ("Send email", primary, approve)
- `data.empty_actions[]` (Upload CSV / Add a client, secondary, fill_prompt)

**Markup:** `.rds-mdraft` > head, `.rds-mfield` To with `.rds-mto` (`.rds-mto__line` clamped to 2 lines + `.rds-mto__btn` Show more / Show less), `.rds-maddrow`, Subject, `.rds-asset`, foot.

Try it: Show more, Send.
