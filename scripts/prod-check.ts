// Weekly production check (Fable addendum E): the live site, same rules as CI minus Lighthouse.
//   node scripts/prod-check.ts [base=https://waltcodevelopment.com]
// Fails if any approved URL is not 200 or carries a banned claim, noindex, a wrong canonical or a form; if an old URL
// is neither 200 nor its mapped 301; if robots.txt or the sitemap is wrong; or if www does not 301 to the apex.
import { ROUTES, OLD_URLS } from '../content/routes.ts';
import { REDIRECTS } from '../content/redirects.ts';
import { bannedIn } from '../content/claims.ts';
import { facts } from '../content/facts.ts';

const base = (process.argv[2] ?? 'https://waltcodevelopment.com').replace(/\/$/, '');
const errors: string[] = [];
const text = (html: string) => html.replace(/<script\b(?![^>]*application\/ld\+json)[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');

for (const r of ROUTES) {
  const res = await fetch(base + r.path, { redirect: 'manual' });
  if (res.status !== 200) { errors.push(`${r.path}: ${res.status}`); continue; }
  const html = await res.text();
  const canon = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  const want = r.path === '/' ? 'https://waltcodevelopment.com' : `https://waltcodevelopment.com${r.path}`;
  if (canon !== want) errors.push(`${r.path}: canonical ${canon}`);
  if (/noindex/i.test(html) || /noindex/i.test(res.headers.get('x-robots-tag') ?? '')) errors.push(`${r.path}: noindex in production`);
  if (/<form[\s>]/i.test(html)) errors.push(`${r.path}: form`);
  const b = bannedIn(text(html)); if (b.length) errors.push(`${r.path}: banned ${b.join(', ')}`);
  if (!html.includes(facts.phone.value)) errors.push(`${r.path}: phone missing`);
}
const mapped = new Map(REDIRECTS.map((r) => [r.source, r.destination]));
for (const old of OLD_URLS) {
  const res = await fetch(base + old, { redirect: 'manual' });
  const to = mapped.get(old);
  const ok = res.status === 200 || (to && [301, 308].includes(res.status) && (res.headers.get('location') ?? '').endsWith(to));
  if (!ok) errors.push(`old URL ${old}: ${res.status} ${res.headers.get('location') ?? ''}`);
}
const robots = await (await fetch(`${base}/robots.txt`)).text();
if (/Disallow:\s*\/\s*$/m.test(robots) || !/Sitemap:/i.test(robots)) errors.push('robots.txt blocks the site or lacks Sitemap');
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length !== ROUTES.length) errors.push(`sitemap has ${locs.length} URLs, expected ${ROUTES.length}`);
const www = await fetch(base.replace('://', '://www.') + '/about', { redirect: 'manual' });
if (![301, 308].includes(www.status) || (www.headers.get('location') ?? '') !== `${base}/about`) errors.push(`www → apex: ${www.status} ${www.headers.get('location')}`);

console.log(errors.length ? `FAIL\n${errors.join('\n')}` : `OK — ${ROUTES.length} pages, ${OLD_URLS.length} old URLs, robots, sitemap, www redirect`);
if (errors.length) process.exit(1);
