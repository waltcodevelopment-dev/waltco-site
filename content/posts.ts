// Guides (W2). Rewritten from the live posts (captured 5 Oct 2026). Removed: cost figures with no source in
// Waltco's own price list, "30+ years / hundreds of kitchens", "fully insured", and unsourced statistics.
// Kept: process advice and California rules that can be checked on CSLB or the building department.

export type Post = {
  slug: string;
  title: string;
  dek: string;
  updated: string; // ISO date the copy last changed
  sections: { h: string; p: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
  related: string[]; // service slugs
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
    title: 'Kitchen Remodel Cost in Los Angeles — What Drives the Price',
    dek: '"How much will it cost?" is the first question every homeowner asks. The honest answer depends on a handful of decisions — here they are, and how to get a real number for yours.',
    updated: UPDATED,
    sections: [
      { h: 'The decisions that move the price most', p: ['Two kitchens of the same size can differ several times over in price. These choices account for most of the difference:'], list: ['Layout: keeping the sink, range and walls where they are costs far less than moving plumbing, gas or structure.', 'Cabinets: custom-built cabinets cost more than prefabricated lines; both can look good.', 'Countertops: stone type, thickness, edges and the number of seams.', 'Floors: refinishing an existing wood floor, installing new hardwood, or tile.', 'Permits and inspections: required when plumbing, electrical or walls change.', 'Condition behind the walls: older Los Angeles homes can hide wiring or plumbing that has to be brought up to code.'] },
      { h: 'Why online averages mislead', p: ['Published cost ranges mix small refreshes with full rebuilds and different cities. They are a poor guide to your kitchen. A price built from line items — demolition, cabinets, counters, tile, floor, permits — tells you where the money goes and what you can change.'] },
      { h: 'How Waltco prices a kitchen', p: ['Every number in a Waltco estimate comes from our own price list, line by line. Describe your kitchen with "Get your estimate" and you get a reply from Waltco Development; for floors and remodels, a ballpark from that price list arrives before the site visit. After we measure, you get a written estimate.'] },
    ],
    faq: [
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
];

export const post = (slug: string) => POSTS.find((p) => p.slug === slug);
