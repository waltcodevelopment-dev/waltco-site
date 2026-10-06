// Site-wide checks after `next build` (Fable addendum D, 6 Oct 2026): unique titles and descriptions, internal
// links resolve, every page within 3 clicks of home, no third-party requests, image weight, OG image size,
// required JSON-LD fields. Per-page checks live in pages.test.ts.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { ROUTES } from '../../content/routes.ts';
import { facts } from '../../content/facts.ts';
import { canonicalFor } from '../../lib/seo.ts';

const ROOT = '.next/server/app';
const walk = (d: string): string[] => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});
const pages = walk(ROOT).map((file) => readFileSync(file, 'utf8')).filter((h) => /<link rel="canonical"/.test(h))
  .map((html) => ({ html, url: /<link rel="canonical" href="([^"]+)"/.exec(html)![1] }));
const pathOf = (url: string) => (url.replace(/^https:\/\/waltcodevelopment\.com/, '') || '/');
const routes = new Set(ROUTES.map((r) => r.path));
const linksOf = (html: string) => [...html.matchAll(/<a\b[^>]*\shref="(\/[^"#?]*)/g)].map((m) => m[1] === '' ? '/' : m[1].replace(/\/$/, '') || '/');

test('titles and descriptions are unique across the site', () => {
  const titles = pages.map((p) => /<title>([^<]*)<\/title>/.exec(p.html)?.[1]);
  const descs = pages.map((p) => /<meta name="description" content="([^"]*)"/.exec(p.html)?.[1]);
  assert.equal(new Set(titles).size, pages.length, 'duplicate <title>');
  assert.equal(new Set(descs).size, pages.length, 'duplicate meta description');
});

test('every internal link resolves to an approved page or a public file', () => {
  for (const p of pages) for (const href of linksOf(p.html)) {
    const ok = routes.has(href) || (() => { try { return statSync(join('public', href)).isFile(); } catch { return false; } })();
    assert.ok(ok, `${pathOf(p.url)} links to ${href}, which does not exist`);
  }
});

test('every page is within 3 clicks of the home page', () => {
  const byPath = new Map(pages.map((p) => [pathOf(p.url), p.html]));
  const depth = new Map<string, number>([['/', 0]]);
  const queue = ['/'];
  while (queue.length) {
    const at = queue.shift()!;
    for (const next of linksOf(byPath.get(at) ?? '')) {
      if (routes.has(next) && !depth.has(next)) { depth.set(next, depth.get(at)! + 1); queue.push(next); }
    }
  }
  for (const r of ROUTES) assert.ok((depth.get(r.path) ?? 99) <= 3, `${r.path} is ${depth.get(r.path) ?? 'not reachable'} clicks from home`);
});

test('no third-party scripts, styles or images', () => {
  for (const p of pages) {
    for (const m of p.html.matchAll(/<(script|link|img|iframe)\b[^>]*\s(?:src|href)="(https?:)?\/\/([^/"]+)/g)) {
      const host = m[3];
      const allowed = host === 'waltcodevelopment.com' && m[1] === 'link'; // canonical / alternate links only
      assert.ok(allowed, `${pathOf(p.url)} loads ${m[1]} from ${host}`);
    }
  }
});

test('images are at most 300 KB; the OG image is 1200×630', () => {
  for (const f of readdirSync('public/images')) assert.ok(statSync(join('public/images', f)).size <= 300_000, `${f} is over 300 KB`);
  const og = readFileSync('public/og/waltco-development.jpg');
  let i = 2; let size: [number, number] | null = null;
  while (i < og.length && !size) {
    const m = og[i + 1];
    if (m >= 0xc0 && m <= 0xc2) size = [og.readUInt16BE(i + 7), og.readUInt16BE(i + 5)];
    i += 2 + og.readUInt16BE(i + 2);
  }
  assert.deepEqual(size, [1200, 630]);
});

test('business JSON-LD carries name, url, telephone, address and the CSLB identifier from the fact sheet', () => {
  const home = pages.find((p) => p.url === canonicalFor('/'))!;
  const ld = [...home.html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1])).flat()
    .find((x: { '@type': string }) => x['@type'] === 'GeneralContractor');
  assert.ok(ld, 'GeneralContractor JSON-LD on home');
  assert.equal(ld.name, facts.businessName.value);
  assert.equal(ld.url, 'https://waltcodevelopment.com');
  assert.equal(ld.telephone.replace(/\D/g, '').slice(-10), facts.phone.value.replace(/\D/g, ''));
  assert.equal(ld.address.streetAddress, facts.showroom.value.street);
  assert.equal(ld.identifier.value, facts.licenseNumber.value);
});
