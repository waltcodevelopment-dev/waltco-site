// The approved URL set (Fable ruling 2, 6 Oct 2026): the 34 URLs of the current site, byte for byte, plus the
// one approved new page /services/hardwood-flooring = 35. Adding or removing a URL here needs a ruling.

export type RouteKind = 'home' | 'page' | 'service' | 'area' | 'blog-index' | 'blog' | 'contact';
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
  { slug: 'contractor-pacific-palisades-guide', label: 'Contractor guide: Pacific Palisades' },
  { slug: 'altadena-fire-rebuild-contractor', label: 'Altadena fire rebuild contractor' },
  { slug: 'kitchen-remodel-cost-los-angeles-2026', label: 'Kitchen remodel cost, Los Angeles 2026' },
  { slug: 'adu-los-angeles-2026-guide', label: 'ADU in Los Angeles: 2026 guide' },
  { slug: 'how-to-choose-general-contractor-los-angeles', label: 'How to choose a general contractor in Los Angeles' },
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
  ...AREAS.map((a) => ({ path: `/service-areas/${a.slug}`, kind: 'area' as const, label: a.label })),
  ...BLOG_POSTS.map((b) => ({ path: `/blog/${b.slug}`, kind: 'blog' as const, label: b.label })),
];

/** The 34 URLs of the current site (from its sitemap.xml, read 6 Oct 2026). Each must stay 200 or 301. */
export const OLD_URLS: string[] = ROUTES.map((r) => r.path).filter((p) => p !== '/services/hardwood-flooring');
