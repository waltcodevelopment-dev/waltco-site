// Area-specific content (8 Oct 2026). Each area page carries text that is true of that place and nowhere
// else, so no two area pages read as the same template with the city swapped. Facts only from public
// sources; no claim of a past Waltco job in an area until Walter confirms one (docs/Waltco local jobs for
// area pages.xlsx). Sources:
//  - Baseline Mansionization Ordinance (BMO), Baseline Hillside Ordinance (BHO): planning.lacity.gov
//    (ordinances/docs/baseline; Code_Studies/BaselineHillsideOrd)
//  - Gregory Ain Mar Vista Tract HPOZ: planning.lacity.gov/preservation-design/overlays/gregory-ain-mar-vista-tract
//  - Whitley Heights HPOZ: planning.lacity.gov/preservation-design/overlays/whitley-heights
//  - Venice Coastal Zone Specific Plan, Ordinance No. 175,693: planning.lacity.gov
//  - Third Street Neighborhood Historic District standards: Santa Monica Municipal Code ch. 9.58
//  - Malibu Woolsey Fire (Nov 2018) and Palisades Fire (Jan 2025) rebuilding: malibucity.org
//  - Ignition-resistant construction in fire hazard severity zones: California Building Code, Chapter 7A
//  - ADUs on single-family lots and garage conversions: California ADU law (Gov. Code, Title 7, Ch. 13)
//  - Manhattan Beach walk-street encroachments: Manhattan Beach Municipal Code, encroachments in the public right-of-way

export type AreaLocal = { heading: string; body: string[]; faq: { q: string; a: string } };

export const AREA_LOCAL: Record<string, AreaLocal> = {
  'los-angeles': {
    heading: 'What decides what you can build in the City of Los Angeles',
    body: [
      'Most single-family lots in the city that are not in a hillside area fall under the Baseline Mansionization Ordinance, which caps a house\'s floor area by lot size and zone. Before we lay out a second story or a rear addition, we look the lot up on ZIMAS, the City\'s public zoning map, so the design starts inside the limits the city will approve.',
      'The city also has Historic Preservation Overlay Zones, where exterior changes are reviewed against a preservation plan, and designated hillside areas with their own rules on floor area, height and grading. Which of these applies to an address decides both what can be built and how long plan check takes, so we check it first.',
    ],
    faq: { q: 'How big can an addition be on a Los Angeles lot?', a: 'On most flat single-family lots the Baseline Mansionization Ordinance sets the maximum floor area from the lot size and zone. We look up your lot on ZIMAS and tell you how much room is left before any drawings are made.' },
  },
  'west-los-angeles': {
    heading: 'Second stories, rear additions and ADUs on the Westside',
    body: [
      'West Los Angeles is inside the City of Los Angeles, so Westside projects go through the same LADBS plan check as the rest of the city. On its flatter single-family streets, the Baseline Mansionization Ordinance is usually what sets the size of a second story or a rear addition, so we measure the existing house against it before design starts.',
      'Many Westside lots have room behind the main house for an accessory dwelling unit. California law allows an ADU on most single-family lots, and a detached unit, an attached unit or a converted garage each has its own setback and size rules. We price the version that fits your lot and explain why.',
    ],
    faq: { q: 'Can I add an ADU behind my house in West Los Angeles?', a: 'On most single-family lots, yes: California law allows an ADU, and LADBS reviews it in plan check. Lot size, setbacks and utilities decide whether it is detached, attached or a garage conversion.' },
  },
  'santa-monica': {
    heading: 'Permits and historic districts in Santa Monica',
    body: [
      'Santa Monica is its own city with its own Building and Safety Division, so plan check, submittal requirements and inspections are separate from the City of Los Angeles. A job that would be routine across the border can need different drawings here, so we work to Santa Monica\'s requirements from the first set of plans.',
      'Santa Monica also has designated historic districts, such as the Third Street Neighborhood Historic District, where exterior changes follow the district\'s own standards. Homes near the ocean sit in the coastal zone as well. We check both for your address before the scope is fixed.',
    ],
    faq: { q: 'Is my Santa Monica home in a historic district?', a: 'Some are, such as homes in the Third Street Neighborhood Historic District. Exterior changes there follow district standards. We check your address before plans are drawn.' },
  },
  malibu: {
    heading: 'Rebuilding and remodeling under Malibu\'s coastal rules',
    body: [
      'Malibu has been rebuilding twice in recent years: after the Woolsey Fire in November 2018 and again after the Palisades Fire in January 2025. Most of the city lies in the coastal zone, where the City of Malibu\'s Local Coastal Program governs what can be built, so planning review comes before building plan check.',
      'Homes in a fire hazard severity zone are built to Chapter 7A of the California Building Code: ignition-resistant roofing, vents, siding, decks and windows. On a rebuild, we plan those materials from the start rather than swapping them in at plan check.',
    ],
    faq: { q: 'Do Malibu rebuilds have to meet new fire rules?', a: 'New construction in a fire hazard severity zone follows Chapter 7A of the California Building Code, which sets ignition-resistant materials for roofs, vents, exterior walls, decks and windows.' },
  },
  'pacific-palisades': {
    heading: 'Rebuilding in the Palisades: hillside and fire rules',
    body: [
      'Pacific Palisades is part of the City of Los Angeles, and many of its streets are in the City\'s designated hillside area. There the Baseline Hillside Ordinance limits floor area by the slope of the lot and also limits height and grading, so the shape of the lot drives the size and form of a rebuild.',
      'After the Palisades Fire in January 2025, rebuilds here are also built to Chapter 7A of the California Building Code for fire hazard severity zones, with ignition-resistant roofing, vents, exterior walls and decks. Homes near the coast may need coastal review on top of LADBS plan check.',
    ],
    faq: { q: 'How does a hillside lot change a Palisades rebuild?', a: 'On lots in the City\'s hillside area, the Baseline Hillside Ordinance reduces allowed floor area on steeper slopes and limits height and grading. We review the survey and slope before design starts.' },
  },
  hollywood: {
    heading: 'Older homes, hillside streets and Whitley Heights',
    body: [
      'Hollywood includes Whitley Heights, a Historic Preservation Overlay Zone east of the Hollywood Bowl, adopted in 1992. Most of its homes were designed by A.S. Barnes between 1918 and 1928 in a Mediterranean and Spanish Colonial Revival style, and exterior changes there are reviewed against the neighborhood\'s preservation plan.',
      'Above Franklin Avenue the streets climb into the hills, where the Baseline Hillside Ordinance limits floor area, height and grading. In older homes, remodels often uncover original wiring, plumbing or framing that has to be brought up to code; we price that as a separate item once walls are open.',
    ],
    faq: { q: 'Can I remodel a house in Whitley Heights?', a: 'Yes, but it is a Historic Preservation Overlay Zone, so exterior changes are reviewed against its preservation plan. Interior remodels are usually simpler. We check what your plan triggers first.' },
  },
  encino: {
    heading: 'Encino: hillside lots south of Ventura, flat lots to the north',
    body: [
      'Encino spans two kinds of lots. In the hills south of Ventura Boulevard, homes fall in the City\'s hillside area, where the Baseline Hillside Ordinance limits floor area by slope and caps height and grading. On the flatter streets in the Valley, the Baseline Mansionization Ordinance sets the size limit instead.',
      'That difference decides whether a second story, a large addition or an ADU is the better way to add space on a given lot. We look up which rules apply to your address and show you the options before you pay for drawings.',
    ],
    faq: { q: 'Do hillside rules apply to my Encino home?', a: 'If the lot is in the City\'s designated hillside area, mostly south of Ventura Boulevard, the Baseline Hillside Ordinance applies. Flatter Valley lots follow the Baseline Mansionization Ordinance.' },
  },
  venice: {
    heading: 'Building under the Venice Coastal Zone Specific Plan',
    body: [
      'Venice has its own rulebook: the Venice Coastal Zone Specific Plan (Ordinance No. 175,693) sets height, setbacks, density and parking for the Venice coastal zone, on top of the citywide code. Many projects also need a coastal development permit, and that review happens before LADBS plan check, so it shapes the schedule.',
      'Lots here are often small and narrow, so remodels and ADUs come down to how the plan fits the lot. Near the ocean, salt air is hard on exterior metal; corrosion-resistant fasteners and flashing cost more up front and last longer.',
    ],
    faq: { q: 'What is the Venice Coastal Zone Specific Plan?', a: 'It is the City of Los Angeles ordinance (No. 175,693) that sets height, setback, density and parking rules for the Venice coastal zone. Projects there are checked against it, and many also need a coastal development permit.' },
  },
  'manhattan-beach': {
    heading: 'Manhattan Beach: its own review and the walk streets',
    body: [
      'Manhattan Beach reviews projects through its own Community Development Department, with plan check and inspections separate from Los Angeles. Its residential standards are its own as well, so a remodel is designed to Manhattan Beach\'s rules, not to rules from a neighboring city.',
      'On the city\'s walk streets, fences, patios and landscaping that extend into the public right-of-way need city approval. Close to the sand, salt air shortens the life of exterior metal, so corrosion-resistant fasteners and flashing are worth specifying.',
    ],
    faq: { q: 'Who reviews remodels in Manhattan Beach?', a: 'The City of Manhattan Beach Community Development Department handles plan check and inspections. Homes near the shore may also need coastal review.' },
  },
  'redondo-beach': {
    heading: 'Redondo Beach permits and building near the shore',
    body: [
      'Redondo Beach runs its own Building and Safety Division, so plan check and inspections follow the city\'s requirements rather than LADBS. Homes closer to the water sit in the coastal zone, where some projects need coastal review in addition to a building permit.',
      'For exterior work near the ocean, salt air is the main enemy: corrosion-resistant fasteners, flashing and hardware cost more and last longer. Inside, kitchens, baths and wood floors follow the same process as anywhere else, starting with a written scope and estimate.',
    ],
    faq: { q: 'Does Redondo Beach use LADBS?', a: 'No. Redondo Beach is its own city with its own Building and Safety Division for plan check and inspections.' },
  },
  'mar-vista': {
    heading: 'Mar Vista and the Gregory Ain Mar Vista Tract',
    body: [
      'Mar Vista includes the Gregory Ain Mar Vista Tract, 52 parcels of one-story Modern homes built in 1948 to designs by architect Gregory Ain, with planting by landscape architect Garrett Eckbo. It became the City\'s first post-World War II Historic Preservation Overlay Zone in 2003, and exterior changes there are reviewed against its preservation plan.',
      'Outside the tract, Mar Vista\'s flat single-family streets follow the Baseline Mansionization Ordinance for additions, and many lots have room for an ADU under California law.',
    ],
    faq: { q: 'Is my Mar Vista home in a historic zone?', a: 'Homes in the Gregory Ain Mar Vista Tract are in a Historic Preservation Overlay Zone, adopted in 2003, so exterior changes are reviewed. Most other Mar Vista streets are not.' },
  },
  reseda: {
    heading: 'Adding space on a Reseda lot',
    body: [
      'Reseda is in the San Fernando Valley and part of the City of Los Angeles, so projects go through LADBS. On its flat single-family streets, the Baseline Mansionization Ordinance sets how much floor area a house can have, which decides how large an addition can be.',
      'California law also allows an existing garage to be converted into an ADU, often the quickest way to add a rental or a space for family. Whether to convert, add on or build detached depends on the lot, the garage\'s condition and the utilities; we price the options side by side.',
    ],
    faq: { q: 'Can I convert my garage into an ADU in Reseda?', a: 'California law allows converting an existing garage into an ADU on most single-family lots. LADBS reviews it in plan check. The garage\'s structure and utilities decide the cost.' },
  },
};
