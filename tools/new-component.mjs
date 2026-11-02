#!/usr/bin/env node
// Generate a new Radius component (web + mobile) from a Mel card JSON payload, using only existing parts.
//
//   node tools/new-component.mjs --name open_house_card --payload payload.json
//   node tools/new-component.mjs --name open_house_card --payload payload.json --only mobile
//   ANTHROPIC_API_KEY=sk-ant-... node tools/new-component.mjs --name x --payload p.json --ai [--model claude-sonnet-4-5]
//
// Writes web/components/<name>/ and/or mobile/components/<name>/ (preview.html + README.md), marked "Status: proposal",
// then rebuilds gallery/data.js. Refuses to overwrite an existing component unless --force.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const B = require(path.join(ROOT, 'gallery', 'builder.js'));

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf('--' + k); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : null; };
if (opt('help') || !opt('payload')) {
  console.log('Usage: node tools/new-component.mjs --payload payload.json [--name x_card] [--only web|mobile] [--group "Mel chat cards"] [--ai] [--model M] [--force]');
  process.exit(opt('help') ? 0 : 1);
}
const payload = JSON.parse(fs.readFileSync(path.resolve(opt('payload')), 'utf8'));
const name = String(opt('name') || payload.type || 'new_card').toLowerCase().replace(/[^a-z0-9_]+/g, '_');
const only = opt('only');
const targets = only === 'web' ? ['web'] : only === 'mobile' ? ['mobile'] : ['web', 'mobile'];

for (const ds of targets) {
  const dir = path.join(ROOT, ds, 'components', name);
  if (fs.existsSync(dir) && !opt('force')) {
    console.error(`${ds}/components/${name} already exists. Use the existing component, or pass --force to overwrite a proposal.`);
    process.exit(2);
  }
}

const res = B.generate(payload, { name, group: opt('group') || 'Mel chat cards' });

if (opt('ai')) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) { console.error('Set ANTHROPIC_API_KEY to use --ai.'); process.exit(3); }
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'gallery', 'data.js'), 'utf8').replace(/^window\.RADIUS_GALLERY = /, '').replace(/;\s*$/, ''));
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: opt('model') || 'claude-sonnet-4-5', max_tokens: 4000, messages: [{ role: 'user', content: B.aiPrompt(payload, name, data.classes) }] })
  });
  const j = await r.json();
  const txt = (j.content || []).map(c => c.text || '').join('');
  const m = /\{[\s\S]*\}/.exec(txt);
  if (!m) { console.error('AI reply had no JSON:', j.error?.message || txt.slice(0, 300)); process.exit(4); }
  const o = JSON.parse(m[0]);
  const bad = [...B.unknownClasses(o.web_html, data.classes.web), ...B.unknownClasses(o.mobile_html, data.classes.mobile)];
  res.web['preview.html'] = `<!-- @dsCard group="Mel chat cards" height=420 subtitle="Proposal · AI" -->\n${o.web_html}\n`;
  res.mobile['preview.html'] = res.mobile['preview.html'].split(B.mobileCard(res.parts)).join(o.mobile_html);
  for (const ds of ['web', 'mobile']) res[ds]['README.md'] += `\n## AI notes\n\n${o.notes || ''}\n` + (bad.length ? `\n**Unknown classes to fix:** ${bad.join(', ')}\n` : '');
  if (bad.length) console.warn('Unknown classes (not in the design system):', bad.join(', '));
}

for (const ds of targets) {
  const dir = path.join(ROOT, ds, 'components', name);
  fs.mkdirSync(dir, { recursive: true });
  for (const [f, body] of Object.entries(res[ds])) fs.writeFileSync(path.join(dir, f), body);
  console.log(`wrote ${ds}/components/${name}/ (preview.html, README.md)`);
}
if (res.unmapped.length) console.warn('Not placed (decide or drop):', res.unmapped.map(k => 'data.' + k).join(', '));
execFileSync(process.execPath, [path.join(ROOT, 'tools', 'build-gallery.mjs')], { stdio: 'inherit' });
console.log(`Next: open gallery.html (Web / Mobile tabs, "${name}" is tagged proposal), fill the README checklist, send to the design owner.`);
