// Service pages (W2). Structure and scope lists from the live pages (captured 5 Oct 2026); copy corrected to the
// fact sheet. Removed everywhere: years-in-business claims, "our team / crews / workshop" (CSLB shows no
// employees), architecture / design services (architect-only work in California), commercial and multi-family
// claims, and on-time / on-budget promises. Scope items are the work types each page offers, not past jobs.

export type ServicePage = {
  slug: string;
  tagline: string;
  intro: string[];
  scope: string[];
  photos: string[];      // ids in content/photos.ts; first is the hero
  faq: { q: string; a: string }[];
};

const permitFaq = { q: 'Who pulls the permits?', a: 'We do. Permits, inspections and sign-offs are part of the job, handled under our licence with the city that has jurisdiction — LADBS in the City of Los Angeles, or the local building department in Santa Monica, Malibu, Manhattan Beach and Redondo Beach.' };
const estimateFaq = { q: 'How do I get a price?', a: 'Use "Get your estimate" and describe the job. You get a reply from Waltco Development, and for floors and remodels a ballpark built from our own price list before the site visit. The final price is a written estimate after we see the job.' };

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'general-construction',
    tagline: 'Residential construction from the ground up — built right, the first time.',
    intro: [
      'Waltco Development manages residential construction in Los Angeles from permit to final inspection. We hold a California B General Building licence (CSLB #625535), which covers projects that involve more than two building trades — framing, foundations, structural work and the finishes that follow.',
      'You get one licensed contractor responsible for the schedule, the subcontractors, the inspections and the result, with a written scope and estimate before work starts.',
    ],
    scope: ['New home construction', 'Room and second-storey additions', 'ADU construction', 'Foundation and structural work', 'Framing', 'Permit and inspection management', 'Subcontractor coordination', 'Finish carpentry and flooring'],
    photos: ['framing-telehandler', 'addition-in-progress', 'site-work'],
    faq: [permitFaq, { q: 'What does a B General Building licence cover?', a: 'In California the B licence lets a contractor take on building projects that use more than two unrelated trades, such as framing, drywall, plumbing and electrical coordination on one job. You can check any licence, including ours, on the CSLB website.' }, estimateFaq],
  },
  {
    slug: 'new-home-construction',
    tagline: 'Your home, built from the ground up in Los Angeles.',
    intro: [
      'We build single-family homes in Los Angeles working from your architect\'s plans, from foundation and framing through finish carpentry and floors.',
      'Permits, inspections and every trade are coordinated under one contract and one licence, with a written scope before the first day on site.',
    ],
    scope: ['Custom single-family homes', 'Foundation and structural work', 'Framing and roofing', 'Electrical and plumbing rough-in (licensed subcontractors)', 'Insulation and drywall', 'Finish carpentry and trim', 'Hardwood flooring', 'Permit management'],
    photos: ['framing-telehandler', 'site-work', 'light-oak-floor-stair'],
    faq: [permitFaq, { q: 'Do you work with my architect?', a: 'Yes. We build from stamped plans prepared by your architect and engineer, and coordinate with them through plan check and construction.' }, estimateFaq],
  },
  {
    slug: 'full-home-remodeling',
    tagline: 'Turn the home you have into the home you want.',
    intro: [
      'A full remodel touches almost every trade in the house. Waltco Development manages the whole job — demolition, structural changes, kitchens and baths, electrical and plumbing upgrades and finish floors — under one contract.',
      'Permits, inspections, subcontractors, materials and scheduling are handled for you, with clear updates from start to finish.',
    ],
    scope: ['Full interior gut and rebuild', 'Layout reconfiguration', 'Structural modifications', 'Kitchen and bath renovation', 'Flooring throughout', 'Electrical and plumbing upgrades', 'Window and door replacement', 'Exterior improvements', 'Permit management'],
    photos: ['entry-hall-hardwood', 'oak-floor-fireplace', 'tile-stair-railing'],
    faq: [permitFaq, { q: 'Can we live in the house during the remodel?', a: 'Sometimes. It depends on which rooms are affected and for how long; we plan the phases with you before work starts so you know which parts of the home are usable when.' }, estimateFaq],
  },
  {
    slug: 'kitchen-remodeling',
    tagline: 'The kitchen you want — planned, built and finished by one contractor.',
    intro: [
      'We remodel kitchens in Los Angeles from layout to the last piece of trim: cabinetry, countertops, tile, lighting, plumbing fixtures, appliances and the floor underneath.',
      'Because we hold both a general building licence and a C-15 flooring licence, the cabinets, counters and wood floor are planned together instead of by separate contractors.',
      'Most kitchen budgets are decided by a few choices: whether the sink, range and walls stay where they are, custom or prefabricated cabinets, the countertop material, and the floor. We price those choices separately so you can see what each one costs and decide where to spend.',
    ],
    scope: ['Custom or prefabricated cabinetry', 'Countertop installation', 'Tile backsplash', 'Recessed and pendant lighting', 'Plumbing fixture replacement', 'Island construction', 'Appliance integration', 'Hardwood or tile flooring', 'Permit management'],
    photos: ['marble-island-kitchen', 'white-kitchen-marble', 'wood-ceiling-kitchen', 'beam-ceiling-kitchen', 'built-in-shelving-kitchen'],
    faq: [{ q: 'Do I need a permit for a kitchen remodel?', a: 'Usually, yes — moving plumbing, adding circuits or changing walls needs a permit in the City of Los Angeles and the surrounding cities. Replacing cabinets and counters in place often needs less. We tell you which applies to your plan.' }, estimateFaq],
  },
  {
    slug: 'bathroom-remodeling',
    tagline: 'Bathroom remodels with the tile, glass and finish work done right.',
    intro: [
      'From a primary bath with a freestanding tub to a compact guest bath, we coordinate tile, fixtures, vanities, glass, lighting and plumbing as one job under one contract.',
      'No juggling separate trades: one licensed contractor is accountable for the whole room.',
      'The part of a bathroom you never see matters most: the waterproofing behind and under the shower. It is built and inspected before any tile goes on, and it is listed in the estimate so you know it is there. Tile layout, niches, glass and vanity height are agreed before work starts, so the finished room looks the way you pictured it.',
    ],
    scope: ['Custom tile showers and surrounds', 'Vanity and mirror installation', 'Freestanding and built-in tubs', 'Frameless glass enclosures', 'Heated flooring', 'Plumbing fixture replacement', 'Lighting and ventilation', 'Built-in storage', 'Full gut and rebuild'],
    photos: ['freestanding-tub-bathroom', 'marble-shower', 'tub-and-shower', 'patterned-tile-bathroom', 'double-vanity-bathroom', 'white-vanity', 'grey-tile-bathroom', 'dark-tile-bathroom', 'floating-vanity'],
    faq: [{ q: 'Do I need a permit for a bathroom remodel?', a: 'If plumbing moves, walls change or new circuits are added, yes. A like-for-like fixture swap may not. We confirm with the building department for your address.' }, estimateFaq],
  },
  {
    slug: 'adu-construction',
    tagline: 'Accessory dwelling units, permitted and built right.',
    intro: [
      'California law makes it easier than ever to add an accessory dwelling unit (ADU) or junior ADU to a single-family lot. Waltco Development builds detached and attached ADUs and garage conversions in Los Angeles, from plan check through final inspection.',
      'We coordinate with your designer and the building department, build the unit, and finish it with the same kitchens, baths and floors we put in main houses.',
      'An ADU is a small house, so it needs the same things a house needs: a foundation, framing, utilities, a kitchen and a bath. Before construction we check that your electrical service and sewer line can carry the new unit and plan how materials reach the back of the lot, so those questions are answered before the price, not after.',
    ],
    scope: ['Detached and attached ADUs', 'Garage conversions', 'Junior ADUs (JADUs)', 'Permit management', 'Foundation work', 'Electrical and plumbing (licensed subcontractors)', 'Kitchen and bath finish', 'Separate entrance construction', 'Hardwood and tile flooring'],
    photos: ['addition-in-progress', 'framing-telehandler', 'bedroom-wide-plank'],
    faq: [{ q: 'Where are ADU permits issued?', a: 'In the City of Los Angeles, ADU plans go through the Department of Building and Safety (LADBS). Santa Monica, Malibu, Manhattan Beach and Redondo Beach run their own reviews under the same state ADU law.' }, estimateFaq],
  },
  {
    slug: 'room-additions',
    tagline: 'More space that looks like it was always there.',
    intro: [
      'A room addition gives you space without moving. We build ground-floor and second-storey additions that match your home\'s structure and finishes, coordinating with your structural engineer and handling permits and inspections.',
      'Framing, roofing tie-ins, windows, flooring and trim are all done under one contract so the new space blends into the old.',
      'The hardest part of an addition is the seam between old and new: where the roof lines meet, where the floor continues, where the trim turns the corner. Because we also install wood floors and finish carpentry, the floor and trim can run straight through into the new room instead of stopping at a visible line.',
    ],
    scope: ['Primary suite additions', 'Second-storey additions', 'Family room expansions', 'Home office additions', 'In-law suites', 'Enclosed patios', 'Structural engineering coordination', 'Permit management', 'Matching interior and exterior finishes'],
    photos: ['addition-in-progress', 'framing-telehandler', 'door-install'],
    faq: [permitFaq, estimateFaq],
  },
  {
    slug: 'cabinetry',
    tagline: 'Custom and prefabricated cabinetry, installed to fit.',
    intro: [
      'We supply and install cabinetry for kitchens, baths, closets and living spaces — custom-built to your measurements, or quality prefabricated lines when the budget calls for it.',
      'Cabinetry is planned with the countertops, flooring and trim around it, so everything lines up when the job is done.',
      'Custom cabinets are built to the room, which makes the most of awkward corners, sloped ceilings and older walls that are not square. Prefabricated lines come in set sizes and arrive faster. Many kitchens use both: prefabricated boxes for the runs and custom pieces for the island, pantry or built-ins. Hardware, finish and interior fittings are chosen with you before anything is ordered.',
    ],
    scope: ['Kitchen cabinetry', 'Bathroom vanities', 'Closet systems', 'Built-in shelving', 'Entertainment centers', 'Office cabinetry', 'Finish carpentry and millwork', 'Hardware sourcing and installation'],
    photos: ['built-in-shelving-kitchen', 'wood-ceiling-kitchen', 'floating-vanity', 'white-vanity'],
    faq: [{ q: 'Custom or prefabricated — which should I choose?', a: 'Custom cabinets fit odd spaces and any finish; prefabricated lines cost less and arrive faster. We price both so you can compare on the same layout.' }, estimateFaq],
  },
  {
    slug: 'finish-carpentry',
    tagline: 'The trim, stairs and built-ins that finish a home.',
    intro: [
      'Finish carpentry is what makes a house feel complete: casings, baseboards, wainscoting, stair treads and railings, built-ins and mantels.',
      'We do finish carpentry as part of our remodels and new builds, and as stand-alone projects.',
      'Stairs are where carpentry and flooring meet. We install treads, risers and nosings to match the wood floor, and fit railings and balustrades to the stair, so the staircase reads as one piece with the rooms around it. In older homes we match existing casing and baseboard profiles, or have them milled when a profile is no longer made, so new work blends with old.',
      'Finish carpentry is the last trade on most jobs and the one people notice first, so it is scheduled after drywall and paint preparation are done and before final paint, to keep joints tight and surfaces clean.',
    ],
    scope: ['Crown molding and coffered ceilings', 'Door and window casing', 'Baseboards and wainscoting', 'Built-in bookshelves', 'Stair treads, railings and balustrades', 'Closet build-outs', 'Fireplace mantels', 'Interior door installation', 'Wood paneling'],
    photos: ['stair-install', 'tile-stair-railing', 'stair-tread-finishing', 'light-oak-floor-stair'],
    faq: [{ q: 'Can you match existing trim?', a: 'Usually. We match profiles from stock or have them milled when an older home has a profile that is no longer made.' }, estimateFaq],
  },
  {
    slug: 'development-management',
    tagline: 'Owner\'s representation from first plans to final sign-off.',
    intro: [
      'For owners building on their own land, Waltco Development can act as your owner\'s representative: coordinating the architect, engineers, building department and contractors so one person is tracking budget, schedule and decisions for you.',
      'You keep control of the decisions; we keep the project moving and tell you plainly where it stands.',
      'Owner\'s representation suits people who are building on their own land but do not have the time to manage the details: comparing contractor bids, keeping the plans moving through review, checking invoices against work done, and making sure decisions are made before they hold up the job. You sign the design and construction contracts directly; we work for you, not for them.',
    ],
    scope: ['Owner\'s representation', 'Feasibility review before you buy or build', 'Architect and engineer coordination', 'Permit tracking', 'Budget development and tracking', 'Schedule oversight', 'Contractor bidding and oversight', 'Closeout and final sign-off'],
    photos: ['site-work', 'framing-telehandler'],
    faq: [{ q: 'How is this different from hiring a general contractor?', a: 'A general contractor builds the project and is paid to build it. As your owner\'s representative we sit on your side of the table: we help choose the architect, engineers and contractor, check their work and invoices, and keep decisions moving, while the contracts stay in your name.' }, estimateFaq],
  },
  {
    slug: 'hardwood-flooring',
    tagline: 'Hardwood floors installed, refinished and custom-made — under a C-15 flooring licence.',
    intro: [
      'We hold a California C-15 Flooring and Floor Covering licence (CSLB #625535) alongside our general building licence, so floors are done by a licensed flooring contractor whether they are part of a remodel or the whole job.',
      'We install solid and engineered hardwood, wide plank, herringbone and parquet, reclaimed wood and custom-matched stains in white oak, walnut and other species — and we sand and refinish existing floors.',
    ],
    scope: ['Solid and engineered hardwood installation', 'Wide-plank floors', 'Herringbone, chevron and custom parquet', 'Reclaimed wood floors', 'Custom stain and colour matching', 'Sanding and refinishing', 'Stair treads and nosings', 'Old floor removal and subfloor preparation', 'Wood beams and ceiling details'],
    photos: ['light-oak-floor-stair', 'oak-floor-fireplace', 'herringbone-floor', 'bedroom-wide-plank', 'entry-hall-hardwood', 'stair-tread-finishing'],
    faq: [
      { q: 'Solid or engineered hardwood?', a: 'Solid wood can be sanded many times and suits most raised wood subfloors. Engineered wood is more stable over concrete slabs and in rooms with changing humidity. We recommend one after we see the subfloor.' },
      { q: 'Can you match my existing floor?', a: 'Yes — species, width and stain can usually be matched so a repair or addition blends in. We make stain samples on site before finishing.' },
      { q: 'How do I get a flooring price?', a: 'Describe the job with "Get your estimate". For floors you get a ballpark from our own per-square-foot price list before the site visit, then a written estimate once we measure.' },
    ],
  },
];

export const servicePage = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
