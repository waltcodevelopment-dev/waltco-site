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

  // ── Kitchen and cabinet guides (owner direction 27 Nov 2026: E&K model, "do what you can"). Prices only from the
  // price list and Estimate 79775; photos only the owner's own jobs (CAT_PHOTOS / SC_PHOTOS).
  {
    slug: 'cabinet-door-styles-explained',
    title: 'Kitchen Cabinet Door Styles Explained: Shaker, Slab, Raised Panel',
    description: 'Shaker, slab, raised panel, glass-front and inset cabinet doors compared: how each is built, where it fits and what it costs per linear foot in Los Angeles.',
    dek: 'The door is the first thing anyone sees in a kitchen, and it decides whether the room reads modern, transitional or traditional. Here is how the main door styles differ, with photos from our own kitchens.',
    updated: '2026-11-27',
    photos: ['cat-white-shaker-los-angeles-284', 'cat-natural-slab-los-angeles-603', 'cat-raised-cream-los-angeles-788', 'cat-glass-front-los-angeles-283'],
    links: [
      { href: '/services/cabinetry/shaker-cabinets', label: 'Shaker cabinets' },
      { href: '/services/cabinetry/slab-cabinets', label: 'Slab cabinets' },
      { href: '/services/cabinetry/raised-panel-cabinets', label: 'Raised panel cabinets' },
      { href: '/services/cabinetry/glass-front-cabinets', label: 'Glass-front cabinets' },
      { href: '/services/cabinetry/color-chart', label: 'Cabinet color chart' },
    ],
    sections: [
      { h: 'Five-piece or one piece', p: ['Almost every cabinet door is one of two kinds. A five-piece door has a frame of four parts (two stiles running up and down, two rails across) around a center panel. A slab door is a single flat piece with no frame. Shaker, raised panel and most glass doors are five-piece; slab is the one-piece door.'] },
      { h: 'Shaker', p: ['A Shaker door has a flat center panel set back from a square frame. It is the most common door in the kitchens we build because it sits between styles: with brass knobs and marble it leans classic, with long pulls and quartz it leans modern. Narrow rails look lighter; wide rails look more traditional.'] },
      { h: 'Slab (flat panel)', p: ['A slab door is one flat surface. With tight, even gaps between doors, a run of slab cabinets reads as one calm wall, which is why it is the door of most modern kitchens. Every reveal shows on a slab door, so boxes have to be set dead level. Painted slabs are usually MDF so they stay flat; wood slabs show the grain across the run.'] },
      { h: 'Raised panel', p: ['A raised panel door has a center panel shaped at its edges so it stands forward of the frame. The profile catches light and shadow, which gives depth and a traditional look. It suits Spanish, Mediterranean and traditional houses, often with crown molding, panel-front refrigerators and an island with furniture-style feet.'] },
      { h: 'Glass-front and inset', p: ['Glass-front doors are five-piece frames with glass in place of the panel, used for a few uppers to break up a long wall. Inset doors sit inside the cabinet frame, flush with its face, instead of covering it; they need very precise fitting and usually cost more for that reason.'] },
      { h: 'What the door does to the price', p: ['The door style alone moves the price less than the construction level. On our price list, cabinets are $275 per linear foot prefabricated, $650 new stained or painted, and $1,200 custom built, whatever the door. Inset and complex profiles add labor at the custom level.'] },
    ],
    faq: [
      { q: 'Which cabinet door style is the most popular?', a: 'In the kitchens we build in Los Angeles, Shaker and slab are the most common; Shaker for transitional kitchens, slab for modern ones.' },
      { q: 'Can I mix door styles?', a: 'Yes, carefully: slab drawer fronts under Shaker doors are common, and glass-front uppers mix with either.' },
      { q: 'Which door is easiest to clean?', a: 'Slab, because it has no inside corners. Shaker and raised panel collect a little dust along the bottom rail.' },
      { q: 'Can I change only my doors?', a: 'If the cabinet boxes are sound, new doors and drawer fronts can go on the existing boxes. We check at the site visit.' },
    ],
    related: ['cabinetry', 'kitchen-remodeling'],
  },
  {
    slug: 'kitchen-cabinet-cost-per-linear-foot-los-angeles',
    title: 'Kitchen Cabinet Cost per Linear Foot in Los Angeles',
    description: 'What kitchen cabinets cost per linear foot in Los Angeles: $275 prefabricated, $650 stained or painted, $1,200 custom, how to measure and a worked example.',
    dek: 'Cabinets are the biggest line in every kitchen estimate, and they are priced by the linear foot. Here is what that means, how to measure your own kitchen, and what our three levels cost.',
    updated: '2026-11-27',
    photos: ['cat-build-los-angeles-718', 'cat-build-los-angeles-413', 'cat-warm-wood-slab-los-angeles-574', 'cat-white-shaker-los-angeles-282'],
    links: [
      { href: '/services/kitchen-remodeling/cost-calculator', label: 'Kitchen remodel cost calculator' },
      { href: '/services/kitchen-remodeling/pricing', label: 'Kitchen and cabinet pricing' },
      { href: '/services/cabinetry/prefabricated-cabinets', label: 'Prefabricated cabinets' },
      { href: '/blog/kitchen-remodel-cost-los-angeles-2026', label: 'What a kitchen remodel costs in Los Angeles' },
    ],
    sections: [
      { h: 'What a linear foot of cabinet is', p: ['A linear foot is one foot of cabinet run measured along the wall. On our price list, one linear foot covers the base cabinet and the wall cabinet above it on that stretch of wall, installed. A 10-foot wall of uppers and base cabinets is 10 linear feet, not 20.'] },
      { h: 'Our three levels', p: ['These are the rates every Waltco cabinet estimate starts from:'], list: ['Prefabricated, factory finished: $275 per linear foot. Standard sizes and set colors, the fastest install.', 'New cabinets, stained or painted: $650 per linear foot. More door, wood and color choices, finished for your kitchen.', 'Custom built: $1,200 per linear foot. Built to the wall in any size, finish and detail.'] },
      { h: 'How to measure your run', p: ['Measure each wall where cabinets go, end to end, in feet. On an L or U kitchen, measure each wall into the corner and take about 2 feet off for each inside corner so it is not counted twice. Add the length of the island if it has cabinets. Tall pantry and oven cabinets count by their width like any other run.'] },
      { h: 'A worked example', p: ['In the galley kitchen we priced in October 2026, 34 linear feet of cabinets came to $9,350 prefabricated, $22,100 stained and $40,800 custom. Cabinets were 46% to 68% of the whole remodel, which is why the cabinet level is the first decision to make.'] },
      { h: 'What the rate does not include', p: ['Counters, backsplash, floor, plumbing and electrical, permits, appliances and fixtures are separate lines on the estimate. Hardware upgrades, panel-front appliances, glass doors and lighting inside cabinets are priced as extras.'] },
    ],
    faq: [
      { q: 'Do upper and lower cabinets count separately?', a: 'No. On our price list a linear foot covers both on the same wall.' },
      { q: 'Can I mix levels in one kitchen?', a: 'Yes; prefabricated perimeter runs with a custom island is common, and each run is priced at its own rate.' },
      { q: 'Is refinishing cheaper than any of the three levels?', a: 'Usually, if the boxes are sound. We price both at the site visit.' },
      { q: 'How exact is a price from the linear foot?', a: 'It is a reliable ballpark. The written estimate follows the site measure and the finishes you choose.' },
    ],
    related: ['cabinetry', 'kitchen-remodeling'],
  },
  {
    slug: 'prefab-vs-custom-kitchen-cabinets',
    title: 'Prefab vs Custom Kitchen Cabinets: What You Get for the Price',
    description: 'Prefabricated or custom kitchen cabinets? Sizes, finishes, schedule and price per linear foot compared, from a Los Angeles contractor who installs both.',
    dek: 'Prefabricated cabinets cost $275 per linear foot on our price list; custom-built cabinets cost $1,200. The difference is not quality of installation but what can be made to fit and finished to order.',
    updated: '2026-11-27',
    photos: ['cat-build-los-angeles-414', 'cat-build-los-angeles-716', 'cat-natural-slab-los-angeles-605', 'cat-raised-cherry-westlake-village-627'],
    links: [
      { href: '/services/cabinetry/prefabricated-cabinets', label: 'Prefabricated cabinets' },
      { href: '/services/cabinetry/how-we-build', label: 'How we build and install cabinets' },
      { href: '/services/cabinetry/real-wood-vs-thermofoil', label: 'Real wood vs. thermofoil and laminate' },
    ],
    sections: [
      { h: 'The short version', p: ['Prefabricated cabinets are built and finished in a factory in standard widths and set colors. Custom cabinets are built for one kitchen, to the wall, in any size and finish. In between sits our middle level: new cabinets stained or painted to order at $650 per linear foot.'] },
      { h: 'Fit', p: ['Prefab boxes come in steps of a few inches, so a wall that is not an exact multiple gets filler strips and panels. Planned well, fillers land where nobody sees them. Custom boxes are made to the measured wall, which matters most in older Los Angeles houses with walls out of square, and for tall runs to the ceiling.'] },
      { h: 'Finish and color', p: ['A factory finish is sprayed and cured before delivery and arrives even. The trade-off is the color list. Custom and painted-to-order cabinets can be any color or stain, matched to a sample door in your room.'] },
      { h: 'Schedule', p: ['Prefab is the fastest: nothing is built or finished for your kitchen. Custom takes longer because the cabinets are drawn, built and finished first. We give the schedule with the written estimate either way.'] },
      { h: 'Installation is the same', p: ['Whatever the level, our crew sets the boxes level, fixes them to studs or blocking, adjusts doors after the counters go on and scribes panels to the walls. A prefab kitchen installed well looks better than a custom one installed badly.'] },
    ],
    faq: [
      { q: 'Are prefab cabinets made of particleboard?', a: 'It depends on the line; the supplier spec sheet in your estimate states the box material.' },
      { q: 'Can prefab cabinets go to the ceiling?', a: 'Yes, with tall wall cabinets and a filler or crown at the top.' },
      { q: 'When is custom worth it?', a: 'For odd-sized walls, special finishes, inset doors, furniture-style islands, and kitchens where the cabinets are the centerpiece.' },
      { q: 'Can I mix prefab and custom?', a: 'Yes; a custom island in front of prefab perimeter cabinets is a common way to spend where it shows.' },
    ],
    related: ['cabinetry', 'kitchen-remodeling'],
  },
  {
    slug: 'how-to-measure-kitchen-for-new-cabinets',
    title: 'How to Measure Your Kitchen for New Cabinets',
    description: 'Measure your kitchen for new cabinets in ten minutes: walls, corners, windows, the island and the ceiling, and what to send for a quick, accurate estimate.',
    dek: 'A tape measure, a phone and ten minutes are enough for a reliable kitchen estimate. Here is what to measure, in what order, and how to send it.',
    updated: '2026-11-27',
    photos: ['cat-build-los-angeles-718', 'cat-island-los-angeles-174', 'cat-range-wall-los-angeles-289', 'cat-pantry-los-angeles-506'],
    links: [
      { href: '/services/kitchen-remodeling/cost-calculator', label: 'Kitchen remodel cost calculator' },
      { href: '/services/kitchen-remodeling/how-to-order', label: 'How to order a kitchen' },
    ],
    sections: [
      { h: '1. Sketch the room', p: ['Draw the room from above on paper, as a simple box. Mark the walls with cabinets, the windows, doors, the sink, the range and the refrigerator. Name the walls A, B and C, the same way our calculator does.'] },
      { h: '2. Measure each wall of cabinets', p: ['Measure along each wall from end to end where the cabinets are or will be, in feet and inches. On corner walls, measure all the way into the corner. Write each number on the sketch.'] },
      { h: '3. Windows, doors and the ceiling', p: ['Measure from the corner to each window and door, and the window sill height from the floor. Measure the ceiling height in two places; it decides whether uppers go to the ceiling and how tall they are.'] },
      { h: '4. The island and walkways', p: ['If there is an island, measure its length and depth and the space between it and the counters around it. About 42 inches of walkway is a comfortable working clearance; less than about 36 inches gets tight when doors and the dishwasher open.'] },
      { h: '5. Photos', p: ['Take one photo of each wall straight on, one from each corner of the room, and close-ups of the sink plumbing and any outlets on the backsplash. Photos tell us more about pipes, vents and wiring than numbers do.'] },
      { h: 'What happens next', p: ['Enter the numbers in the calculator for a three-level ballpark, then send the sketch and photos with your estimate request. We confirm every measurement at the site visit before anything is ordered.'] },
    ],
    faq: [
      { q: 'Do I measure in inches or feet?', a: 'Either; write feet and inches as you read them. The calculator uses feet.' },
      { q: 'Do I need exact numbers?', a: 'No. Rough numbers give a good ballpark; we measure exactly at the site visit.' },
      { q: 'What if my walls are not straight?', a: 'Measure at counter height. We check for plumb and level at the visit and plan fillers or scribing.' },
      { q: 'Should I measure the appliances?', a: 'Note their widths if you are keeping them; new appliances are planned from their specification sheets.' },
    ],
    related: ['kitchen-remodeling', 'cabinetry'],
  },
  {
    slug: 'quartz-vs-marble-vs-granite-countertops',
    title: 'Quartz vs Marble vs Granite Kitchen Countertops',
    description: 'Quartz, marble and granite kitchen countertops compared: looks, heat, stains, sealing and price per square foot, with photos from our Los Angeles kitchens.',
    dek: 'All three look like stone and cost more than laminate. They differ in how they handle heat, acids and stains, and in how much care they ask for.',
    updated: '2026-11-27',
    photos: ['cat-island-los-angeles-165', 'cat-island-los-angeles-602', 'cat-raised-cherry-los-angeles-047', 'cat-white-shaker-los-angeles-234'],
    links: [
      { href: '/services/kitchen-remodeling/marble-countertops', label: 'Marble countertops' },
      { href: '/services/kitchen-remodeling/granite-countertops', label: 'Granite countertops' },
      { href: '/services/kitchen-remodeling/kitchen-islands', label: 'Kitchen islands' },
    ],
    sections: [
      { h: 'Quartz', p: ['Quartz counters are engineered: crushed quartz bound with resin into slabs. The color is even from slab to slab, there are no pores to seal, and most stains wipe off. The resin is the weak point: very hot pans can mark it, and long direct sun can fade some colors, so it is an indoor surface.'] },
      { h: 'Marble', p: ['Marble is a natural stone, softer and more porous than granite. Lemon juice, wine and vinegar can etch the polish, and dark liquids can stain if left. Many owners accept that patina for the look; a honed finish hides etching better than a polished one, and a sealer slows staining.'] },
      { h: 'Granite', p: ['Granite is a hard, dense natural stone that takes hot pans and resists scratches. Most granites need sealing now and then. Patterns range from even speckles to bold movement; dark granites hide wear well next to white cabinets.'] },
      { h: 'Price', p: ['In our priced example, counters were $40 per square foot in laminate, $100 in quartz and $150 in a higher-grade quartz. Marble, granite and quartzite depend on the slab you choose at the yard; we price them from the slab.'] },
      { h: 'Templating and seams', p: ['Whatever the stone, it is templated after the cabinets are set. We plan seams away from the sink and the most visible part of the island, and match the pattern across them where the slab allows.'] },
    ],
    faq: [
      { q: 'Which counter needs the least care?', a: 'Quartz: no sealing, and most spills wipe off. Use a trivet for very hot pans.' },
      { q: 'Is marble a bad idea in a kitchen?', a: 'Not if you accept etching and some wear. If not, a quartz with veining gives a similar look.' },
      { q: 'Can I pick my own slab?', a: 'Yes. You choose it at the stone yard and we lay out the cuts on it.' },
      { q: 'Which stone works for a waterfall island?', a: 'Any of the three; the grain is matched around the corner where the slab allows.' },
    ],
    related: ['kitchen-remodeling'],
  },
  {
    slug: 'refinish-or-replace-kitchen-cabinets',
    title: 'Refinish or Replace Kitchen Cabinets? How to Decide',
    description: 'Refinish, reface or replace your kitchen cabinets? How to check the boxes, what each option changes, and how it compares with new cabinets per linear foot.',
    dek: 'If the cabinet boxes are sound, keeping them can save most of the cabinet budget. Here is how we decide between refinishing, refacing and replacing.',
    updated: '2026-11-27',
    photos: ['cat-pull-out-beverly-hills-355', 'cat-raised-cream-beverly-hills-435', 'sc-kitchen-remodeling-beverly-hills-15', 'cat-white-slab-altadena-740'],
    links: [
      { href: '/services/cabinetry/drawer-pull-outs', label: 'Drawer pull-outs and organizers' },
      { href: '/services/kitchen-remodeling/full-kitchen-remodel', label: 'Full kitchen remodel: before and after' },
      { href: '/blog/kitchen-cabinet-cost-per-linear-foot-los-angeles', label: 'Kitchen cabinet cost per linear foot' },
    ],
    sections: [
      { h: 'Check the boxes first', p: ['Open every cabinet. Look for water damage under the sink, swollen or soft bottoms, loose face frames and drawers that sag. If the boxes are solid and the layout works, they are worth keeping.'] },
      { h: 'Refinish', p: ['Refinishing keeps the boxes and doors and changes the color: the doors and frames are cleaned, sanded, primed and sprayed. It works on solid wood and many painted doors; it does not work well on thermofoil or laminate, where paint does not bond reliably.'] },
      { h: 'Reface', p: ['Refacing keeps the boxes and replaces the doors and drawer fronts, with new veneer or paint on the face frames. It changes the door style too, for example from raised panel to Shaker, and new hinges and soft-close slides can go in at the same time.'] },
      { h: 'Replace', p: ['Replace when the boxes are damaged, the layout does not work, or you are moving the sink, range or walls. New cabinets start at $275 per linear foot prefabricated on our price list.'] },
      { h: 'Upgrades that fit any option', p: ['Pull-out drawers inside base cabinets, new hardware, lighting under the uppers and a new counter can be added whether you refinish, reface or replace.'] },
    ],
    faq: [
      { q: 'Is refinishing much cheaper than new cabinets?', a: 'Usually far less than any of our new-cabinet levels; we price it after seeing the cabinets.' },
      { q: 'Can I keep my cabinets and change the counter?', a: 'Yes, if the boxes are level and strong enough for stone.' },
      { q: 'Can refaced cabinets get soft-close hinges?', a: 'Yes; new hinges and slides are usually part of refacing.' },
      { q: 'Do you do refinishing on site?', a: 'Doors are usually finished off site and frames in place; we explain the plan at the visit.' },
    ],
    related: ['cabinetry', 'kitchen-remodeling'],
  },
  {
    slug: 'how-to-choose-kitchen-cabinet-colors',
    title: 'How to Choose Kitchen Cabinet Colors',
    description: 'How to choose kitchen cabinet colors: whites, grays, blues, wood tones and black, how light changes them, and what goes with your counter and floor.',
    dek: 'Cabinet colors change with the light in your room. Here is how to narrow the choice, test it, and pair it with the counter and the floor.',
    updated: '2026-11-27',
    photos: ['cat-blue-gray-shaker-los-angeles-784', 'cat-navy-manhattan-beach-773', 'cat-raised-cherry-westlake-village-625', 'cat-gray-shaker-los-angeles-250'],
    links: [
      { href: '/services/cabinetry/color-chart', label: 'Cabinet color chart' },
      { href: '/services/cabinetry/shaker-cabinets/blue-gray-shaker-cabinets', label: 'Blue-gray Shaker cabinets' },
      { href: '/services/cabinetry/two-tone-cabinets/navy-blue-cabinets', label: 'Navy blue cabinets' },
      { href: '/services/cabinetry/slab-cabinets/natural-wood-slab-cabinets', label: 'Natural wood slab cabinets' },
    ],
    sections: [
      { h: 'Start with the fixed things', p: ['The floor, the counter you love and the light in the room are harder to change than paint. Pick the cabinet color last, against them: a warm oak floor, a veined marble or a dark granite each narrows the choice.'] },
      { h: 'Light changes everything', p: ['North light makes colors look cooler and grayer; west light warms them in the afternoon. A cool white can turn gray in a north-facing kitchen, and a soft blue-gray can read green under warm evening bulbs. Always look at samples in your own room, morning and evening.'] },
      { h: 'The color families', p: ['Most kitchens we build fall into a few families:'], list: ['Whites and creams: bright, easy with any counter; creams soften next to granite and dark wood.', 'Grays: hide wear, look softer next to wood floors.', 'Blues: navy as an accent on islands and bars; blue-gray across a whole kitchen.', 'Wood tones: natural and honey for warmth, walnut and espresso for depth.', 'Black: dramatic, needs daylight and good lighting.'] },
      { h: 'Two colors, not three', p: ['A two-tone kitchen keeps one color for most of the cabinets and uses the second on the island or the base run. A third color usually looks busy.'] },
      { h: 'Test before you commit', p: ['We paint or stain sample doors and look at them in your kitchen before the cabinets are finished. Screens are close but never exact.'] },
    ],
    faq: [
      { q: 'What is the safest cabinet color?', a: 'A warm white or a soft gray, because they work with the widest range of counters and floors.' },
      { q: 'Do dark cabinets make a kitchen smaller?', a: 'In a small dim room, yes; with light counters, a light floor and good lighting they read rich.' },
      { q: 'Should the island match?', a: 'It can, or it can be the accent color in a two-tone kitchen.' },
      { q: 'Can I see your colors in person?', a: 'Yes, on sample doors at the site visit or at our shop and showroom by appointment.' },
    ],
    related: ['cabinetry', 'kitchen-remodeling'],
  },
];

export const post = (slug: string) => POSTS.find((p) => p.slug === slug);
