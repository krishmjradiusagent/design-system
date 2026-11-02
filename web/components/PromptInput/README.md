# PromptInput

The chat composer (Mel web `.g-box`). White, 1px `border`, `radius-4xl` (26), `shadow-composer`, 15.5px auto-growing field (max 200px), toolbar: attach / assistant picker left, dictate + round 38px Deep Teal submit right.

**Markup:** `.rds-prompt` > optional `__attachments` (Attachment chips) · `textarea.rds-prompt__field` · `__toolbar` > `__tools` + `__right` > `.rds-prompt__submit`. Add `data-auto` on the submit to disable it while empty. `rds-prompt--glow` adds the Mint glow behind (home screen only).

- Do keep it docked at the bottom of the conversation, max 720px.
- Placeholder says "Ask Mel anything".
