#!/usr/bin/env node
// Builds gallery/data.js from web/components and mobile/components.
// Run after any component is added or changed:  node tools/build-gallery.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

function scan(ds) {
  const dir = path.join(ROOT, ds, 'components');
  return fs.readdirSync(dir).filter(n => fs.existsSync(path.join(dir, n, 'preview.html'))).sort().map(name => {
    const html = fs.readFileSync(path.join(dir, name, 'preview.html'), 'utf8');
    const meta = /<!--\s*@dsCard([^>]*)-->/.exec(html);
    const attr = k => { const m = meta && new RegExp(k + '="([^"]*)"|' + k + '=(\\d+)').exec(meta[1]); return m ? (m[1] ?? m[2]) : null; };
    const rp = path.join(dir, name, 'README.md');
    const readme = fs.existsSync(rp) ? fs.readFileSync(rp, 'utf8') : '';
    const proposal = /\*\*Status: proposal\.\*\*/.test(readme);
    const first = readme.split('\n').slice(1).map(s => s.trim()).find(s => s && !/^[#*<|`-]/.test(s)) || '';
    return { ds, name, group: attr('group') || 'Other', height: +(attr('height') || 360), width: +(attr('width') || 0), subtitle: attr('subtitle') || '', summary: first.slice(0, 220), proposal, html };
  });
}

// Card order + groups from the catalog
const cat = read('docs/radius-cards/05-card-catalog.md');
const cards = []; let group = '';
for (const line of cat.split('\n')) {
  const g = /^## (.+)/.exec(line); if (g) { group = g[1]; continue; }
  const r = /^\| `([a-z_]+)` \| (.*?) \| (.*?) \| (.*?) \| .*? \| (\w+) \|$/.exec(line);
  if (r) cards.push({ type: r[1], group, what: r[2].replace(/`/g, ''), source: r[5] });
}

// Allowed classes (for the builder's AI mode guard)
const cls = css => [...new Set([...css.matchAll(/\.((?:rds|rm|m|c|sq|cx|t|tone|typeset|ui)-?[a-z0-9_-]*)/g)].map(m => m[1]))].filter(c => c.length > 1).sort();
const webJs = read('web/components/bundle.js');
const iconsBlock = /icons: Object\.keys\(ICONS\)/.test(webJs);
const webIcons = [...new Set([...webJs.matchAll(/'([a-z0-9-]+)':\s*'</g)].map(m => m[1]))];
const examples = JSON.parse(read('shared/protocol/examples.json'));

const data = {
  built: new Date().toISOString(),
  cards,
  web: scan('web'),
  mobile: scan('mobile'),
  classes: { web: cls(read('web/components/bundle.css')), mobile: cls(read('mobile/components/bundle.css')), webIcons: webIcons.length ? webIcons : [] },
  examples
};
fs.writeFileSync(path.join(ROOT, 'gallery', 'data.js'), 'window.RADIUS_GALLERY = ' + JSON.stringify(data) + ';\n');
console.log(`gallery/data.js: ${data.web.length} web, ${data.mobile.length} mobile, ${cards.length} cards, ${data.classes.web.length}/${data.classes.mobile.length} classes, ${data.classes.webIcons.length} web icons` + (iconsBlock ? '' : ' (icon list not found)'));
