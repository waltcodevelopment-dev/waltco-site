import { test } from 'node:test';
import assert from 'node:assert/strict';
import { facts, INTAKE_URL, SITE_URL, licenceLine } from '../../content/facts.ts';
import { OLD_URLS, ROUTES } from '../../content/routes.ts';
import { REDIRECTS } from '../../content/redirects.ts';
import { bannedIn } from '../../content/claims.ts';
import { canonicalFor, robotsRules, sitemapEntries, isIndexable } from '../../lib/seo.ts';
import { descriptionFor, titleFor } from '../../lib/meta.ts';

test('35 approved URLs: the 34 current ones byte for byte plus /services/hardwood-flooring', () => {
  const paths = ROUTES.map((r) => r.path);
  assert.equal(paths.length, 35);
  assert.equal(new Set(paths).size, 35);
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
    'a premier contractor', 'fully insured', '100% licensed', 'we guarantee', 'AI-powered', 'the best builder', '25 years', '12 projects'])
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

test('indexing flag: closed by default; production opens robots and the sitemap of exactly 35 URLs', () => {
  assert.equal(isIndexable({}), false);
  assert.equal(isIndexable({ SITE_INDEXING: 'on' }), true);
  assert.deepEqual(robotsRules(false), { rules: [{ userAgent: '*', disallow: '/' }] });
  assert.equal(robotsRules(true).sitemap, 'https://waltcodevelopment.com/sitemap.xml');
  assert.deepEqual(sitemapEntries(false), []);
  const urls = sitemapEntries(true).map((e) => e.url);
  assert.equal(urls.length, 35);
  assert.equal(urls[0], 'https://waltcodevelopment.com');
  assert.equal(canonicalFor('/about'), 'https://waltcodevelopment.com/about');
});
