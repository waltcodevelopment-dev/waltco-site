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
  {
    service: 'kitchen-remodeling', city: 'los-angeles', cityLabel: 'Los Angeles', label: 'Kitchen Remodeling in Los Angeles',
    h1: 'Kitchen Remodeling in Los Angeles',
    title: 'LA Kitchen Remodeling: Job Photos & Estimates — Waltco',
    description: 'Kitchen remodeling across Los Angeles by a licensed general contractor based on South Vermont Avenue. Job photos from our LA kitchens, 2020 to 2024.',
    tagline: 'From a cabinet refresh to a full rebuild, from our shop on South Vermont Avenue.',
    intro: [
      'Waltco Development is based in Los Angeles, with our shop and showroom at 9216 S. Vermont Avenue. We remodel kitchens across the city, and the photos below come from our own LA kitchen jobs between 2020 and 2024.',
      'Los Angeles kitchens come in every shape: galley kitchens in older homes, open plans with a long island, and lofts with concrete floors. We plan the layout around the room you have, then build it with one crew and one schedule.',
    ],
    sections: [
      { h: 'What we build in LA kitchens', p: ['The work on this page covers a wide range of styles and budgets:'], list: ['Oak and walnut slab cabinets, painted shaker cabinets and glass-front uppers.', 'Stone and quartz counters, waterfall islands and farmhouse sinks.', 'Range walls with stone or tile backsplashes and vented hoods.', 'Wood floors to finish the room, from light oak to dark-stained boards.'] },
      { h: 'Permits in the City of Los Angeles', p: ['Inside city limits, kitchen permits are issued by the Los Angeles Department of Building and Safety (LADBS). Moving walls, plumbing or gas lines usually needs plans; a like-for-like cabinet and counter change often does not. Cities such as Santa Monica, Culver City and Beverly Hills have their own building departments, and we file with whichever one covers your address.'] },
      { h: 'Older homes', p: ['Many LA homes were built before 1978. If yours was, we check the work area for lead paint before demolition, and we look at the wiring and plumbing behind the old cabinets before we give a final price.'] },
      { h: 'Your estimate', p: ['You get a written estimate with standard, mid-range and high-end options from our own price list, so you can see where the money goes before you choose.'] },
    ],
    steps: ['Free site measure', 'Layout and material choices', 'Written estimate, three finish levels', 'Permits when the job needs them', 'Demolition, rough work and inspections', 'Cabinets, counters, floors and finish'],
    faq: [
      { q: 'Do you remodel small kitchens?', a: 'Yes. Galley and small kitchens are common in Los Angeles; the estimate is built from your room\'s measurements, not a flat package price.' },
      { q: 'Which building department handles my permit?', a: 'LADBS inside the City of Los Angeles. Cities like Santa Monica or Beverly Hills have their own departments; we file with the one for your address.' },
      { q: 'Can I see the materials first?', a: 'Yes. Our shop and showroom on South Vermont Avenue is open by appointment.' },
    ],
  },
  {
    service: 'cabinetry', city: 'los-angeles', cityLabel: 'Los Angeles', label: 'Custom Cabinets & Closets in Los Angeles',
    h1: 'Custom Cabinets and Closets in Los Angeles',
    title: 'Custom Cabinets & Closets in Los Angeles — Waltco',
    description: 'Custom closets, vanities, built-ins and kitchen cabinets in Los Angeles, measured on site and installed by a licensed contractor. Photos from LA jobs.',
    tagline: 'Closets, vanities and built-ins, measured on site and made to fit.',
    intro: [
      'Waltco Development builds custom cabinetry for Los Angeles homes: walk-in closets, bathroom vanities, built-in cabinets and kitchen cabinets. The photos here come from our own LA jobs between 2023 and 2026.',
      'We measure each wall on site, so drawers, doors and shelves line up with the room instead of leaving filler strips and gaps.',
    ],
    sections: [
      { h: 'Closets and built-ins', p: ['Walk-in closets with drawer banks, shelving and hanging rods, closet lighting, and built-in cabinets for living rooms and halls.'] },
      { h: 'Vanities and kitchens', p: ['Wood vanities sized to the bathroom, and kitchen cabinets in raised-panel, shaker or flat-slab styles, stained or painted.'] },
      { h: 'How a cabinet job is priced', p: ['By the linear foot of cabinet, with standard, mid-range and high-end options. A single closet or vanity on its own is priced after a site visit, because access and wall conditions change the work.'] },
    ],
    steps: ['Site measure', 'Drawing, wood and finish samples', 'Written estimate', 'Build', 'Install, hardware and lighting', 'Final adjustment'],
    faq: [
      { q: 'Can you build a closet in an existing home?', a: 'Yes. We measure, build and install around your schedule, and protect the floors while we work.' },
      { q: 'Do you add lighting inside closets?', a: 'Yes. LED strips inside shelves and hanging sections are a common add-on.' },
      { q: 'Do you build bathroom vanities?', a: 'Yes, in wood or painted finishes, sized to the bathroom and topped in stone.' },
    ],
  },
];

export const svcCityPath = (s: SvcCity) => `/services/${s.service}/${s.city}`;
export const svcCity = (service: string, city: string) => SVC_CITY.find((s) => s.service === service && s.city === city);
