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
  {
    service: 'kitchen-remodeling', city: 'beverly-hills', cityLabel: 'Beverly Hills', label: 'Kitchen Remodeling in Beverly Hills',
    h1: 'Kitchen Remodeling in Beverly Hills',
    title: 'Kitchen Remodeling in Beverly Hills: Job Photos — Waltco',
    description: 'Beverly Hills kitchen remodels by a licensed Los Angeles general contractor: custom cabinets, stone islands, three-level estimates. Photos from our jobs.',
    tagline: 'Custom cabinets, stone islands and full rebuilds, with one crew from start to finish.',
    intro: [
      'We have remodeled kitchens in Beverly Hills from a single cabinet run to a full gut and rebuild. Every photo on this page is from one of our own Beverly Hills jobs, from 2019 to 2024, including two kitchens shown while the work was still going in.',
      'Most kitchens here are large and open to the family room, so the island, the range wall and the floor have to work as one room. We draw that out first, then build the cabinets to the measurements we take on site.',
    ],
    sections: [
      { h: 'The work in these photos', p: ['Two Beverly Hills kitchens make up most of this page:'], list: ['A white kitchen with flat-slab cabinets, floating oak shelves, a six-burner range under a stainless hood, and stone counters.', 'A full rebuild with light wood cabinets, a tall storage wall and a marble waterfall island, photographed during install.'] },
      { h: 'One kitchen, start to finish', p: ['Several photos follow one Beverly Hills kitchen from the original cream cabinets and granite to the finished room: the base cabinet boxes going in in 2023, the white slab cabinets set before the stone, the tall pantry wall, and the finished room with floating oak shelves over a six-burner range.'] },
      { h: 'Permits from the City of Beverly Hills', p: ['Beverly Hills is its own city. Kitchen permits go through the City of Beverly Hills Building and Safety Division, not LADBS, and the city sets its own construction hours and rules for parking and deliveries. We plan the schedule and the material drops around those rules before demolition starts.'] },
      { h: 'Protecting the rest of the house', p: ['We cover floors and doorways from the street to the kitchen, seal off the work area, and keep one point of contact for you during the job. That matters in a house that stays lived in while the kitchen is torn out.'] },
      { h: 'Your estimate', p: ['You get a written estimate with standard, mid-range and high-end options, line by line: demolition, cabinets, counters, backsplash, floors, lighting and appliance work, so you can choose where to spend.'] },
    ],
    steps: ['Walk-through and measure', 'Layout drawing and finish samples', 'Written three-level estimate', 'Beverly Hills permit when needed', 'Demolition and rough work', 'Cabinets, stone, floors and final details'],
    faq: [
      { q: 'Do you pull permits in Beverly Hills?', a: 'Yes. Beverly Hills has its own Building and Safety Division, separate from the City of Los Angeles, and we file there when the work needs a permit.' },
      { q: 'Can you build a waterfall island?', a: 'Yes. One of the kitchens on this page has a marble waterfall island; we build the base and coordinate the stone fabrication and install.' },
      { q: 'Do you make the cabinets yourselves?', a: 'Yes. Cabinets are built to the measurements we take on site, in painted, stained or natural wood finishes.' },
    ],
  },
  {
    service: 'cabinetry', city: 'beverly-hills', cityLabel: 'Beverly Hills', label: 'Custom Cabinets & Built-Ins in Beverly Hills',
    h1: 'Custom Cabinets and Built-Ins in Beverly Hills',
    title: 'Custom Cabinets & Built-Ins in Beverly Hills — Waltco',
    description: 'Custom kitchen cabinets, drawer banks and built-ins for Beverly Hills homes, built to site measurements by a licensed LA contractor. Install photos.',
    tagline: 'Flat-slab, maple and painted cabinetry, built to the wall it goes on.',
    intro: [
      'This page shows cabinet work from our Beverly Hills jobs in 2023 and 2024: white flat-slab kitchen cabinets, deep drawer banks, lit drawers inside a built-in, and light wood cabinets for a full kitchen rebuild.',
      'Many of the photos were taken during install, before the counters and hardware went on, so you can see how the boxes, the open uppers and the shelving are put together.',
    ],
    sections: [
      { h: 'What we built here', p: ['White slab base cabinets with maple-lined open uppers, a tall pantry cabinet beside the range, banks of wide drawers with bar pulls, and a built-in with lighting inside the drawers.'] },
      { h: 'Drawers instead of doors', p: ['In the kitchens on this page, most of the base storage is drawers. Wide drawers hold pots and dishes better than shelves behind doors, and they put everything within reach without kneeling.'] },
      { h: 'How the price is set', p: ['Cabinets are priced by the linear foot, with standard, mid-range and high-end options for the box, the doors and the finish. Built-ins and closets are priced after a site visit.'] },
    ],
    steps: ['Measure every wall', 'Drawing with door and drawer layout', 'Wood and finish samples', 'Written estimate', 'Build and install', 'Hardware, lighting and adjustment'],
    faq: [
      { q: 'Can you match cabinets to an existing kitchen?', a: 'Often, yes. Bring us a door or a photo; we match the style and finish as closely as the wood allows and tell you up front if it will not be exact.' },
      { q: 'Do you put lights inside cabinets?', a: 'Yes. One built-in on this page has lighting inside the drawers; LED strips under uppers and inside shelves are also common.' },
      { q: 'Do you also do the counters?', a: 'Yes. We coordinate stone or quartz counters so they go in right after the cabinets are set.' },
    ],
  },
  {
    service: 'bathroom-remodeling', city: 'beverly-hills', cityLabel: 'Beverly Hills', label: 'Bathroom Remodeling in Beverly Hills',
    h1: 'Bathroom Remodeling in Beverly Hills',
    title: 'Bathroom Remodeling in Beverly Hills: Job Photos — Waltco',
    description: 'Beverly Hills bathroom remodels by a licensed LA contractor: new tubs and showers, tile, vanities and plumbing. Before, during and after photos.',
    tagline: 'Tubs, showers, tile and vanities, from the studs out.',
    intro: [
      'The photos on this page follow our own Beverly Hills bathroom work from 2022 to 2024, from the original glass tub enclosure and wallpaper to a new tub with large-format tile, a built-in niche, a marble-look shower and navy vanities.',
      'You can see the steps in between too: the walls opened to the studs, new copper supply lines, the tile going up and the vanities set before the tops went on.',
    ],
    sections: [
      { h: 'What was built', p: ['Across these bathrooms:'], list: ['A new tub with large-format wall tile and a tiled niche for bottles.', 'A marble-look shower with a glass door.', 'A vanity with a vessel sink, and navy vanities with a lit mirror.', 'New supply lines and drains while the walls were open.'] },
      { h: 'Opening the walls', p: ['When a bathroom is taken down to the studs, the plumbing behind the tile is in plain view. That is the time to replace old supply lines and drains, move a valve or add a niche, because closing the wall and reopening it later costs far more.'] },
      { h: 'Permits in Beverly Hills', p: ['Bathroom work that changes plumbing or electrical in Beverly Hills is permitted by the City of Beverly Hills Building and Safety Division. We file the permit and schedule the inspections before the walls are closed.'] },
      { h: 'Your estimate', p: ['A written estimate with standard, mid-range and high-end options for tile, fixtures and the vanity, so you can compare before you decide.'] },
    ],
    steps: ['Measure and look behind access panels', 'Fixture and tile selections', 'Three-level written estimate', 'Permit when the work needs one', 'Demolition, plumbing and inspections', 'Tile, vanity, glass and fixtures'],
    faq: [
      { q: 'Can you replace a tub with a shower?', a: 'Yes. We change the drain and valve while the wall is open and build the shower to the size of the space.' },
      { q: 'How long is the bathroom out of use?', a: 'It depends on the scope and inspections; your estimate includes a schedule so you can plan around it.' },
      { q: 'Do you build the vanities?', a: 'Yes. We build vanities to the size of the bathroom, or install one you choose.' },
    ],
  },
  {
    service: 'kitchen-remodeling', city: 'santa-monica', cityLabel: 'Santa Monica', label: 'Kitchen Remodeling in Santa Monica',
    h1: 'Kitchen Remodeling in Santa Monica',
    title: 'Santa Monica Kitchen Remodeling: Job Photos — Waltco',
    description: 'Santa Monica kitchen remodels by a licensed general contractor: cabinets, quartz islands, floors and permits with the city. Photos from our jobs.',
    tagline: 'Houses and condos near the coast, permitted with the City of Santa Monica.',
    intro: [
      'The kitchens on this page are from our Santa Monica jobs between 2020 and 2025: a quartz waterfall island with dark slab cabinets, white shaker kitchens over wide-plank wood floors, and a navy-and-glass kitchen with a stainless hood.',
      'Santa Monica has a mix of older houses and condos. In a condo the building usually has its own rules for work hours, elevator use and noise, so we get those in writing before we schedule demolition.',
    ],
    sections: [
      { h: 'What these kitchens have', p: ['The work shown here includes:'], list: ['A quartz waterfall island set against dark flat-slab cabinets.', 'White shaker cabinets with an undermount sink, a stainless hood and a dark stone island top.', 'Navy base cabinets with glass-front uppers.', 'A U-shaped white kitchen with a stone backsplash.'] },
      { h: 'Permits in Santa Monica', p: ['Santa Monica runs its own permits through the City of Santa Monica Building and Safety Division, not LADBS. Moving plumbing, gas or walls needs plans; condo work may also need approval from the building\'s association first.'] },
      { h: 'Near the ocean', p: ['Salt air is hard on some metal finishes. Close to the beach we lean toward stainless or coated hardware and fixtures, and we seal stone counters and wood floors before you move back in.'] },
      { h: 'Your estimate', p: ['A written estimate with standard, mid-range and high-end options, broken down by trade, so you can see the cost of each choice.'] },
    ],
    steps: ['Measure and photos of the space', 'Layout and selections', 'Three-level written estimate', 'City and building approvals', 'Demolition and rough work', 'Install, finish and clean-up'],
    faq: [
      { q: 'Do you remodel condo kitchens in Santa Monica?', a: 'Yes. We work with the building\'s rules on hours, elevators and parking, and get association approval in hand before work starts.' },
      { q: 'Who issues the permit?', a: 'The City of Santa Monica Building and Safety Division. Santa Monica is a separate city from Los Angeles.' },
      { q: 'Can you redo the floor at the same time?', a: 'Yes. Several kitchens on this page have new wood floors, and doing the floor with the kitchen avoids patching around new cabinets later.' },
    ],
  },
  {
    service: 'cabinetry', city: 'santa-monica', cityLabel: 'Santa Monica', label: 'Custom Cabinets & Vanities in Santa Monica',
    h1: 'Custom Cabinets and Vanities in Santa Monica',
    title: 'Custom Cabinets & Vanities in Santa Monica — Waltco',
    description: 'Custom cabinets, pull-out drawers and vanity cabinets in Santa Monica for homes and small businesses, built and installed by a licensed contractor.',
    tagline: 'Wood cabinetry for homes and small shops, built to fit.',
    intro: [
      'Our Santa Monica cabinet work from 2023 and 2024 includes dark wood slab cabinets, maple pull-out drawers, a tall maple cabinet with a mitered edge, and wood station cabinets for a local salon.',
      'Every piece is built to the measurements we take on site, so it fits the wall, the plumbing and the way the space is used.',
    ],
    sections: [
      { h: 'For homes', p: ['Kitchen and pantry cabinets in dark or natural wood, pull-out drawers inside base cabinets, and tall storage cabinets.'] },
      { h: 'For small businesses', p: ['We built wood cabinets with glass tops for a Santa Monica salon, sized to each styling station. Commercial cabinetry is planned around the business hours so the shop can stay open.'] },
      { h: 'Pull-outs and inserts', p: ['Pull-out drawers turn a deep base cabinet into storage you can see from above. We fit them to the box, so there is no wasted space at the sides.'] },
    ],
    steps: ['Site measure', 'Drawing and wood choice', 'Written estimate', 'Build in our shop', 'Install', 'Final fit and hardware'],
    faq: [
      { q: 'Do you build cabinets for businesses?', a: 'Yes. One job on this page is a set of station cabinets for a Santa Monica salon.' },
      { q: 'Can you add pull-outs to cabinets I already have?', a: 'Often, yes, if the boxes are sound. We measure them and tell you what fits.' },
      { q: 'What woods do you use?', a: 'Maple, oak and walnut are common, stained, natural or painted; we show samples before you choose.' },
    ],
  },
];

export const svcCityPath = (s: SvcCity) => `/services/${s.service}/${s.city}`;
export const svcCity = (service: string, city: string) => SVC_CITY.find((s) => s.service === service && s.city === city);
