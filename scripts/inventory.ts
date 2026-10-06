// Inventory of the live URLs (Fable ruling 3): status, title, description, H1, canonical, word count, images,
// OG image. Run on a machine with internet:  node scripts/inventory.ts before [https://www.waltcodevelopment.com]
// Writes inventory/<name>.json. CI diffs before/after at the switch (W5).
import { mkdirSync, writeFileSync } from 'node:fs';
import { OLD_URLS, ROUTES } from '../content/routes.ts';

const [name = 'before', base = 'https://www.waltcodevelopment.com'] = process.argv.slice(2);
const paths = name === 'before' ? OLD_URLS : ROUTES.map((r) => r.path);
const pick = (re: RegExp, s: string) => re.exec(s)?.[1]?.trim() ?? '';
const out = [];
for (const path of paths) {
  const res = await fetch(base + path, { redirect: 'manual' });
  const html = res.status === 200 ? await res.text() : '';
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  out.push({
    path, status: res.status, location: res.headers.get('location'),
    title: pick(/<title>([^<]*)<\/title>/i, html),
    description: pick(/<meta name="description" content="([^"]*)"/i, html),
    h1: [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, '').trim()),
    canonical: pick(/<link rel="canonical" href="([^"]*)"/i, html),
    words: text ? text.split(' ').length : 0,
    images: (html.match(/<img\b/gi) ?? []).length,
    ogImage: pick(/<meta property="og:image" content="([^"]*)"/i, html),
  });
  console.log(res.status, path);
}
mkdirSync('inventory', { recursive: true });
writeFileSync(`inventory/${name}.json`, JSON.stringify({ base, captured: new Date().toISOString(), pages: out }, null, 2) + '\n');
console.log(`wrote inventory/${name}.json (${out.length} URLs)`);
