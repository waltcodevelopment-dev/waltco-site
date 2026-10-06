// Checks every prerendered page after `next build` (addendum D, the checks that apply before copy and SEO land;
// W3 adds OG, JSON-LD, images, links and Lighthouse).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { facts, INTAKE_URL, telHref } from '../../content/facts.ts';
import { ROUTES } from '../../content/routes.ts';
import { bannedIn } from '../../content/claims.ts';
import { canonicalFor } from '../../lib/seo.ts';

const ROOT = '.next/server/app';
const walk = (d: string): string[] => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});
const pages = walk(ROOT).map((file) => ({ file, html: readFileSync(file, 'utf8') }))
  .filter((p) => /<link rel="canonical"/.test(p.html));
const canon = (html: string) => /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1] ?? '';
const visible = (html: string) => html
  .replace(/<script\b(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+?(alt|content|title)="([^"]*)"[^>]*>/gi, ' $2 ')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');

test('every approved URL is prerendered once, with its own apex canonical', () => {
  const got = pages.map((p) => canon(p.html)).sort();
  const want = ROUTES.map((r) => canonicalFor(r.path)).sort();
  assert.deepEqual(got, want);
});

for (const p of pages) {
  const url = canon(p.html);
  test(`page ${url}`, () => {
    assert.deepEqual(bannedIn(visible(p.html)), [], 'banned claim');
    assert.equal((p.html.match(/<h1[\s>]/g) ?? []).length, 1, 'exactly one H1');
    assert.match(p.html, /<title>[^<]{5,}<\/title>/, 'title');
    assert.match(p.html, /<meta name="description" content="[^"]{70,160}"/, 'description 70–160');
    assert.doesNotMatch(p.html, /<form[\s>]/i, 'no forms');
    assert.match(p.html, /<meta name="robots" content="noindex, nofollow"/, 'preview build is noindex');
    const ctas = [...p.html.matchAll(/<a[^>]*data-cta[^>]*href="([^"]+)"|<a[^>]*href="([^"]+)"[^>]*data-cta/g)].map((m) => (m[1] ?? m[2]).replace(/&amp;/g, '&'));
    assert.ok(ctas.length > 0, 'has a call to action');
    for (const h of ctas) assert.equal(h, INTAKE_URL, 'CTA goes to the GymLogo intake');
    for (const m of p.html.matchAll(/href="(tel:[^"]+)"/g)) assert.equal(m[1], telHref(facts.phone.value), 'tel matches facts');
    for (const m of p.html.matchAll(/href="mailto:([^"]+)"/g)) assert.equal(m[1], facts.email.value, 'mailto matches facts');
    if (facts.classifications.status !== 'confirmed') assert.doesNotMatch(visible(p.html), /C-15|General Building/, 'classifications pending (W0)');
    if (facts.bonded.status !== 'confirmed') assert.doesNotMatch(visible(p.html), /\bbonded\b/i, 'bond status pending (W0)');
    if (facts.insured.status !== 'confirmed') assert.doesNotMatch(visible(p.html), /\binsured\b/i, 'insurance pending (W0)');
  });
}
