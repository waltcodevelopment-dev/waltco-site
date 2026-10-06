// Lighthouse gate (Fable addendum D): mobile Performance ≥ 90, SEO = 100, Accessibility ≥ 95 on four sample pages.
// CI builds with SITE_INDEXING=on in its own job (so robots/noindex don't cost SEO points), serves on :3000 and runs
// this. The `canonical` audit is skipped here because canonicals point at waltcodevelopment.com, not localhost;
// tests/built/pages.test.ts checks every canonical exactly.
//   node scripts/lighthouse.ts [base=http://localhost:3000]
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const base = process.argv[2] ?? 'http://localhost:3000';
const PAGES = ['/', '/services/hardwood-flooring', '/service-areas/santa-monica', '/blog/how-to-choose-general-contractor-los-angeles'];
const MIN = { performance: 90, seo: 100, accessibility: 95 } as const;
let failed = 0;
for (const p of PAGES) {
  const out = `lh-${p.replace(/\W+/g, '_') || 'home'}.json`;
  execFileSync('npx', ['-y', 'lighthouse@12', base + p, '--quiet', '--output=json', `--output-path=${out}`,
    '--only-categories=performance,seo,accessibility', '--form-factor=mobile',
    '--skip-audits=canonical', '--chrome-flags=--headless=new --no-sandbox'], { stdio: 'inherit' });
  const r = JSON.parse(readFileSync(out, 'utf8'));
  const scores = Object.fromEntries(Object.entries(r.categories).map(([k, v]) => [k, Math.round((v as { score: number }).score * 100)])) as Record<keyof typeof MIN, number>;
  const bad = (Object.keys(MIN) as (keyof typeof MIN)[]).filter((k) => scores[k] < MIN[k]);
  console.log(`${p}  performance ${scores.performance}  seo ${scores.seo}  accessibility ${scores.accessibility}${bad.length ? `  ✗ ${bad.join(', ')}` : '  ✓'}`);
  if (bad.length) {
    failed++;
    for (const a of Object.values(r.audits) as { id: string; score: number | null; title: string; scoreDisplayMode: string }[])
      if (a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== 'informative') console.log(`   - ${a.id}: ${a.title}`);
  }
}
if (failed) process.exit(1);
