// Search-engine rules. One switch: SITE_INDEXING=on (Vercel env, Production only) opens the site.
// Anything else — unset, any preview — is closed: robots.txt disallows everything, every page carries
// noindex, responses send X-Robots-Tag. The flag flips only at the switch (W5). Pure TS for node --test.
import { SITE_URL } from '../content/facts.ts';
import { ROUTES } from '../content/routes.ts';

export function isIndexable(env: Record<string, string | undefined> = process.env): boolean {
  return env.SITE_INDEXING === 'on';
}

export type RobotsRules = { rules: { userAgent: string; allow?: string; disallow?: string }[]; sitemap?: string; host?: string };

export function robotsRules(indexable: boolean): RobotsRules {
  if (!indexable) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL };
}

export const canonicalFor = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

/** Every approved URL, production only. lastModified is the date the page's content last changed. */
export const LAST_MODIFIED = '2026-10-06';
export function sitemapEntries(indexable: boolean): { url: string; lastModified: string }[] {
  if (!indexable) return [];
  return ROUTES.map((r) => ({ url: canonicalFor(r.path), lastModified: LAST_MODIFIED }));
}
