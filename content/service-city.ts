// Service x city pages (wave 1, owner go-ahead 19 Oct 2026: "si y si"). One page per service where Waltco has
// real job photos in that city; copy written for that place so no two pages repeat (built 40% overlap test).
export type SvcCity = {
  service: string; city: string; cityLabel: string; label: string; h1: string; title: string; description: string;
  tagline: string; intro: string[]; sections: { h: string; p: string[]; list?: string[] }[]; steps: string[];
  faq: { q: string; a: string }[];
};

export const SVC_CITY: SvcCity[] = [
  {
    service: 'kitchen-remodeling', city: 'pacific-palisades', cityLabel: 'Pacific Palisades', label: 'Kitchen Remodeling in Pacific Palisades',
    h1: 'Kitchen Remodeling in Pacific Palisades',
    title: 'Kitchen Remodeling, Pacific Palisades — Waltco Development',
    description: 'Kitchen remodeling in Pacific Palisades by a licensed general contractor: cabinets, stone counters, wood floors. Photos from our Palisades jobs.',
    tagline: 'Cabinets, stone counters and wood floors, built by one licensed contractor.',
    intro: [
      'Waltco Development remodels kitchens in Pacific Palisades, from a new island and counters to a full gut and rebuild. The photos on this page come from our own job sites in the Palisades, taken between 2021 and 2026.',
      'One licensed contractor runs the whole job: demolition, framing changes, cabinets, stone, tile, wood floors and finish carpentry. That means one schedule, one estimate and one person to call.',
    ],
    sections: [
      { h: 'What a Palisades kitchen usually includes', p: ['Most kitchens we build here share a few things: a large island, stone counters, a range wall with a tiled or slab backsplash, and wood floors that run through to the living areas.'], list: ['Islands with marble or quartzite tops, including waterfall edges.', 'Painted or wood cabinets, built to the room rather than to stock sizes.', 'Slab or tile backsplashes behind the range.', 'Oak or walnut floors installed under our C-15 flooring licence.'] },
      { h: 'Permits and rebuilds', p: ['Pacific Palisades is part of the City of Los Angeles, so kitchen permits go through LADBS. Some lots sit in the California Coastal Zone, which can add a coastal review.', 'Many homes here are being rebuilt after the January 2025 fire. A rebuild kitchen starts from plans rather than from an existing room, so we price it from the drawings and confirm it on site.'] },
      { h: 'Three finish levels', p: ['Every estimate shows standard, mid-range and high-end options, built from our own price list. You see what changes between them: cabinet type, counter material, flooring and fixtures.'] },
    ],
    steps: ['Site visit and measure', 'Layout and finish choices', 'Written estimate with three finish levels', 'Demolition and rough work', 'Cabinets, counters and backsplash', 'Floors, trim and final walk-through'],
    faq: [
      { q: 'Do you handle permits for a kitchen in the Palisades?', a: 'Yes. We pull the permit through LADBS in the contractor\'s name and schedule the inspections.' },
      { q: 'Can you work from an architect\'s plans for a rebuild?', a: 'Yes. Send the plans with your request and we price the kitchen from them, then confirm the numbers at a site visit.' },
      { q: 'Do you install the wood floors too?', a: 'Yes. Waltco holds a C-15 flooring licence as well as the B general building licence, so floors are part of the same job.' },
    ],
  },
  {
    service: 'cabinetry', city: 'pacific-palisades', cityLabel: 'Pacific Palisades', label: 'Custom Cabinets & Closets in Pacific Palisades',
    h1: 'Custom Cabinets and Closets in Pacific Palisades',
    title: 'Custom Cabinets & Closets, Pacific Palisades — Waltco',
    description: 'Custom cabinets, closets, vanities and built-ins in Pacific Palisades, built and installed by a licensed contractor. Photos from our Palisades jobs.',
    tagline: 'Closets, vanities, built-ins and kitchen cabinets, made for the room.',
    intro: [
      'Waltco Development builds and installs custom cabinetry in Pacific Palisades: walk-in closets, reach-in closets, bathroom vanities, built-in shelving and kitchen cabinets. The photos here are from our Palisades job sites in 2025.',
      'Cabinets are measured on site and built to the wall, not picked from stock widths, so they fit the room and line up with the doors, windows and floors around them.',
    ],
    sections: [
      { h: 'What we build', p: ['Most Palisades cabinet work falls into four groups:'], list: ['Walk-in closets with shelving, drawers and hanging rods.', 'Reach-in closets with drawer stacks and adjustable shelves.', 'Bathroom vanities with drawers and stone tops.', 'Wood built-ins: shelving walls, desks and kitchen islands.'] },
      { h: 'Finishes', p: ['We build in painted finishes, stained wood such as walnut, and light wood veneers. Hardware, stone tops and lighting are chosen with you before anything is cut.'] },
      { h: 'Part of a larger job, or on its own', p: ['Cabinets often go in during a remodel or a rebuild, after drywall and before the final floor finish. We can also build a single closet or vanity in a finished home; that work is priced after a site visit.'] },
    ],
    steps: ['Site visit and measure', 'Drawing and finish samples', 'Written estimate', 'Shop build', 'Installation and hardware', 'Final adjustment and walk-through'],
    faq: [
      { q: 'Do you build closets as well as kitchen cabinets?', a: 'Yes. Walk-in and reach-in closets, vanities and built-ins are a large part of our cabinet work.' },
      { q: 'Can you match existing cabinets?', a: 'Often, yes. We look at the door style and finish on site and tell you what can be matched before you decide.' },
      { q: 'How is a cabinet job priced?', a: 'By the linear foot of cabinet, with standard, mid-range and high-end options. A single closet or vanity is priced after a site visit.' },
    ],
  },
];

export const svcCityPath = (s: SvcCity) => `/services/${s.service}/${s.city}`;
export const svcCity = (service: string, city: string) => SVC_CITY.find((s) => s.service === service && s.city === city);
