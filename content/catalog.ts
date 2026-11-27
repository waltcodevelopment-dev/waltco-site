// Kitchen & cabinet catalog (owner direction 27 Nov 2026: "create the model like E&K … do not limit on pages").
// E&K model: category hub → style → look, plus trust/buying pages. A catalog page is LIVE only when it has its own
// job photos (looks, styles, projects: ≥ 3, captioned city + year); planned pages wait in PLANNED until photos come.
// Prices come only from the price list and Estimates 79775-A/B/C (19 Oct 2026). Photo ids are SC_PHOTOS ids.

export type Spec = [string, string];
export type CatSection = { h: string; p: string[]; list?: string[] };
export type CatKind = 'style' | 'look' | 'project' | 'support';
export type CatPage = {
  path: string;                 // full URL path
  hub: 'cabinetry' | 'kitchen-remodeling';
  kind: CatKind;
  style?: string;               // looks: path of their style page
  name: string;                 // H1 and link label
  short: string;                // card label
  code?: string;                // look code, E&K style (also in alt text and the estimate request)
  title: string;                // <title>, ≤ 60
  description: string;          // meta description, 70–160
  tagline: string;
  intro: string[];
  tones?: string;               // looks: the colour in words
  suits?: string;               // looks: kitchens it suits
  specs?: Spec[];
  sections: CatSection[];
  faq: { q: string; a: string }[];
  photos: string[];             // SC_PHOTOS ids, lead first
  pairs?: string[];             // paths of pages it pairs with
  guides?: string[];            // blog slugs
  line?: true;                  // prefabricated line page: catalog photos of the line, never presented as our jobs
};

const k = (s: string) => `sc-kitchen-remodeling-${s}`;
const c = (s: string) => `sc-cabinetry-${s}`;
const b = (s: string) => `sc-bathroom-remodeling-${s}`;

export const CAB = '/services/cabinetry';
export const KIT = '/services/kitchen-remodeling';
export const PRICE_TIERS = 'Prefabricated, factory finished: $275 per linear foot · New stained or painted: $650 · Custom built: $1,200';

export const CATALOG: CatPage[] = [
  // ── Style pages (level 2) ──────────────────────────────────────────────────────────────────────────────
  {
    path: `${CAB}/shaker-cabinets`, hub: 'cabinetry', kind: 'style', name: 'Shaker Cabinets', short: 'Shaker',
    title: 'Shaker Cabinets in Los Angeles — Waltco Development',
    description: 'Shaker kitchen cabinets built and installed in Los Angeles: five-piece doors with a recessed center panel, painted or stained. Photos from our jobs.',
    tagline: 'The five-piece door with a recessed panel: the door most kitchens are built around.',
    intro: [
      'A Shaker door is built from five pieces: two stiles, two rails and a flat center panel set back from the frame. The square inside edge throws a thin shadow line that reads clean in a modern kitchen and still looks right in an older Los Angeles house.',
      'We build Shaker cabinets painted or stained, in prefabricated lines when the budget calls for it or custom-built to the wall. The photos on this page come from our own Shaker kitchens in Pacific Palisades and Santa Monica.',
    ],
    sections: [
      { h: 'Why Shaker works in so many kitchens', p: ['The door has no curves, beads or raised fields, so it sits comfortably between traditional and modern. Change the hardware, the counter or the paint colour and the same door reads differently: brass knobs and marble lean classic, long bar pulls and quartz lean modern.'] },
      { h: 'Rail width and the look', p: ['Narrow rails, around 2 inches, give a lighter, more modern face. Wider rails read heavier and more traditional. On drawers under about 6 inches tall we often switch to a slab front, because a five-piece drawer that small looks crowded.'] },
      { h: 'Painted or stained', p: ['Painted Shaker is the most common look in our photos, usually white or soft white. Stained Shaker in oak or walnut shows the grain running vertically in the stiles and horizontally in the rails, which is part of its character.'] },
      { h: 'How a Shaker kitchen is priced', p: ['By the linear foot of cabinet, with three levels from our price list.'], list: ['Prefabricated, factory finished: $275 per linear foot.', 'New cabinets, stained or painted: $650 per linear foot.', 'Custom built to the wall: $1,200 per linear foot.'] },
    ],
    faq: [
      { q: 'What is the difference between Shaker and slab doors?', a: 'A Shaker door has a frame around a recessed center panel; a slab door is one flat piece with no frame.' },
      { q: 'Can Shaker doors go on an island in a different colour?', a: 'Yes. A painted island with white perimeter cabinets, or the reverse, is one of the most common two-tone layouts.' },
      { q: 'Do Shaker cabinets work in a modern kitchen?', a: 'Yes, with narrow rails, slim hardware and a plain counter edge. The square profile keeps it clean.' },
      { q: 'Are Shaker doors harder to clean?', a: 'Slightly, because dust can sit on the bottom rail. A damp cloth along the inside edge is enough.' },
      { q: 'Can you match existing Shaker cabinets?', a: 'Often. We measure the rail width and panel depth on site and tell you before you decide whether a match is possible.' },
    ],
    photos: [k('pacific-palisades-03'), k('pacific-palisades-04'), k('santa-monica-03')],
    guides: ['cabinet-door-styles-explained', 'kitchen-cabinet-cost-per-linear-foot-los-angeles'],
  },
  {
    path: `${CAB}/slab-cabinets`, hub: 'cabinetry', kind: 'style', name: 'Slab Cabinets', short: 'Slab (flat panel)',
    title: 'Slab Cabinets (Flat Panel) in Los Angeles — Waltco',
    description: 'Flat-panel slab kitchen cabinets in Los Angeles: white, natural wood, dark and black, built and installed by a licensed contractor. Photos from our jobs.',
    tagline: 'One flat door, no frame: the face of most modern kitchens we build.',
    intro: [
      'A slab door is a single flat panel with no frame or profile. With the door edges lined up and tight reveals between them, a run of slab cabinets reads as one calm surface, which is why it is the door we use most in modern kitchens.',
      'Our slab kitchens come in four looks: white, natural wood, warm wood and dark or black. Each one has its own page with the photos, specs and colour notes.',
    ],
    sections: [
      { h: 'What makes a slab kitchen look right', p: ['Straight, even gaps. On a flat door every reveal shows, so boxes are set level and doors are adjusted after the counters go on. Grain on wood slab doors is matched across a run where the boards allow it.'] },
      { h: 'Handles or no handles', p: ['Slab doors take long bar pulls, edge pulls routed into the top of the door, or push latches. Bar pulls are the most practical in a busy kitchen; edge pulls keep the face cleanest.'] },
      { h: 'Materials', p: ['Painted slab doors are made from MDF so they stay flat. Wood slab doors are veneered or solid wood depending on width. Lacquer and high-gloss finishes go on slab doors more often than on Shaker, because there are no inside corners to catch the finish.'] },
      { h: 'Pricing', p: ['Slab kitchens are priced by the linear foot like every cabinet job: $275 prefabricated, $650 new stained or painted, $1,200 custom built, from our price list.'] },
    ],
    faq: [
      { q: 'Are slab cabinets more expensive than Shaker?', a: 'Not by door style alone. The price follows the construction level and finish more than the door profile.' },
      { q: 'Do slab doors warp?', a: 'Painted slab doors made from MDF stay flat. Solid wood slab doors are kept narrower or veneered to control movement.' },
      { q: 'Can slab cabinets look warm, not cold?', a: 'Yes. Natural oak or walnut slab doors, or white slab with wood shelves and a wood floor, read warm.' },
      { q: 'What counters go with slab cabinets?', a: 'Quartz and marble with a thin square edge are the most common in our slab kitchens, often with a waterfall end on the island.' },
      { q: 'Do you build slab cabinets for bathrooms and closets too?', a: 'Yes. Vanities, closet drawers and built-ins on our cabinetry pages use the same slab doors.' },
    ],
    photos: [k('beverly-hills-14'), c('beverly-hills-01'), c('beverly-hills-05')],
    guides: ['cabinet-door-styles-explained'],
  },
  {
    path: `${CAB}/glass-front-cabinets`, hub: 'cabinetry', kind: 'style', name: 'Glass-Front Cabinets', short: 'Glass-front',
    title: 'Glass-Front Kitchen Cabinets in Los Angeles — Waltco',
    description: 'Glass-front upper cabinets built and installed in Los Angeles kitchens: framed glass doors over painted or stained runs. Photos from our jobs.',
    tagline: 'Framed glass uppers that break up a long wall of doors.',
    intro: [
      'Glass-front cabinets are framed doors with a glass panel in place of wood. We use them as upper cabinets, usually a few at the ends of a run or on both sides of a range hood, so the wall does not read as one block of doors.',
      'The kitchens on this page pair glass uppers with white Shaker cabinets in Pacific Palisades and with navy base cabinets in Santa Monica.',
    ],
    sections: [
      { h: 'Where glass uppers work', p: ['At the end of a run, beside a window, or flanking the hood. A full wall of glass shows everything inside; two to four glass doors is usually enough to lighten the room.'] },
      { h: 'Glass choices', p: ['Clear glass shows the dishes; seeded, reeded or frosted glass blurs them. We confirm the glass with you before the doors are ordered, because glass is cut to each door.'], list: ['Clear: for display shelves and glassware.', 'Reeded or fluted: vertical lines, hides clutter.', 'Frosted: soft light, hides most of the contents.'] },
      { h: 'Lighting inside', p: ['A small LED strip inside the cabinet makes glass uppers glow at night. The wiring is planned before the drywall closes, so it is part of the layout, not an afterthought.'] },
    ],
    faq: [
      { q: 'Do glass cabinet doors cost more?', a: 'Yes, a little: the glass is cut and set for each door. We price it per door on the estimate.' },
      { q: 'Can you add glass to my existing doors?', a: 'Sometimes, if the doors are five-piece. We cut out the center panel and fit glass; slab doors cannot be converted.' },
      { q: 'What shelves go inside glass cabinets?', a: 'Wood shelves painted to match, or glass shelves when there is lighting inside.' },
      { q: 'Are glass uppers practical in a busy kitchen?', a: 'Put everyday dishes behind solid doors and display pieces behind glass; that keeps the glass looking tidy.' },
    ],
    photos: [k('pacific-palisades-05'), k('santa-monica-04'), k('pacific-palisades-03'), 'cat-glass-front-los-angeles-283', 'cat-glass-front-los-angeles-562'],
  },
  {
    path: `${CAB}/open-shelving`, hub: 'cabinetry', kind: 'style', name: 'Open Shelving', short: 'Open shelving',
    title: 'Open Kitchen Shelving in Los Angeles — Waltco Development',
    description: 'Floating oak shelves and open uppers for Los Angeles kitchens, built and installed with the cabinets. Photos from our Beverly Hills kitchen.',
    tagline: 'Floating wood shelves in place of upper cabinets.',
    intro: [
      'Open shelving replaces some or all of the upper cabinets with wood shelves. In the Beverly Hills kitchen on this page we built floating oak shelves over white slab base cabinets on both sides of the range.',
      'Floating shelves are carried on steel brackets hidden inside the shelf and fixed to the framing, so they hold dishes without visible supports.',
    ],
    sections: [
      { h: 'How floating shelves are built', p: ['Each shelf is a thick wood board or a hollow box slid over steel rods. The rods are anchored into studs or blocking that we add while the wall is open. That blocking is the difference between a shelf that sags and one that stays level.'] },
      { h: 'Wood and thickness', p: ['Oak and walnut are the common choices, 1.5 to 2.5 inches thick. Thicker shelves look heavier and carry more; the length sets how many supports are needed.'] },
      { h: 'Open shelves and storage', p: ['Shelves hold less than cabinets, so we usually keep closed storage elsewhere: a tall pantry, deeper drawers or a wall of uppers on another side. In the Beverly Hills kitchen, a tall white pantry sits beside the range wall.'] },
    ],
    faq: [
      { q: 'Do open shelves get dusty?', a: 'Things used every day stay clean; items that sit for weeks collect dust. Keep everyday dishes on the shelves.' },
      { q: 'How much weight can a floating shelf hold?', a: 'It depends on the shelf length and the bracket. We size the brackets for dishes and confirm it on the drawing.' },
      { q: 'Can shelves go over a range?', a: 'Not directly above it. We keep shelves to the sides of the hood, as in our Beverly Hills kitchen.' },
      { q: 'Can I add shelves to an existing kitchen?', a: 'Yes, if we can reach the studs or add blocking. That means opening and patching the wall where the shelf goes.' },
    ],
    photos: [k('beverly-hills-01'), k('beverly-hills-12'), k('beverly-hills-28'), c('beverly-hills-03'), c('los-angeles-04'), 'cat-open-shelving-beverly-hills-609', 'cat-open-shelving-beverly-hills-613'],
    pairs: [`${CAB}/slab-cabinets/white-slab-cabinets`, `${KIT}/range-walls-and-hoods`],
  },
  {
    path: `${CAB}/two-tone-cabinets`, hub: 'cabinetry', kind: 'style', name: 'Two-Tone Cabinets', short: 'Two-tone',
    title: 'Two-Tone Kitchen Cabinets in Los Angeles — Waltco',
    description: 'Two-tone kitchen cabinets in Los Angeles: white uppers over wood or navy lowers, contrasting islands. Built and installed by a licensed contractor.',
    tagline: 'Two finishes in one kitchen: uppers and lowers, or the island against the perimeter.',
    intro: [
      'A two-tone kitchen uses two cabinet finishes on purpose. The most common split is light uppers over darker or wood lower cabinets; the other is a perimeter in one colour and an island in another.',
      'The kitchens on this page include maple-lined uppers over white base cabinets in Beverly Hills, a blue-gray kitchen in Pacific Palisades, and a white kitchen with a contrasting dark run.',
    ],
    sections: [
      { h: 'Ways to split the colours', p: ['There are three splits we build most often:'], list: ['Uppers and lowers: light above keeps the room bright; a darker base hides wear.', 'Island and perimeter: the island becomes the piece of furniture in the room.', 'Tall cabinets and runs: a wall of pantry cabinets in wood beside painted runs.'] },
      { h: 'Keeping it from looking busy', p: ['Two finishes, not three. We keep the hardware the same on both, and let one finish cover most of the kitchen so the other reads as the accent.'] },
      { h: 'Pricing', p: ['Each run is priced by the linear foot at its own level: a painted perimeter and a custom wood island can sit on the same estimate.'] },
    ],
    faq: [
      { q: 'Which colour goes on the bottom?', a: 'Usually the darker one. Lower cabinets take kicks and scuffs, and a darker base keeps the room from feeling top-heavy.' },
      { q: 'Can I use wood and paint together?', a: 'Yes. Wood lowers with painted uppers, or a wood island with a painted perimeter, are both common.' },
      { q: 'Will two-tone date quickly?', a: 'A neutral main colour with one accent tends to last; the accent is the part people change later.' },
      { q: 'Does two-tone cost more?', a: 'Only if one of the finishes is a higher level, such as a custom wood island. The estimate shows each run separately.' },
    ],
    photos: [c('beverly-hills-04'), k('pacific-palisades-13'), k('pacific-palisades-01'), c('beverly-hills-13'), 'cat-two-tone-westlake-village-362', 'cat-white-shaker-los-angeles-765'],
  },

  {
    path: `${CAB}/raised-panel-cabinets`, hub: 'cabinetry', kind: 'style', name: 'Raised Panel Cabinets', short: 'Raised panel',
    title: 'Raised Panel Kitchen Cabinets in Los Angeles — Waltco',
    description: 'Raised panel kitchen cabinets in Los Angeles: cherry, cream and oak five-piece doors with a raised center panel. Photos from our kitchens.',
    tagline: 'The traditional door: a center panel that rises toward you, framed by a profiled edge.',
    intro: [
      'A raised panel door has a frame around a center panel that is shaped at its edges and stands proud of the frame. The profile catches light and shadow, which gives the door its depth and its traditional look.',
      'Our raised panel kitchens on this page come in two looks: dark cherry in Westlake Village and Los Angeles, and cream or off-white in Beverly Hills and Los Angeles. Each look has its own page with photos, specs and color notes.',
    ],
    sections: [
      { h: 'Raised panel or Shaker', p: ['Both are five-piece doors. A Shaker panel is flat and set back; a raised panel is shaped and stands forward. Raised panel reads more formal and traditional; Shaker sits closer to modern.'] },
      { h: 'Where it fits', p: ['Spanish, Mediterranean and traditional houses, kitchens with beams and wood floors, and rooms with crown molding and panelled appliances, like the refrigerator walls in our photos.'] },
      { h: 'Details that go with it', p: ['Crown molding to the ceiling, panel-front refrigerators, furniture-style feet on an island, and glass-front uppers. Arched or square tops on the upper doors change the look again.'] },
      { h: 'Pricing', p: ['Raised panel kitchens are priced by the linear foot like every cabinet job: $275 prefabricated, $650 new stained or painted, $1,200 custom built, from our price list.'] },
    ],
    faq: [
      { q: 'Is raised panel out of style?', a: 'It suits traditional and Mediterranean houses, where a flat door can look out of place. In a modern room, Shaker or slab usually fits better.' },
      { q: 'Are raised panel doors harder to clean?', a: 'The profile collects a little more dust than a flat door; a damp cloth along the edge is enough.' },
      { q: 'Can raised panel cabinets be painted?', a: 'Yes; the cream and off-white kitchens on this page are painted.' },
      { q: 'Can you match existing raised panel doors?', a: 'Often. We check the profile and the panel at the site visit and tell you whether a match is possible.' },
      { q: 'Can a raised panel kitchen have a different island?', a: 'Yes; a painted or stained island in another color is common.' },
    ],
    photos: ['cat-raised-cherry-westlake-village-627', 'cat-raised-cream-los-angeles-788', 'cat-raised-oak-los-angeles-138'],
  },

  {
    path: `${CAB}/prefabricated-cabinets`, hub: 'cabinetry', kind: 'style', line: true, name: 'Prefabricated Cabinets', short: 'Prefabricated',
    title: 'Prefabricated Kitchen Cabinets in Los Angeles — Waltco',
    description: 'Prefab kitchen cabinets, factory finished and installed by Waltco in Los Angeles at $275 per linear foot: Shaker and slab, white, wood, black and blue.',
    tagline: 'Factory-finished cabinets in set colors, measured and installed by our crew.',
    intro: [
      'Prefabricated cabinets are built and finished in a factory in standard sizes, then measured, laid out and installed in your kitchen by our crew. They are our first price level: $275 per linear foot, against $650 for new stained or painted cabinets and $1,200 for custom built.',
      'The line we install comes in Shaker and slab doors, in white and soft gray, natural and honey wood, walnut tone, black, teal and blue, plus vanities, laundry, mudroom, pantry and office pieces. The photos on these pages are catalog photos of the line; our own installed kitchens are on our other cabinet pages.',
    ],
    sections: [
      { h: 'When prefab makes sense', p: ['When the budget matters most, the layout uses standard widths, and the schedule is tight: rentals, ADUs, flips and family kitchens. Factory finishes are sprayed and cured before delivery, so they arrive even.'] },
      { h: 'What we do', p: ['We measure, lay the kitchen out in standard widths with fillers where needed, order, deliver, set the boxes level, install doors and hardware, and adjust after the counters go on, the same standards as our custom work.'] },
      { h: 'Prefab or custom', p: ['Custom cabinets are built to the wall in any size, finish and color. Prefab comes in set sizes and colors at about a quarter of the custom price per foot. Many kitchens mix both: prefab runs with a custom island.'] },
      { h: 'Pricing', p: ['Prefabricated cabinets are $275 per linear foot on our price list. The cost calculator prices the full kitchen at the standard level, with counters, floor and trade work.'] },
    ],
    faq: [
      { q: 'Are prefab cabinets lower quality?', a: 'They are standard sizes and colors, not lower standards of installation. We set and adjust them the same way as custom cabinets.' },
      { q: 'What brand is the line?', a: 'We sell it under our own names; the estimate includes the supplier spec sheet for the cabinets you choose.' },
      { q: 'Can prefab cabinets go to the ceiling?', a: 'With tall wall cabinets and crown or filler panels, yes.' },
      { q: 'How fast can a prefab kitchen be installed?', a: 'Faster than custom, because nothing is built or finished on site. The estimate gives the schedule.' },
      { q: 'Can I mix prefab and custom?', a: 'Yes; a custom island with prefab perimeter cabinets is common.' },
      { q: 'Are these photos of your jobs?', a: 'No; they are catalog photos of the line. Our own jobs are on our other cabinet pages, captioned with city and year.' },
    ],
    photos: ['line-white-shaker-01', 'line-natural-shaker-01', 'line-black-slab-01'],
    pairs: [`${KIT}/cost-calculator`, `${KIT}/pricing`],
  },

  // ── Looks (level 3, E&K product level) ────────────────────────────────────────────────────────────────
  {
    path: `${CAB}/shaker-cabinets/white-shaker-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/shaker-cabinets`,
    name: 'White Shaker Cabinets', short: 'White Shaker', code: 'WC-SHK-WHT',
    title: 'White Shaker Kitchen Cabinets, Los Angeles — Waltco',
    description: 'White Shaker kitchen cabinets built and installed in Los Angeles. Code WC-SHK-WHT: painted five-piece doors, photos from our Palisades and Santa Monica jobs.',
    tagline: 'Painted white five-piece doors with marble or dark stone counters.',
    intro: [
      'White Shaker cabinets are painted five-piece doors with a recessed center panel. In our Pacific Palisades kitchens they run the full length of the room, with marble counters, a marble backsplash and an oak or walnut floor underneath.',
      'In Santa Monica we built the same door around a dark stone counter and an undermount sink, which shows how much the counter changes the look of the same white cabinet.',
    ],
    tones: 'A clean, slightly warm white with a soft satin sheen. The recessed panels throw a thin grey shadow line, so the doors never read flat, and the white sits comfortably next to grey-veined marble and warm wood floors.',
    suits: 'Transitional and classic kitchens, coastal homes, and family kitchens where a light room matters more than a bold one.',
    specs: [['Look code', 'WC-SHK-WHT'], ['Door', 'Shaker, five-piece, recessed flat panel'], ['Finish', 'Painted white, satin'], ['Box', 'Prefabricated or custom, plywood or MDF'], ['Hardware', 'Bar pulls or knobs, chosen with you'], ['Counters in our photos', 'Marble, dark stone'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'The white we use', p: ['White paint changes with the light. A north-facing kitchen makes a cool white look grey; a warm white stays soft. We paint sample doors and look at them in your room before the cabinets are finished.'] },
      { h: 'Counters that work with white Shaker', p: ['Marble with grey veining, as in our Palisades kitchens, keeps the room light. A dark stone counter, as in Santa Monica, gives contrast and hides wear. Both are templated after the cabinets are set.'] },
      { h: 'Keeping white cabinets white', p: ['A factory or sprayed finish holds up far better than a brushed one. Doors near the sink and the trash pull-out see the most hands; a slightly deeper sheen there makes cleaning easier.'] },
    ],
    faq: [
      { q: 'Do white Shaker cabinets turn yellow?', a: 'Some oil-based paints yellow with age. We use finishes that stay white and show you the sample first.' },
      { q: 'What floor goes with white Shaker cabinets?', a: 'Oak and walnut floors both work, as in our Pacific Palisades kitchens. We install the floor under the same contract.' },
      { q: 'Can the island be a different colour?', a: 'Yes. See our two-tone cabinets page for kitchens that split the colour.' },
      { q: 'How long does a white Shaker kitchen take to build?', a: 'It depends on prefabricated or custom; we give you the schedule with the written estimate.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SHK-WHT with your room size and photos.' },
    ],
    photos: [k('pacific-palisades-04'), k('pacific-palisades-11'), k('santa-monica-02'), k('santa-monica-03'), 'cat-white-shaker-los-angeles-284', 'cat-white-shaker-los-angeles-282', 'cat-white-shaker-los-angeles-234', 'cat-white-shaker-los-angeles-235', 'cat-white-shaker-los-angeles-765'],
    pairs: [`${KIT}/marble-countertops`, `${KIT}/granite-countertops`, `${KIT}/kitchen-wood-floors`],
    guides: ['cabinet-door-styles-explained'],
  },
  {
    path: `${CAB}/slab-cabinets/white-slab-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/slab-cabinets`,
    name: 'White Slab Cabinets', short: 'White Slab', code: 'WC-SLB-WHT',
    title: 'White Slab Kitchen Cabinets, Los Angeles — Waltco',
    description: 'White flat-panel slab cabinets for Los Angeles kitchens. Code WC-SLB-WHT: smooth painted doors with bar pulls, photos from our Beverly Hills rebuild.',
    tagline: 'Smooth white flat doors with long bar pulls and tight reveals.',
    intro: [
      'White slab cabinets are flat painted doors with no frame. Our Beverly Hills kitchen on this page used them for the base runs, a tall pantry and a bank of wide drawers, finished with long bar pulls and a white stone counter.',
      'With no profile to catch the eye, the reveals between doors and the line of the handles become the design, so the boxes are set dead level before any door goes on.',
    ],
    tones: 'A bright, cool white with a smooth low-sheen face. Under daylight it reads almost pure white; at night under warm bulbs it softens toward ivory. It is the quietest look in our chart.',
    suits: 'Modern and minimal kitchens, small rooms that need to feel larger, and kitchens built around open shelves or a feature hood.',
    specs: [['Look code', 'WC-SLB-WHT'], ['Door', 'Slab (flat panel)'], ['Finish', 'Painted white, low sheen'], ['Box', 'Prefabricated or custom'], ['Hardware', 'Long bar pulls, edge pulls or push latches'], ['Counters in our photos', 'White stone'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Drawers instead of doors', p: ['The Beverly Hills kitchen uses wide drawers in most base cabinets. Drawers put everything in reach from above, and on slab fronts the stacked drawer lines look intentional.'] },
      { h: 'Open uppers with white slab', p: ['Floating oak shelves over white slab bases are one of our most photographed combinations. The wood warms the white and the shelves keep the wall light.'] },
      { h: 'From rough to finished', p: ['The photos show the boxes going in before the stone, then the finished kitchen. Each door is adjusted after the counters are installed, because the stone weight can shift a reveal.'] },
    ],
    faq: [
      { q: 'Do white slab doors show fingerprints?', a: 'Less than gloss finishes. A low-sheen paint and bar pulls keep hands off the door faces.' },
      { q: 'Can slab doors be painted any colour?', a: 'Yes. White is in our photos; other colours go on the same flat MDF door.' },
      { q: 'Are push-to-open doors reliable?', a: 'They work well on uppers and tall cabinets. On busy base drawers we usually recommend pulls.' },
      { q: 'Does a white slab kitchen feel cold?', a: 'Add wood: open oak shelves or a wood floor, as in our Beverly Hills kitchen.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SLB-WHT with your room size and photos.' },
    ],
    photos: [k('beverly-hills-02'), k('beverly-hills-13'), k('beverly-hills-23'), c('beverly-hills-02'), c('beverly-hills-06'), c('beverly-hills-16'), 'cat-white-slab-altadena-739', 'cat-white-slab-altadena-740'],
    pairs: [`${CAB}/open-shelving`, `${KIT}/range-walls-and-hoods`, `${CAB}/pantry-cabinets`],
  },
  {
    path: `${CAB}/slab-cabinets/natural-wood-slab-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/slab-cabinets`,
    name: 'Natural Wood Slab Cabinets', short: 'Natural Wood Slab', code: 'WC-SLB-NAT',
    title: 'Natural Wood Slab Cabinets, Los Angeles — Waltco',
    description: 'Natural oak and light wood slab kitchen cabinets in Los Angeles. Code WC-SLB-NAT: clear or lightly stained flat doors, photos from our LA kitchens.',
    tagline: 'Flat oak and light wood doors with the grain left to show.',
    intro: [
      'Natural wood slab cabinets are flat doors in oak or another light wood, finished clear or lightly stained so the grain shows. Our Los Angeles kitchens on this page pair them with white or stone counters, a white island and light oak floors.',
      'In Pacific Palisades we used light wood slab cabinets with a stone slab backsplash behind a professional range, and in Beverly Hills a light wood run went in during a full kitchen rebuild.',
    ],
    tones: 'Honey and wheat tones with straight grain and a soft matte finish. The colour deepens slightly over the first year in daylight, and the grain gives each door its own pattern.',
    suits: 'Warm modern kitchens, California and mid-century houses, open plans where the kitchen sits next to the living room.',
    specs: [['Look code', 'WC-SLB-NAT'], ['Door', 'Slab (flat panel)'], ['Wood', 'Oak or other light wood, veneer or solid'], ['Finish', 'Clear or light stain, matte'], ['Hardware', 'Bar pulls or edge pulls'], ['Counters in our photos', 'Stone, white quartz-look surfaces'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Grain direction', p: ['On a long run we keep the grain running the same way on every door, usually vertical, and match it across neighbouring doors where the boards allow. Mismatched grain is the first thing the eye catches on a wood slab kitchen.'] },
      { h: 'Wood cabinets and wood floors', p: ['Two woods next to each other should either match closely or contrast clearly. A light oak cabinet over a similar oak floor reads calm; over a dark floor it reads as a deliberate contrast. Because we install both, we pick them together.'] },
      { h: 'Finish', p: ['A matte clear finish keeps the wood looking natural; a light stain evens out colour between boards. We show sample doors before anything is finished.'] },
    ],
    faq: [
      { q: 'Does natural wood darken over time?', a: 'Oak warms a little with light. The sample door we show you will change the same way.' },
      { q: 'Is wood veneer or solid wood better for slab doors?', a: 'Wide slab doors stay flatter in veneer over a stable core; narrow doors can be solid.' },
      { q: 'Can I mix wood cabinets with a white island?', a: 'Yes; several of our Los Angeles kitchens do exactly that.' },
      { q: 'How do I clean wood cabinets?', a: 'A damp cloth and a mild cleaner. Avoid soaking the doors near the sink.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SLB-NAT with your room size and photos.' },
    ],
    photos: [k('los-angeles-08'), k('los-angeles-05'), k('los-angeles-10'), k('los-angeles-12'), k('pacific-palisades-09'), k('beverly-hills-05'), k('beverly-hills-06'), c('santa-monica-03'), 'cat-natural-slab-los-angeles-600', 'cat-natural-slab-los-angeles-603', 'cat-natural-slab-los-angeles-604', 'cat-natural-slab-los-angeles-605', 'cat-natural-slab-los-angeles-664', 'cat-natural-slab-los-angeles-666', 'cat-natural-slab-altadena-756', 'cat-natural-slab-altadena-757', 'cat-natural-slab-altadena-758'],
    pairs: [`${KIT}/kitchen-wood-floors`, `${KIT}/kitchen-islands`, `${CAB}/two-tone-cabinets`],
  },
  {
    path: `${CAB}/slab-cabinets/dark-and-black-slab-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/slab-cabinets`,
    name: 'Dark Wood and Black Slab Cabinets', short: 'Dark Wood & Black', code: 'WC-SLB-DRK',
    title: 'Dark Wood and Black Slab Cabinets, LA — Waltco',
    description: 'Dark wood and black gloss slab cabinets in Los Angeles. Code WC-SLB-DRK: espresso-toned and black flat doors, photos from Santa Monica and Beverly Hills.',
    tagline: 'Espresso wood and black gloss flat doors against light stone.',
    intro: [
      'Dark slab cabinets turn the cabinetry into the strongest element in the room. In Santa Monica we built dark slab cabinets around a quartz waterfall island; in Beverly Hills we built black gloss built-ins with open shelves.',
      'Dark doors need a light counter, good lighting and a light floor or wall somewhere nearby, or the room closes in.',
    ],
    tones: 'Deep espresso brown with a faint warm undertone on the wood doors, and a true black with a mirror-like gloss on the lacquered units. Both read close to black from across the room and show their difference up close.',
    suits: 'Modern kitchens with high ceilings, lofts, and rooms with plenty of daylight where a strong colour has space.',
    specs: [['Look code', 'WC-SLB-DRK'], ['Door', 'Slab (flat panel)'], ['Finish', 'Dark stained wood, or black gloss lacquer'], ['Hardware', 'Bar pulls, often in the door colour'], ['Counters in our photos', 'White quartz, waterfall island'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Gloss or matte', p: ['Black gloss reflects light and looks sharp, but it shows fingerprints and dust. A dark matte stain hides more and feels warmer. We often use gloss on built-ins that are touched less and matte in the working kitchen.'] },
      { h: 'Light against dark', p: ['The Santa Monica kitchen puts a white quartz waterfall island in front of the dark run, so the island reads bright and the dark wall steps back.'] },
      { h: 'Lighting', p: ['Under-cabinet lights and a few more ceiling lights than a white kitchen needs. We plan them with the electrician before the walls close.'] },
    ],
    faq: [
      { q: 'Do dark cabinets make a kitchen look smaller?', a: 'They can in a small, dim room. With light counters, light floors and good lighting they read rich instead of small.' },
      { q: 'Do black gloss doors scratch?', a: 'Gloss lacquer shows fine scratches in raking light. Soft cloths only, and pulls instead of push latches on busy doors.' },
      { q: 'What counter goes with dark cabinets?', a: 'White or light quartz and marble, as in our Santa Monica kitchen.' },
      { q: 'Can dark cabinets go on just the island?', a: 'Yes; that is a two-tone kitchen. See our two-tone cabinets page.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SLB-DRK with your room size and photos.' },
    ],
    photos: [k('santa-monica-01'), c('santa-monica-01'), c('beverly-hills-18'), c('beverly-hills-20'), 'cat-dark-slab-los-angeles-306', 'cat-dark-slab-los-angeles-307', 'cat-dark-slab-santa-monica-199'],
    pairs: [`${KIT}/kitchen-islands`, `${CAB}/built-ins`],
  },

  {
    path: `${CAB}/shaker-cabinets/blue-gray-shaker-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/shaker-cabinets`,
    name: 'Blue-Gray Shaker Cabinets', short: 'Blue-Gray Shaker', code: 'WC-SHK-BLG',
    title: 'Blue-Gray Shaker Kitchen Cabinets, Los Angeles — Waltco',
    description: 'Blue-gray painted Shaker kitchen cabinets in Los Angeles. Code WC-SHK-BLG: a full kitchen and island in a soft blue-gray, photos from our 2026 job.',
    tagline: 'A soft blue-gray on every cabinet, from the tall wall to the island.',
    intro: [
      'Blue-gray Shaker cabinets are five-piece doors painted a muted blue with a gray undertone. In the Los Angeles kitchen on this page the same color runs across a full wall of tall cabinets, the base runs, glass-front uppers and the island.',
      'The kitchen sits under exposed ceiling beams over a dark wood floor, with white counters and brass hardware, so the color reads calm rather than bold.',
    ],
    tones: 'A muted, dusty blue with a gray undertone and a satin finish. In daylight it leans blue; under warm evening light it reads closer to gray-green. Brass and gold hardware warm it up; white counters keep it light.',
    suits: 'Kitchens with wood floors and beams, transitional and farmhouse houses, and owners who want color without a dark kitchen.',
    specs: [['Look code', 'WC-SHK-BLG'], ['Door', 'Shaker, five-piece, recessed flat panel'], ['Finish', 'Painted blue-gray, satin'], ['Uppers', 'Solid and glass-front'], ['Hardware', 'Brass pulls and knobs in our photos'], ['Counters in our photos', 'White stone'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'One color on every cabinet', p: ['Painting the whole kitchen one color, island included, makes a strong color feel quiet. The tall cabinet wall in this kitchen hides the refrigerator, pantry and a built-in microwave behind the same doors.'] },
      { h: 'What it sits with', p: ['A dark wood floor, white counters and white walls. The beams and the floor carry the warmth; the blue-gray keeps the room from turning brown.'] },
      { h: 'Choosing the exact blue', p: ['Blue paint shifts more with light than white or gray. We paint sample doors and look at them in your kitchen in the morning and in the evening before the cabinets are finished.'] },
    ],
    faq: [
      { q: 'Is blue-gray a good long-term cabinet color?', a: 'Muted, grayed colors tend to age better than bright ones, and changing the hardware later can refresh the look.' },
      { q: 'What floor goes with blue-gray cabinets?', a: 'Warm wood floors, light or dark. We install the floor under the same contract.' },
      { q: 'Can just the island be blue-gray?', a: 'Yes. See our two-tone and navy pages for kitchens that use color only on the island.' },
      { q: 'Do painted blue cabinets show wear?', a: 'Edges near the sink and trash see the most wear; a sprayed finish holds up well and can be touched up.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SHK-BLG with your room size and photos.' },
    ],
    photos: ['cat-blue-gray-shaker-los-angeles-784', 'cat-blue-gray-shaker-los-angeles-780', 'cat-blue-gray-shaker-los-angeles-786', 'cat-blue-gray-shaker-los-angeles-792', 'cat-blue-gray-shaker-los-angeles-793'],
    pairs: [`${KIT}/kitchen-wood-floors`, `${CAB}/two-tone-cabinets/navy-blue-cabinets`, `${CAB}/glass-front-cabinets`],
  },
  {
    path: `${CAB}/shaker-cabinets/gray-shaker-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/shaker-cabinets`,
    name: 'Gray Shaker Cabinets', short: 'Gray Shaker', code: 'WC-SHK-GRY',
    title: 'Gray Shaker Cabinets, Los Angeles — Waltco Development',
    description: 'Gray painted Shaker cabinets in Los Angeles: vanities, desks and built-ins. Code WC-SHK-GRY, photos from our 2021 and 2022 jobs.',
    tagline: 'A mid gray on five-piece doors, for vanities, desks and built-ins.',
    intro: [
      'Gray Shaker cabinets are five-piece painted doors in a soft mid gray. In the Los Angeles house on this page we used the same gray for a double vanity, a bedroom desk, a base cabinet with shelves above, and the primary bathroom vanity.',
      'Using one door and one color through a house ties the rooms together. A year later we built a gray desk unit with drawers and open shelves in another Los Angeles home.',
    ],
    tones: 'A neutral mid gray with a slight cool cast and a satin sheen. It sits between white and charcoal: dark enough to hide scuffs, light enough to keep a small room open. White counters and oak floors make it read softer.',
    suits: 'Bathrooms, offices and bedrooms, and houses where several rooms share one cabinet style.',
    specs: [['Look code', 'WC-SHK-GRY'], ['Door', 'Shaker, five-piece, recessed flat panel'], ['Finish', 'Painted gray, satin'], ['Used for', 'Vanities, desks, built-ins'], ['Hardware', 'Bar pulls'], ['Counters in our photos', 'White stone'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'One cabinet through the house', p: ['The vanity, desk and built-in in our photos share the same door and paint. That keeps the house consistent and lets us build the pieces in one run.'] },
      { h: 'Desks and built-ins', p: ['A built-in desk needs knee room, a drawer bank and a top at the right height. We plan outlets and cable holes before the unit is built.'] },
      { h: 'Gray and white together', p: ['White counters and white walls keep gray cabinets crisp. Against a warm oak floor the gray looks lighter than it does on a sample chip.'] },
    ],
    faq: [
      { q: 'Is gray still a good cabinet color?', a: 'A soft mid gray stays neutral with most counters and floors, which is why it lasts better than strong colors.' },
      { q: 'Can a gray vanity have a white top?', a: 'Yes; every gray vanity in our photos has a white stone top.' },
      { q: 'Do you build desks as well as cabinets?', a: 'Yes, built to the wall with drawers and shelving, like the desks on this page.' },
      { q: 'Warm gray or cool gray?', a: 'We paint two or three sample doors and compare them in your room before deciding.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SHK-GRY with your room size and photos.' },
    ],
    photos: ['cat-gray-shaker-los-angeles-250', 'cat-gray-shaker-los-angeles-246', 'cat-gray-shaker-los-angeles-248', 'cat-gray-shaker-los-angeles-249', 'cat-gray-shaker-los-angeles-376', 'cat-gray-shaker-los-angeles-377'],
    pairs: [`${CAB}/bathroom-vanities`, `${CAB}/built-ins`],
  },
  {
    path: `${CAB}/two-tone-cabinets/navy-blue-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/two-tone-cabinets`,
    name: 'Navy Blue Cabinets', short: 'Navy Blue', code: 'WC-TWT-NVY',
    title: 'Navy Blue Kitchen Cabinets and Islands, LA — Waltco',
    description: 'Navy blue kitchen islands and bar cabinets in Manhattan Beach and Los Angeles. Code WC-TWT-NVY: deep navy against light counters, photos from our jobs.',
    tagline: 'Deep navy on the island or the bar, against light counters and floors.',
    intro: [
      'Navy blue cabinets are usually the accent in a two-tone kitchen: the island, a bar, or the base cabinets under lighter uppers. In Manhattan Beach the navy is a curved island over a herringbone oak floor; in Los Angeles it is a bar between two lit wine walls.',
    ],
    tones: 'A deep blue with a hint of black, close to ink in low light. Next to white counters and light oak floors it reads crisp and nautical; with brass or stainless hardware it turns more formal.',
    suits: 'Coastal homes, kitchens with light floors and white or light-gray perimeter cabinets, bars and butler’s pantries.',
    specs: [['Look code', 'WC-TWT-NVY'], ['Door', 'Shaker or slab'], ['Finish', 'Painted navy, satin'], ['Used for', 'Islands and bars'], ['Pairs with', 'White or light-gray perimeter cabinets'], ['Counters in our photos', 'Light stone'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Navy as the accent', p: ['A navy island in a light kitchen becomes the piece of furniture in the room. Keeping the perimeter white or light gray stops the room from closing in.'] },
      { h: 'Curves and shapes', p: ['The Manhattan Beach island is curved, with a stone top cut to follow it. Curved cabinets are built from bent or segmented panels and need a template before the stone is cut.'] },
      { h: 'Bars and wine', p: ['Navy works well in a bar: the dark color frames lit wine storage and glassware. Wine fridges are built in with ventilation planned from the appliance specs.'] },
    ],
    faq: [
      { q: 'Does navy work in a small kitchen?', a: 'On the island or base cabinets, with light uppers and counters, yes. A full navy kitchen needs good light.' },
      { q: 'What floor goes with navy cabinets?', a: 'Light oak, as in our Manhattan Beach job, gives the strongest contrast.' },
      { q: 'Can you build a curved island?', a: 'Yes. The stone is templated from the finished island before it is cut.' },
      { q: 'Brass or stainless hardware with navy?', a: 'Both work; brass reads warmer, stainless more modern. We show samples first.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-TWT-NVY with your room size and photos.' },
    ],
    photos: ['cat-navy-manhattan-beach-773', 'cat-navy-manhattan-beach-772', 'cat-navy-manhattan-beach-774', 'cat-navy-los-angeles-262'],
    pairs: [`${KIT}/kitchen-islands`, `${CAB}/wet-bars`, `${KIT}/kitchen-wood-floors`],
  },
  {
    path: `${CAB}/slab-cabinets/warm-wood-slab-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/slab-cabinets`,
    name: 'Warm Wood Slab Cabinets', short: 'Warm Wood Slab', code: 'WC-SLB-WRM',
    title: 'Warm Wood Slab Kitchen Cabinets, Los Angeles — Waltco',
    description: 'Warm brown wood-grain slab kitchen cabinets in Los Angeles. Code WC-SLB-WRM: flat doors with the grain running across the run, photos from our 2023 job.',
    tagline: 'Flat doors in a warm medium-brown grain, matched across the run.',
    intro: [
      'Warm wood slab cabinets are flat doors in a medium-brown wood grain, darker than our natural wood look and lighter than dark espresso. The Los Angeles kitchen on this page went in during 2023: base and upper runs, tall cabinets and an island, with stone counters and a stone slab backsplash.',
      'The photos show the cabinets being set before the counters and backsplash, so you can see how the grain lines up from door to door.',
    ],
    tones: 'A warm medium brown with honey and amber in the grain and a soft low-sheen finish. Against light stone it reads rich and mid-century; with white walls it keeps the kitchen warm without going dark.',
    suits: 'Mid-century and modern houses, open kitchens next to living rooms, and kitchens with light stone counters.',
    specs: [['Look code', 'WC-SLB-WRM'], ['Door', 'Slab (flat panel)'], ['Finish', 'Warm brown wood grain, low sheen'], ['Grain', 'Matched across neighbouring doors'], ['Hardware', 'Edge pulls or bar pulls'], ['Counters in our photos', 'Light stone with a slab backsplash'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Grain that runs across the kitchen', p: ['On a slab kitchen the grain is the pattern. We lay the doors out in order so the grain continues from one door to the next where the material allows.'] },
      { h: 'Stone with warm wood', p: ['A light stone with gray or gold veining, carried up the wall as a slab backsplash, sets off the warm wood. Stone is templated after the cabinets are set, as the in-progress photos show.'] },
      { h: 'Built-ins in the same tone', p: ['The same warm tone works for built-ins and shelving in nearby rooms, like the lit walnut-tone unit at the end of the photos.'] },
    ],
    faq: [
      { q: 'Is warm wood coming back?', a: 'Many of our recent kitchens use wood slab doors instead of white; warm browns pair well with light stone.' },
      { q: 'Real wood or a wood-grain finish?', a: 'Both exist at different prices; the estimate states the material for your kitchen.' },
      { q: 'Does warm wood make a kitchen dark?', a: 'Not with light counters and walls, as in our photos.' },
      { q: 'Can the island be a different color?', a: 'Yes; a white or stone island in front of warm wood runs is a common two-tone layout.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-SLB-WRM with your room size and photos.' },
    ],
    photos: ['cat-warm-wood-slab-los-angeles-574', 'cat-warm-wood-slab-los-angeles-575', 'cat-warm-wood-slab-los-angeles-576', 'cat-warm-wood-slab-los-angeles-577', 'cat-warm-wood-slab-los-angeles-570', 'cat-warm-wood-slab-los-angeles-572', 'cat-warm-wood-slab-los-angeles-749'],
    pairs: [`${CAB}/slab-cabinets/natural-wood-slab-cabinets`, `${KIT}/marble-countertops`, `${CAB}/built-ins`],
  },

  {
    path: `${CAB}/raised-panel-cabinets/cherry-raised-panel-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/raised-panel-cabinets`,
    name: 'Cherry Raised Panel Cabinets', short: 'Cherry Raised Panel', code: 'WC-RPN-CHR',
    title: 'Cherry Raised Panel Kitchen Cabinets, LA — Waltco',
    description: 'Dark cherry raised panel kitchen cabinets in Westlake Village and Los Angeles. Code WC-RPN-CHR: deep red-brown doors, photos from our jobs.',
    tagline: 'Deep red-brown cherry doors with a raised center panel.',
    intro: [
      'Cherry raised panel cabinets are five-piece doors stained a deep red-brown, with a raised center panel. In Westlake Village they line an open kitchen under exposed ceiling beams, with a stone island and a hand-scraped wood floor.',
      'In Los Angeles we set cherry raised panel base and wall cabinets with granite counters before the new floor went in.',
    ],
    tones: 'A deep red-brown with a warm reddish undertone and a satin sheen. The raised panels catch light at their edges, so each door shows two shades. Next to light stone it reads rich; with a dark floor it reads close to espresso.',
    suits: 'Traditional and Mediterranean houses, kitchens with beams and wood floors, and open kitchens next to family rooms.',
    specs: [['Look code', 'WC-RPN-CHR'], ['Door', 'Raised panel, five-piece'], ['Finish', 'Cherry-tone stain, satin'], ['Box', 'Prefabricated or custom'], ['Hardware', 'Knobs and pulls in bronze or nickel'], ['Counters in our photos', 'Granite and light stone'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Cherry color on other woods', p: ['The cherry tone can come from cherry wood or from a cherry stain on another hardwood. We show a stained sample door before anything is finished.'] },
      { h: 'Light counters, warm floors', p: ['Light stone or granite keeps a cherry kitchen from feeling heavy. A hand-scraped wood floor, as in Westlake Village, carries the warmth through the room.'] },
      { h: 'Lighting', p: ['Dark cabinets need under-cabinet lights and enough ceiling lights. We plan them with the electrician before the walls close.'] },
    ],
    faq: [
      { q: 'Does cherry darken over time?', a: 'Cherry wood darkens with light over the first years; a cherry stain on another wood changes less.' },
      { q: 'What counters go with cherry cabinets?', a: 'Light granite and stone, as in our photos, give a strong contrast.' },
      { q: 'Can you install a new floor without removing the cabinets?', a: 'Yes; in Los Angeles the cabinets were set first and the floor went in around them.' },
      { q: 'Is cherry more expensive?', a: 'The price follows the construction level and wood; the estimate states both.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-RPN-CHR with your room size and photos.' },
    ],
    photos: ['cat-raised-cherry-westlake-village-627', 'cat-raised-cherry-westlake-village-625', 'cat-raised-cherry-westlake-village-633', 'cat-raised-cherry-westlake-village-632', 'cat-raised-cherry-westlake-village-628', 'cat-raised-cherry-los-angeles-047', 'cat-raised-cherry-los-angeles-046', 'cat-raised-cherry-los-angeles-045'],
    pairs: [`${KIT}/granite-countertops`, `${KIT}/kitchen-wood-floors`, `${CAB}/raised-panel-cabinets/cream-raised-panel-cabinets`],
  },
  {
    path: `${CAB}/raised-panel-cabinets/cream-raised-panel-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/raised-panel-cabinets`,
    name: 'Cream and Off-White Raised Panel Cabinets', short: 'Cream Raised Panel', code: 'WC-RPN-CRM',
    title: 'Cream Raised Panel Kitchen Cabinets, LA — Waltco',
    description: 'Cream and off-white raised panel kitchen cabinets in Beverly Hills and Los Angeles. Code WC-RPN-CRM: painted doors, photos from our jobs.',
    tagline: 'Painted cream and off-white doors with a raised center panel.',
    intro: [
      'Cream raised panel cabinets are painted five-piece doors with a raised center panel, in a soft cream or off-white rather than bright white. In Beverly Hills they run around a granite-topped kitchen with a panel-front refrigerator.',
      'In Los Angeles we have built them around an island with pendant lights over a dark wood floor, with glass-front uppers and a warming drawer in the island end.',
    ],
    tones: 'A soft cream to warm off-white with a satin sheen. Warmer than white Shaker, it never looks stark next to granite, travertine or a dark wood floor; the raised panels add gentle shadows.',
    suits: 'Traditional, Mediterranean and Spanish-style houses, and kitchens with dark wood floors or granite counters.',
    specs: [['Look code', 'WC-RPN-CRM'], ['Door', 'Raised panel, five-piece'], ['Finish', 'Painted cream or off-white, satin'], ['Appliances', 'Panel-front refrigerators in our photos'], ['Hardware', 'Knobs and pulls in bronze or nickel'], ['Counters in our photos', 'Granite'], ['Price per linear foot', PRICE_TIERS]],
    sections: [
      { h: 'Cream, not white', p: ['A cream or off-white keeps a traditional kitchen soft. We paint sample doors and compare them in your room, next to your counter and floor, before finishing.'] },
      { h: 'Panel-front appliances', p: ['A refrigerator behind matching raised panel doors disappears into the run. Panels are built to the appliance maker’s specifications.'] },
      { h: 'Islands', p: ['An island in the same cream, with a furniture-style base or a warming drawer at the end, as in our Los Angeles kitchen.'] },
    ],
    faq: [
      { q: 'Cream or white for a traditional kitchen?', a: 'Cream is softer next to granite and dark wood; bright white suits marble and lighter floors.' },
      { q: 'Can you panel my refrigerator?', a: 'If it is a panel-ready model, yes, with doors that match the cabinets.' },
      { q: 'Do painted raised panel doors chip?', a: 'Edges near the sink see the most wear; a sprayed finish holds up and can be touched up.' },
      { q: 'Can I keep my cabinets and repaint them?', a: 'If the boxes and doors are sound, refinishing costs far less than new; we tell you at the site visit.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WC-RPN-CRM with your room size and photos.' },
    ],
    photos: ['cat-raised-cream-los-angeles-788', 'cat-raised-cream-los-angeles-789', 'cat-raised-cream-los-angeles-790', 'cat-raised-cream-los-angeles-791', 'cat-raised-cream-los-angeles-365', 'cat-raised-cream-beverly-hills-435', 'cat-raised-cream-beverly-hills-436', 'cat-raised-cream-beverly-hills-437'],
    pairs: [`${KIT}/granite-countertops`, `${KIT}/kitchen-islands`, `${CAB}/raised-panel-cabinets/cherry-raised-panel-cabinets`],
  },

  // ── Prefabricated line (catalog photos of the line, private label) ──
  {
    path: `${CAB}/prefabricated-cabinets/natural-wood-shaker-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Natural Wood Shaker Cabinets', short: 'Natural Wood Shaker', code: 'WP-SHK-NAT',
    title: 'Prefab Natural Wood Shaker Cabinets, Los Angeles — Waltco',
    description: 'Prefabricated natural wood Shaker kitchen cabinets, factory finished, installed by Waltco in Los Angeles at $275 per linear foot. Code WP-SHK-NAT.',
    tagline: 'Light natural wood on five-piece Shaker doors, factory finished and ready to install.',
    intro: ['Natural wood Shaker is a light, clear-finished wood on a five-piece Shaker door from the prefabricated line we install. It arrives factory finished, so the kitchen goes in faster than a custom build.', 'The photos show the line in a kitchen with a blue-gray island and hood: the light wood carries the room and a painted island adds the color.'],
    tones: 'A pale honey-blond wood with visible straight grain and a clear matte-to-satin finish. It reads warm and light, and pairs with white stone, brass and painted accents.',
    suits: 'Transitional and farmhouse kitchens, family kitchens that want wood without going dark, and rooms with a painted island.',
    specs: [['Look code', 'WP-SHK-NAT'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker, five-piece'], ['Color', 'Natural wood, clear finish'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Why choose a prefab line', p: ['Factory-finished boxes and doors come ready to set, which shortens the job and keeps the price at our prefabricated level. The trade-off is standard sizes: fillers and panels close the gaps where a wall is not a cabinet width.'] },
      { h: 'Pairing a painted island', p: ['The line photos pair the natural wood with a blue-gray island and hood. Any island color comes from the same line or from our painted cabinets.'] },
      { h: 'Measure first', p: ['We measure the room and lay the kitchen out in standard cabinet widths before ordering, so the fillers land where they will not be seen.'] },
    ],
    faq: [
      { q: 'Is this the same as your custom natural wood cabinets?', a: 'No. This is a factory-finished line at $275 per linear foot; our custom wood cabinets are priced at $1,200 per linear foot and built to the wall.' },
      { q: 'How long does a prefab kitchen take?', a: 'Usually less than custom, because nothing is built or finished on site. We give you the schedule with the estimate.' },
      { q: 'Can I see a door sample?', a: 'Yes; ask for a sample door when you request your estimate.' },
      { q: 'Who installs it?', a: 'Our crew, under our contractor licence, with the counters and floor on the same contract.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-SHK-NAT with your room size and photos.' },
    ],
    photos: ['line-natural-shaker-01', 'line-natural-shaker-02', 'line-natural-shaker-03'],
    pairs: [`${CAB}/slab-cabinets/natural-wood-slab-cabinets`, `${KIT}/cost-calculator`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/honey-brown-shaker-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Honey Brown Shaker Cabinets', short: 'Honey Brown Shaker', code: 'WP-SHK-HNY',
    title: 'Prefab Honey Brown Shaker Kitchen Cabinets, LA — Waltco',
    description: 'Honey brown prefabricated Shaker cabinets, factory finished, installed in Los Angeles kitchens at $275 per linear foot. Code WP-SHK-HNY.',
    tagline: 'A warm honey-brown stain on Shaker doors, for a classic wood kitchen at prefab pricing.',
    intro: ['Honey brown Shaker is a medium stained wood on a five-piece door, factory finished in the prefabricated line we install. In the line photos it runs around an L-shaped kitchen with white counters and a mosaic backsplash.', 'It is the most traditional of the wood colors in the line, and the easiest to live with in a busy family kitchen.'],
    tones: 'A medium golden brown with amber in the grain and a satin sheen. Light counters keep it bright; a busy tile backsplash adds pattern without fighting the wood.',
    suits: 'Family kitchens, traditional and craftsman houses, and owners replacing older oak cabinets with a cleaner look.',
    specs: [['Look code', 'WP-SHK-HNY'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker, five-piece'], ['Color', 'Honey brown stain'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Wood that hides wear', p: ['A mid-tone stain hides fingerprints and small marks better than white or dark finishes, which is why it suits a kitchen used every day.'] },
      { h: 'White counters with honey brown', p: ['White or light quartz, as in the photos, keeps a wood kitchen from feeling heavy. A patterned tile backsplash adds interest between the counter and the uppers.'] },
      { h: 'Replacing old oak', p: ['Many Los Angeles kitchens still have orange-toned oak from decades ago. Honey brown keeps the warmth with a simpler door and a more even color.'] },
    ],
    faq: [
      { q: 'Is honey brown the same as oak?', a: 'It is a stained wood finish in the prefab line; the supplier spec sheet in your estimate states the wood.' },
      { q: 'What counters go with honey brown cabinets?', a: 'White and light quartz, as in the photos, or a light granite.' },
      { q: 'Can I mix it with painted cabinets?', a: 'Yes; a painted island or uppers in a light color works with it.' },
      { q: 'What does a honey brown kitchen cost?', a: 'Cabinets are $275 per linear foot at the prefabricated level; the calculator gives the full kitchen.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-SHK-HNY with your room size and photos.' },
    ],
    photos: ['line-honey-shaker-01', 'line-honey-shaker-02', 'line-honey-shaker-03', 'line-honey-shaker-04'],
    pairs: [`${KIT}/granite-countertops`, `${KIT}/cost-calculator`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/white-shaker-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab White and Soft Gray Shaker Cabinets', short: 'White & Soft Gray Shaker', code: 'WP-SHK-WHT',
    title: 'Prefab White Shaker Kitchen Cabinets, Los Angeles — Waltco',
    description: 'Prefabricated white and soft gray Shaker cabinets, factory finished, installed by Waltco in Los Angeles at $275 per linear foot. Code WP-SHK-WHT.',
    tagline: 'Factory-painted white and soft gray Shaker doors: the classic kitchen at prefab pricing.',
    intro: ['The prefabricated line comes in factory-painted white and soft gray on the five-piece Shaker door. The line photos show large white kitchens with long islands and bar seating, and a soft gray version with a white stone counter.', 'A factory finish is sprayed and cured before delivery, so it arrives even and hard-wearing.'],
    tones: 'A clean white and a soft warm gray, both in a smooth satin factory finish. The white keeps the room bright; the gray hides more wear and looks softer next to wood floors.',
    suits: 'Most kitchens: transitional, coastal and family kitchens, rentals and ADUs where a classic look and a fast install matter.',
    specs: [['Look code', 'WP-SHK-WHT'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker, five-piece'], ['Color', 'Factory-painted white or soft gray'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Prefab or our custom white Shaker', p: ['Both use the same door profile. The prefab line costs $275 per linear foot and comes in standard widths; our custom-built white Shaker is $1,200 per linear foot and is built to the wall. Our own white Shaker kitchens are on the White Shaker page.'] },
      { h: 'White or soft gray', p: ['White is brighter and shows the counter and backsplash more. Soft gray reads calmer and hides scuffs at the toe kick and around the handles.'] },
      { h: 'Islands with seating', p: ['The line includes island cabinets; seating needs a counter overhang of about 12 inches, set when the stone is templated.'] },
    ],
    faq: [
      { q: 'Is a factory finish as good as a sprayed finish on site?', a: 'A factory finish is sprayed and cured under controlled conditions, which makes it even and durable.' },
      { q: 'Can I get other paint colors?', a: 'The line comes in set colors; for any other color, see our painted custom cabinets.' },
      { q: 'Do prefab cabinets fit my kitchen exactly?', a: 'They come in standard widths; fillers and panels close the gaps, planned when we measure.' },
      { q: 'How much does a white prefab kitchen cost?', a: 'Cabinets are $275 per linear foot; the calculator gives the full kitchen with counters and floor.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-SHK-WHT with your room size and photos.' },
    ],
    photos: ['line-white-shaker-01', 'line-white-shaker-02', 'line-white-shaker-03', 'line-white-shaker-04', 'line-white-shaker-05'],
    pairs: [`${CAB}/shaker-cabinets/white-shaker-cabinets`, `${KIT}/kitchen-islands`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/walnut-tone-slab-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Walnut-Tone Slab Cabinets', short: 'Walnut-Tone Slab', code: 'WP-SLB-WAL',
    title: 'Prefab Walnut-Tone Slab Kitchen Cabinets, LA — Waltco',
    description: 'Walnut-tone prefabricated slab cabinets, factory finished, for modern Los Angeles kitchens at $275 per linear foot. Code WP-SLB-WAL.',
    tagline: 'Flat walnut-tone doors with long pulls and dark counters: a modern wood kitchen from the prefab line.',
    intro: ['Walnut-tone slab cabinets are flat doors in a rich mid-brown, factory finished in the prefabricated line we install. The line photos show them with black counters, a professional range and a stainless refrigerator.', 'The flat door and long pulls give a modern kitchen; the warm wood tone keeps it from feeling cold.'],
    tones: 'A warm mid-to-dark brown with a fine, straight grain and a soft low-sheen finish. Black counters deepen it; white walls and a light floor keep the room open.',
    suits: 'Modern and mid-century kitchens, condos and lofts, and open plans where the kitchen faces the living room.',
    specs: [['Look code', 'WP-SLB-WAL'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Slab (flat panel)'], ['Color', 'Walnut tone'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'A modern kitchen on a budget', p: ['A flat walnut-tone door gives the look of a custom wood slab kitchen at our prefabricated price level.'] },
      { h: 'Dark counters or light', p: ['The line photos use black counters for a strong, dark kitchen. A white or light stone counter turns the same cabinets lighter and more mid-century.'] },
      { h: 'Long pulls', p: ['Long bar pulls run in one line across the drawers, which keeps a slab kitchen looking ordered.'] },
    ],
    faq: [
      { q: 'Is it real walnut?', a: 'It is a walnut-tone finish in the prefab line; the supplier spec sheet in your estimate states the material.' },
      { q: 'Can I get real walnut slab doors?', a: 'Yes, built custom; see our warm wood slab kitchens.' },
      { q: 'Do flat doors show fingerprints?', a: 'A low-sheen wood tone hides them better than gloss or dark paint.' },
      { q: 'What does a walnut-tone kitchen cost?', a: 'Cabinets are $275 per linear foot at the prefabricated level.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-SLB-WAL with your room size and photos.' },
    ],
    photos: ['line-walnut-slab-01', 'line-walnut-slab-02', 'line-walnut-slab-03', 'line-walnut-slab-04'],
    pairs: [`${CAB}/slab-cabinets/warm-wood-slab-cabinets`, `${KIT}/cost-calculator`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/black-slab-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Black Slab Cabinets with Fluted Wood', short: 'Black Slab & Fluted Wood', code: 'WP-SLB-BLK',
    title: 'Prefab Black Slab Kitchen Cabinets, Los Angeles — Waltco',
    description: 'Black prefabricated slab cabinets with a fluted wood island, factory finished, installed by Waltco in Los Angeles. Code WP-SLB-BLK, $275 per linear foot.',
    tagline: 'Matte black flat doors with a fluted wood island front: the most dramatic look in the line.',
    intro: ['Black slab cabinets are flat doors in a matte black factory finish. In the line photos they line the back wall of a kitchen under a window band, with a fluted wood island and a dark stone top in front.', 'The fluted wood adds texture and warmth, so the black reads rich rather than heavy.'],
    tones: 'A deep matte black with almost no sheen, set against vertical fluted wood in a warm natural tone and a dark veined stone.',
    suits: 'Modern kitchens with plenty of daylight, open plans with high ceilings, and owners who want one bold statement.',
    specs: [['Look code', 'WP-SLB-BLK'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Slab (flat panel)'], ['Color', 'Matte black, with fluted wood island panels'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Black needs light', p: ['A black kitchen works when the room has daylight and good lighting. Under-cabinet lights and a light floor keep it from closing in.'] },
      { h: 'Fluted island fronts', p: ['Vertical fluting on the island is a decorative panel over the cabinet boxes; it is ordered with the island so the lines run unbroken.'] },
      { h: 'Black with open shelves', p: ['The line also pairs black base cabinets with open wood shelves above, a lighter way to use black in a smaller room.'] },
    ],
    faq: [
      { q: 'Does matte black show fingerprints?', a: 'Less than gloss, but handles and edges near the sink need wiping more often than wood.' },
      { q: 'Is the fluted island part of the line?', a: 'The island panels in the photos are decorative wood panels ordered with the island; we confirm them in your estimate.' },
      { q: 'What counters go with black cabinets?', a: 'Dark veined stone as in the photos, or a light stone for contrast.' },
      { q: 'What does a black prefab kitchen cost?', a: 'Cabinets are $275 per linear foot; panels and the counter are listed separately.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-SLB-BLK with your room size and photos.' },
    ],
    photos: ['line-black-slab-01', 'line-black-slab-02', 'line-black-slab-03', 'line-black-slab-04'],
    pairs: [`${CAB}/slab-cabinets/dark-and-black-slab-cabinets`, `${CAB}/open-shelving`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/two-tone-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Two-Tone Cabinets: White and Wood', short: 'White & Wood Two-Tone', code: 'WP-TWT-WWD',
    title: 'Prefab Two-Tone Kitchen Cabinets, Los Angeles — Waltco',
    description: 'Prefabricated two-tone kitchens: white Shaker perimeters with stained wood islands, or white uppers over wood base cabinets. Code WP-TWT-WWD.',
    tagline: 'White perimeter, wood island, or white uppers over wood lowers, all from the prefab line.',
    intro: ['Two-tone prefab kitchens combine the white Shaker and a stained wood finish from the same factory line. The line photos show white perimeters with brown wood islands, one with a stone waterfall end, and white uppers over warm wood base cabinets.', 'Because both finishes come from one line, the doors, hardware holes and proportions match.'],
    tones: 'Clean white paired with a medium-to-dark brown wood stain. The white keeps the room bright; the wood anchors the island or the lower run.',
    suits: 'Family kitchens with an island, open plans where the island faces the living room, and owners who want some wood without a full wood kitchen.',
    specs: [['Look code', 'WP-TWT-WWD'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker or slab'], ['Color', 'White plus stained wood'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Island in wood', p: ['A wood island in front of white cabinets becomes the piece of furniture in the room, and hides wear where people sit.'] },
      { h: 'Waterfall ends', p: ['A stone waterfall end on a wood island protects the wood at the corner and shows off the stone.'] },
      { h: 'Uppers and lowers', p: ['White uppers over wood lowers keep the top of the room light and the bottom practical.'] },
    ],
    faq: [
      { q: 'Can the two finishes have different door styles?', a: 'Usually we keep one door style so the kitchen reads as one design.' },
      { q: 'Does two-tone cost more?', a: 'Not in the prefab line: both finishes are at $275 per linear foot.' },
      { q: 'Which finish goes on the island?', a: 'Usually the darker one; it hides wear and anchors the room.' },
      { q: 'Can I add a waterfall end?', a: 'Yes; it is a counter line on the estimate.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-TWT-WWD with your room size and photos.' },
    ],
    photos: ['line-two-tone-01', 'line-two-tone-02', 'line-two-tone-03', 'line-two-tone-04'],
    pairs: [`${CAB}/two-tone-cabinets`, `${KIT}/kitchen-islands`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/blue-and-teal-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Blue and Teal Cabinets', short: 'Blue & Teal', code: 'WP-PNT-BLU',
    title: 'Prefab Blue and Teal Cabinets, Los Angeles — Waltco',
    description: 'Teal and blue prefabricated cabinets, factory painted: bars, kitchenettes and built-ins installed in Los Angeles. Code WP-PNT-BLU, $275 per linear foot.',
    tagline: 'Factory-painted teal and blue cabinets for bars, kitchenettes and built-ins.',
    intro: ['The prefabricated line includes factory-painted blues. The line photos show deep teal cabinets with glass-front uppers and a beverage fridge, and blue painted built-ins on both sides of a fireplace.', 'Color works well on a smaller run: a bar, a kitchenette or a pair of built-ins, where it becomes the accent of the room.'],
    tones: 'A deep teal with green in it and a mid blue, both in a smooth satin factory finish. Brass hardware warms them; white walls and light floors make them stand out.',
    suits: 'Bars and beverage centers, kitchenettes and ADUs, family-room built-ins, and owners who want color in one part of the house.',
    specs: [['Look code', 'WP-PNT-BLU'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker, five-piece'], ['Color', 'Factory-painted teal or blue'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Color on a small run', p: ['A colored bar or built-in gives the room a strong accent without committing the whole kitchen to one color.'] },
      { h: 'Glass-front uppers', p: ['Glass doors over colored base cabinets show glassware and lighten the run.'] },
      { h: 'Built-ins in the line', p: ['Prefab base and wall cabinets can be set on both sides of a fireplace and topped with shelves, as in the photos.'] },
    ],
    faq: [
      { q: 'Can a whole kitchen be blue?', a: 'Yes, though most owners use blue on an island, bar or built-ins and keep the rest lighter.' },
      { q: 'What hardware goes with teal?', a: 'Brass, as in the photos, or black for a cooler look.' },
      { q: 'Can you add a beverage fridge?', a: 'Yes; the opening is planned from the appliance specifications.' },
      { q: 'What does a blue bar cost?', a: 'Cabinets are $275 per linear foot; the top and appliances are listed separately.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-PNT-BLU with your room size and photos.' },
    ],
    photos: ['line-blue-01', 'line-blue-02', 'line-blue-03'],
    pairs: [`${CAB}/two-tone-cabinets/navy-blue-cabinets`, `${CAB}/wet-bars`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/bathroom-vanities`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Bathroom Vanities', short: 'Prefab vanities', code: 'WP-VAN-STD',
    title: 'Prefab Bathroom Vanities in Los Angeles — Waltco Development',
    description: 'Prefabricated bathroom vanities: wood Shaker and green painted double vanities with open storage, installed by Waltco in Los Angeles. Code WP-VAN-STD.',
    tagline: 'Double vanities with drawers and open shelves, factory finished, ready to install.',
    intro: ['The prefabricated line includes vanities in the same finishes as the kitchen cabinets. The line photos show a wood Shaker double vanity with open shelves for towels, and a green painted double vanity with open storage below.', 'A prefab vanity is the fastest way to update a bathroom: it arrives finished, and the top and sinks go on after it is set.'],
    tones: 'Warm stained wood and a deep green paint, both factory finished. Open shelves keep the vanity light; brass hardware adds warmth.',
    suits: 'Guest and family bathrooms, rentals and ADUs, and bathroom updates on a tighter schedule.',
    specs: [['Look code', 'WP-VAN-STD'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker, five-piece'], ['Color', 'Stained wood or green paint'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Open storage', p: ['Open shelves under the sinks hold towels and baskets and make a double vanity look lighter.'] },
      { h: 'Tops and sinks', p: ['Stone tops are templated after the vanity is set; undermount or vessel sinks are chosen before ordering.'] },
      { h: 'Plumbing', p: ['Supply and drain lines are planned to the vanity so the drawers keep their space.'] },
    ],
    faq: [
      { q: 'Can a prefab vanity have a stone top?', a: 'Yes; the top is templated after the vanity is installed.' },
      { q: 'Do you install the faucets?', a: 'Plumbing connections are done by a licensed plumber on the same schedule.' },
      { q: 'Is a double vanity available?', a: 'Yes; both vanities in the photos are double.' },
      { q: 'How is a prefab vanity priced?', a: 'By width at the prefabricated level; it is its own line on the estimate.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-VAN-STD with your bathroom size and photos.' },
    ],
    photos: ['line-vanity-01', 'line-vanity-02', 'line-vanity-03'],
    pairs: [`${CAB}/bathroom-vanities`, '/services/bathroom-remodeling'],
  },
  {
    path: `${CAB}/prefabricated-cabinets/laundry-and-mudroom-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Laundry and Mudroom Cabinets', short: 'Laundry & mudroom', code: 'WP-LDY-STD',
    title: 'Prefab Laundry and Mudroom Cabinets, LA — Waltco',
    description: 'Prefabricated laundry and mudroom cabinets: storage over the washer, benches, hooks and tall units, installed by Waltco in Los Angeles. Code WP-LDY-STD.',
    tagline: 'Storage around the washer, a bench and hooks by the door: laundry and mudroom from the prefab line.',
    intro: ['The prefabricated line covers laundry rooms and mudrooms as well as kitchens. The line photos show a laundry niche with white cabinets and a black upper shelf, and a combined mudroom and laundry with a bench, hooks and tall cabinets in wood and white.', 'A mudroom by the back or garage door keeps shoes, coats and bags out of the kitchen.'],
    tones: 'White cabinets with warm wood accents and black hardware, in factory finishes that wipe clean.',
    suits: 'Family homes, houses with a garage entry, and laundry rooms that double as a drop zone.',
    specs: [['Look code', 'WP-LDY-STD'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Shaker and slab'], ['Color', 'White, wood and black'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Benches and hooks', p: ['A bench with hooks above and cubbies or drawers below gives everyone a place to drop things on the way in.'] },
      { h: 'Over the machines', p: ['Wall cabinets or a shelf over the washer and dryer hold detergents; a counter over front-loaders adds a folding surface.'] },
      { h: 'Tall cabinets', p: ['A tall unit holds brooms, the vacuum and the ironing board.'] },
    ],
    faq: [
      { q: 'Can a mudroom bench be built from prefab cabinets?', a: 'Yes; base cabinets or drawers with a top make the bench, with hooks and shelves above.' },
      { q: 'Do you move washer hookups?', a: 'Through licensed plumbing and electrical trades, with a permit where needed.' },
      { q: 'Which finish holds up by the door?', a: 'A factory finish wipes clean; wood tops on benches get a sealed finish.' },
      { q: 'How is a laundry or mudroom priced?', a: 'By cabinet length at the prefabricated level, plus tops and hardware.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-LDY-STD with your room size and photos.' },
    ],
    photos: ['line-laundry-01', 'line-laundry-02', 'line-laundry-03'],
    pairs: [`${CAB}/laundry-room-cabinets`, `${CAB}/garage-cabinets`],
  },
  {
    path: `${CAB}/prefabricated-cabinets/pantry-and-storage-cabinets`, hub: 'cabinetry', kind: 'look', style: `${CAB}/prefabricated-cabinets`, line: true,
    name: 'Prefab Pantry, Storage and Office Cabinets', short: 'Pantry & storage', code: 'WP-STR-STD',
    title: 'Prefab Pantry and Storage Cabinets, Los Angeles — Waltco',
    description: 'Prefabricated pantry shelving, drawer organizers and home-office bookcases, installed by Waltco in Los Angeles at our prefabricated rate. Code WP-STR-STD.',
    tagline: 'Walk-in pantry shelving, drawer organizers and office bookcases from the prefab line.',
    intro: ['Beyond the kitchen, the prefabricated line covers storage: a white walk-in pantry with open shelves and a counter, drawer organizers for dishes and cutlery, and a black bookcase and desk for a home office.', 'These pieces are where a prefab line saves the most: standard units, set and leveled, with nothing built on site.'],
    tones: 'White pantry shelving, natural wood drawer interiors and a matte black office unit, all factory finished.',
    suits: 'Walk-in pantries, kitchens that need more drawer organization, and home offices.',
    specs: [['Look code', 'WP-STR-STD'], ['Line', 'Prefabricated, factory finished'], ['Door', 'Open shelving, drawers and bookcases'], ['Color', 'White, natural wood interiors, black'], ['Box and hardware', 'As listed on the supplier spec sheet, stated in your estimate'], ['Installation', 'By our crew, under our contractor licence'], ['Price per linear foot', 'Prefabricated, factory finished: $275 per linear foot']],
    sections: [
      { h: 'Walk-in pantry', p: ['Open shelves on three walls with a counter for small appliances turn a closet into a working pantry.'] },
      { h: 'Drawer organizers', p: ['Peg systems and dividers inside wide drawers hold plates, bowls and cutlery where they are used.'] },
      { h: 'Home office', p: ['A bookcase with a desk unit gives an office storage and a work surface in one run.'] },
    ],
    faq: [
      { q: 'Can organizers go in my existing drawers?', a: 'Often, if the drawers are wide and deep enough; we check at the site visit.' },
      { q: 'How deep should pantry shelves be?', a: 'Shallow shelves keep cans and jars visible; deeper ones hold appliances.' },
      { q: 'Can an office unit include a desk?', a: 'Yes, as in the photos.' },
      { q: 'How is storage priced?', a: 'By units and length at the prefabricated level.' },
      { q: 'How do I order this look?', a: 'Use Get your estimate and mention code WP-STR-STD with your room size and photos.' },
    ],
    photos: ['line-storage-01', 'line-storage-02', 'line-storage-03', 'line-storage-04'],
    pairs: [`${CAB}/pantry-cabinets`, `${CAB}/drawer-pull-outs`],
  },

  // ── Cabinetry projects ─────────────────────────────────────────────────────────────────────────────────
  {
    path: `${CAB}/custom-closets`, hub: 'cabinetry', kind: 'project', name: 'Custom Closets', short: 'Custom closets',
    title: 'Custom Closets in Los Angeles — Waltco Development',
    description: 'Custom walk-in and reach-in closets built in Los Angeles: drawers, shelves and hanging rods built to the room. Photos from Palisades, LA and Beverly Hills.',
    tagline: 'Walk-in and reach-in closets built to the room, drawers to rods.',
    intro: [
      'We build custom closets the same way we build kitchen cabinets: measured on site, drawn, built and installed to the wall. The closets on this page include walk-ins and reach-ins in Pacific Palisades, wood drawer units in Los Angeles and a fitted closet in Beverly Hills.',
      'A closet holds more when it is planned around what goes in it: long hanging, double hanging, shelves for folded clothes, drawers and shoes.',
    ],
    sections: [
      { h: 'What we plan before drawing', p: ['We ask you to count roughly what you store. That count sets the split between hanging and folded space.'], list: ['Long hanging for coats and dresses.', 'Double hanging for shirts and trousers.', 'Shelves for sweaters and bags.', 'Drawers for small items, with dividers if you want them.', 'Shoe shelves, flat or angled.'] },
      { h: 'Materials and finishes', p: ['Painted white, wood-tone and walnut finishes all appear in our photos. Drawer boxes are maple or plywood; hanging rods are metal, sized to the span.'] },
      { h: 'Lighting', p: ['LED strips in shelves or along the top of the units make a walk-in usable at night. The wiring is planned before the drywall goes up when we are building the room.'] },
    ],
    faq: [
      { q: 'How is a closet priced?', a: 'After a site visit, by the units and drawers it holds. Small reach-ins and full walk-ins are priced very differently.' },
      { q: 'Can you work in a finished house?', a: 'Yes. Most closets go into finished rooms; we protect the floors and work around the existing trim.' },
      { q: 'Do you build islands in walk-in closets?', a: 'Yes, when the room is wide enough to walk around them.' },
      { q: 'Can closet units match the kitchen cabinets?', a: 'Yes, we can use the same door and finish.' },
    ],
    photos: [c('pacific-palisades-02'), c('pacific-palisades-01'), c('pacific-palisades-03'), c('pacific-palisades-06'), c('los-angeles-01'), c('los-angeles-02'), c('beverly-hills-15'), 'cat-closet-los-angeles-287', 'cat-closet-los-angeles-297', 'cat-closet-los-angeles-157', 'cat-closet-los-angeles-158', 'cat-closet-los-angeles-590', 'cat-closet-los-angeles-592', 'cat-closet-los-angeles-192', 'cat-closet-los-angeles-193'],
  },
  {
    path: `${CAB}/bathroom-vanities`, hub: 'cabinetry', kind: 'project', name: 'Bathroom Vanities', short: 'Bathroom vanities',
    title: 'Custom Bathroom Vanities in Los Angeles — Waltco',
    description: 'Custom bathroom vanities built and installed in Los Angeles: drawer vanities, stone tops, painted and wood finishes. Photos from our bathroom jobs.',
    tagline: 'Drawer vanities with stone tops, sized to the wall.',
    intro: [
      'A vanity is a small cabinet that works hard: water, steam and daily use. We build vanities with drawers rather than doors where we can, because drawers use the space under a sink far better than a cupboard.',
      'The vanities on this page include a white drawer vanity in Pacific Palisades, a wood vanity against green tile in Los Angeles, and a navy vanity and vessel-sink tops from our Beverly Hills bathroom.',
    ],
    sections: [
      { h: 'Drawers around the plumbing', p: ['Under-sink drawers are cut in a U shape around the drain, so the top drawer keeps its full width. We plan the drain height with the plumber so the cut stays small.'] },
      { h: 'Tops and sinks', p: ['Stone tops are templated after the vanity is set. Undermount, vessel and integrated sinks each change the cabinet height, so we choose the sink before the vanity is built.'] },
      { h: 'Finishes for wet rooms', p: ['Painted finishes and sealed wood both hold up when the bathroom has a working fan. We keep the toe kick off the floor slightly where the floor gets wet.'] },
    ],
    faq: [
      { q: 'Wall-hung or floor-standing?', a: 'Wall-hung vanities need blocking in the wall; floor-standing ones are simpler to install. Both are in our photos.' },
      { q: 'Can you build a double vanity?', a: 'Yes, with the plumbing for two sinks planned before the wall closes.' },
      { q: 'Do you install the top and faucets?', a: 'We install the vanity and top; the faucets and plumbing connections are done by licensed trades on the same schedule.' },
      { q: 'How is a vanity priced?', a: 'By its width and construction level; it appears as its own line on the estimate.' },
    ],
    photos: [c('pacific-palisades-04'), c('los-angeles-03'), b('beverly-hills-03'), b('beverly-hills-05'), b('beverly-hills-12'), 'cat-vanity-los-angeles-309', 'cat-vanity-los-angeles-310', 'cat-vanity-los-angeles-222', 'cat-vanity-los-angeles-608', 'cat-vanity-los-angeles-750', 'cat-vanity-los-angeles-097'],
    pairs: ['/services/bathroom-remodeling'],
  },
  {
    path: `${CAB}/built-ins`, hub: 'cabinetry', kind: 'project', name: 'Built-Ins and Wall Units', short: 'Built-ins',
    title: 'Built-Ins and Wall Units in Los Angeles — Waltco',
    description: 'Custom built-ins and wall units in Los Angeles: walnut desks and shelving, wall niches, media and display cabinets. Photos from our jobs.',
    tagline: 'Shelving walls, desks, niches and wall cabinets built into the room.',
    intro: [
      'Built-ins are cabinets and shelves made for one wall and fixed to it: a desk and shelving wall, a wall niche, a media cabinet, a display unit. The photos here include walnut shelving with a desk in Pacific Palisades and wall units in Beverly Hills.',
      'Because they are scribed to the wall and ceiling, built-ins look like part of the house rather than furniture standing against it.',
    ],
    sections: [
      { h: 'Scribing to the room', p: ['Walls and ceilings are rarely straight. We leave extra material on the sides and top of each unit and scribe it to the wall on site, so there is no gap to fill with caulk.'] },
      { h: 'Desks and work walls', p: ['A built-in desk needs the right height, knee room and a place for cables. We plan the outlets and cable holes before the unit is built.'] },
      { h: 'Niches and display', p: ['A wall niche or a lit display cabinet is planned with the framing. Lighting inside is wired before the drywall closes.'] },
    ],
    faq: [
      { q: 'What wood do you use for built-ins?', a: 'Walnut, oak and painted finishes are all in our photos; we show samples first.' },
      { q: 'Can built-ins go in a rental or condo?', a: 'Yes, with the building rules for drilling into walls checked first.' },
      { q: 'Do you build media walls?', a: 'Yes, with the TV, wiring and ventilation for equipment planned on the drawing.' },
      { q: 'How are built-ins priced?', a: 'After a site visit, from the drawing, by the units and finish.' },
    ],
    photos: [c('pacific-palisades-05'), c('beverly-hills-17'), c('beverly-hills-21'), c('beverly-hills-09'), c('los-angeles-05'), 'cat-built-in-redondo-beach-395', 'cat-built-in-redondo-beach-389', 'cat-built-in-beverly-hills-672', 'cat-built-in-beverly-hills-684'],
  },
  {
    path: `${CAB}/pantry-cabinets`, hub: 'cabinetry', kind: 'project', name: 'Pantry Cabinets', short: 'Pantry cabinets',
    title: 'Pantry and Tall Kitchen Cabinets in LA — Waltco',
    description: 'Tall pantry cabinets and appliance walls for Los Angeles kitchens: pull-outs, built-in fridges and wine storage. Photos from our Beverly Hills kitchen.',
    tagline: 'Tall cabinets for food, appliances and the things that do not fit in a base cabinet.',
    intro: [
      'A tall pantry cabinet holds more than any other cabinet in the kitchen. In our Beverly Hills kitchen, tall white pantry cabinets stand beside the range, and a built-in wine fridge sits in a stone-topped cabinet.',
      'Tall cabinets need careful planning around the ceiling, the appliances and the door swings next to them.',
    ],
    sections: [
      { h: 'Pull-outs or shelves', p: ['Roll-out trays inside a tall cabinet bring the back of the shelf to you. Fixed shelves cost less and suit taller items. Many pantries use both.'] },
      { h: 'Appliance walls', p: ['Built-in refrigerators, wall ovens and wine fridges need exact openings and ventilation. We work from the appliance specifications before the boxes are built.'] },
      { h: 'Up to the ceiling', p: ['Cabinets taken to the ceiling remove the dust shelf on top and add storage. We scribe the top to the ceiling line.'] },
    ],
    faq: [
      { q: 'How deep should a pantry be?', a: 'Standard tall cabinets are 24 inches deep; a shallower pantry keeps cans visible. We choose with you.' },
      { q: 'Can a pantry hold the microwave?', a: 'Yes, in a tall cabinet with a vented opening.' },
      { q: 'Do you install the appliances?', a: 'We build and fit the cabinets around them; appliance connections are done by licensed trades.' },
      { q: 'How is a pantry priced?', a: 'As part of the cabinet linear footage, at the construction level you choose.' },
    ],
    photos: [k('beverly-hills-22'), c('beverly-hills-14'), c('beverly-hills-11'), k('beverly-hills-30'), 'cat-pantry-los-angeles-240', 'cat-pantry-los-angeles-241', 'cat-pantry-los-angeles-506', 'cat-pantry-los-angeles-507'],
  },
  {
    path: `${CAB}/drawer-pull-outs`, hub: 'cabinetry', kind: 'project', name: 'Drawer Pull-Outs and Organizers', short: 'Pull-outs',
    title: 'Drawer Pull-Outs and Cabinet Organizers in LA — Waltco',
    description: 'Maple pull-out drawers, lit drawers and cabinet organizers built into new and existing cabinets in Los Angeles. Photos from our jobs.',
    tagline: 'Pull-outs and inner drawers that make every inch of a base cabinet reachable.',
    intro: [
      'A deep base cabinet hides whatever sits at the back. Pull-out drawers bring it forward. We build maple pull-outs fitted to each box, so there is no wasted space at the sides.',
      'The photos here show maple pull-outs inside white base cabinets in Beverly Hills, pull-outs in Santa Monica and lit drawers inside a built-in.',
    ],
    sections: [
      { h: 'Fitted, not bought off the shelf', p: ['Ready-made organizers come in a few widths and leave gaps. We size each drawer to the opening and the hinges, which is why our pull-outs fill the box.'] },
      { h: 'In existing cabinets', p: ['If your cabinet boxes are sound, pull-outs can be added without replacing the kitchen. We measure each box and the door hinges first.'] },
      { h: 'Lit drawers', p: ['A small LED strip switched by the drawer makes deep drawers and closets easier to use. It is wired during the build.'] },
    ],
    faq: [
      { q: 'What slides do you use?', a: 'Full-extension, soft-close slides sized for the drawer load.' },
      { q: 'Can pull-outs go in corner cabinets?', a: 'Corners need special hardware; we tell you what fits after measuring.' },
      { q: 'How are pull-outs priced?', a: 'Per drawer, on its own line of the estimate.' },
      { q: 'Do pull-outs work in bathroom vanities?', a: 'Yes, cut around the plumbing.' },
    ],
    photos: [c('beverly-hills-12'), c('santa-monica-02'), c('beverly-hills-07'), c('beverly-hills-10'), 'cat-pull-out-beverly-hills-621', 'cat-pull-out-beverly-hills-622', 'cat-pull-out-beverly-hills-355', 'cat-pull-out-los-angeles-009'],
  },

  {
    path: `${CAB}/wet-bars`, hub: 'cabinetry', kind: 'project', name: 'Wet Bars and Bar Cabinets', short: 'Wet bars',
    title: 'Wet Bars and Bar Cabinets in Los Angeles — Waltco',
    description: 'Custom wet bars and bar cabinets in Los Angeles: lit shelves, stone backsplashes, wine fridges and wine racks. Photos from our jobs.',
    tagline: 'Bars built into a niche or a wall: cabinets, a sink, wine storage and lit shelves.',
    intro: [
      'A wet bar is a small kitchen of its own: base cabinets, a sink, a stone top and somewhere to show bottles and glassware. The bars on this page include a U-shaped bar with lit floating shelves on a stone wall, a white built-in bar with a wine rack in Los Angeles, and a navy bar between two lit wine walls.',
      'Most bars fit into a niche or the end of a room, so they are measured and drawn as carefully as a kitchen.',
    ],
    sections: [
      { h: 'Lit shelves and stone', p: ['Floating shelves with LED strips in a recessed channel light the backsplash from above and below. A stone slab carried up the wall behind them turns the bar into the focal point of the room.'] },
      { h: 'Wine and refrigeration', p: ['Under-counter wine fridges, beverage fridges and ice makers need exact openings and ventilation. We build the cabinets from the appliance specifications.'] },
      { h: 'Plumbing and power', p: ['A bar sink needs a supply and drain; lighting needs a circuit and a driver placed where it can be reached. Both are planned before the wall is closed.'] },
    ],
    faq: [
      { q: 'Do I need a permit for a wet bar?', a: 'If it adds plumbing or a new circuit, usually yes. We confirm with your building department.' },
      { q: 'Can a bar go in a closet or niche?', a: 'Yes; several bars in our photos are built into a niche.' },
      { q: 'What cabinets go in a bar?', a: 'The same doors as a kitchen: painted, wood or slab, matched to the room.' },
      { q: 'How is a bar priced?', a: 'By the cabinet length at your construction level, plus the top, lighting and plumbing lines.' },
    ],
    photos: ['cat-wet-bar-job-798', 'cat-wet-bar-job-797', 'cat-wet-bar-job-800', 'cat-wet-bar-los-angeles-363', 'cat-wet-bar-los-angeles-312'],
    pairs: [`${CAB}/two-tone-cabinets/navy-blue-cabinets`, `${CAB}/built-ins`, `${CAB}/open-shelving`],
  },
  {
    path: `${CAB}/laundry-room-cabinets`, hub: 'cabinetry', kind: 'project', name: 'Laundry Room Cabinets', short: 'Laundry rooms',
    title: 'Laundry Room Cabinets in Los Angeles — Waltco Development',
    description: 'Laundry room cabinets built in Los Angeles: white Shaker cabinets, a farmhouse sink and marble counters around the washer and dryer.',
    tagline: 'Cabinets, a sink and a folding counter around the washer and dryer.',
    intro: [
      'A laundry room needs a counter for folding, a sink for soaking and closed storage for detergents. In the Los Angeles house on this page we built white Shaker cabinets with a farmhouse sink and marble counters next to a side-by-side washer and dryer.',
      'The same door and finish as the kitchen keeps the house consistent.',
    ],
    sections: [
      { h: 'Planning around the machines', p: ['Front-loaders need room for the doors to open and clearance behind for hoses and venting. We work from the machine dimensions before the cabinets are drawn.'] },
      { h: 'Sinks and counters', p: ['A deep farmhouse sink handles soaking and cleaning. A counter over front-loaders turns the top into a folding surface.'] },
      { h: 'Storage', p: ['Uppers for detergents, a tall cabinet for the ironing board and brooms, and drawers for small items.'] },
    ],
    faq: [
      { q: 'Can a counter go over the washer and dryer?', a: 'Yes, over front-loading machines, with room left to pull them out for service.' },
      { q: 'Do you move laundry hookups?', a: 'Yes, through licensed plumbing and electrical trades, with a permit where needed.' },
      { q: 'Which counter holds up in a laundry room?', a: 'Stone and quartz both work; the room in our photos uses marble.' },
      { q: 'How is a laundry room priced?', a: 'By the cabinet length at your construction level, plus the top and sink.' },
    ],
    photos: ['cat-laundry-los-angeles-276', 'cat-laundry-los-angeles-261', 'cat-laundry-los-angeles-269'],
    pairs: [`${CAB}/shaker-cabinets/white-shaker-cabinets`, `${CAB}/pantry-cabinets`],
  },
  {
    path: `${CAB}/garage-cabinets`, hub: 'cabinetry', kind: 'project', name: 'Garage Cabinets', short: 'Garage cabinets',
    title: 'Garage Cabinets and Storage in Los Angeles — Waltco',
    description: 'Garage cabinets built in Los Angeles: tall gray storage units and upper cabinets beside a garage refrigerator. Photos from our 2021 job.',
    tagline: 'Tall storage and upper cabinets that clear the garage floor.',
    intro: [
      'Garage cabinets get things off the floor and out of sight. In the Los Angeles garage on this page we built a wall of gray tall units and upper cabinets beside a full-size refrigerator, with open bays for bulk supplies.',
      'Garage storage is built for weight and wear: heavier shelves, sturdy hardware and finishes that wipe clean.',
    ],
    sections: [
      { h: 'Uppers above the car', p: ['Upper cabinets keep the floor clear for parking. We set them high enough to clear car doors and the hood.'] },
      { h: 'Tall units', p: ['Full-height cabinets hold tools, sports gear and cleaning supplies. Adjustable shelves let you change the layout later.'] },
      { h: 'Refrigerators and power', p: ['A garage refrigerator or freezer needs a dedicated outlet and clearance for air. We plan it with the cabinets.'] },
    ],
    faq: [
      { q: 'What finish works in a garage?', a: 'Painted or laminate finishes that wipe clean; the cabinets in our photos are painted gray.' },
      { q: 'Can garage cabinets sit on a sloped floor?', a: 'Yes, on a leveled base or legs, so the doors stay aligned.' },
      { q: 'Can you add a work surface?', a: 'Yes, a counter or workbench along one wall.' },
      { q: 'How are garage cabinets priced?', a: 'By the units and length, after a site visit.' },
    ],
    photos: ['cat-garage-los-angeles-357', 'cat-garage-los-angeles-358', 'cat-garage-los-angeles-359'],
  },

  // ── Kitchen projects ───────────────────────────────────────────────────────────────────────────────────
  {
    path: `${KIT}/full-kitchen-remodel`, hub: 'kitchen-remodeling', kind: 'project', name: 'Full Kitchen Remodel: Before and After', short: 'Full remodel',
    title: 'Full Kitchen Remodel, Before and After — Waltco',
    description: 'A full kitchen remodel in Beverly Hills, from the original cream kitchen through demolition and install to the finished room. Our photos, step by step.',
    tagline: 'One Beverly Hills kitchen, from the original room to the finished one.',
    intro: [
      'This page follows one kitchen in Beverly Hills from start to finish. The original was an L-shaped kitchen with cream raised-panel cabinets, granite counters and a tile floor with a border.',
      'We took it back to the walls, rebuilt the electrical behind the cabinets, and installed white slab cabinets, a stone counter, floating oak shelves and a new floor.',
    ],
    sections: [
      { h: '1. The original kitchen', p: ['Cream raised-panel cabinets, granite counters and a busy tile border. The layout worked; the finishes and the wiring behind them did not.'] },
      { h: '2. Demolition', p: ['Cabinets, counters and tile came out. With the walls open we could see the electrical and plan new circuits and outlets before anything closed up.'] },
      { h: '3. Rough work and boxes', p: ['New wiring, patched walls, then the cabinet boxes set level. The counter run was measured for the stone template once the boxes were fixed.'] },
      { h: '4. Install and finish', p: ['White slab doors and drawers, the stone counter, floating oak shelves at the range wall, and the floor. Doors were adjusted after the stone went in.'] },
    ],
    faq: [
      { q: 'Can we keep the same layout?', a: 'Yes, as this kitchen did. Keeping the sink, range and walls in place saves plumbing, gas and framing work.' },
      { q: 'Do you handle the permit?', a: 'Yes, when the work needs one, in our name, with the inspections scheduled.' },
      { q: 'Can we stay in the house?', a: 'Most clients do, with a temporary kitchen set up elsewhere.' },
      { q: 'What does a full remodel cost?', a: 'See our pricing page: one 177 sq ft kitchen priced at $20,146, $37,242 and $60,433 across three finish levels.' },
    ],
    photos: [k('beverly-hills-19'), k('beverly-hills-15'), k('beverly-hills-16'), k('beverly-hills-17'), k('beverly-hills-18'), k('beverly-hills-26'), k('beverly-hills-27'), k('beverly-hills-20'), k('beverly-hills-08'), k('beverly-hills-09'), k('beverly-hills-21'), k('beverly-hills-10'), k('beverly-hills-11'), k('beverly-hills-29')],
  },
  {
    path: `${KIT}/kitchen-islands`, hub: 'kitchen-remodeling', kind: 'project', name: 'Kitchen Islands', short: 'Kitchen islands',
    title: 'Kitchen Islands in Los Angeles — Waltco Development',
    description: 'Kitchen islands built in Los Angeles: waterfall stone ends, seating, sinks and storage. Photos from our LA, Pacific Palisades and Beverly Hills kitchens.',
    tagline: 'Islands with seating, waterfall stone ends, sinks and storage on both sides.',
    intro: [
      'An island is usually the most used surface in the kitchen: prep, homework, breakfast. The islands on this page include long marble islands with bar seating in Los Angeles, waterfall islands in Pacific Palisades and a marble waterfall going in during a Beverly Hills rebuild.',
      'Good islands start with clearance: enough room to walk and open doors on every side.',
    ],
    sections: [
      { h: 'Clearance first', p: ['We plan about 42 inches between the island and the counters around it in a working kitchen, more where two people cook. Less than that and doors and dishwashers block the walkway.'] },
      { h: 'Waterfall ends', p: ['A waterfall end carries the stone down to the floor. The grain is matched around the corner when the slab allows it, so the edge reads as one folded piece.'] },
      { h: 'Seating, sinks and power', p: ['Seating needs an overhang of about 12 inches; a sink or cooktop in the island needs plumbing or gas through the floor; outlets on the island are required by code. All of it is planned before the floor goes down.'] },
    ],
    faq: [
      { q: 'How big should my island be?', a: 'As big as the room allows while keeping about 42 inches of clearance around it.' },
      { q: 'Can the island be a different colour?', a: 'Yes; see our two-tone cabinets page.' },
      { q: 'Can you move plumbing into the island?', a: 'Yes, through the floor; on a slab it means cutting the concrete. We price it after the site visit.' },
      { q: 'Which stone works for an island?', a: 'Marble and quartz are both in our photos; see our countertop pages for the trade-offs.' },
    ],
    photos: [k('los-angeles-02'), k('los-angeles-09'), k('los-angeles-11'), k('los-angeles-07'), k('pacific-palisades-06'), k('beverly-hills-04'), 'cat-island-los-angeles-602', 'cat-island-los-angeles-173', 'cat-island-los-angeles-174', 'cat-island-los-angeles-167', 'cat-island-los-angeles-165'],
    pairs: [`${KIT}/marble-countertops`, `${CAB}/two-tone-cabinets`],
  },
  {
    path: `${KIT}/range-walls-and-hoods`, hub: 'kitchen-remodeling', kind: 'project', name: 'Range Walls and Hoods', short: 'Range walls',
    title: 'Range Walls and Range Hoods in Los Angeles — Waltco',
    description: 'Range walls built in Los Angeles kitchens: stainless hoods, marble and tile backsplashes, six-burner ranges and open shelves. Photos from our jobs.',
    tagline: 'The wall behind the range: hood, backsplash and the cabinets around it.',
    intro: [
      'The range wall is the focal point of most kitchens. Our Pacific Palisades kitchens put a six-burner range under a stainless hood with a marble backsplash; in Beverly Hills the range sits between floating oak shelves.',
      'A range wall is planned around the hood: its size, its duct route and what goes on either side.',
    ],
    sections: [
      { h: 'The hood and its duct', p: ['A hood is sized to the range and vented outside. The duct route through the wall or ceiling decides where the hood can go, so we check it before the layout is final.'] },
      { h: 'Backsplash', p: ['A stone slab or tile runs from the counter to the hood. Slab backsplashes, as in our Palisades kitchens, have no grout lines to clean behind the burners.'] },
      { h: 'What goes beside the range', p: ['Drawers for pots below, shelves or uppers to the sides, and at least some counter on each side for landing hot pans.'] },
    ],
    faq: [
      { q: 'Does my hood need to vent outside?', a: 'For gas ranges we recommend it; the building department and the range maker set the requirements.' },
      { q: 'Can you install a professional range?', a: 'We build the cabinets and wall around it; gas and electrical connections are done by licensed trades.' },
      { q: 'Marble behind the range: is it practical?', a: 'It needs sealing and stains can show; many clients accept that for the look.' },
      { q: 'How is a range wall priced?', a: 'Its parts are lines on the kitchen estimate: hood install, backsplash, cabinets.' },
    ],
    photos: [k('pacific-palisades-07'), k('pacific-palisades-08'), k('beverly-hills-29'), k('beverly-hills-12'), 'cat-range-wall-los-angeles-289', 'cat-range-wall-los-angeles-291', 'cat-range-wall-los-angeles-243', 'cat-range-wall-los-angeles-242'],
  },
  {
    path: `${KIT}/kitchen-wood-floors`, hub: 'kitchen-remodeling', kind: 'project', name: 'Wood Floors in the Kitchen', short: 'Kitchen floors',
    title: 'Hardwood Floors in the Kitchen, Los Angeles — Waltco',
    description: 'Hardwood floors installed in Los Angeles kitchens under our C-15 flooring licence, planned with the cabinets. Photos from our kitchen floor jobs.',
    tagline: 'Wood floors planned with the cabinets, installed under one contract.',
    intro: [
      'We hold a C-15 flooring licence as well as the general building licence, so the kitchen floor is part of the same job as the cabinets. The photos here include a new oak floor along the cabinets in Beverly Hills and light oak under a long white island in Los Angeles.',
      'Planning the floor with the cabinets decides one key question early: does the floor run under the cabinets or stop at them?',
    ],
    sections: [
      { h: 'Under the cabinets or up to them', p: ['Running the floor under the cabinets costs more wood but makes future layout changes easy. Stopping at the cabinets saves material. We decide with you before the cabinets are set.'] },
      { h: 'Wood in a kitchen', p: ['A sealed hardwood floor handles kitchen use; spills wiped up quickly do not harm it. Around the sink and dishwasher we check for leaks before the floor goes down.'] },
      { h: 'Matching the rest of the house', p: ['If the kitchen opens to rooms with existing wood floors, we can weave the new boards into the old and sand everything to one finish.'] },
    ],
    faq: [
      { q: 'Is hardwood a good idea in a kitchen?', a: 'Yes, with a good finish and spills wiped up. Many of our kitchens have wood floors.' },
      { q: 'Engineered or solid?', a: 'Both work; engineered is more stable over concrete slabs. See our hardwood flooring pages.' },
      { q: 'Can you match my existing floor?', a: 'Often, by species, width and stain. We show a sample first.' },
      { q: 'Is the floor priced separately?', a: 'It is its own line on the kitchen estimate: $7, $14 or $20 per sq ft in our priced example.' },
    ],
    photos: [k('beverly-hills-24'), k('beverly-hills-25'), k('pacific-palisades-11'), k('los-angeles-02')],
    pairs: ['/services/hardwood-flooring'],
  },
  {
    path: `${KIT}/marble-countertops`, hub: 'kitchen-remodeling', kind: 'project', name: 'Marble Countertops', short: 'Marble counters',
    title: 'Marble Kitchen Countertops in Los Angeles — Waltco',
    description: 'Marble kitchen countertops, islands and backsplashes installed in Los Angeles: waterfall islands, slab backsplashes. Photos from our Palisades and LA kitchens.',
    tagline: 'Marble islands, counters and slab backsplashes.',
    intro: [
      'Marble is the stone in most of our Pacific Palisades kitchens: islands with grey veining, a marble backsplash behind the range and marble counters on white cabinets. In Los Angeles we installed a marble island under pendant lights.',
      'Marble is softer than quartz and granite, which is part of why it looks the way it does: it etches and wears into a patina over time.',
    ],
    sections: [
      { h: 'What to expect from marble', p: ['Acids like lemon juice and wine can etch the polish, and dark liquids can stain if left. A sealer slows staining; a honed finish hides etching better than a polished one.'] },
      { h: 'Templating and seams', p: ['Stone is templated after the cabinets are set. We plan seams away from the sink and the most visible part of the island, and match the veining across them where the slab allows.'] },
      { h: 'Price', p: ['Counters are priced by the square foot at three levels in our example estimate: $40, $100 and $150 per sq ft. Marble slabs vary widely, so the final price follows the slab you choose.'] },
    ],
    faq: [
      { q: 'Is marble a good kitchen counter?', a: 'If you accept etching and some wear. If not, quartz gives a similar look with less care.' },
      { q: 'Honed or polished?', a: 'Honed hides etching; polished shows the colour more strongly.' },
      { q: 'Can I choose my own slab?', a: 'Yes. You pick the slab at the stone yard, and we lay out the cuts on it.' },
      { q: 'Do you install the sink in the stone?', a: 'The sink is cut and set with the counter; the plumbing connection is done by a licensed plumber.' },
    ],
    photos: [k('pacific-palisades-02'), k('pacific-palisades-05'), k('los-angeles-11'), c('pacific-palisades-07')],
    pairs: [`${KIT}/kitchen-islands`, `${CAB}/shaker-cabinets/white-shaker-cabinets`],
  },
  {
    path: `${KIT}/granite-countertops`, hub: 'kitchen-remodeling', kind: 'project', name: 'Granite Countertops', short: 'Granite counters',
    title: 'Granite Kitchen Countertops in Los Angeles — Waltco',
    description: 'Granite and dark stone kitchen countertops in Los Angeles, on white Shaker and cherry cabinets. Photos from our Santa Monica and Beverly Hills jobs.',
    tagline: 'Hard-wearing dark stone counters on white and wood cabinets.',
    intro: [
      'Granite is a hard, dense stone that resists heat and scratches. In Santa Monica we set a dark stone counter on white Shaker cabinets with an undermount sink; in Beverly Hills a granite counter tops raised-panel cherry cabinets.',
      'Dark granite hides wear and gives strong contrast against white cabinets.',
    ],
    sections: [
      { h: 'Why choose granite', p: ['It takes hot pans better than quartz and resists scratches better than marble. Most granites need sealing once in a while.'] },
      { h: 'Finishes', p: ['Polished granite shows the colour and pattern; honed and leathered finishes are softer and show fewer fingerprints.'] },
      { h: 'Replacing only the counters', p: ['If your cabinets are sound, new counters can go on the existing boxes. We check that the boxes are level and strong enough for stone first.'] },
    ],
    faq: [
      { q: 'Granite or quartz?', a: 'Granite takes heat better; quartz is more even in colour and needs no sealing.' },
      { q: 'Can granite go on old cabinets?', a: 'If the boxes are level and sound. We check before quoting.' },
      { q: 'Does dark granite show water spots?', a: 'Polished dark stone can; honed or leathered finishes show fewer.' },
      { q: 'How is it priced?', a: 'By the square foot, from the slab you choose; see our pricing page.' },
    ],
    photos: [k('santa-monica-02'), k('beverly-hills-07'), k('santa-monica-03'), 'cat-raised-cherry-los-angeles-047', 'cat-raised-cream-beverly-hills-435'],
  },

  // ── Support pages (E&K trust and buying pages) ────────────────────────────────────────────────────────
  {
    path: `${KIT}/pricing`, hub: 'kitchen-remodeling', kind: 'support', name: 'Kitchen and Cabinet Pricing', short: 'Pricing',
    title: 'Kitchen and Cabinet Pricing in Los Angeles — Waltco',
    description: 'Our real kitchen and cabinet prices: cabinets $275 to $1,200 per linear foot, counters $40 to $150 per sq ft, and one kitchen priced three ways.',
    tagline: 'The rates behind every Waltco kitchen estimate, from our own price list.',
    intro: [
      'These are the rates we use to build kitchen and cabinet estimates. They come from our price list and from one kitchen we priced three ways in October 2026: a galley kitchen of about 177 sq ft with 34 linear feet of cabinets.',
      'Every written estimate lists each line, so you can see where the money goes and change what you want.',
    ],
    sections: [
      { h: 'Cabinets, per linear foot', p: ['Cabinets are the largest line in every kitchen: 46% to 68% of the total in our example.'], list: ['Prefabricated, factory finished: $275.', 'New cabinets, stained or painted: $650.', 'Custom built: $1,200.'] },
      { h: 'Counters, per square foot', p: [], list: ['Laminate: $40.', 'Quartz: $100.', 'Higher-grade quartz: $150.'] },
      { h: 'Floors, per square foot', p: [], list: ['Engineered hardwood: $7.', 'Solid hardwood, mid-range: $14.', 'Solid hardwood, high-end: $20.'] },
      { h: 'One kitchen, three finish levels', p: ['Same room and trade work; only the finishes change. Permits, appliances and fixtures not included.'], list: ['Standard: $20,146.', 'Mid-range: $37,242.', 'High-end: $60,433.'] },
      { h: 'Work that costs the same at every level', p: ['$5,354 of the example did not change with the finishes: demolition and haul-away $2,170, floor tile removal $443, sink reconnect $553, range reconnect $354, refrigerators moved $285, six GFCI outlets $600, drywall patch $570, clean-up $380.'] },
    ],
    faq: [
      { q: 'Are these prices fixed?', a: 'They are the rates we start from. Your written estimate follows your measurements and the materials you choose.' },
      { q: 'What is not included?', a: 'Permit fees, appliances, sinks, faucets and fixtures you choose, and moving plumbing, gas or walls unless listed.' },
      { q: 'How much is the deposit?', a: 'No more than $1,000 or 10% of the contract, whichever is less, as California law requires.' },
      { q: 'Do you price refinishing existing cabinets?', a: 'Yes, after a site visit; it usually costs far less than new cabinets.' },
    ],
    photos: [],
    guides: ['kitchen-cabinet-cost-per-linear-foot-los-angeles'],
  },
  {
    path: `${KIT}/cost-calculator`, hub: 'kitchen-remodeling', kind: 'support', name: 'Kitchen Remodel Cost Calculator', short: 'Cost calculator',
    title: 'Kitchen Remodel Cost Calculator, Los Angeles — Waltco',
    description: 'Get a quick kitchen quote: pick your layout, enter each wall and the island, and see standard, mid-range and high-end totals from our own price list.',
    tagline: 'Pick your kitchen shape, measure the walls, see your kitchen priced three ways.',
    intro: [
      'This calculator prices your kitchen the way we do: by the linear foot of cabinets, the square foot of counter and floor, plus the trade work every remodel needs. Pick your layout, enter the length of each wall of cabinets and the island, and the totals update as you type.',
      'The rates are our own price list, and the starting numbers are a real galley kitchen we priced in October 2026, so the first totals you see match that estimate. Copy your numbers and send them with your estimate request; we start from them.',
    ],
    sections: [
      { h: 'How to measure your kitchen', p: ['A tape measure and five minutes are enough. Rough numbers give a good ballpark; we measure exactly at the site visit.'], list: ['Measure along each wall where the cabinets are, end to end, in feet.', 'On an L or U kitchen, measure each wall all the way into the corner. The calculator takes out the overlap at each corner.', 'Upper and base cabinets on the same wall count once.', 'For an island, measure its length and the depth of the top, including any seating overhang.', 'For the floor, measure the room length and width, or enter the area if you know it.'] },
      { h: 'Which shape is my kitchen?', p: [], list: ['One wall: every cabinet on a single wall, common in condos, ADUs and small homes.', 'Galley: two runs facing each other with a walkway between.', 'L-shaped: two runs meeting at a corner, often open to a dining area.', 'U-shaped: cabinets on three walls.', 'Any of these can add an island.'] },
      { h: 'How the price is built', p: ['Cabinets are priced per linear foot at three levels: $275 prefabricated, $650 new stained or painted, $1,200 custom built. Counters are priced per square foot at $40, $100 and $150, at about 1.2 sq ft of counter per foot of cabinet as in our example kitchen, plus the island top. Floors are $7, $14 or $20 per sq ft.', 'The backsplash and other finish lines come from the same example and grow with your cabinet length. The $5,354 of trade work (demolition, reconnects, outlets, patching, clean-up) is the same at every level.'] },
      { h: 'What changes the final price', p: ['The written estimate can be higher or lower than the calculator when the job needs things the example did not:'], list: ['Moving the sink, range or walls: plumbing, gas, electrical, framing and plans.', 'Permit and plan-check fees.', 'Appliances, sinks, faucets and fixtures you choose.', 'Floor leveling, or old wiring and plumbing found behind the cabinets.', 'Stone you pick at the yard above the quartz levels, such as marble or quartzite.'] },
    ],
    faq: [
      { q: 'How accurate is the calculator?', a: 'It uses our real rates and reproduces a real estimate. Your written estimate follows a site measure and the materials you choose.' },
      { q: 'Do I count upper and lower cabinets separately?', a: 'No. Measure each wall once; the rate per linear foot already covers uppers and base cabinets on that wall.' },
      { q: 'How do I measure an L-shaped kitchen?', a: 'Measure both walls all the way into the corner. The calculator takes out the corner overlap.' },
      { q: 'Does it include appliances?', a: 'No. Appliances, sinks and fixtures are chosen and bought separately.' },
      { q: 'What do I do with my numbers?', a: 'Press Copy my numbers, then Get your estimate, and paste them into the form with a few photos of your kitchen.' },
      { q: 'Is the site measure free?', a: 'Yes, in our service area.' },
    ],
    photos: [],
  },
  {
    path: `${KIT}/how-to-order`, hub: 'kitchen-remodeling', kind: 'support', name: 'How to Order a Kitchen', short: 'How to order',
    title: 'How to Order a Kitchen or Cabinets — Waltco Development',
    description: 'How a Waltco kitchen or cabinet order works: what to send, the site measure, the written estimate with three levels, the deposit and the schedule.',
    tagline: 'From your first message to the finished kitchen, step by step.',
    intro: ['Ordering a kitchen from us takes six steps. Most of the decisions happen before anything is built, so the job runs to the drawing once it starts.'],
    sections: [
      { h: 'The steps', p: [], list: ['Send your city, room size or wall lengths, the look code if you picked one, and three or four photos.', 'For remodels you get a ballpark from our price list before the site visit.', 'Site measure: we measure, check the walls, plumbing and wiring, and talk through how you use the kitchen.', 'Written estimate with standard, mid-range and high-end options, line by line.', 'Drawing and samples: you approve the layout, door, colour and counter before anything is ordered.', 'Build: demolition, rough work and inspections, cabinets, counters, floor, final walk-through.'] },
      { h: 'Deposit and payments', p: ['The down payment is no more than $1,000 or 10% of the contract, whichever is less. The rest is paid as work is completed, as the contract lists.'] },
      { h: 'Look codes', p: ['Each cabinet look on our site has a code, such as WC-SHK-WHT for White Shaker. Mention it in your request and we start from that look.'] },
    ],
    faq: [
      { q: 'Is the site measure free?', a: 'Yes, for kitchen remodels in our service area.' },
      { q: 'Can I see samples before I decide?', a: 'Yes; our shop and showroom on South Vermont Avenue is open by appointment.' },
      { q: 'How long is the estimate valid?', a: '30 days from its date.' },
    ],
    photos: [],
  },
  {
    path: `${KIT}/whats-included`, hub: 'kitchen-remodeling', kind: 'support', name: "What's Included in a Waltco Kitchen", short: "What's included",
    title: "What's Included in a Waltco Kitchen Remodel",
    description: 'What a Waltco kitchen estimate includes and what it does not: measure, drawing, demolition, install, clean-up, permits, and owner-supplied items.',
    tagline: 'What we do, what the licensed trades do, and what you choose and buy.',
    intro: ['Every written estimate says what is and is not included. These are the usual lines, so there are no surprises when you read yours.'],
    sections: [
      { h: 'Included', p: [], list: ['Site measure and layout drawing.', 'Demolition and haul-away of what is replaced.', 'Cabinets, counters, backsplash and floor as listed.', 'Plumbing and electrical by licensed subcontractors, with permits where needed.', 'Patching and paint around the new work.', 'Protection of floors and rooms, and final clean-up.'] },
      { h: 'Not included unless listed', p: [], list: ['Permit and plan-check fees.', 'Appliances, sinks, faucets and fixtures you choose.', 'Moving walls, plumbing or gas beyond what is drawn.', 'Changes requested after cabinets are ordered.'] },
    ],
    faq: [
      { q: 'Who pulls the permit?', a: 'We do, in the contractor’s name, when the work needs one.' },
      { q: 'Do you remove the old cabinets?', a: 'Yes; demolition and haul-away are a line on the estimate.' },
      { q: 'Can I supply my own materials?', a: 'Often yes, especially fixtures and appliances; we list them as owner-supplied.' },
    ],
    photos: [],
  },
  {
    path: `${KIT}/faq`, hub: 'kitchen-remodeling', kind: 'support', name: 'Kitchen and Cabinet FAQ', short: 'FAQ',
    title: 'Kitchen and Cabinet FAQ — Waltco Development',
    description: 'Answers to common kitchen remodel and cabinet questions in Los Angeles: cost, permits, timing, living at home, door styles, counters and floors.',
    tagline: 'Short answers to the questions we hear most.',
    intro: ['Questions about cost, permits, materials and the process. Each answer links to the page with more detail.'],
    sections: [],
    faq: [
      { q: 'How much does a kitchen remodel cost in Los Angeles?', a: 'Our 177 sq ft example came to $20,146 standard, $37,242 mid-range and $60,433 high-end, before permits and appliances.' },
      { q: 'What decides the price most?', a: 'The cabinets: 46% to 68% of the total in our example.' },
      { q: 'Do I need a permit?', a: 'If you move plumbing, add circuits or change walls, yes. We confirm with your building department.' },
      { q: 'Can I live at home during the remodel?', a: 'Most clients do, with a temporary kitchen elsewhere in the house.' },
      { q: 'Shaker or slab doors?', a: 'Shaker suits transitional kitchens; slab suits modern ones. See our door style pages.' },
      { q: 'Marble, granite or quartz?', a: 'Marble looks soft and etches; granite resists heat; quartz is even and low-care.' },
      { q: 'Can you refinish my cabinets instead of replacing them?', a: 'If the boxes are sound, yes, and it costs far less.' },
      { q: 'Do you install the floor too?', a: 'Yes, under our C-15 flooring licence.' },
      { q: 'How do I order a look from your site?', a: 'Mention its code, such as WC-SHK-WHT, when you request an estimate.' },
      { q: 'What is the deposit?', a: 'No more than $1,000 or 10% of the contract, whichever is less.' },
      { q: 'Where can I see samples?', a: 'At our shop and showroom on South Vermont Avenue, by appointment.' },
      { q: 'Do you build closets and vanities?', a: 'Yes; see our custom closets and bathroom vanities pages.' },
    ],
    photos: [],
  },
  {
    path: `${KIT}/gallery`, hub: 'kitchen-remodeling', kind: 'support', name: 'Kitchen and Cabinet Photo Gallery', short: 'Gallery',
    title: 'Kitchen and Cabinet Photo Gallery, Los Angeles — Waltco',
    description: 'Photos of kitchens, islands, closets, vanities and built-ins from our own jobs in Los Angeles, Beverly Hills, Westlake Village and the South Bay.',
    tagline: 'Our own kitchens and cabinets, each photo captioned with the city and year.',
    intro: [
      'Every photo here comes from a job we worked on: kitchens, islands, range walls, closets, vanities, pantries and built-ins across Los Angeles, Beverly Hills, Santa Monica, Pacific Palisades, Manhattan Beach, Westlake Village and Altadena.',
      'Each look in the photos has its own page with more pictures, the specifications and a code you can send with your estimate request. Find the look you like in the color chart and start from there.',
    ],
    sections: [
      { h: 'Find a look', p: ['The cabinet color chart groups these kitchens by color and door, each with a code: white and blue-gray Shaker, white, natural, warm wood and black slab, navy, cherry and cream raised panel.'] },
      { h: 'Send what you like', p: ['Save the photos you like, or note their captions, and attach them to your estimate request. Showing us what you like is faster than describing it.'] },
    ],
    faq: [
      { q: 'Are these your own jobs?', a: 'Yes. Each caption gives the city and year of the job. Catalog photos of the prefabricated line are only on the prefabricated pages and are labeled as such.' },
      { q: 'Can I see a kitchen in person?', a: 'Finished homes belong to our clients, so visits are rare; sample doors and finishes can be seen at our shop and showroom by appointment.' },
      { q: 'Do you have before-and-after photos?', a: 'Yes; see the full kitchen remodel page for one Beverly Hills kitchen from start to finish.' },
    ],
    photos: ['cat-blue-gray-shaker-los-angeles-784', 'cat-white-shaker-los-angeles-284', 'cat-natural-slab-los-angeles-603', 'cat-navy-manhattan-beach-773', 'cat-raised-cherry-westlake-village-627', 'cat-island-los-angeles-174', 'cat-warm-wood-slab-los-angeles-575', 'cat-raised-cream-los-angeles-788', 'cat-dark-slab-los-angeles-306', 'cat-closet-los-angeles-287', 'cat-wet-bar-job-798', 'cat-vanity-los-angeles-309', 'cat-natural-slab-los-angeles-664', 'cat-gray-shaker-los-angeles-250', 'cat-laundry-los-angeles-276', 'cat-open-shelving-beverly-hills-609', 'cat-built-in-redondo-beach-395', 'cat-pantry-los-angeles-241', 'cat-range-wall-los-angeles-289', 'cat-white-slab-altadena-739', 'cat-two-tone-westlake-village-362', 'cat-garage-los-angeles-357', 'sc-kitchen-remodeling-pacific-palisades-04', 'sc-kitchen-remodeling-beverly-hills-14'],
  },
  {
    path: `${CAB}/how-we-build`, hub: 'cabinetry', kind: 'support', name: 'How We Build Cabinets', short: 'How we build',
    title: 'How Waltco Builds and Installs Cabinets — Quality Standards',
    description: 'How Waltco builds and installs cabinets: measuring, boxes, doors and drawers, finishing, setting level, scribing and adjusting. Our standards, step by step.',
    tagline: 'The standards every Waltco cabinet job follows.',
    intro: ['Good cabinets are mostly decided by measuring and installing well. These are the standards we hold on every job, prefabricated or custom.'],
    sections: [
      { h: 'Measuring', p: ['We measure every wall, check it for plumb and level, and note outlets, windows, pipes and vents before drawing.'] },
      { h: 'Boxes', p: ['Boxes are built square and set level, shimmed where floors slope, and fixed to studs or blocking. A level box line is what makes doors and counters line up.'] },
      { h: 'Doors and drawers', p: ['Full-extension, soft-close drawer slides and adjustable hinges. Doors are adjusted after the counters go on, so the reveals stay even.'] },
      { h: 'Finishing', p: ['Sprayed or factory finishes on painted cabinets; stains approved on a sample first. Exposed ends and panels get the same finish as the doors.'] },
      { h: 'Scribing and trim', p: ['Where cabinets meet uneven walls or ceilings, filler and panels are scribed to the surface rather than caulked.'] },
      { h: 'Protection and clean-up', p: ['Floors and finished rooms are covered while we work, and the kitchen is cleaned before the walk-through.'] },
    ],
    faq: [
      { q: 'Plywood or particleboard boxes?', a: 'It depends on the line and level you choose; the estimate states it.' },
      { q: 'Who installs the cabinets?', a: 'Our crew, under our licence, on the same schedule as the rest of the kitchen.' },
      { q: 'What if a door drifts out of line later?', a: 'Hinges are adjustable; we adjust them at the walk-through and after you have lived with the kitchen.' },
    ],
    photos: [k('beverly-hills-08'), k('beverly-hills-09'), k('beverly-hills-21'), c('beverly-hills-13'), 'cat-build-los-angeles-413', 'cat-build-los-angeles-414', 'cat-build-los-angeles-415', 'cat-build-los-angeles-716', 'cat-build-los-angeles-718'],
  },
  {
    path: `${CAB}/real-wood-vs-thermofoil`, hub: 'cabinetry', kind: 'support', name: 'Real Wood vs. Thermofoil and Laminate Cabinets', short: 'Real wood vs. thermofoil',
    title: 'Real Wood vs. Thermofoil and Laminate Cabinets — Waltco',
    description: 'How real wood, painted MDF, thermofoil and laminate cabinet doors compare: look, durability, repair and cost. What we build and why.',
    tagline: 'What cabinet doors are made of, and what that means over the years.',
    intro: ['Cabinet doors look alike in a showroom and age very differently in a kitchen. This page compares the four materials people ask us about.'],
    sections: [
      { h: 'Solid wood and wood veneer', p: ['Real grain, can be sanded and refinished. Wide solid panels move with humidity, so slab doors are often veneered over a stable core.'] },
      { h: 'Painted MDF', p: ['Stays flat and takes paint smoothly, which is why painted Shaker and slab doors are usually MDF. Chips can be touched up.'] },
      { h: 'Thermofoil', p: ['A vinyl skin heat-pressed over MDF. It costs less, but the skin can peel near heat sources such as ovens and toasters and is hard to repair.'] },
      { h: 'Laminate', p: ['A plastic layer bonded to a core. Durable and easy to clean, with printed wood looks; edges can chip and cannot be refinished.'] },
      { h: 'What we build', p: ['Wood, wood veneer and painted MDF doors. Laminate appears mainly as a budget counter option in our standard level.'] },
    ],
    faq: [
      { q: 'Is MDF real wood?', a: 'It is made from wood fibres and resin; it is not solid wood, but it is the right core for painted doors.' },
      { q: 'Why does thermofoil peel?', a: 'Heat softens the glue under the vinyl skin, most often next to ovens.' },
      { q: 'Can laminate cabinets be painted?', a: 'Not well; the paint does not bond reliably to the plastic surface.' },
    ],
    photos: [],
  },
];

// Planned pages (E&K catalog completeness): each goes live when it has ≥ 3 of our own photos and its own text.
export const PLANNED: { path: string; name: string; needs: string }[] = [
  { path: `${CAB}/inset-cabinets`, name: 'Inset Cabinets', needs: 'photos of inset doors' },
  { path: `${CAB}/shaker-cabinets/sage-green-shaker-cabinets`, name: 'Sage Green Shaker Cabinets', needs: 'green cabinet photos' },
  { path: `${CAB}/shaker-cabinets/stained-oak-shaker-cabinets`, name: 'Stained Oak Shaker Cabinets', needs: 'photos' },
  { path: `${CAB}/slab-cabinets/rift-white-oak-slab-cabinets`, name: 'Rift White Oak Slab Cabinets', needs: 'rift oak photos' },
  { path: `${CAB}/slab-cabinets/walnut-slab-cabinets`, name: 'Walnut Slab Cabinets', needs: 'walnut kitchen photos' },
  { path: `${KIT}/quartz-countertops`, name: 'Quartz Countertops', needs: 'quartz counter photos' },
  { path: `${KIT}/quartzite-countertops`, name: 'Quartzite Countertops', needs: 'photos' },
  { path: `${KIT}/butcher-block-countertops`, name: 'Butcher Block Countertops', needs: 'photos' },
  { path: `${KIT}/cabinet-refinishing`, name: 'Kitchen Cabinet Refinishing', needs: 'before/after refinishing photos' },
  { path: `${KIT}/cabinet-refacing`, name: 'Kitchen Cabinet Refacing', needs: 'photos' },
  { path: `${KIT}/galley-kitchen-remodel`, name: 'Galley Kitchen Remodel', needs: 'galley kitchen photos' },
  { path: `${KIT}/l-shaped-kitchen`, name: 'L-Shaped Kitchens', needs: 'photos' },
  { path: `${KIT}/u-shaped-kitchen`, name: 'U-Shaped Kitchens', needs: 'photos' },
  { path: `${KIT}/open-concept-kitchen`, name: 'Open-Concept Kitchens (wall removal)', needs: 'photos' },
  { path: `${KIT}/fire-rebuild-kitchens`, name: 'Fire Rebuild Kitchens', needs: 'rebuild kitchen photos' },
  { path: `${KIT}/adu-kitchens`, name: 'ADU Kitchens', needs: 'ADU kitchen photos' },
  { path: `${KIT}/backsplash`, name: 'Kitchen Backsplash', needs: 'photos' },
  { path: `${CAB}/mudroom-cabinets`, name: 'Mudroom Cabinets', needs: 'photos' },
];

export const MIN_PHOTOS = 3;
export const isLive = (p: CatPage) => p.kind === 'support' || p.photos.length >= MIN_PHOTOS;
export const LIVE = CATALOG.filter(isLive);
export const catPage = (path: string) => LIVE.find((p) => p.path === path);
export const looksOf = (stylePath: string) => LIVE.filter((p) => p.kind === 'look' && p.style === stylePath);
export const STYLES = LIVE.filter((p) => p.kind === 'style');
export const LOOKS = LIVE.filter((p) => p.kind === 'look');
export const PROJECTS = LIVE.filter((p) => p.kind === 'project');
export const SUPPORT = LIVE.filter((p) => p.kind === 'support');
export const COLOR_CHART = `${CAB}/color-chart`;

// Colour chips for look pages (approximate screen colours, sampled by eye from the photos; the page says so).
export const SWATCH: Record<string, string[]> = {
  'WC-SHK-WHT': ['#F3F0E8'], 'WC-SHK-BLG': ['#7D93A0'], 'WC-SHK-GRY': ['#A3A5A2'], 'WC-SLB-WHT': ['#F5F5F2'], 'WC-SLB-NAT': ['#D5B387'],
  'WC-SLB-WRM': ['#9A6A43'], 'WC-SLB-DRK': ['#3A2A22', '#141414'], 'WC-TWT-NVY': ['#1F2F4A', '#F3F0E8'], 'WC-RPN-CHR': ['#5A2A1E'], 'WC-RPN-CRM': ['#EFE6D2'],
  'WP-SHK-NAT': ['#D9B98E', '#6E8794'], 'WP-SHK-HNY': ['#B07A45'], 'WP-SHK-WHT': ['#F4F2EC', '#C9C7C0'], 'WP-SLB-WAL': ['#6B4429'], 'WP-SLB-BLK': ['#1A1A1A', '#C49A6C'],
  'WP-TWT-WWD': ['#F4F2EC', '#6B4A33'], 'WP-PNT-BLU': ['#1E5A63', '#3E5F8A'], 'WP-VAN-STD': ['#7A5634', '#3F5E4A'], 'WP-LDY-STD': ['#F2F0EA', '#B58D62', '#1A1A1A'], 'WP-STR-STD': ['#F4F2EC', '#1A1A1A'],
};
