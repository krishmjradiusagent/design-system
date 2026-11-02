/* Radius component builder — one source for the gallery page (browser) and tools/new-component.mjs (Node).
 * Turns a Mel card JSON payload into web (Radius UI) and mobile (Radius Mobile) markup, using ONLY existing parts.
 * It never invents classes or tokens. Fields it cannot place are listed as "unmapped" for the designer to decide.
 * Output is a PROPOSAL until the design owner (KJ) approves it.
 */
(function (root) {
  'use strict';

  // ---------- icon map: payload icon / channel names → web (Lucide subset in bundle.js) and mobile (Phosphor)
  var ICONS = {
    phone: ['phone', 'phone'], call: ['phone', 'phone'], users: ['users', 'users'], user: ['user', 'user'],
    megaphone: ['megaphone', 'megaphone'], envelope: ['mail', 'envelope-simple'], email: ['mail', 'envelope-simple'],
    mail: ['mail', 'envelope-simple'], text: ['message-circle', 'chat-circle'], chat: ['message-circle', 'chat-circle'],
    sms: ['message-circle', 'chat-circle'], calendar: ['calendar', 'calendar-blank'], meeting: ['calendar', 'video-camera'],
    home: ['home', 'house'], house: ['home', 'house'], property: ['home', 'house'], showing: ['home', 'house'],
    search: ['search', 'magnifying-glass'], list: ['list-ordered', 'list-numbers'], target: ['trending-up', 'target'],
    file: ['file-text', 'file-text'], document: ['file-text', 'file-text'], pdf: ['file-text', 'file-pdf'],
    image: ['image', 'image'], video: ['play', 'video-camera'], reel: ['play', 'film-reel'], post: ['image', 'instagram-logo'],
    flyer: ['file-text', 'file-pdf'], website: ['globe', 'globe'], globe: ['globe', 'globe'], link: ['link', 'link'],
    instagram: ['image', 'instagram-logo'], facebook: ['globe', 'facebook-logo'], linkedin: ['globe', 'linkedin-logo'],
    tiktok: ['play', 'tiktok-logo'], send: ['send', 'paper-plane-tilt'], 'paper-plane': ['send', 'paper-plane-tilt'],
    bell: ['bell', 'bell'], clock: ['clock', 'clock'], warning: ['alert-triangle', 'warning'], info: ['info', 'info'],
    check: ['check', 'check'], chart: ['bar-chart', 'chart-bar'], money: ['dollar-sign', 'currency-dollar'],
    note: ['pencil', 'pencil-simple'], pencil: ['pencil', 'pencil-simple'], palette: ['palette', 'palette'],
    lock: ['lock', 'lock'], star: ['sparkles', 'star'], sparkles: ['sparkles', 'sparkle'], map: ['map-pin', 'map-pin'],
    building: ['building', 'buildings'], settings: ['settings', 'gear'], download: ['download', 'download-simple'],
    upload: ['upload', 'upload-simple'], trophy: ['trophy', 'trophy'], inbox: ['inbox', 'tray']
  };
  function icon(name, platform) {
    var k = String(name || '').toLowerCase().replace(/^ph-|^ph /, '');
    var pair = ICONS[k] || ICONS[k.split('-')[0]] || ['circle', k || 'circle'];
    return platform === 'web' ? pair[0] : pair[1];
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  var TONES = { success: 1, warning: 1, danger: 1, info: 1, neutral: 1 };
  function tone(t) { return TONES[t] ? t : 'neutral'; }
  // mobile chip tone classes that exist in Radius Mobile
  function mTone(t) { return { success: 'tone-success', warning: 'tone-warning', danger: 'tone-danger', info: 'tone-info', neutral: 'tone-sage' }[tone(t)]; }
  var WI = function (n) { return '<i data-icon="' + esc(icon(n, 'web')) + '"></i>'; };
  var MI = function (n) { return '<i class="ph ph-' + esc(icon(n, 'mobile')) + '" aria-hidden="true"></i>'; };
  var BTN = {
    web: { primary: 'rds-btn rds-btn--primary rds-btn--sm', secondary: 'rds-btn rds-act--secondary rds-btn--sm', link: 'rds-btn rds-act--link rds-btn--sm', danger: 'rds-btn rds-act--danger rds-btn--sm' },
    mobile: { primary: 'rm-btn rm-btn--primary rm-btn--sm t-meta', secondary: 'rm-btn rm-btn--secondary rm-btn--sm t-meta', link: 'rm-btn rm-btn--link rm-btn--sm t-meta', danger: 'rm-btn rm-btn--danger rm-btn--sm t-meta' }
  };
  var KNOWN = ['id', 'state', 'title', 'subtitle', 'caption', 'icon', 'kind', 'channel', 'badge', 'tone', 'text', 'body', 'note', 'quote',
    'reply', 'subject', 'to', 'when_text', 'name', 'initials', 'stats', 'warning', 'rows', 'changes', 'items', 'options', 'cards',
    'steps', 'step', 'sections', 'more_count', 'more', 'link', 'footnote', 'actions', 'prompts', 'list_title', 'url'];

  // ---------- normalise a payload into parts
  function parts(payload) {
    var d = (payload && payload.data) || payload || {};
    var p = { type: (payload && payload.type) || 'new_card', d: d, unmapped: [] };
    Object.keys(d).forEach(function (k) { if (KNOWN.indexOf(k) < 0) p.unmapped.push(k); });
    p.title = d.title || d.name || (d.to && d.channel ? (cap(d.channel) + ' to ' + (d.to.name || d.to.label || '')) : '');
    p.subtitle = d.subtitle || d.when_text || '';
    p.icon = d.icon || d.channel || d.kind || null;
    p.initials = d.initials || null;
    p.badge = d.badge || null;
    p.text = d.text || d.body || d.note || d.quote || d.reply || '';
    p.subject = d.subject || null;
    p.caption = d.caption || null;
    p.noteLayout = !!(p.text && (p.caption || p.subtitle || p.title));   // header row + full-width body rule
    p.stats = d.stats || null;
    p.warning = d.warning || null;
    p.rows = (d.rows || []).concat((d.changes || []).map(function (c) { return { label: c.label, from: c.from, to: c.to, change: true }; }));
    p.items = d.items || d.options || d.cards || null;
    p.steps = d.steps || (d.step ? [d.step] : null);
    p.sections = d.sections || null;
    p.more = d.more_count ? '+' + d.more_count + ' more' : (d.more && d.more.label) || null;
    p.link = d.link || null;
    p.footnote = d.footnote || null;
    p.actions = (d.actions || []).filter(function (a) { return a && a.label; });
    p.prompts = (payload && payload.prompts) || d.prompts || null;
    p.tap = !!(p.link && !p.actions.length && !p.rows.length && !p.stats && !p.items);
    return p;
  }
  function cap(s) { s = String(s || ''); return s.charAt(0).toUpperCase() + s.slice(1); }
  function rowValue(r, platform) {
    if (r.change) return r.to == null ? esc(r.from) + ' · no change' : '<s>' + esc(r.from) + '</s> → ' + esc(r.to);
    if (r.from != null && r.to != null) return esc(r.from) + ' to ' + esc(r.to);
    if (r.chips) return r.chips.map(function (c) { return chip(c.text, c.tone, platform); }).join(platform === 'web' ? ' ' : '');
    if (r.badge) return chip(r.badge.text, r.badge.tone, platform);
    if (r.tone && r.value != null) return chip(r.value, r.tone, platform);
    return esc(r.value);
  }
  function chip(text, t, platform) {
    return platform === 'web' ? '<span class="rds-tchip" data-tone="' + tone(t) + '">' + esc(text) + '</span>'
      : '<span class="sq-ch rm-chip t-chip ' + mTone(t) + '">' + esc(text) + '</span>';
  }

  // ---------- WEB (Radius UI)
  function web(p) {
    var h = [], d = p.d;
    var tileOrAv = p.initials ? '<span class="rds-mc__av">' + esc(p.initials) + '</span>' : p.icon ? '<span class="rds-mc__tile">' + WI(p.icon) + '</span>' : '';
    var badge = p.badge ? '<span class="rds-tbadge" data-tone="' + tone(p.badge.tone) + '"><i></i>' + esc(p.badge.text) + '</span>' : '';
    var chev = p.tap ? '<i data-icon="chevron-right"></i>' : '';
    if (p.noteLayout) {
      var capText = p.caption || p.subtitle || p.title, title = (p.caption || p.subtitle) ? p.title : '';
      h.push('<div class="rds-note__head">' + tileOrAv + '<span class="rds-mc__m rds-note__cap">' + esc(capText) + '</span>' + badge + chev + '</div>');
      h.push('<div class="rds-note__body">' + (title ? '<span class="rds-mc__t">' + esc(title) + '</span>' : '') +
        (p.subject ? '<span class="rds-mc__b"><b>Subject:</b> ' + esc(p.subject) + '</span>' : '') +
        '<span class="rds-mc__b' + (p.tap ? ' rds-mc__clamp' : '') + '">' + esc(p.text) + '</span></div>');
    } else if (p.title) {
      h.push('<div class="rds-mc__head">' + tileOrAv + '<span class="rds-mc__ht"><span class="rds-mc__t">' + esc(p.title) + '</span>' +
        (p.subtitle ? '<span class="rds-mc__m">' + esc(p.subtitle) + '</span>' : '') + '</span>' + badge + chev + '</div>');
    }
    if (p.stats) h.push('<div class="rds-mc__stats">' + p.stats.map(function (s) { return '<div class="rds-mc__stat"><b>' + esc(s.value) + '</b><span class="rds-mc__m">' + esc(s.label) + '</span></div>'; }).join('') + '</div>');
    if (p.warning) h.push('<div class="rds-mc__warn">' + WI('warning') + '<span><b>' + esc(p.warning.title) + '</b>' + (p.warning.text ? ' · ' + esc(p.warning.text) : '') + '</span></div>');
    if (p.rows.length) h.push('<div class="rds-mc__kv">' + p.rows.map(function (r) { return '<div><span class="rds-mc__m">' + esc(r.label) + '</span><span class="rds-mc__b">' + rowValue(r, 'web') + '</span></div>'; }).join('') + '</div>');
    if (p.steps) h.push('<div class="rds-mc__kv">' + p.steps.map(function (s) { return '<div><span class="rds-mc__m">' + esc([s.timing || s.day, cap(s.channel)].filter(Boolean).join(' · ')) + '</span><span class="rds-mc__b"><b>' + esc(s.title || '') + '</b> ' + esc(s.body || s.text || '') + '</span></div>'; }).join('') + '</div>');
    if (p.sections) h.push(p.sections.map(function (s) { return '<div class="rds-mc__kv"><div><span class="rds-mc__m">' + esc(s.title || cap(s.channel)) + '</span><span class="rds-mc__b">' + (s.subject ? '<b>' + esc(s.subject) + '</b> ' : '') + esc(s.body || '') + '</span></div></div>'; }).join(''));
    if (p.items) h.push(p.items.map(function (it) {
      var lead = it.initials ? '<span class="rds-mc__av">' + esc(it.initials) + '</span>' : (it.icon || it.provider) ? '<span class="rds-mc__tile">' + WI(it.icon || it.provider) + '</span>' : '';
      var trail = it.action ? '<button type="button" class="' + BTN.web[it.action.style || 'secondary'] + '">' + esc(it.action.label) + '</button>'
        : it.badge ? chip(it.badge.text, it.badge.tone, 'web') : it.status ? '<span class="rds-mc__m">' + esc(it.status) + '</span>'
        : (it.trailing || it.time) ? '<span class="rds-mc__m">' + esc(it.trailing || it.time) + '</span>' : '';
      return '<div class="rds-mc__row">' + lead + '<span class="rds-mc__ht"><span class="rds-mc__t">' + esc(it.title || it.text || it.name || '') + '</span>' + ((it.subtitle) ? '<span class="rds-mc__m">' + esc(it.subtitle) + '</span>' : '') + '</span>' + trail + '</div>';
    }).join('') + (p.more ? '<button type="button" class="rds-mc__more">' + esc(p.more) + '</button>' : ''));
    if (p.link) h.push('<a class="rds-link-row" href="#"><span class="rds-mc__tile">' + WI(p.link.icon || 'link') + '</span><span class="rds-link-row__t"><span class="rds-mc__t">' + esc(p.link.title) + '</span>' + (p.link.subtitle ? '<span class="rds-mc__m">' + esc(p.link.subtitle) + '</span>' : '') + '</span>' + WI('chevron-right') + '</a>');
    if (p.footnote || p.actions.length) h.push('<div class="rds-mc__foot"><span class="rds-mc__m">' + esc(p.footnote || '') + '</span><span style="display:flex;gap:8px">' +
      p.actions.map(function (a) { return '<button type="button" class="' + BTN.web[a.style || 'secondary'] + '"' + (a.kind === 'approve' ? ' data-rds-send' : a.kind === 'retry' ? ' data-kind="retry"' : '') + '>' + esc(a.label) + '</button>'; }).join('') + '</span></div>');
    var cls = 'rds-mc rds-mc--lg' + (p.items ? ' rds-mc--list' : '') + (p.tap ? ' rds-mc--tap' : '') + (p.noteLayout && p.tap ? ' rds-note' : '');
    var card = h.length ? (p.tap ? '<a class="' + cls + '" href="#">' : '<section class="' + cls + '" aria-label="' + esc(p.title || p.type) + '">') + h.join('') + (p.tap ? '</a>' : '</section>') : '';
    var prompts = p.prompts ? '<div class="rds-prompt-rows">' + p.prompts.map(function (q) { return '<button type="button" class="rds-prompt-row' + (q.style === 'more' ? ' rds-prompt-row--more' : q.style === 'destructive' ? ' rds-prompt-row--destructive' : '') + '"><i data-icon="prompt-glyph" class="rds-prompt-row__glyph"></i><span class="rds-prompt-row__text">' + esc(q.text) + '</span></button>'; }).join('') + '</div>' : '';
    return '<div class="rds" data-rds-chat style="padding:24px;background:var(--background);min-height:100%;box-sizing:border-box"><div style="display:flex;flex-direction:column;gap:10px;max-width:560px">' + card + prompts + '</div></div>';
  }

  // ---------- MOBILE (Radius Mobile)
  function mobileCard(p) {
    var h = [];
    var lead = p.initials ? '<span class="m-av" aria-hidden="true">' + esc(p.initials) + '</span>' : p.icon ? '<span class="rm-tile" aria-hidden="true">' + MI(p.icon) + '</span>' : '';
    var badge = p.badge ? '<span class="sq-status t-meta tone-' + tone(p.badge.tone) + '"><i></i>' + esc(p.badge.text) + '</span>' : '';
    var chev = p.tap ? '<i class="m-link__go ph ph-caret-right" aria-hidden="true"></i>' : '';
    if (p.noteLayout) {
      var capText = p.caption || p.subtitle || p.title, title = (p.caption || p.subtitle) ? p.title : '';
      h.push('<span class="m-note__head">' + lead + '<span class="t-meta t-secondary m-note__cap">' + esc(capText) + '</span>' + badge + chev + '</span>');
      h.push('<span class="m-note__body">' + (title ? '<span class="t-body-strong">' + esc(title) + '</span>' : '') +
        (p.subject ? '<span class="t-body-strong">' + esc(p.subject) + '</span>' : '') +
        '<span class="t-body' + (p.tap ? ' m-clamp2' : '') + '">' + esc(p.text) + '</span></span>');
    } else if (p.title) {
      h.push('<div class="m-prow m-prow--head">' + lead + '<span class="m-prow__t"><span class="t-body-strong">' + esc(p.title) + '</span>' + (p.subtitle ? '<span class="t-meta t-secondary">' + esc(p.subtitle) + '</span>' : '') + '</span>' + badge + chev + '</div>');
    }
    if (p.stats) h.push('<div class="m-stats">' + p.stats.map(function (s) { return '<div class="m-stat"><p class="t-body-strong">' + esc(s.value) + '</p><p class="t-meta t-secondary">' + esc(s.label) + '</p></div>'; }).join('') + '</div>');
    if (p.warning) h.push('<div class="m-warnrow"><span class="m-warnrow__ic">' + MI('warning') + '</span><span class="t-meta"><span class="t-body-strong">' + esc(p.warning.title) + '</span>' + (p.warning.text ? ' · ' + esc(p.warning.text) : '') + '</span></div>');
    p.rows.forEach(function (r) { h.push('<div class="m-kv"><span class="t-meta t-secondary">' + esc(r.label) + '</span><span class="t-body">' + rowValue(r, 'mobile') + '</span></div>'); });
    if (p.steps) p.steps.forEach(function (s) { h.push('<div class="m-kv"><span class="t-meta t-secondary">' + esc([s.timing || s.day, cap(s.channel)].filter(Boolean).join(' · ')) + '</span><span class="t-body"><span class="t-body-strong">' + esc(s.title || '') + '</span> ' + esc(s.body || s.text || '') + '</span></div>'); });
    if (p.sections) p.sections.forEach(function (s) { h.push('<div class="m-kv"><span class="t-meta t-secondary">' + esc(s.title || cap(s.channel)) + '</span><span class="t-body">' + (s.subject ? '<span class="t-body-strong">' + esc(s.subject) + '</span> ' : '') + esc(s.body || '') + '</span></div>'); });
    if (p.items) {
      var rows = p.items.map(function (it) {
        var l = it.initials ? '<span class="m-av" aria-hidden="true">' + esc(it.initials) + '</span>' : (it.icon || it.provider) ? '<span class="rm-tile" aria-hidden="true">' + MI(it.icon || it.provider) + '</span>' : '';
        var trail = it.action ? '<button type="button" class="' + BTN.mobile[it.action.style || 'secondary'] + '">' + esc(it.action.label) + '</button>'
          : it.badge ? chip(it.badge.text, it.badge.tone, 'mobile') : (it.status || it.trailing || it.time) ? '<span class="t-meta t-secondary">' + esc(it.status || it.trailing || it.time) + '</span>' : '';
        return '<div class="m-prow">' + l + '<span class="m-prow__t"><span class="t-body-strong">' + esc(it.title || it.text || it.name || '') + '</span>' + (it.subtitle ? '<span class="t-meta t-secondary">' + esc(it.subtitle) + '</span>' : '') + '</span>' + trail + '</div>';
      }).join('');
      h.push('<div class="m-plist" style="padding:0">' + rows + (p.more ? '<button type="button" class="m-plist__more"><span>' + esc(p.more) + '</span><i class="ph ph-caret-right" aria-hidden="true"></i></button>' : '') + '</div>');
    }
    if (p.link) h.push('<a class="m-link" href="#"><span class="rm-tile" aria-hidden="true">' + MI(p.link.icon || 'link') + '</span><span class="m-link__t"><span class="t-body-strong">' + esc(p.link.title) + '</span>' + (p.link.subtitle ? '<span class="t-meta t-secondary">' + esc(p.link.subtitle) + '</span>' : '') + '</span><i class="m-link__go ph ph-caret-right" aria-hidden="true"></i></a>');
    if (p.footnote || p.actions.length) h.push('<div class="m-dfoot"><span class="t-meta t-secondary">' + esc(p.footnote || '') + '</span><span style="display:flex;gap:var(--space-2)">' +
      p.actions.map(function (a) { return '<button type="button" class="' + BTN.mobile[a.style || 'secondary'] + '"><span>' + esc(a.label) + '</span></button>'; }).join('') + '</span></div>');
    var card = '';
    if (h.length) card = p.tap && p.noteLayout ? '<a class="m-note" href="#">' + h.join('') + '</a>'
      : '<section class="m-crm-card" aria-label="' + esc(p.title || p.type) + '">' + h.join('') + '</section>';
    var prompts = p.prompts ? '<div class="c-prompt-rows">' + p.prompts.map(function (q) { return '<button type="button" class="c-prompt-row' + (q.style === 'more' ? ' c-prompt-row--more' : q.style === 'destructive' ? ' c-prompt-row--destructive' : '') + '"><i class="ph ph-arrow-bend-down-right c-prompt-row__glyph" aria-hidden="true"></i><span class="c-prompt-row__text">' + esc(q.text) + '</span></button>'; }).join('') + '</div>' : '';
    return card + prompts;
  }
  var MOBILE_HEAD = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">\n<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">\n' +
    '<style>body{margin:0;background:var(--bg-page)}.mx{display:grid;grid-template-columns:repeat(2,minmax(0,390px));gap:var(--space-6);justify-content:center;padding:var(--space-4)}\n' +
    '.mx>.cell{position:relative;background:var(--bg-page);border-radius:var(--radius-sheet);padding:var(--space-4);color:var(--text-primary);min-width:0;font-family:var(--font-sans);display:flex;flex-direction:column;gap:var(--space-3)}\n' +
    '.lab{margin:0;color:var(--text-secondary)}</style></head><body class="rm-root">';
  function mobile(p) {
    var body = mobileCard(p);
    return MOBILE_HEAD + '<div class="mx">' + ['light', 'dark'].map(function (t) { return '<div class="cell" data-theme="' + t + '" data-platform="ios"><p class="lab t-caption">' + cap(t) + '</p>' + body + '</div>'; }).join('') + '</div></body></html>';
  }

  // ---------- files
  function readme(p, platform, name, date) {
    var fields = Object.keys(p.d);
    return '# ' + name + '\n\n' +
      '**Status: proposal.** Generated by the Radius builder on ' + date + ' from a JSON payload. Needs design owner (KJ) approval before any app ships it.\n\n' +
      '**JSON `type`:** `' + p.type + '` · Platform: ' + (platform === 'web' ? 'Radius UI (web)' : 'Radius Mobile (iOS + Android)') + '\n\n' +
      '## Fields → parts\n\n' + fields.map(function (f) { return '- `data.' + f + '`' + (p.unmapped.indexOf(f) >= 0 ? ' — **not placed** (decide where it goes, or drop it)' : ''); }).join('\n') + '\n\n' +
      '## Layout\n\n' + (p.noteLayout ? '- Header row (icon + caption' + (p.tap ? ' + chevron' : '') + ') with full-width body, per `docs/radius-cards/04-layout-rules.md`.\n' : '- Head (icon + title + subtitle), then content rows.\n') +
      (p.actions.length ? '- One primary action in the foot; others become prompt rows if more than one.\n' : '') +
      (platform === 'mobile' ? '- Mobile: detail → pushed page; lists / pickers → bottom sheet; media → full-screen viewer. No popovers.\n' : '') +
      '\n## Before approval\n\n- [ ] Every field placed or dropped on purpose\n- [ ] States covered: ' + (p.d.state ? '`' + p.d.state + '` + the others the type can reach' : 'add `draft · working · done · partial · failed` as needed') + '\n- [ ] Copy: sentence case, no apology, no exclamation marks\n' +
      (platform === 'mobile' ? '- [ ] Light + dark checked, 44pt / 48dp targets\n' : '') + '- [ ] Added to `docs/radius-cards/05-card-catalog.md`\n';
  }
  function generate(payload, opts) {
    opts = opts || {};
    var p = parts(payload);
    var name = opts.name || p.type;
    var date = opts.date || new Date().toISOString().slice(0, 10);
    var group = opts.group || 'Mel chat cards';
    var height = opts.height || 420;
    return {
      name: name, parts: p, unmapped: p.unmapped,
      web: { 'preview.html': '<!-- @dsCard group="' + group + '" height=' + height + ' subtitle="Proposal · generated" -->\n' + web(p) + '\n', 'README.md': readme(p, 'web', name, date) },
      mobile: { 'preview.html': '<!-- @dsCard group="' + group + '" height=' + height + ' subtitle="Proposal · generated" -->\n' + mobile(p) + '\n', 'README.md': readme(p, 'mobile', name, date) }
    };
  }

  // ---------- AI prompt (used by gallery AI mode and the CLI --ai flag)
  function aiPrompt(payload, name, classes) {
    return [
      'You design Mel chat cards for Radius. Output ONLY a JSON object: {"web_html": "...", "mobile_html": "...", "notes": "..."}.',
      'web_html: markup for Radius UI. Root: <div class="rds" data-rds-chat style="padding:24px">. Use only these classes: ' + classes.web.join(' ') + '. Icons: <i data-icon="NAME"></i> with names from: ' + classes.webIcons.join(' ') + '.',
      'mobile_html: the card markup only (no <html>), for Radius Mobile. Use only these classes: ' + classes.mobile.join(' ') + '. Icons: <i class="ph ph-NAME"></i> (Phosphor).',
      'Rules: tokens only via existing classes, no inline colours or font sizes. Header row (icon tile + caption + chevron if the whole card is a tap) with title and text full width below when there is a caption and a body. One primary action in the foot. Suggestions fill the composer and never send. Mobile: no popovers or side panels. Sentence case, no apology, no exclamation marks.',
      'Card name: ' + name + '. Payload:', JSON.stringify(payload, null, 2)
    ].join('\n\n');
  }
  function unknownClasses(html, allowed) {
    var set = {}, bad = [];
    (allowed || []).forEach(function (c) { set[c] = 1; });
    (String(html).match(/class="([^"]*)"/g) || []).forEach(function (m) {
      m.slice(7, -1).split(/\s+/).forEach(function (c) { if (c && !set[c] && !/^ph(-|$)/.test(c) && bad.indexOf(c) < 0) bad.push(c); });
    });
    return bad;
  }

  var api = { generate: generate, parts: parts, web: web, mobile: mobile, mobileCard: mobileCard, aiPrompt: aiPrompt, unknownClasses: unknownClasses, ICONS: ICONS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.RadiusBuilder = api;
})(typeof window !== 'undefined' ? window : globalThis);
