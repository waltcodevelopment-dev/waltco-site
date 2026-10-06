# waltco-site

The public website of Waltco Development (waltcodevelopment.com). Rebuilt off Anything per Fable's ruling of
6 Oct 2026 ("waltcodevelopment.com rebuild off Anything — Fable ruling and brief", plus the A–E addendum).

- Static marketing site: Next.js + Tailwind. **No database, no forms, no third-party scripts.**
- Separate from GymLogo and True Local Pros: own repo, own Vercel project, no shared code, keys or environment.
- Every fact on the site comes from `content/facts.ts` (the Waltco fact sheet). Every call to action goes to the
  GymLogo intake. Every approved URL is listed in `content/routes.ts`; old URLs that move are in `content/redirects.ts`.
- Closed to search engines until the switch: `SITE_INDEXING=on` (Vercel, Production only) opens it.
- CI fails the build on a banned claim, a missing or extra URL, a broken redirect, a form, a CTA that is not the
  intake, or a fact that differs from `content/facts.ts`. A weekly run checks the live site the same way.

## Steps (Fable's work breakdown)

| Step | Who | What |
|---|---|---|
| W0 | Walter | CSLB record read into the fact sheet (with date); Search Console domain property + exports; photo folder with captions; decide "Architecture" / "Development Management" wording |
| W1 | Opus | This repo, facts, theme, noindex flag, CI (claims, URLs, redirects), inventory script |
| W2 | Jasper + Opus | Copy for all 35 pages from the fact sheet; page templates |
| W3 | Opus | Titles/meta, canonicals, sitemap, robots, JSON-LD, OG, breadcrumbs, images, fonts, Lighthouse |
| W4 | Walter | Page-by-page approval on the noindex preview → `APPROVALS.md` |
| W5 | Walter + Opus | Domain move to this Vercel project, indexing on, sitemap re-submitted, `after.json`, CTA test lead, Google Business Profile Website button → https://waltcodevelopment.com (owner, 5 Oct 2026) |
| W6 | Opus | Day 7 and day 14 Search Console readings |

## Commands

- `npm test` — unit tests (facts, routes, redirects, banned-claims list).
- `npm run build && npm run test:built` — checks every prerendered page.
- `npm run inventory -- before` — fetches the 34 live URLs into `inventory/before.json` (run on a machine with internet).
