> **Superseded by Fable's ruling** — "Waltco Hardwood Pages and Google Profile Plan", 6 Oct 2026 (Parts A–B). Approved with
> conditions: slugs `installation`, `wide-plank`, `herringbone-and-parquet`, `reclaimed-wood`, `stain-and-color-matching`,
> `sanding-and-refinishing`, `stairs`, `floor-removal-and-subfloor`, `beams-and-ceilings`; ≥ 400 words and ≥ 6 captioned
> photos (city + year) per page; ship after the switch shows zero 404s; Fable's redirect table controls the .org merge.

# Brief — Hardwood flooring pages on waltcodevelopment.com (phase 2, after the switch)

Status: DRAFT for owner approval. Written 5 Oct 2026. Ground rule 5: new pages on a client domain need a written
brief + approval. Fable ruling 2: no new URLs ship together with the hosting move — these go live after W5.

## Goal
Make waltcodevelopment.com the one home for Waltco's flooring work. Each item in the Hardwood Flooring "Scope of
work" list becomes its own page, written fresh from the fact sheet, illustrated with Walter's own project photos.
reclaimedfloors.org pages are merged into these with 301 redirects, so their search history moves to Waltco.

## New pages (9) — under /services/hardwood-flooring/
| Page | URL | reclaimedfloors.org pages that 301 here |
|---|---|---|
| Solid & engineered installation | /services/hardwood-flooring/installation | reclaimed-flooring-engineered, reclaimed-oak-flooring-engineered, white-oak-engineered-wood-flooring, reclaimed-hardwood-installation-tips |
| Wide-plank floors | /services/hardwood-flooring/wide-plank | wide-plank-hardwood-floors-los-angeles-collection(-2), why-wide-plank-hardwood, white-oak-wood-flooring, light-wood-floors |
| Herringbone, chevron & parquet | /services/hardwood-flooring/herringbone-parquet | reclaimed-parquet-flooring |
| Reclaimed wood floors | /services/hardwood-flooring/reclaimed-wood | reclaimed-flooring, reclaimed-oak-flooring, reclaimed-oak-wood, reclaimed-european-oak-flooring, reclaimed-white-oak-flooring, reclaimed-chestnut-flooring, reclaimed-heart-pine-hardwood-floors, heart-pine-honey-color, reclaimed-douglas-fir-flooring, antique-walnut-flooring, light-walnut-flooring, gray-barn-siding, hardwood |
| Custom stain & colour matching | /services/hardwood-flooring/stain-color-matching | — |
| Sanding & refinishing | /services/hardwood-flooring/refinishing | refinish-hardwood-floors, sanding-and-refinishing-hardwood-floors, Hardwood-Floor-Refinishing-Reclaimed-Floors |
| Stairs, treads & nosings | /services/hardwood-flooring/stairs | vintage-stairs |
| Floor removal & subfloor prep | /services/hardwood-flooring/removal-subfloor | — |
| Wood beams & ceilings | /services/hardwood-flooring/beams-ceilings | reclaimed-wood-ceiling-beams, handcrafted-box-beams, reclaimed-box-beams, white-ceiling-wood-beams, rustic-wood-ceiling-beams, live-edge-slabs |
reclaimedfloors.org home, products, about-us, contact-us, waltco-development-reclaimed-floors → /services/hardwood-flooring.
Tag, date, author, elementor-* and image URLs → 410 (gone) or the hub; never indexed again.

## Rules for every page
- Text written new — not copied from reclaimedfloors.org/.net (duplicate text across domains hurts both).
- Facts only from content/facts.ts. Banned: "35+ years", "25 years", "best", "premier", any years-in-business count.
- 6–12 of Walter's own photos per page, resized and GPS-stripped with scripts/photos.ts, captioned by Walter
  (work type + city) — only captioned photos are used.
- Each page: H1, 300–600 words, scope list, FAQ, Service + Breadcrumb JSON-LD, links to the hub and the other 8.
- Prices: none on the page; "Get your estimate" gives a ballpark from Waltco's own flooring price list (GymLogo C-15 v2).

## reclaimedfloors.net
Separate project (owner, 5 Oct 2026). If it becomes a reclaimed-material/products site it keeps its own text and
links to Waltco for installation; it must not repeat these pages' text.

## Needed from Walter
1. Approval of this brief.
2. Photo exports, one folder per page (e.g. Desktop/waltco-photos/herringbone), 10–30 each, then
   `node scripts/photos.ts <folder> <name>` and captions in public/images/captions.tsv.
3. At the merge: access to reclaimedfloors.org hosting/DNS for the 301s.

## Done when
9 pages live and green in CI; every reclaimedfloors.org URL above answers 301 to its Waltco page; Search Console
shows the Waltco pages indexed.
