// Kitchen hub system (owner direction 24 Nov 2026: "use the legno … beams and pages system" for kitchen remodeling).
// Legno pattern: a styles hub, a color chart of real photos grouped by family, a "how to order" checklist and
// sibling links on every page. Every photo here is the owner's own (SC_PHOTOS, captioned city + year). Every price
// comes from Waltco's three priced options for one galley kitchen (Estimates 79775-A/B/C, 19 Oct 2026).

export const KITCHEN_HUB = '/services/kitchen-remodeling';
export const KITCHEN_CHART = '/services/cabinetry/color-chart';
export const KITCHEN_COST = '/blog/kitchen-remodel-cost-los-angeles-2026';

export type ChartGroup = { id: string; h: string; p: string; ask: string; photos: string[] };

const k = (s: string) => `sc-kitchen-remodeling-${s}`;
const c = (s: string) => `sc-cabinetry-${s}`;

export const CHART: ChartGroup[] = [
  { id: 'white', h: 'White and cream cabinets', p: 'The look in most of our kitchen photos: white slab or shaker doors, often with a marble or quartz island and a wood floor to warm the room. Pure white, soft white and cream all photograph alike, so we bring painted door samples to the site.', ask: 'Slab or shaker door, and which white.',
    photos: [k('pacific-palisades-01'), k('los-angeles-07'), k('beverly-hills-14'), k('santa-monica-02'), k('pacific-palisades-03'), k('beverly-hills-02'), k('santa-monica-05'), k('los-angeles-02'), k('pacific-palisades-11'), k('beverly-hills-13'), c('beverly-hills-01'), c('pacific-palisades-07')] },
  { id: 'wood', h: 'Natural and light wood', p: 'Oak, maple and other light woods with a clear or lightly stained finish. Wood cabinets pair well with a white island or stone counters, and with a matching or contrasting wood floor that we install under the same contract.', ask: 'Species, and clear or stained.',
    photos: [k('los-angeles-08'), k('pacific-palisades-09'), k('los-angeles-10'), k('los-angeles-05'), k('los-angeles-12'), k('beverly-hills-05'), k('beverly-hills-06'), c('los-angeles-05'), c('beverly-hills-04'), c('santa-monica-03')] },
  { id: 'dark', h: 'Dark wood, cherry and black', p: 'Dark-stained slab doors, raised-panel cherry and black gloss built-ins. Dark cabinets read well with a lighter counter or island and good lighting.', ask: 'Stain color or gloss level; bring a sample if you have one.',
    photos: [k('santa-monica-01'), k('beverly-hills-07'), c('santa-monica-01'), c('beverly-hills-18'), c('beverly-hills-20')] },
  { id: 'color', h: 'Painted color: navy and blue-gray', p: 'Painted color on the base cabinets or the whole kitchen. We paint to any color you choose; these two are from our own jobs.', ask: 'The paint brand and color name, or a chip.',
    photos: [k('santa-monica-04'), k('pacific-palisades-13')] },
  { id: 'counters', h: 'Marble, quartz and stone counters', p: 'Waterfall islands, slab backsplashes and stone counter runs. Stone is templated after the cabinets are set, then cut and installed.', ask: 'Material, edge, and whether the island has a waterfall end.',
    photos: [k('pacific-palisades-02'), k('pacific-palisades-06'), k('los-angeles-09'), k('los-angeles-11'), k('pacific-palisades-05'), k('pacific-palisades-07'), k('santa-monica-03'), k('beverly-hills-04')] },
  { id: 'shelves', h: 'Open shelves and wood accents', p: 'Floating oak shelves in place of upper cabinets, wood accent walls and built-in appliances.', ask: 'Shelf wood and length, and which wall.',
    photos: [k('beverly-hills-01'), k('beverly-hills-12'), k('beverly-hills-28'), k('beverly-hills-29'), k('beverly-hills-30'), k('beverly-hills-22')] },
  { id: 'inside', h: 'Inside the cabinets', p: 'Pull-out drawers, lit drawers and maple-lined boxes. What goes inside the cabinet is chosen at the same time as the door.', ask: 'Which cabinets need pull-outs or drawers.',
    photos: [c('beverly-hills-12'), c('santa-monica-02'), c('beverly-hills-07'), c('beverly-hills-10')] },
  { id: 'before-after', h: 'Before and after: one Beverly Hills kitchen', p: 'An L-shaped kitchen with cream cabinets and granite, taken down to the studs and rebuilt with white slab cabinets, stone counters and floating oak shelves.', ask: 'Photos of your kitchen as it is today.',
    photos: [k('beverly-hills-19'), k('beverly-hills-17'), k('beverly-hills-27'), k('beverly-hills-20'), k('beverly-hills-21'), k('beverly-hills-23')] },
];

export const TIERS = [
  { name: 'Standard', total: '$20,146', lines: ['Prefabricated cabinets, $275 per linear foot', 'Laminate counters, $40 per sq ft', 'Engineered hardwood, $7 per sq ft'] },
  { name: 'Mid-range', total: '$37,242', lines: ['Stained cabinets, $650 per linear foot', 'Quartz counters, $100 per sq ft', 'Solid hardwood, $14 per sq ft'] },
  { name: 'High-end', total: '$60,433', lines: ['Custom cabinets, $1,200 per linear foot', 'Higher-grade quartz, $150 per sq ft', 'Solid hardwood, $20 per sq ft'] },
];

export const BUILD = [
  { h: 'Cabinets', p: 'Prefabricated lines, stained or painted cabinets, or custom-built to the wall. Refinishing sound boxes is an option too.', href: '/services/cabinetry' },
  { h: 'Counters and backsplash', p: 'Laminate, quartz, marble and other stone, templated on site after the cabinets are set; tile or slab backsplashes.' },
  { h: 'Islands', p: 'New islands with seating, waterfall ends, a sink or storage on both sides.' },
  { h: 'Floors', p: 'Wood floors installed and finished under our C-15 flooring licence, so the floor and cabinets are planned together.', href: '/services/hardwood-flooring' },
  { h: 'Lighting and outlets', p: 'Ceiling and pendant lights, and GFCI outlets at the counters, by licensed trades.' },
  { h: 'Layout changes and permits', p: 'Moving the sink, range or walls, with plans and permits from LADBS or your city\'s building department.' },
];

export const LAYOUTS = [
  { h: 'Galley', p: 'Two parallel runs. Common in older Los Angeles homes; keeping the plumbing in place keeps the cost down.' },
  { h: 'L-shaped', p: 'Two runs on a corner, often opened up to a dining area or with an island added.' },
  { h: 'U-shaped', p: 'Three runs of counter; corner cabinets need pull-outs or lazy susans to stay useful.' },
  { h: 'Island kitchen', p: 'A long run plus an island for prep, seating or the sink; needs room to walk around on every side.' },
];

export const ORDER = [
  'Your city or ZIP code, and whether the home is a house, condo or rebuild.',
  'The room size, or the length of each wall of cabinets. A rough tape measure is enough.',
  'Layout: keep everything where it is, or move the sink, range or walls.',
  'Finish level: standard, mid-range or high-end (see the three priced options).',
  'Cabinet look from the chart: white, natural wood, dark, or a painted color.',
  'Counter: laminate, quartz, marble or another stone.',
  'Floor: keep it, refinish it, or new wood or tile.',
  'Three or four photos of the kitchen as it is today.',
];

export const CHART_FAQ = [
  { q: 'Are these photos from your own jobs?', a: 'Yes. Every photo on this page is from a Waltco kitchen or cabinet job, captioned with the city and the year it was taken.' },
  { q: 'Can you match a color I saw somewhere else?', a: 'Usually, yes. Send the photo or the paint color name; we make a sample door or board before the cabinets are finished.' },
  { q: 'Does the color change the price?', a: 'Less than the cabinet type does. In our priced example, cabinets ran from $275 to $1,200 per linear foot depending on prefabricated, stained or custom construction.' },
  { q: 'Can I mix looks, like wood uppers and a white island?', a: 'Yes. Many kitchens on this page mix two finishes; we price each cabinet run separately.' },
];
