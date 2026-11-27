// The approved URL set (Fable ruling 2, 6 Oct 2026): the 34 URLs of the current site, byte for byte, plus the
// one approved new page /services/hardwood-flooring = 35. Adding or removing a URL here needs a ruling.
// + the nine hardwood sub-pages (Fable hardwood ruling, 6 Oct 2026; brief approved by the owner 12 Oct 2026) = 44.

import { SVC_CITY, svcCityPath } from './service-city.ts';
import { FLOOR_PAGES, floorPath } from './flooring.ts';
import { LIVE as CATALOG_LIVE } from './catalog.ts';

export type RouteKind = 'home' | 'page' | 'service' | 'floor' | 'svc-city' | 'kitchen-chart' | 'cat' | 'area' | 'blog-index' | 'blog' | 'contact';
export type Route = { path: string; kind: RouteKind; label: string };

export const SERVICES: { slug: string; label: string; isNew?: true }[] = [
  { slug: 'general-construction', label: 'General Construction' },
  { slug: 'hardwood-flooring', label: 'Hardwood Flooring', isNew: true },
  { slug: 'new-home-construction', label: 'New Home Construction' },
  { slug: 'full-home-remodeling', label: 'Full Home Remodeling' },
  { slug: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
  { slug: 'bathroom-remodeling', label: 'Bathroom Remodeling' },
  { slug: 'adu-construction', label: 'ADU Construction' },
  { slug: 'room-additions', label: 'Room Additions' },
  { slug: 'cabinetry', label: 'Custom Cabinetry' },
  { slug: 'finish-carpentry', label: 'Finish Carpentry' },
  { slug: 'development-management', label: 'Development Management' },
];

export const AREAS: { slug: string; label: string }[] = [
  { slug: 'los-angeles', label: 'Los Angeles' },
  { slug: 'west-los-angeles', label: 'West Los Angeles' },
  { slug: 'santa-monica', label: 'Santa Monica' },
  { slug: 'malibu', label: 'Malibu' },
  { slug: 'pacific-palisades', label: 'Pacific Palisades' },
  { slug: 'hollywood', label: 'Hollywood' },
  { slug: 'encino', label: 'Encino' },
  { slug: 'venice', label: 'Venice' },
  { slug: 'manhattan-beach', label: 'Manhattan Beach' },
  { slug: 'redondo-beach', label: 'Redondo Beach' },
  { slug: 'mar-vista', label: 'Mar Vista' },
  { slug: 'reseda', label: 'Reseda' },
];

export const BLOG_POSTS: { slug: string; label: string }[] = [
  { slug: 'box-beams-cost-los-angeles', label: 'Box beams cost in Los Angeles' },
  { slug: 'how-to-measure-box-beams', label: 'How to measure for box beams' },
  { slug: 'contractor-pacific-palisades-guide', label: 'Contractor guide: Pacific Palisades' },
  { slug: 'altadena-fire-rebuild-contractor', label: 'Altadena fire rebuild contractor' },
  { slug: 'kitchen-remodel-cost-los-angeles-2026', label: 'Kitchen Remodel Cost in Los Angeles (2026)' },
  { slug: 'adu-los-angeles-2026-guide', label: 'ADU in Los Angeles: 2026 guide' },
  { slug: 'how-to-choose-general-contractor-los-angeles', label: 'How to choose a general contractor in Los Angeles' },
  // Kitchen and cabinet guides (27 Nov 2026)
  { slug: 'cabinet-door-styles-explained', label: 'Kitchen Cabinet Door Styles Explained' },
  { slug: 'kitchen-cabinet-cost-per-linear-foot-los-angeles', label: 'Kitchen Cabinet Cost per Linear Foot in Los Angeles' },
  { slug: 'prefab-vs-custom-kitchen-cabinets', label: 'Prefab vs Custom Kitchen Cabinets' },
  { slug: 'how-to-measure-kitchen-for-new-cabinets', label: 'How to Measure Your Kitchen for New Cabinets' },
  { slug: 'quartz-vs-marble-vs-granite-countertops', label: 'Quartz vs Marble vs Granite Countertops' },
  { slug: 'refinish-or-replace-kitchen-cabinets', label: 'Refinish or Replace Kitchen Cabinets?' },
  { slug: 'how-to-choose-kitchen-cabinet-colors', label: 'How to Choose Kitchen Cabinet Colors' },
];

export const ROUTES: Route[] = [
  { path: '/', kind: 'home', label: 'Home' },
  { path: '/about', kind: 'page', label: 'About' },
  { path: '/services', kind: 'page', label: 'Services' },
  { path: '/portfolio', kind: 'page', label: 'Portfolio' },
  { path: '/contact', kind: 'contact', label: 'Contact' },
  { path: '/service-areas', kind: 'page', label: 'Service Areas' },
  { path: '/blog', kind: 'blog-index', label: 'Resources' },
  ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, kind: 'service' as const, label: s.label })),
  ...FLOOR_PAGES.map((f) => ({ path: floorPath(f.slug), kind: 'floor' as const, label: f.label })),
  ...SVC_CITY.map((c) => ({ path: svcCityPath(c), kind: 'svc-city' as const, label: c.label })),
  // Cabinet color chart (owner direction 24 Nov 2026, Legno beam-system model; moved from the unpublished
  // /services/kitchen-remodeling/styles-and-colors to the cabinetry hub 27 Nov 2026) = 56.
  { path: '/services/cabinetry/color-chart', kind: 'kitchen-chart', label: 'Cabinet Color Chart' },
  // Kitchen & cabinet catalog, E&K model (owner direction 27 Nov 2026): live pages only, gated on own photos.
  ...CATALOG_LIVE.map((c) => ({ path: c.path, kind: 'cat' as const, label: c.name })),
  ...AREAS.map((a) => ({ path: `/service-areas/${a.slug}`, kind: 'area' as const, label: a.label })),
  ...BLOG_POSTS.map((b) => ({ path: `/blog/${b.slug}`, kind: 'blog' as const, label: b.label })),
];

/** The 34 URLs of the current site (from its sitemap.xml, read 6 Oct 2026). Each must stay 200 or 301. */
// URLs added after the 5 Oct 2026 capture: the hardwood pages (12 Oct) and the beam guides (19 Oct).
const ADDED = ['/blog/box-beams-cost-los-angeles', '/blog/how-to-measure-box-beams', ...['cabinet-door-styles-explained', 'kitchen-cabinet-cost-per-linear-foot-los-angeles', 'prefab-vs-custom-kitchen-cabinets', 'how-to-measure-kitchen-for-new-cabinets', 'quartz-vs-marble-vs-granite-countertops', 'refinish-or-replace-kitchen-cabinets', 'how-to-choose-kitchen-cabinet-colors'].map((s) => `/blog/${s}`), '/services/cabinetry/color-chart', ...CATALOG_LIVE.map((c) => c.path), ...SVC_CITY.map(svcCityPath)];
export const OLD_URLS: string[] = ROUTES.map((r) => r.path).filter((p) => !p.startsWith('/services/hardwood-flooring') && !ADDED.includes(p));
