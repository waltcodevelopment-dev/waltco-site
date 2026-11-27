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
      'Our slab kitchens on this page come in three looks: white, natural wood and dark or black. Each one has its own page with the photos, specs and colour notes.',
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
    photos: [k('pacific-palisades-05'), k('santa-monica-04'), k('pacific-palisades-03')],
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
    photos: [k('beverly-hills-01'), k('beverly-hills-12'), k('beverly-hills-28'), c('beverly-hills-03'), c('los-angeles-04')],
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
    photos: [c('beverly-hills-04'), k('pacific-palisades-13'), k('pacific-palisades-01'), c('beverly-hills-13')],
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
    photos: [k('pacific-palisades-04'), k('pacific-palisades-11'), k('santa-monica-02'), k('santa-monica-03')],
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
    photos: [k('beverly-hills-02'), k('beverly-hills-13'), k('beverly-hills-23'), c('beverly-hills-02'), c('beverly-hills-06'), c('beverly-hills-16')],
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
    photos: [k('los-angeles-08'), k('los-angeles-05'), k('los-angeles-10'), k('los-angeles-12'), k('pacific-palisades-09'), k('beverly-hills-05'), k('beverly-hills-06'), c('santa-monica-03')],
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
    photos: [k('santa-monica-01'), c('santa-monica-01'), c('beverly-hills-18'), c('beverly-hills-20')],
    pairs: [`${KIT}/kitchen-islands`, `${CAB}/built-ins`],
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
    photos: [c('pacific-palisades-02'), c('pacific-palisades-01'), c('pacific-palisades-03'), c('pacific-palisades-06'), c('los-angeles-01'), c('los-angeles-02'), c('beverly-hills-15')],
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
    photos: [c('pacific-palisades-04'), c('los-angeles-03'), b('beverly-hills-03'), b('beverly-hills-05'), b('beverly-hills-12')],
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
    photos: [c('pacific-palisades-05'), c('beverly-hills-17'), c('beverly-hills-21'), c('beverly-hills-09'), c('los-angeles-05')],
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
    photos: [k('beverly-hills-22'), c('beverly-hills-14'), c('beverly-hills-11'), k('beverly-hills-30')],
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
    photos: [c('beverly-hills-12'), c('santa-monica-02'), c('beverly-hills-07'), c('beverly-hills-10')],
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
    photos: [k('los-angeles-02'), k('los-angeles-09'), k('los-angeles-11'), k('los-angeles-07'), k('pacific-palisades-06'), k('beverly-hills-04')],
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
    photos: [k('pacific-palisades-07'), k('pacific-palisades-08'), k('beverly-hills-29'), k('beverly-hills-12')],
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
    photos: [k('santa-monica-02'), k('beverly-hills-07'), k('santa-monica-03')],
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
    path: `${KIT}/cost-calculator`, hub: 'kitchen-remodeling', kind: 'support', name: 'Kitchen Cost Calculator', short: 'Cost calculator',
    title: 'Kitchen Remodel Cost Calculator, Los Angeles — Waltco',
    description: 'Estimate your kitchen remodel: enter cabinet length, counter area and floor area to get standard, mid-range and high-end totals from our price list.',
    tagline: 'Your kitchen, priced three ways from our own rates.',
    intro: [
      'Enter your cabinet run, counter area and floor area. The calculator applies our price list at three levels and adds the trade work from our priced example. It gives a ballpark, not a quote: the written estimate follows a site measure.',
    ],
    sections: [
      { h: 'How the calculator works', p: ['Cabinets × the rate per linear foot, counters × the rate per square foot, floor × the rate per square foot, plus the backsplash and other finish lines and the $5,354 of trade work from our 177 sq ft example kitchen (demolition, reconnects, outlets, patching, clean-up). With the starting numbers it shows that kitchen\'s three estimates exactly.'] },
      { h: 'Measuring your cabinet run', p: ['Add up the length of every wall with cabinets, along the counter, in feet. Count upper and lower cabinets on the same wall once; the rates already include both. Add the island length if it has cabinets.'] },
    ],
    faq: [
      { q: 'How accurate is the calculator?', a: 'It uses our real rates, but your kitchen may need work the example did not: moving plumbing, new circuits, permits.' },
      { q: 'What if my kitchen is much larger?', a: 'The trade work grows with the room; we confirm it at the site visit.' },
      { q: 'Does it include appliances?', a: 'No. Appliances, sinks and fixtures are chosen and bought separately.' },
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
    photos: [k('beverly-hills-08'), k('beverly-hills-09'), k('beverly-hills-21'), c('beverly-hills-13')],
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
  { path: `${CAB}/raised-panel-cabinets`, name: 'Raised Panel Cabinets', needs: 'photos of our raised-panel kitchens' },
  { path: `${CAB}/inset-cabinets`, name: 'Inset Cabinets', needs: 'photos of inset doors' },
  { path: `${CAB}/shaker-cabinets/navy-shaker-cabinets`, name: 'Navy Shaker Cabinets', needs: '3+ navy cabinet photos' },
  { path: `${CAB}/shaker-cabinets/blue-gray-shaker-cabinets`, name: 'Blue-Gray Shaker Cabinets', needs: '3+ blue-gray photos' },
  { path: `${CAB}/shaker-cabinets/sage-green-shaker-cabinets`, name: 'Sage Green Shaker Cabinets', needs: 'green cabinet photos' },
  { path: `${CAB}/shaker-cabinets/stained-oak-shaker-cabinets`, name: 'Stained Oak Shaker Cabinets', needs: 'photos' },
  { path: `${CAB}/slab-cabinets/rift-white-oak-slab-cabinets`, name: 'Rift White Oak Slab Cabinets', needs: 'rift oak photos' },
  { path: `${CAB}/slab-cabinets/walnut-slab-cabinets`, name: 'Walnut Slab Cabinets', needs: 'walnut kitchen photos' },
  { path: `${CAB}/raised-panel-cabinets/cherry-raised-panel-cabinets`, name: 'Cherry Raised Panel Cabinets', needs: '3+ cherry photos' },
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
