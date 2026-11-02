Class prefix `.c-story-card`. Styles ship in `components/bundle.css`; load `c-story-card.css` alone only outside this system. Behaviour: `c-story-card.js`.

Noninteractive sample story cards for the MEL welcome illustration. Supported variants: appointment brief (`morning`), listing social draft (`evening`), task/appointment summary (`night`), and decorative rear image. Time names are data keys and accessible context only; none appear visibly.

Composes `foundations/src/atoms.css` default `rm-card`, `rm-item`, `rm-row`, `rm-stack`, `rm-chip` and existing `t-row-title`, `t-meta`, `t-caption`, `t-chip` roles. No atom geometry or typography overrides. The image wrapper uses the existing card radius and surface tokens. The frame has a 400px minimum illustration height; content grows at larger type sizes. Photo regions are not gallery buttons. Every scenario is fictional and visibly labeled Sample.

`renderStoryCard(scene, {photo, decorative})` accepts a trusted local asset path; scene.time chooses fixed sample content. Decorative cards must be aria-hidden by their stack wrapper. No callbacks, live AI calls, or claimed executions. Parent c-story-stack supplies rear-card layout. Rendered visual approval remains pending.
