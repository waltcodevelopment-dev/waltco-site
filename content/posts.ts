// Guides (W2). Rewritten from the live posts (captured 5 Oct 2026). Removed: cost figures with no source in
// Waltco's own price list, "30+ years / hundreds of kitchens", "fully insured", and unsourced statistics.
// Kept: process advice and California rules that can be checked on CSLB or the building department.

export type Post = {
  slug: string;
  title: string;
  dek: string;
  description?: string; // meta description; falls back to the route default
  updated: string; // ISO date the copy last changed
  sections: { h: string; p: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
  related: string[]; // service slugs
  photos?: string[]; // ids from FLOOR_PHOTOS or SC_PHOTOS: owner's own job photos, captioned with city and year
  links?: { href: string; label: string }[]; // in-site pages this guide supports
};

const UPDATED = '2026-10-06';

export const POSTS: Post[] = [
  {
    slug: 'how-to-choose-general-contractor-los-angeles',
    title: 'How to Choose a Licensed General Contractor in Los Angeles',
    dek: 'Hiring the wrong contractor is one of the most expensive mistakes a homeowner can make. Here is what to check before you sign — most of it takes five minutes on the CSLB website.',
    updated: UPDATED,
    sections: [
      { h: 'Step 1 — Look up the licence on CSLB', p: ['In California, any job worth $500 or more in labour and materials must be done by a licensed contractor. Search the licence number on the Contractors State License Board (CSLB) website and read the whole record, not just the status line.'], list: ['Status: it should say current and active.', 'Classifications: a B General Building licence for multi-trade work; a specialty licence such as C-15 Flooring for that trade.', 'Bond: the record shows whether a contractor\'s bond is on file.', 'Workers\' compensation: either a policy, or an exemption stating the contractor has no employees.', 'Business name and address: they should match the contract you are given.'] },
      { h: 'Step 2 — Ask about insurance separately', p: ['The CSLB record shows workers\' compensation but not general liability insurance. If liability coverage matters to you, ask for a certificate of insurance and check its dates.'] },
      { h: 'Step 3 — Get a written contract', p: ['California home improvement contracts must be in writing and include a description of the work, the price, a payment schedule and a notice of your right to cancel. The down payment on a home improvement contract is limited to 10% of the price or $1,000, whichever is less.'] },
      { h: 'Step 4 — Make sure permits are in the contractor\'s name', p: ['In the City of Los Angeles, permits are issued by the Department of Building and Safety (LADBS); cities such as Santa Monica, Malibu, Manhattan Beach and Redondo Beach have their own departments. A contractor who asks you to pull an owner-builder permit is shifting the responsibility — and the liability — to you.'] },
      { h: 'Red flags', p: ['Walk away if you see any of these:'], list: ['Cash only, or a large payment before any work starts.', 'No written contract, or a licence number that doesn\'t match the name on it.', 'Pressure to sign the same day.', 'A request that you get the permits yourself.'] },
    ],
    faq: [
      { q: 'How do I find out if a contractor has complaints?', a: 'The CSLB licence record shows public complaint disclosures and legal actions where the law allows them to be disclosed.' },
      { q: 'What should a payment schedule look like?', a: 'A small down payment within the legal limit, then progress payments tied to completed work — never far ahead of what has been built.' },
      { q: 'Is Waltco Development licensed?', a: 'Yes. CSLB #625535 is current and active, with B General Building and C-15 Flooring classifications and a contractor\'s bond on file. You can check it on the CSLB website.' },
    ],
    related: ['general-construction', 'full-home-remodeling'],
  },
  {
    slug: 'kitchen-remodel-cost-los-angeles-2026',
    title: 'What a Kitchen Remodel Costs in Los Angeles (2026)',
    description: 'Kitchen remodel cost in Los Angeles, priced line by line: a 177 sq ft kitchen at $20,146, $37,242 and $60,433 from our 2026 price list.',
    dek: 'A kitchen is priced line by line: cabinets by the linear foot, counters and floors by the square foot, and the trade work by the job. Here is one Los Angeles kitchen priced three ways from our own price list, and what moves the number.',
    updated: '2026-11-24',
    photos: ['sc-kitchen-remodeling-beverly-hills-15', 'sc-kitchen-remodeling-beverly-hills-23', 'sc-kitchen-remodeling-los-angeles-08', 'sc-kitchen-remodeling-santa-monica-02'],
    links: [
      { href: '/services/kitchen-remodeling', label: 'Kitchen remodeling' },
      { href: '/services/kitchen-remodeling/los-angeles', label: 'Kitchen remodeling in Los Angeles' },
      { href: '/services/kitchen-remodeling/beverly-hills', label: 'Kitchen remodeling in Beverly Hills' },
      { href: '/services/kitchen-remodeling/santa-monica', label: 'Kitchen remodeling in Santa Monica' },
      { href: '/services/kitchen-remodeling/pacific-palisades', label: 'Kitchen remodeling in Pacific Palisades' },
      { href: '/services/cabinetry', label: 'Custom cabinetry' },
    ],
    sections: [
      { h: 'The short answer', p: ['For a galley kitchen of about 177 square feet, priced in October 2026 from Waltco Development\'s own price list, the remodel came to $20,146 with standard finishes, $37,242 mid-range and $60,433 high-end. That works out to about $114, $210 and $341 per square foot of kitchen.', 'The room, the layout and the trade work were the same in all three. Only the cabinets, counters, backsplash, floor and fixtures changed, and that alone tripled the price.'] },
      { h: 'The example: one galley kitchen, three finish levels', p: ['The kitchen measured 8\'4" by 18\'7" plus a 4\' by 5\'7" end area, with 34 linear feet of upper and lower cabinets and 41 square feet of counter. The sink, range and walls stayed where they were. Each option replaced the cabinets, counters and backsplash and put a wood floor in place of the old tile.'], list: [
        'Standard, $20,146: prefabricated, factory-finished cabinets at $275 per linear foot ($9,350), laminate counters at $40 per sq ft ($1,640), tile backsplash ($1,235) and engineered hardwood at $7 per sq ft ($1,239).',
        'Mid-range, $37,242: new stained cabinets at $650 per linear foot ($22,100), quartz counters at $100 per sq ft ($4,100), tile backsplash ($1,378) and solid hardwood at $14 per sq ft ($2,478).',
        'High-end, $60,433: custom cabinets at $1,200 per linear foot ($40,800), higher-grade quartz at $150 per sq ft ($6,150), tile backsplash ($1,841) and solid hardwood at $20 per sq ft ($3,540).',
      ] },
      { h: 'The lines that were the same in every option', p: ['$5,354 of each estimate did not change with the finish level, because the work is the same whatever goes in:'], list: [
        'Demolition and haul-away of the old cabinets and counters: $2,170, plus $443 to take up 177 sq ft of floor tile.',
        'Sink and faucet reconnected where the plumbing already was: $553.',
        'Range disconnected, reinstalled and gas leak-tested: $354; two refrigerators moved out and back: $285.',
        'Six GFCI outlets at the counters: $600; drywall patch after demolition: $570; final clean-up: $380.',
      ] },
      { h: 'Cabinets decide most of the price', p: ['Cabinets were the largest line in every option: 46% of the standard price, 59% of the mid-range and 68% of the high-end. That is why the cabinet choice is the first thing to settle. Many kitchens mix the two: prefabricated boxes for the long runs and custom pieces for the island, pantry or a tight corner.', 'If your cabinet boxes are sound, refinishing them and changing the counters costs far less than any of the three options above. We tell you at the site visit whether the boxes are worth keeping.'] },
      { h: 'What these numbers leave out', p: ['The three estimates were for the work listed above. These were priced separately or not at all:'], list: [
        'Permit and plan-check fees. Moving plumbing, gas, circuits or walls needs a permit from LADBS inside the City of Los Angeles, or from your city\'s own building department.',
        'Appliances, the sink, the faucet and light fixtures beyond the allowance: the owner chose and bought them.',
        'Moving the sink, range or walls. A new layout adds plumbing, gas, electrical and framing lines, and usually plans.',
        'Floor leveling, and anything found behind the old cabinets, such as wiring or plumbing that has to be brought up to code. Homes built before 1978 are checked for lead paint before demolition.',
      ] },
      { h: 'Why online averages mislead', p: ['Published cost ranges mix small refreshes with full rebuilds and different cities, and they rarely say what is in the number. A price per square foot is also a weak guide: a larger kitchen with the same run of cabinets costs only a little more, while a small kitchen with custom cabinets can cost more than a big one with prefabricated lines. A price built from line items tells you where the money goes and what you can change.'] },
      { h: 'How to get a number for your kitchen', p: ['Send the room size, a few photos and the finish level you have in mind with "Get your estimate". For remodels we reply with a ballpark from the same price list before the site visit. After we measure, you get a written estimate with standard, mid-range and high-end options, like the one above, so you can choose line by line.'] },
    ],
    faq: [
      { q: 'How much does a kitchen remodel cost in Los Angeles?', a: 'It depends mostly on the cabinets. A 177 sq ft galley kitchen we priced in 2026 came to $20,146 standard, $37,242 mid-range and $60,433 high-end, with the layout unchanged and permits, appliances and fixtures not included.' },
      { q: 'What is the most expensive part of a kitchen remodel?', a: 'Cabinets. In our example they were 46% to 68% of the total, depending on whether they were prefabricated, stained or custom-built.' },
      { q: 'Is it cheaper to keep the same layout?', a: 'Yes. Keeping the sink, range and walls where they are avoids new plumbing, gas, electrical and framing work, and often the need for plans.' },
      { q: 'Do I need a permit for a kitchen remodel?', a: 'If you move plumbing, add circuits or change walls, yes. Replacing cabinets and counters in place often needs less. We confirm with the building department for your address.' },
      { q: 'Can I live at home during the remodel?', a: 'Most people do, with a temporary kitchen set up elsewhere in the house. We plan the order of work so the disruption is as short as possible.' },
    ],
    related: ['kitchen-remodeling', 'cabinetry', 'hardwood-flooring'],
  },
  {
    slug: 'adu-los-angeles-2026-guide',
    title: 'ADU Construction in Los Angeles — What to Know Before You Build',
    dek: 'Accessory dwelling units are one of the most common projects on Los Angeles lots. Here are the types, how permits work, and what to settle before construction starts.',
    updated: UPDATED,
    sections: [
      { h: 'The four kinds of ADU', p: ['California law recognises several ways to add a unit to a single-family lot:'], list: ['Detached ADU: a separate building in the yard.', 'Attached ADU: an addition that shares a wall with the house.', 'Garage conversion: an existing garage turned into living space.', 'Junior ADU (JADU): a unit of up to 500 square feet created inside the existing home.'] },
      { h: 'Permits', p: ['In the City of Los Angeles, ADU plans are reviewed and permitted by the Department of Building and Safety (LADBS). Santa Monica, Malibu, Manhattan Beach and Redondo Beach review ADUs through their own departments under the same state law. Lots in the coastal zone can need additional review.'] },
      { h: 'What to settle before construction', p: [], list: ['How the unit will be used — rental, family, office — which shapes layout and finishes.', 'Utilities: whether the existing electrical service and sewer line can carry the new unit.', 'Access and parking for construction on your lot.', 'Who prepares the plans: a designer or architect draws them; we build from approved plans.'] },
    ],
    faq: [
      { q: 'Can I rent out my ADU?', a: 'Generally yes, subject to state and local rules on rental terms. Check current City of Los Angeles rules before you sign a lease.' },
      { q: 'Does Waltco design ADUs?', a: 'We build from plans prepared by your designer or architect and coordinate with them through plan check and construction.' },
    ],
    related: ['adu-construction', 'room-additions', 'general-construction'],
  },
  {
    slug: 'altadena-fire-rebuild-contractor',
    title: 'Altadena Fire Rebuild: What to Know Before Hiring a Contractor',
    dek: 'The January 2025 Eaton Fire destroyed thousands of homes in Altadena and nearby foothill communities. If you are rebuilding, here is how the process works and how to protect yourself when hiring.',
    updated: UPDATED,
    sections: [
      { h: 'Who issues rebuild permits in Altadena', p: ['Altadena is an unincorporated community, so rebuilding permits come from Los Angeles County, not a city. Debris removal and site clearance must be complete before construction can start.'] },
      { h: 'Check the licence — especially after a disaster', p: ['Disaster areas attract unlicensed contractors. In California, contracting without a licence in a declared emergency area is a felony. Before you sign, look up the licence on the CSLB website and confirm that it is active, that it carries the B General Building classification for a full rebuild, and that a bond is on file.'] },
      { h: 'Get the scope and price in writing', p: ['A rebuild contract should list exactly what is being built, the price, the payment schedule tied to completed work, and who is responsible for permits and inspections. Keep every document for your insurance claim.'] },
      { h: 'Plan the finishes early', p: ['Kitchens, baths and floors are often chosen late and then delay the job. Deciding them during plan check keeps the rebuild moving once framing is done.'] },
    ],
    faq: [
      { q: 'Can I rebuild a larger home than before?', a: 'Possibly, but a like-for-like rebuild usually moves through review faster. Ask the County which path applies to your lot before final plans are drawn.' },
      { q: 'Does Waltco take rebuild projects?', a: 'Yes — describe your project with "Get your estimate" and we will reply.' },
    ],
    related: ['new-home-construction', 'general-construction'],
  },
  {
    slug: 'contractor-pacific-palisades-guide',
    title: 'Finding a Contractor in Pacific Palisades',
    dek: 'Pacific Palisades homeowners are hiring for everything from kitchen remodels to full rebuilds after the January 2025 Palisades Fire. Here is how permits work in the Palisades and how to choose a contractor.',
    updated: UPDATED,
    sections: [
      { h: 'Permits in the Palisades', p: ['Pacific Palisades is part of the City of Los Angeles, so building permits come from the Department of Building and Safety (LADBS). Parts of the Palisades are in the coastal zone, where some projects also need coastal review.'] },
      { h: 'Rebuilding after the fire', p: ['Fire-damaged lots need debris removal and site clearance before rebuilding. Settle the plans, the scope and the finishes early — the projects that move fastest are the ones where decisions are made before framing starts.'] },
      { h: 'Remodels and additions', p: ['For homes that are standing, the common projects are kitchens, baths, additions and new wood floors. The same rules apply: a written contract, permits in the contractor\'s name, and payments tied to completed work.'] },
      { h: 'How to choose', p: [], list: ['Look up the licence on CSLB: active status, the right classification, bond on file.', 'Ask for a written, line-item estimate.', 'Make sure the contractor pulls the permits.', 'Check that the contract includes your right to cancel and a lawful down payment.'] },
    ],
    faq: [
      { q: 'Do I need a permit to rebuild?', a: 'Yes. Rebuilding requires permits from LADBS, and coastal-zone lots may need additional review.' },
      { q: 'What is the difference between a room addition and an ADU?', a: 'An addition enlarges your home; an ADU is a separate dwelling unit with its own kitchen and entrance, permitted under the state ADU rules.' },
    ],
    related: ['new-home-construction', 'room-additions', 'kitchen-remodeling'],
  },
  {
    slug: 'box-beams-cost-los-angeles',
    title: 'What Custom Box Beams Cost in Los Angeles',
    dek: 'Box beams are priced per linear foot to build, per beam to install and per foot to finish. How Waltco Development prices them, with a Malibu example.',
    updated: '2026-10-19',
    photos: ['floor-beams-and-ceilings-09', 'floor-beams-and-ceilings-04', 'floor-beams-and-ceilings-10', 'floor-beams-and-ceilings-02'],
    links: [{ href: '/services/hardwood-flooring/beams-and-ceilings', label: 'Beams and wood ceilings' }, { href: '/blog/how-to-measure-box-beams', label: 'How to measure for box beams' }],
    sections: [
      { h: 'The short answer', p: ['A box beam is a hollow beam built from three boards mitered together: two sides and a bottom face. It looks like a solid timber but weighs a fraction of one, so it can go up on almost any ceiling.', 'Waltco Development prices built oak box beams from $100 per linear foot. Installing them from scaffolding is priced per beam, and the finish is priced per linear foot. A site measure comes first, because the final drawing sets the final price.'] },
      { h: 'A real example: four white oak beams in Malibu', p: ['A recent estimate covered four 3-sided mitered white oak beams, 9 inches high and 5¼ to 5½ inches wide: two at 140⅝ inches and two at 181⅝ inches, 53.71 linear feet in all, with a Rubio Monocoat whitewash.', 'Built, delivered, installed from scaffolding and touched up, the beams came to $10,231. The whitewash, with a sample board for approval, added $1,324. That is about $215 per linear foot, finished and installed.'] },
      { h: 'What moves the price', p: ['Six things change the number more than anything else:'], list: ['Species and surface: oak and white oak cost more than Douglas fir; hand-hewn faces cost more than planed ones.', 'Length: beams longer than 12 feet need 16-foot boards, which are not always in stock.', 'Continuous lumber or splices: one board per face looks cleaner and costs more than spliced pieces.', 'Ceiling height and shape: vaulted ceilings need scaffolding and more setting time.', 'Finish: stain, oil or whitewash, and whether a sample board is needed.', 'How many beams: set-up, delivery and clean-up are shared across the job, so each extra beam costs less.'] },
      { h: 'How we build the estimate', p: ['Every Waltco beam estimate uses the same steps, so two quotes for the same ceiling come out the same:'], list: ['Linear feet of beam × the rate for the species and surface.', 'Number of beams × the install rate.', 'One scaffold set-up for the job: delivery, floor protection, touch-up and clean-up.', 'One site measure and shop drawing.', 'Linear feet × the finish rate.'] },
      { h: 'What is not in the beam price', p: ['Ceiling patching and paint, wiring for lights inside a beam, and any structural work are priced separately. A box beam is decorative; if a beam has to carry load, an engineer sizes it first.'] },
    ],
    faq: [
      { q: 'Are box beams cheaper than solid beams?', a: 'Usually, yes. A box beam uses three boards instead of a full timber, and it is light enough to fasten to blocking in the ceiling.' },
      { q: 'Can a box beam be longer than 16 feet?', a: 'Yes, but longer beams need longer boards or a splice. We tell you which before the estimate is final.' },
      { q: 'Do you measure before quoting?', a: 'Yes. The first number is a ballpark from your sizes or photos; the final price follows a site measure and drawing.' },
    ],
    related: ['hardwood-flooring', 'finish-carpentry'],
  },
  {
    slug: 'how-to-measure-box-beams',
    title: 'How to Measure for Box Beams: Inside vs Outside',
    dek: 'Box beam sizes can mean the outside face or the inside opening. Mixing them up changes the size and the price. How to measure, and what to send us.',
    updated: '2026-10-19',
    photos: ['floor-beams-and-ceilings-03', 'floor-beams-and-ceilings-06', 'floor-beams-and-ceilings-07', 'floor-beams-and-ceilings-08'],
    links: [{ href: '/blog/box-beams-cost-los-angeles', label: 'What custom box beams cost in Los Angeles' }, { href: '/services/hardwood-flooring/beams-and-ceilings', label: 'Beams and wood ceilings' }],
    sections: [
      { h: 'Outside or inside: say which', p: ['A 3-sided box beam has a face (the bottom) and two sides, open at the top where it meets the ceiling. Its outside size is what you see: the face width and the side height. Its inside size is the opening that fits over the blocking or an existing beam.', 'The two differ by the board thickness. The inside width is the outside width minus two boards; the inside height is the outside height minus one. Always write down which one your numbers are.'] },
      { h: 'Measure the length wall to wall', p: ['Measure the full length from wall to wall, or from the wall to a post. Write it in feet and inches. Any beam longer than 12 feet needs 16-foot boards; if you want one continuous board per face, tell us, because long stock is not always available.'] },
      { h: 'What to send for an estimate', p: ['With these details we can give a ballpark before the site measure:'], list: ['Quantity and length of each beam.', 'Face width and side height, and whether they are inside or outside sizes.', 'Species and surface: oak, white oak, Douglas fir; planed, rough sawn or hand hewn.', 'Sides: 3-sided against a flat ceiling, 2-sided in a corner, or 4-sided hanging free.', 'Finish: stain, oil or whitewash, and the colour if you have one.', 'Ceiling: flat or vaulted, and its height.', 'Two or three photos of the room.'] },
      { h: 'No tape measure? Send photos', p: ['Photos of the ceiling from each end of the room are enough for a first number. We use the doors, windows and floor tiles in the photos as a guide, then confirm every size at the site measure.'] },
    ],
    faq: [
      { q: 'Which size should I give, inside or outside?', a: 'Either works, as long as you say which. Most designers give the outside face size.' },
      { q: 'How wide is a typical box beam?', a: 'It depends on the room. Beams of about 5 to 8 inches wide are common in homes with standard ceilings; larger rooms take larger beams.' },
      { q: 'Do I need to measure the ceiling height?', a: 'It helps. High or vaulted ceilings need scaffolding, which changes the install price.' },
    ],
    related: ['hardwood-flooring', 'finish-carpentry'],
  },
];

export const post = (slug: string) => POSTS.find((p) => p.slug === slug);
