// IndexNow submitter (Bing, Yandex, Seznam, Naver...). Google does not use IndexNow; rely on the sitemap + Search Console.
//
//   node scripts/indexnow.mjs https://www.example.com          -> dry run: lists changed URLs, submits nothing
//   INDEXNOW_ENABLED=1 node scripts/indexnow.mjs https://...    -> submits changed URLs and updates the state file
//
// Run AFTER a production deploy is live. Only URLs whose visible content (title, description, H1, body text)
// changed since the last successful submission are sent; removed sitemap URLs are sent once so engines recrawl the 404.
// The key is public by design: IndexNow verifies ownership by fetching https://<host>/<key>.txt.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const origin = (process.argv[2] || '').replace(/\/$/, '');
if (!/^https:\/\//.test(origin)) { console.error('Usage: node scripts/indexnow.mjs https://canonical-origin'); process.exit(1); }
const enabled = process.env.INDEXNOW_ENABLED === '1';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const keyFile = fs.readdirSync(path.join(root, 'public')).find(f => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.error('No IndexNow key file (public/<32 hex>.txt) found.'); process.exit(1); }
const key = keyFile.slice(0, -4);
const stateFile = path.join(root, 'research', 'indexnow-state.json');
const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, 'utf8')) : {};

const keyCheck = await fetch(`${origin}/${keyFile}`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== key) { console.error(`Key file not live at ${origin}/${keyFile}. Deploy first.`); process.exit(1); }

const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
const fingerprint = html => crypto.createHash('sha256').update(
  html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).digest('hex').slice(0, 16);

const next = {}; const changed = [];
for (const url of urls) {
  const res = await fetch(url, { redirect: 'manual' });
  if (res.status !== 200) { console.warn(`skip ${res.status} ${url}`); continue; }
  next[url] = fingerprint(await res.text());
  if (state[url] !== next[url]) changed.push(url);
}
const removed = Object.keys(state).filter(u => !urls.includes(u));
const submit = [...changed, ...removed];
console.log(`${urls.length} sitemap URLs, ${changed.length} new/changed, ${removed.length} removed.`);
submit.forEach(u => console.log('  ' + u));
if (!submit.length) process.exit(0);
if (!enabled) { console.log('Dry run. Set INDEXNOW_ENABLED=1 to submit.'); process.exit(0); }

const host = new URL(origin).host;
for (let i = 0; i < submit.length; i += 10000) {
  const body = JSON.stringify({ host, key, keyLocation: `${origin}/${keyFile}`, urlList: submit.slice(i, i + 10000) });
  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' }, body });
    console.log(`IndexNow batch ${i / 10000 + 1}, attempt ${attempt}: HTTP ${r.status}`);
    ok = r.status === 200 || r.status === 202;
    if (r.status === 429 || r.status >= 500) await new Promise(s => setTimeout(s, 5000 * attempt)); else if (!ok) break;
  }
  if (!ok) { console.error('Submission failed; state not updated.'); process.exit(1); }
}
fs.writeFileSync(stateFile, JSON.stringify(next, null, 1) + '\n');
console.log('Accepted for processing (this is not confirmation of indexing). State saved.');
