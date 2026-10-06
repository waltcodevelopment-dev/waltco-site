// Capture the live site for the rebuild (owner request, 5 Oct 2026: match the current design, layouts and images,
// with the errors fixed). Run on Walter's Mac, which can reach the live site and its image host:
//   node scripts/capture.ts
// Writes (both git-ignored — reference material, not site content):
//   capture/pages/<path>.html   the server HTML of every live URL
//   capture/images/<id>.<ext>   every image Walter uploaded to the old site, once each
//   capture/manifest.json       which image appears on which page, with its alt text
import { mkdirSync, writeFileSync } from 'node:fs';
import { OLD_URLS } from '../content/routes.ts';

const BASE = 'https://www.waltcodevelopment.com';
const IMG = /https:\/\/dtvoeevhaseb5\.cloudfront\.net\/user-uploads\/[0-9a-f-]+\.(?:jpe?g|png|webp|gif|svg)/gi;
mkdirSync('capture/pages', { recursive: true });
mkdirSync('capture/images', { recursive: true });

const images = new Map<string, { file: string; bytes: number; pages: string[]; alts: string[] }>();
for (const path of OLD_URLS) {
  const res = await fetch(BASE + path);
  const html = await res.text();
  const name = path === '/' ? 'home' : path.slice(1).replace(/\//g, '__');
  writeFileSync(`capture/pages/${name}.html`, html);
  for (const url of new Set(html.match(IMG) ?? [])) {
    const alt = new RegExp(`<img[^>]*src="${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*alt="([^"]*)"|<img[^>]*alt="([^"]*)"[^>]*src="${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).exec(html);
    const e = images.get(url) ?? { file: url.split('/').pop()!, bytes: 0, pages: [], alts: [] };
    e.pages.push(path);
    const a = alt?.[1] ?? alt?.[2];
    if (a && !e.alts.includes(a)) e.alts.push(a);
    images.set(url, e);
  }
  console.log(res.status, path);
}
for (const [url, e] of images) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(`capture/images/${e.file}`, buf);
  e.bytes = buf.length;
  console.log(res.status, e.file, `${Math.round(buf.length / 1024)} KB`);
}
writeFileSync('capture/manifest.json', JSON.stringify({ base: BASE, captured: new Date().toISOString(),
  images: [...images].map(([url, e]) => ({ url, ...e })) }, null, 2) + '\n');
console.log(`captured ${OLD_URLS.length} pages and ${images.size} images into capture/`);
