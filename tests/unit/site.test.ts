import { test } from 'node:test';
import assert from 'node:assert/strict';
import { facts, INTAKE_URL, SITE_URL, licenceLine } from '../../content/facts.ts';
import { OLD_URLS, ROUTES } from '../../content/routes.ts';
import { REDIRECTS } from '../../content/redirects.ts';
import { bannedIn } from '../../content/claims.ts';
import { canonicalFor, robotsRules, sitemapEntries, isIndexable } from '../../lib/seo.ts';
import { descriptionFor, titleFor } from '../../lib/meta.ts';

test('162 approved URLs: the 34 current ones byte for byte, /services/hardwood-flooring, its 9 sub-pages, 2 beam guides, 9 service x city pages, cabinet color chart, 49 catalog pages, 7 kitchen guides, windows & doors hub and its 49 sub-pages', () => {
  const paths = ROUTES.map((r) => r.path);
  assert.equal(paths.length, 162);
  assert.equal(new Set(paths).size, 162);
  for (const s of ['installation', 'wide-plank', 'herringbone-and-parquet', 'reclaimed-wood', 'stain-and-color-matching', 'sanding-and-refinishing', 'stairs', 'floor-removal-and-subfloor', 'beams-and-ceilings'])
    assert.ok(paths.includes(`/services/hardwood-flooring/${s}`), s);
  assert.equal(OLD_URLS.length, 34);
  assert.ok(paths.includes('/services/hardwood-flooring'));
  for (const p of paths) assert.match(p, /^\/([a-z0-9-]+(\/[a-z0-9-]+)*)?$/, `${p}: lowercase, no trailing slash`);
});

test('301 map: sources are not live routes, targets are approved routes, no chains', () => {
  const live = new Set(ROUTES.map((r) => r.path));
  const sources = new Set(REDIRECTS.map((r) => r.source));
  for (const r of REDIRECTS) {
    assert.ok(!live.has(r.source), `${r.source} is still a live route`);
    assert.ok(live.has(r.destination), `${r.destination} is not an approved route`);
    assert.ok(!sources.has(r.destination), `redirect chain at ${r.destination}`);
  }
  for (const old of OLD_URLS) assert.ok(live.has(old) || sources.has(old), `${old} would 404`);
});

test('the claims list catches the removed claims and allows the policy wording', () => {
  for (const bad of ['30+ years', 'over 30 years in LA', '200+ projects', 'carbon-negative concrete', 'Blue Planet', 'RIPS',
    'a premier contractor', 'fully insured', '100% licensed', 'we guarantee', 'AI-powered', 'the best builder', '25 years', '12 projects', '35+ years serving Los Angeles', 'best wood flooring company', 'widely regarded', 'premium hardwood', 'elite wood floors', 'proud leaders'])
    assert.ok(bannedIn(bad).length > 0, bad);
  for (const ok of ['decades of hands-on experience', 'a broad range of residential and commercial projects',
    'Licensed general contractor — CSLB #625535', 'Kitchen remodel cost, Los Angeles 2026'])
    assert.deepEqual(bannedIn(ok), [], ok);
});

test('facts: confirmed facts are filled and sourced; licence line and addresses follow the CSLB record', () => {
  for (const [k, f] of Object.entries(facts)) {
    if (f.status === 'confirmed') assert.ok(Array.isArray(f.value) ? f.value.length : String(f.value).length, `${k} confirmed but empty`);
    assert.ok(f.source.length > 3, `${k} has no source`);
  }
  if (facts.bonded.status !== 'confirmed') assert.equal(licenceLine(), `Licensed general contractor — CSLB #${facts.licenseNumber.value}`);
  else assert.equal(licenceLine(), `Licensed and bonded — CSLB #${facts.licenseNumber.value}`);
  assert.notEqual(facts.insured.status, 'confirmed', 'no liability certificate on file');
  assert.equal(facts.showroom.value.label, 'Shop / Showroom');
  assert.equal(facts.mailing.value.label, 'Mailing Address');
  assert.notEqual(facts.showroom.value.street, facts.mailing.value.street);
  assert.match(facts.mailing.source, /^CSLB/);
  assert.equal(new URL(INTAKE_URL).host, 'gymlogo.vercel.app');
  assert.equal(SITE_URL, 'https://waltcodevelopment.com');
});

test('titles ≤ 60 chars, unique, no doubled suffix; descriptions 70–160 and unique; no banned claim', () => {
  const titles = ROUTES.map(titleFor);
  const descs = ROUTES.map(descriptionFor);
  for (const t of titles) {
    assert.ok(t.length <= 60, `${t} (${t.length})`);
    assert.doesNotMatch(t, /Waltco Development.*Waltco Development/);
    assert.deepEqual(bannedIn(t), [], t);
  }
  for (const d of descs) {
    assert.ok(d.length >= 70 && d.length <= 160, `${d} (${d.length})`);
    assert.deepEqual(bannedIn(d), [], d);
  }
  assert.equal(new Set(titles).size, titles.length, 'titles unique');
  assert.equal(new Set(descs).size, descs.length, 'descriptions unique');
});

test('indexing flag: closed by default; production opens robots and the sitemap of exactly 162 URLs', () => {
  assert.equal(isIndexable({}), false);
  assert.equal(isIndexable({ SITE_INDEXING: 'on' }), true);
  assert.deepEqual(robotsRules(false), { rules: [{ userAgent: '*', disallow: '/' }] });
  assert.equal(robotsRules(true).sitemap, 'https://waltcodevelopment.com/sitemap.xml');
  assert.deepEqual(sitemapEntries(false), []);
  const urls = sitemapEntries(true).map((e) => e.url);
  assert.equal(urls.length, 162);
  assert.equal(urls[0], 'https://waltcodevelopment.com');
  assert.equal(canonicalFor('/about'), 'https://waltcodevelopment.com/about');
});

// Hardwood sub-pages (Fable hardwood ruling, 6 Oct 2026): ≥ 400 words and ≥ 6 captioned photos (city + year) each,
// no banned claim, no price.
import { FLOOR_PAGES } from '../../content/flooring.ts';
import { FLOOR_PHOTOS, floorPhotos } from '../../content/floor-photos.ts';
import { existsSync } from 'node:fs';

test('hardwood sub-pages: ≥ 400 words, ≥ 6 captioned photos each, no banned claim or price', () => {
  for (const f of FLOOR_PAGES) {
    const text = [f.h1, f.tagline, ...f.intro, ...f.sections.flatMap((s) => [s.h, ...s.p, ...(s.list ?? [])]), ...f.steps, ...f.faq.flatMap((q) => [q.q, q.a])].join(' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    assert.ok(words >= 400, `${f.slug}: ${words} words`);
    assert.deepEqual(bannedIn(text), [], f.slug);
    assert.doesNotMatch(text, /\$\s*\d/, `${f.slug}: no prices`);
    const ps = floorPhotos(f.slug);
    assert.ok(ps.length - 1 >= 6, `${f.slug}: ${ps.length} photos (the first is the hero)`);
    for (const p of ps) assert.match(p.alt, /— [A-Z][A-Za-z .'-]+, (19|20)\d\d$/, `${p.id}: caption has city and year`);
  }
  for (const p of FLOOR_PHOTOS) for (const i of [p.lg, p.sm]) {
    assert.ok(existsSync(`public${i.src}`), i.src);
    assert.ok(existsSync(`public${i.src.replace(/\.jpg$/, '.webp')}`), `${i.src} webp`);
  }
});

test('catalog: unique titles and descriptions within limits, own photos on every look/style/project, no banned words', async () => {
  const { CATALOG, LIVE, MIN_PHOTOS } = await import('../../content/catalog.ts');
  const { SC_PHOTOS } = await import('../../content/sc-photos.ts');
  const { CAT_PHOTOS } = await import('../../content/cat-photos.ts');
  const { LINE_PHOTOS } = await import('../../content/line-photos.ts');
  const ids = new Set([...SC_PHOTOS, ...CAT_PHOTOS, ...LINE_PHOTOS].map((p) => p.id));
  assert.equal(new Set(CATALOG.map((p) => p.title)).size, CATALOG.length);
  assert.equal(new Set(CATALOG.map((p) => p.description)).size, CATALOG.length);
  for (const p of CATALOG) {
    assert.ok(p.title.length <= 60, p.path);
    assert.ok(p.description.length >= 70 && p.description.length <= 160, p.path);
    for (const id of p.photos) assert.ok(ids.has(id), `${p.path}: ${id}`);
    assert.deepEqual(bannedIn(JSON.stringify(p)), [], p.path);
    assert.ok(p.faq.length >= 3, p.path);
  }
  for (const p of LIVE) if (p.kind !== 'support') assert.ok(p.photos.length >= MIN_PHOTOS, p.path);
  for (const p of LIVE) if (p.kind === 'look') assert.match(p.code ?? '', p.line ? /^WP-[A-Z]{3}-[A-Z]{3}$/ : /^WC-[A-Z]{3}-[A-Z]{3}$/);
  // line pages use only line photos, own-job pages never use line photos
  for (const p of CATALOG) for (const id of p.photos) assert.equal(id.startsWith('line-'), !!p.line, `${p.path}: ${id}`);
  const { existsSync } = await import('node:fs');
  for (const p of CAT_PHOTOS) assert.ok(existsSync(`public${p.lg.src}`) && existsSync(`public${p.sm.src}`), p.id);
});

// Windows & doors sub-pages (owner direction 28 Nov 2026): own job photos on every page, title/description limits,
// enough words to stand on their own, no banned claim and no dollar price.
test('windows & doors sub-pages: 49 pages, ≥ 300 words, ≥ 5 own photos, limits, no banned claim or price', async () => {
  const { WD_PAGES } = await import('../../content/windows-doors.ts');
  const { wdPhotos } = await import('../../content/wd-photos.ts');
  assert.equal(WD_PAGES.length, 49);
  assert.equal(new Set(WD_PAGES.map((w) => w.title)).size, 49, 'titles unique');
  assert.equal(new Set(WD_PAGES.map((w) => w.description)).size, 49, 'descriptions unique');
  for (const w of WD_PAGES) {
    assert.ok(w.title.length <= 60, `${w.slug}: title ${w.title.length}`);
    assert.ok(w.description.length >= 70 && w.description.length <= 160, `${w.slug}: description ${w.description.length}`);
    const text = [w.h1, w.tagline, ...w.intro, ...w.sections.flatMap((s) => [s.h, ...s.p, ...(s.list ?? [])]), ...w.steps, ...w.faq.flatMap((f) => [f.q, f.a])].join(' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    assert.ok(words >= 300, `${w.slug}: ${words} words`);
    assert.deepEqual(bannedIn(text + ' ' + w.title + ' ' + w.description), [], w.slug);
    assert.doesNotMatch(text, /\$\s?\d/, `${w.slug}: no prices`);
    assert.ok(wdPhotos(w.photos, 10, w.offset ?? 0).length >= 5, `${w.slug}: photos`);
  }
});
