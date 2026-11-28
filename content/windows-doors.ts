// Windows & doors section under /services/windows-and-doors (owner direction 28 Nov 2026: "we need to start ranking,
// can you get 50 seo pages that rank" / "we'll take doors and windows work"). Hub = the service page; these are its
// 49 sub-pages, built like the hardwood section. Facts only from content/facts.ts; no prices (owner's window and
// door price list not supplied yet); no claims from content/claims.ts. Photos: content/wd-photos.ts (own jobs).

export type WdSection = { h: string; p: string[]; list?: string[] };
export type WdGroup = 'Doors' | 'Windows' | 'Installation' | 'Projects' | 'Guides' | 'Areas';
export type WdPage = {
  slug: string;
  group: WdGroup;
  label: string;
  h1: string;
  title: string;        // ≤ 60 characters, unique
  description: string;  // 70–160 characters, unique
  tagline: string;
  intro: string[];
  sections: WdSection[];
  steps: string[];
  faq: { q: string; a: string }[];
  photos: string[];     // photo groups in content/wd-photos.ts, first group leads
  offset?: number;
};

export const WD_HUB = '/services/windows-and-doors';
export const wdPath = (slug: string) => `${WD_HUB}/${slug}`;

const quoteFaq = (what: string) => ({
  q: `How do I get a price for ${what}?`,
  a: 'Use "Get your estimate" and describe the openings, or send the window and door order if you already have one. We reply, visit to measure, and give you a written estimate that lists what is and is not included.',
});

const DOORS: WdPage[] = [
  // ───────────────────────── Doors ─────────────────────────
  {
    slug: 'multi-slide-glass-doors', group: 'Doors', label: 'Multi-Slide Glass Doors',
    h1: 'Multi-Slide Glass Door Installation in Los Angeles',
    title: 'Multi-Slide Glass Door Installation — Waltco Development',
    description: 'Multi-slide glass doors installed in Los Angeles homes: openings framed and flashed, heavy panels set by hand, tracks levelled so the wall rolls open.',
    tagline: 'A wall of glass that rolls open — set level, square and weathertight.',
    intro: [
      'A multi-slide door is three or more glass panels that roll past each other, so a whole wall can open to a patio or yard. The panels are tall, heavy and close-fitting, which makes the installation as important as the door itself.',
      'The photos on this page are from our own job in Pacific Palisades, where we installed several large multi-panel systems in a new house: carried in by hand, tilted up, set on a levelled track and adjusted until each panel rolled and locked.',
    ],
    sections: [
      { h: 'Why the track decides everything', p: ['A multi-slide door rides on a bottom track that has to be dead level across its full width. If the track dips or crowns even slightly, panels drift, rub or refuse to lock. We level the subfloor or slab under the track, shim it on the manufacturer\'s spacing and check it with a long level before any panel goes in.'] },
      { h: 'Stacking or pocketing panels', p: ['Panels either stack behind one fixed panel or slide into a pocket inside the wall. A pocket needs the wall framed for it before drywall, so the choice is made early with the framing plan.'], list: ['Stacking: panels nest at one or both ends; no wall pocket needed', 'Pocketing: panels disappear into the wall for a fully open corner or side', 'Flush or recessed sill: the track can sit low for a near-level step to the patio, with drainage planned under it'] },
      { h: 'Carrying and setting the panels', p: ['Large insulated glass panels can weigh several hundred pounds. We plan how many people are needed, where the panels are staged, and the path from the delivery truck to the opening, so nothing is set down on a finished floor or leaned against fresh framing.'] },
    ],
    steps: ['Check the rough opening against the shop drawings', 'Flash the sill and jambs', 'Level and fasten the track', 'Set the frame plumb and square', 'Carry in and hang each panel', 'Adjust rollers, locks and seals; walk the door with you'],
    faq: [
      { q: 'Can a multi-slide door go into an existing wall?', a: 'Usually, with a new header sized by an engineer and a permit. See our page on opening a wall for glass doors.' },
      { q: 'Do you install doors we buy ourselves?', a: 'Yes. Send us the order and shop drawings before it is placed so we can check the opening sizes against them.' },
      quoteFaq('a multi-slide door'),
    ],
    photos: ['multislide', 'black'],
  },
  {
    slug: 'sliding-patio-doors', group: 'Doors', label: 'Sliding Patio Doors',
    h1: 'Sliding Patio Door Installation in Los Angeles',
    title: 'Sliding Patio Door Installation, LA — Waltco Development',
    description: 'Sliding patio doors installed or replaced in Los Angeles: new openings or same-size swaps, flashed sills, smooth rollers and locks that latch.',
    tagline: 'Two- and three-panel sliders that open easily and keep the weather out.',
    intro: [
      'A sliding patio door is the simplest way to put a wide glass opening between a room and a yard. One panel is fixed and one or two slide, so the door needs no swing space inside or out.',
      'We install sliders in new houses and additions, and replace old aluminium sliders that have worn rollers, bent tracks or failed seals. The West Los Angeles photos on this page show sliders we installed on a new home, opening onto its rear patio.',
    ],
    sections: [
      { h: 'Replacing an old slider', p: ['Older sliders often fail at the rollers and the bottom track, and water can get under a sill that was never flashed. When we take one out we look at the framing and subfloor at the sill before the new door goes in, repair what is soft, and add a sill pan so the new door drains outward.'] },
      { h: 'Choosing the panel layout', p: ['A two-panel slider opens half the width. Three- and four-panel sliders open more of the wall and can be set up to open from the middle or one side. Wider doors put more weight on the rollers, so the track and the floor under it matter more.'], list: ['Two-panel (one fixed, one sliding)', 'Three-panel, opening one side', 'Four-panel, opening from the center', 'Screens and security bars where the door is ordered with them'] },
      { h: 'Glass and frame options', p: ['Frames come in vinyl, aluminium, wood-clad and fibreglass. Dual-pane glass with a low-e coating is the norm in Los Angeles because of the state energy rules. Glass in a door is safety glass by code.'] },
    ],
    steps: ['Measure the opening and agree the door', 'Remove the old door if there is one', 'Repair and flash the sill', 'Set, shim and fasten the frame', 'Hang and adjust the panels', 'Seal, trim and test'],
    faq: [
      { q: 'Can a slider replace a window?', a: 'Yes, by lowering the opening to the floor. That is a structural change in most walls, so it is drawn and permitted first.' },
      { q: 'My slider is hard to open. Does it need replacing?', a: 'Not always. Rollers and tracks can often be cleaned, adjusted or replaced. We look at it first and tell you which makes sense.' },
      quoteFaq('a sliding door'),
    ],
    photos: ['westla', 'multislide'], offset: 6,
  },
  {
    slug: 'french-doors', group: 'Doors', label: 'French Doors',
    h1: 'French Door Installation in Los Angeles',
    title: 'French Door Installation, Los Angeles — Waltco Development',
    description: 'Interior and exterior French doors installed in Los Angeles: pairs hung so the meeting stiles line up, astragals sealed, and casing to match.',
    tagline: 'Pairs of glass doors, hung so both leaves meet straight and close tight.',
    intro: [
      'French doors are two hinged glass doors in one frame, opening from the middle. On the outside of a house they open to a garden or balcony; inside, they divide rooms without blocking light.',
      'A pair is less forgiving than a single door. Both leaves have to hang plumb, meet evenly along the middle, and close against the astragal without one leaf rubbing the other. The black-frame French doors in these photos are from our Pacific Palisades job.',
    ],
    sections: [
      { h: 'In-swing or out-swing', p: ['Out-swing French doors are common on the coast because wind pushes them tighter into the frame, and they leave more room inside. In-swing doors are easier to fit with screens on the outside. Both need a sill that sheds water away from the room.'] },
      { h: 'Getting a pair to meet', p: ['We set the frame plumb on both sides and level at the head and sill before the doors are hung, then check the gap down the middle and across the top. Adjustable hinges and strikes let us fine-tune the pair after the house settles.'], list: ['Even gap along the meeting stiles', 'Astragal and flush bolts on the inactive leaf', 'Weatherstrip that compresses evenly all round', 'Hardware set at a consistent height through the house'] },
      { h: 'Divided lites', p: ['Many French doors have true or simulated divided lites (the grid of glass panes). The grid lines on a pair should line up with each other and with nearby windows, which we check before the order is placed.'] },
    ],
    steps: ['Choose swing, size and glass', 'Check the opening and header', 'Flash and set the frame', 'Hang both leaves', 'Fit astragal, bolts and lockset', 'Case, seal and adjust'],
    faq: [
      { q: 'Can French doors replace a slider?', a: 'Often in the same opening, if the width suits two leaves and there is room for them to swing.' },
      { q: 'Do you install interior French doors too?', a: 'Yes, including pairs between rooms and into offices. See our interior glass doors page.' },
      quoteFaq('French doors'),
    ],
    photos: ['black', 'winint', 'brentwood'], offset: 3,
  },
  {
    slug: 'entry-doors', group: 'Doors', label: 'Entry Doors',
    h1: 'Entry Door Installation in Los Angeles',
    title: 'Entry Door Installation, Los Angeles — Waltco Development',
    description: 'Front and entry doors installed in Los Angeles: wood, fibreglass and steel doors set plumb, flashed at the sill, with locks and hardware fitted.',
    tagline: 'The front door is used more than any other — it has to swing true and seal.',
    intro: [
      'An entry door opens and closes thousands of times a year, takes direct sun and rain, and holds the main lock of the house. It is worth installing carefully.',
      'We install pre-hung entry doors and slab doors in existing frames, single doors and doors with sidelights, in new houses and as stand-alone replacements. The photos show an entry door we set and levelled on our Pacific Palisades job and a wood entry door on a West Los Angeles home.',
    ],
    sections: [
      { h: 'Pre-hung or slab', p: ['A pre-hung door comes already hung in its frame. It is the usual choice for new openings and for replacing a frame that is damaged or out of square. A slab is the door alone, fitted to an existing frame — it suits an old frame worth keeping, but every hinge and lock has to be cut to match.'] },
      { h: 'Materials', p: ['Each material behaves differently in sun and salt air.'], list: ['Solid wood: warm and repairable; needs a finish that is kept up, especially in direct sun', 'Fibreglass: stable, can be stained to look like wood, low upkeep', 'Steel: strong and economical; dents can show', 'Metal and glass: the black-frame look, with insulated glass and multi-point locks'] },
      { h: 'Locks and hardware', p: ['We fit the lockset, deadbolt or multi-point lock, door viewer, kick plate and closer you choose, and set the strike so the door latches without being slammed. Smart locks are fitted to the manufacturer\'s instructions.'] },
    ],
    steps: ['Measure and agree the door and hardware', 'Remove the old door and frame if needed', 'Repair and flash the sill', 'Set the frame plumb and square', 'Fit locks and hardware', 'Weatherstrip, trim and adjust'],
    faq: [
      { q: 'Can you replace only the front door, not the frame?', a: 'Yes, if the frame is sound and square. If it is not, a pre-hung door is the better repair.' },
      { q: 'Do you install doors with sidelights?', a: 'Yes. See our page on double doors and sidelights.' },
      quoteFaq('an entry door'),
    ],
    photos: ['entry', 'westla', 'exterior'],
  },
  {
    slug: 'double-doors-and-sidelights', group: 'Doors', label: 'Double Doors & Sidelights',
    h1: 'Double Entry Doors and Sidelights in Los Angeles',
    title: 'Double Doors and Sidelights, LA — Waltco Development',
    description: 'Double entry doors, sidelights and transoms installed in Los Angeles: wide frames set square, headers checked, and both leaves adjusted to close evenly.',
    tagline: 'A wider front entrance, framed and hung so it stays square.',
    intro: [
      'Double doors and doors with sidelights make a wider, brighter entrance. They also need a wider opening, a header that carries the load above it, and a frame that stays square over a span of six feet or more.',
      'We install double entry doors, single doors with one or two sidelights, and transom windows above them, in new construction and when an entry is widened during a remodel.',
    ],
    sections: [
      { h: 'Widening an entry', p: ['Going from a single door to a double door or adding sidelights usually means a longer header. In most houses that is structural work drawn by an engineer and permitted with the city before we open the wall.'] },
      { h: 'Keeping a wide frame square', p: ['A wide frame can rack out of square if it is fastened to framing that is not plumb. We check the rough opening for plumb and level before the frame goes in, shim at every hinge and lock point, and confirm the frame is square corner to corner before fastening it off.'], list: ['Measure diagonals before fastening', 'Shim behind every hinge and strike', 'Check the reveal along the head and between leaves', 'Seal sidelight and transom joints'] },
      { h: 'Glass at the entry', p: ['Sidelights and glass in or near a door are safety glass by code. Textured or frosted glass is common where privacy matters.'] },
    ],
    steps: ['Measure and choose the unit', 'Engineer and permit if the opening widens', 'Frame and flash the opening', 'Set and square the unit', 'Hang, adjust and fit hardware', 'Trim inside and out'],
    faq: [
      { q: 'Which leaf opens on a double door?', a: 'Usually one active leaf with the lockset, and an inactive leaf held by flush bolts. Both can be active with the right hardware.' },
      quoteFaq('double doors'),
    ],
    photos: ['entry', 'black', 'brentwood'], offset: 3,
  },
  {
    slug: 'black-frame-glass-doors', group: 'Doors', label: 'Black-Frame Glass Doors',
    h1: 'Black-Frame Glass Doors in Los Angeles',
    title: 'Black-Frame Glass Doors, Los Angeles — Waltco Development',
    description: 'Black-frame and steel-look glass doors installed in Los Angeles homes: slim frames set true so sight lines stay straight, with flashing and sealed sills.',
    tagline: 'Slim dark frames and big glass, installed so every line runs true.',
    intro: [
      'Black-frame glass doors — in aluminium, steel or clad wood — give the slim, dark grid that many new Los Angeles houses use from the front door to the back patio.',
      'Thin frames show every mistake. A frame that is slightly out of plumb, or a grid that does not line up with the window beside it, is easy to see against white walls. These photos are from our jobs in Pacific Palisades and Brentwood.',
    ],
    sections: [
      { h: 'Lining up the grid', p: ['When doors and windows sit side by side, their grids and head heights should line up. We compare the shop drawings before the order is placed and set the frames to a common head height on site.'] },
      { h: 'Heat and finish', p: ['Dark frames absorb more sun and move more with heat. Good units allow for this; the installation has to leave the expansion gaps the manufacturer calls for and use sealants rated for it.'], list: ['Factory powder-coat or anodised finish', 'Thermally broken frames limit heat moving through the metal', 'Insulated, low-e glass to meet state energy rules'] },
      { h: 'Steel and steel-look', p: ['True steel doors are heavy and narrow-framed; aluminium and clad units can reproduce the look at less weight. We install both, following each maker\'s fastening and shimming instructions.'] },
    ],
    steps: ['Check sizes and grid alignment on drawings', 'Prepare and flash the openings', 'Set frames to a common head height', 'Hang and adjust leaves', 'Seal and trim', 'Final walk-through'],
    faq: [
      { q: 'Do black frames fade?', a: 'Factory finishes are made for sun, but coastal salt and harsh cleaners shorten their life. See our care guide.' },
      quoteFaq('black-frame doors'),
    ],
    photos: ['black', 'brentwood', 'multislide'], offset: 6,
  },
  {
    slug: 'interior-glass-doors', group: 'Doors', label: 'Interior Glass Doors',
    h1: 'Interior Glass Door Installation in Los Angeles',
    title: 'Interior Glass Door Installation — Waltco Development',
    description: 'Interior glass doors installed in Los Angeles homes: office and den doors, glass pairs and glass panel doors hung square, with matching casing.',
    tagline: 'Glass between rooms — light through the house, sound kept out.',
    intro: [
      'Interior glass doors close off an office, den or wine room while letting light pass through. They are heavier than hollow interior doors and show any gap or misalignment more clearly.',
      'We install single and paired interior glass doors, glass panel doors and full-lite doors, and fit the casing so they match the rest of the house. These photos are from our Pacific Palisades job, where glass doors open between the main rooms.',
    ],
    sections: [
      { h: 'Hanging a heavier door', p: ['Glass doors need hinges rated for their weight and solid blocking behind the hinge jamb. We add blocking during framing when we can, or open the wall to add it on a remodel, so the door does not sag.'] },
      { h: 'Glass choices', p: ['Glass in a door is safety glass by code. Inside a house you can choose clear, frosted, reeded or seeded glass depending on how much privacy the room needs.'], list: ['Clear glass for offices that should feel open', 'Frosted or reeded glass for privacy', 'Divided lites to match exterior French doors'] },
      { h: 'Casing to match', p: ['We case interior glass doors in the same profile as the other doors in the room so they read as part of the house, not an add-on.'] },
    ],
    steps: ['Measure and choose the door', 'Add blocking at the hinge side', 'Set the frame plumb', 'Hang and adjust', 'Fit hardware', 'Case and prepare for paint'],
    faq: [
      { q: 'Can a solid interior door be swapped for a glass one?', a: 'Yes, usually in the same frame if the frame is sound, after checking the hinges carry the weight.' },
      quoteFaq('interior glass doors'),
    ],
    photos: ['intglass', 'intdoor', 'black'],
  },
  {
    slug: 'interior-doors', group: 'Doors', label: 'Interior Doors',
    h1: 'Interior Door Installation in Los Angeles',
    title: 'Interior Door Installation, Los Angeles — Waltco Development',
    description: 'Interior doors installed through Los Angeles homes: pre-hung and slab doors hung plumb, even gaps, hardware at one height and casing ready for paint.',
    tagline: 'Doors through the house that swing freely, latch quietly and line up.',
    intro: [
      'Interior doors are installed in numbers — a house can have twenty or more — and small differences add up. Gaps that vary from door to door, handles at different heights or a door that swings open on its own are what people notice.',
      'We hang interior doors in new houses and remodels, as part of finish carpentry, and replace single doors on their own. The photos are from our Pacific Palisades job, where we hung and cased the doors through the house.',
    ],
    sections: [
      { h: 'Hanging to a standard', p: ['We set every door to the same standard so the house looks consistent.'], list: ['Frame plumb in both directions so the door stays where you leave it', 'Even gap at the head and latch side', 'Hinges and handles at one height through the house', 'Clearance under the door for the finished floor and any rug', 'Strikes set so doors latch without slamming'] },
      { h: 'Pocket, barn and bi-fold doors', p: ['Pocket doors need their frame installed before drywall. Barn doors hang from a track on the wall and need blocking behind it. Bi-folds are common on closets. Each has its own hardware and clearances, which we plan with the framing.'] },
      { h: 'After the floor goes in', p: ['On a remodel the finished floor often goes in after the doors. We plan the door heights for the final floor so doors are not cut down later.'] },
    ],
    steps: ['Count and schedule the doors', 'Check openings for size and plumb', 'Set frames and hang doors', 'Fit hinges, handles and stops', 'Case and fill', 'Adjust after paint'],
    faq: [
      { q: 'Do you install closet doors?', a: 'Yes — hinged, bi-fold, sliding and pocket closet doors.' },
      quoteFaq('interior doors'),
    ],
    photos: ['intdoor', 'trim', 'intglass'], offset: 4,
  },
];

const WINDOWS: WdPage[] = [
  {
    slug: 'black-frame-windows', group: 'Windows', label: 'Black-Frame Windows',
    h1: 'Black-Frame Window Installation in Los Angeles',
    title: 'Black-Frame Window Installation, LA — Waltco Development',
    description: 'Black-frame windows installed in Los Angeles homes: flashed openings, frames set plumb and in line, and clean interior returns or casing.',
    tagline: 'Dark, slim frames set straight and sealed, inside and out.',
    intro: [
      'Black window frames outline every opening on a white or light wall, so alignment shows from the street and from inside. Head heights that wander or a frame set slightly out of plumb are easy to spot.',
      'We install black-frame windows in aluminium, fibreglass, vinyl and clad wood. The photos come from our new home in Pacific Palisades, where black windows went into wrapped openings before stucco and siding, and from a remodel in Brentwood.',
    ],
    sections: [
      { h: 'Setting a run of windows', p: ['When several windows sit along one wall we snap a line for the head height and set each frame to it, then check the sight lines from inside before fastening off. Shims go behind every fastening point so frames are not bowed.'] },
      { h: 'Inside finish', p: ['Black frames look sharpest with a clean edge around them. Depending on the design we finish the opening with drywall returns, a wood jamb extension and casing, or a stone or wood sill.'], list: ['Drywall returns with a corner bead for a minimal edge', 'Painted or stained jamb extensions and casing', 'Stone, wood or tile stools at the sill'] },
      { h: 'Frames and heat', p: ['Dark frames get hotter in the sun. Thermally broken frames and low-e glass help with energy use; the installer has to leave the expansion gaps and use the sealants the maker specifies.'] },
    ],
    steps: ['Check sizes and head heights on the drawings', 'Wrap and flash the openings', 'Set frames to a common line', 'Shim, fasten and seal', 'Finish the inside returns or casing', 'Clean, test and walk through'],
    faq: [
      { q: 'Are black windows harder to install?', a: 'Not harder, but less forgiving — mistakes show. That is why we set them to a common line and check the sight lines before fastening.' },
      quoteFaq('black-frame windows'),
    ],
    photos: ['black', 'winext', 'brentwood'],
  },
  {
    slug: 'window-walls-and-picture-windows', group: 'Windows', label: 'Window Walls & Picture Windows',
    h1: 'Window Walls and Picture Windows in Los Angeles',
    title: 'Window Walls and Picture Windows, LA — Waltco Development',
    description: 'Window walls and large fixed picture windows installed in Los Angeles: big glass carried and set safely, headers checked, and every joint sealed.',
    tagline: 'Large fixed glass for the view — handled carefully and sealed for good.',
    intro: [
      'A picture window is a large fixed pane with no moving parts. A window wall is several of them, often with operable windows or doors mixed in, filling most of a wall. Both bring in the view; both put a lot of weight and a lot of joints in one opening.',
      'The window walls in these photos are from a Brentwood home, where a run of black-frame windows lines an office, and from our Pacific Palisades house.',
    ],
    sections: [
      { h: 'Handling large glass', p: ['Large insulated panes are heavy and break at the edges if they are knocked. We plan the delivery path, use suction cups and enough hands, and never stand a unit on an unprotected corner.'] },
      { h: 'Joints between units', p: ['Where units are joined side by side, the joining (mulling) detail has to carry wind load and keep water out. We follow the maker\'s mulling instructions and flash the whole opening as one, not each unit alone.'], list: ['Structural mullions where spans are long', 'Continuous sill pan under the whole run', 'Sealant joints sized for movement'] },
      { h: 'Safety glass rules', p: ['Large panes low to the floor, and glass near doors, stairs and tubs, must be safety glass under the California Residential Code. We check the order against these rules before it is placed.'] },
    ],
    steps: ['Review the openings and shop drawings', 'Plan delivery and handling', 'Flash the whole opening', 'Set, mull and fasten units', 'Seal joints inside and out', 'Trim and walk through'],
    faq: [
      { q: 'Can fixed and opening windows be combined?', a: 'Yes — a fixed center pane with casements or awnings at the sides or below is common.' },
      quoteFaq('a window wall'),
    ],
    photos: ['brentwood', 'multislide', 'black'], offset: 2,
  },
  {
    slug: 'casement-windows', group: 'Windows', label: 'Casement & Awning Windows',
    h1: 'Casement and Awning Window Installation in Los Angeles',
    title: 'Casement and Awning Windows, LA — Waltco Development',
    description: 'Casement and awning windows installed in Los Angeles: crank-out sashes set square so they close tight, with flashed openings and finished trim.',
    tagline: 'Crank-out windows that seal tight when closed and catch the breeze when open.',
    intro: [
      'A casement window is hinged at the side and cranks out; an awning window is hinged at the top. Both seal against the frame when closed, which makes them tight against wind and rain, and both open fully for air.',
      'Because the sash swings, the frame has to be perfectly square or the sash drags and the lock will not pull it tight. Our photos show casements we set and trimmed on our Pacific Palisades job.',
    ],
    sections: [
      { h: 'Square frames, tight seals', p: ['We shim casement frames at the hinge and lock points and check them corner to corner before fastening, then open and close each sash to confirm it closes evenly against the weatherstrip.'] },
      { h: 'Where they work well', p: ['Casements suit tall, narrow openings and places where you reach over a counter, since a crank is easier than lifting a sash. Awnings can stay open in light rain and sit well below a fixed picture window.'], list: ['Over kitchen sinks and counters', 'Beside a fixed picture window', 'Bathrooms, with obscure glass', 'Bedrooms, where the size meets emergency escape rules'] },
      { h: 'Bedroom escape openings', p: ['Bedroom windows must give an emergency escape opening of a minimum size and height above the floor. Casements often meet the rule in a smaller frame than sliders do. We check the clear opening on the maker\'s data before ordering.'] },
    ],
    steps: ['Measure and confirm escape sizes', 'Flash the opening', 'Set and square the frame', 'Test each sash and lock', 'Seal and trim', 'Walk through operation with you'],
    faq: [
      { q: 'Can casements replace old sliders?', a: 'Often in the same opening; the frame size and the escape opening in bedrooms are what decide it.' },
      quoteFaq('casement windows'),
    ],
    photos: ['winint', 'winext', 'trim'],
  },
  {
    slug: 'divided-lite-windows', group: 'Windows', label: 'Divided-Lite Windows',
    h1: 'Divided-Lite Windows in Los Angeles',
    title: 'Divided-Lite Window Installation, LA — Waltco Development',
    description: 'Divided-lite windows and doors installed in Los Angeles: grids lined up across every opening, true or simulated lites, and trim to match.',
    tagline: 'Grid windows that line up across the whole house.',
    intro: [
      'Divided lites are the grid of small panes on a traditional window or door. Today most are simulated — bars bonded to both sides of one insulated pane — which keeps the look and the energy performance.',
      'The value of a grid is in its lines. When the bars on one window do not line up with the window or door next to it, the whole wall looks off. These photos are from our Pacific Palisades house, where grid windows and doors run through the rooms.',
    ],
    sections: [
      { h: 'True, simulated or between-the-glass', p: ['There are three common ways to make the grid.'], list: ['True divided lites: separate panes in a muntin frame; traditional, less efficient', 'Simulated divided lites: bars on both faces of one insulated pane, often with a spacer between', 'Grilles between the glass: flat bars inside the pane; easy to clean, flatter look'] },
      { h: 'Lining grids up', p: ['Before an order is placed we lay the grid patterns side by side on the drawings so the horizontal bars land at the same height across windows and doors, then set the frames to a common head height on site.'] },
      { h: 'Matching existing windows', p: ['On a remodel, new grid windows can be matched to the existing pattern and bar width so an addition blends with the original house.'] },
    ],
    steps: ['Compare grid patterns on the drawings', 'Order with matching bar widths', 'Flash and set frames to a common line', 'Check grids across each wall', 'Seal and trim', 'Walk through'],
    faq: [
      { q: 'Are simulated lites efficient?', a: 'Yes. Because the glass is one insulated unit, they perform like plain insulated glass of the same type.' },
      quoteFaq('grid windows'),
    ],
    photos: ['winint', 'winext', 'black'], offset: 5,
  },
  {
    slug: 'new-construction-windows', group: 'Windows', label: 'New-Construction Windows',
    h1: 'New-Construction Window Installation in Los Angeles',
    title: 'New-Construction Window Installation — Waltco Development',
    description: 'Windows for new homes and additions in Los Angeles: nail-fin windows set in framed openings, lapped with building wrap and flashing before siding or stucco.',
    tagline: 'Windows set in open framing and flashed into the wall before the siding goes on.',
    intro: [
      'On a new house or addition the windows go in while the walls are open: framing done, sheathing on, building wrap going up. Most new-construction windows have a nailing fin around the frame that is fastened to the sheathing and lapped into the weather barrier.',
      'Getting that lapping right is what keeps water out for the life of the house. The photos are from our new home in Pacific Palisades, where we wrapped, flashed and set the windows before stucco and siding.',
    ],
    sections: [
      { h: 'The order of layers', p: ['Water runs down a wall, so each layer laps over the one below it, like shingles.'], list: ['Sill pan or sill flashing first, turned up at the corners', 'Window set and fastened through the fin', 'Side flashing over the jamb fins', 'Head flashing over the top fin', 'Building wrap lapped over the head flashing'] },
      { h: 'Checking the framing first', p: ['Before a window goes in we measure each rough opening against the window schedule, check that the sill is level and the sides plumb, and fix the framing if it is not. A window cannot make up for a crooked opening.'] },
      { h: 'Coordinating with other trades', p: ['Windows sit between framing, stucco or siding, interior drywall and trim. On our own builds we schedule them in that order; on others we coordinate with the general contractor.'] },
    ],
    steps: ['Check rough openings against the schedule', 'Install sill pans', 'Set and fasten windows', 'Flash jambs and heads', 'Lap the building wrap', 'Hand over for siding or stucco'],
    faq: [
      { q: 'Do you install windows for other builders?', a: 'Yes, as a sub-trade on new houses and additions, as well as on our own jobs.' },
      quoteFaq('new-construction windows'),
    ],
    photos: ['winext', 'flashing', 'framing'],
  },
  {
    slug: 'replacement-windows', group: 'Windows', label: 'Replacement Windows',
    h1: 'Replacement Window Installation in Los Angeles',
    title: 'Replacement Window Installation, LA — Waltco Development',
    description: 'Replacement windows installed in Los Angeles homes: retrofit or full-frame, old units removed cleanly, openings repaired and flashed, trim made good.',
    tagline: 'Old windows out, new ones in — with the opening repaired, not covered up.',
    intro: [
      'Replacing windows in an existing house is different from new construction: the wall is finished, the old frame may hide water damage, and the new window has to fit an opening built decades ago.',
      'We replace single windows and whole houses, and take stand-alone window jobs as well as windows as part of a remodel. There are two main methods, retrofit and full-frame, and we explain which suits each opening.',
    ],
    sections: [
      { h: 'Retrofit or full-frame', p: ['A retrofit window fits inside or over the old frame without disturbing the wall finish. A full-frame replacement removes the old frame to the studs so the opening can be inspected, repaired and properly flashed. Our guide compares the two in detail.'] },
      { h: 'What we look for when the old window comes out', p: ['Older windows often leak where the sill meets the wall.'], list: ['Soft or stained framing at the sill', 'Missing or failed flashing', 'Openings out of square', 'Old sash weights and pockets to insulate'] },
      { h: 'Energy and safety rules', p: ['New windows in California must meet the state energy rules for glass performance, and bedroom windows must keep a legal escape opening. We check both on the maker\'s data before ordering.'] },
    ],
    steps: ['Measure each opening', 'Choose retrofit or full-frame', 'Remove old windows', 'Repair and flash', 'Set, seal and insulate', 'Patch, trim and clean up'],
    faq: [
      { q: 'Do replacement windows need a permit?', a: 'In the City of Los Angeles, window replacements are generally permitted work. See our permits guide.' },
      quoteFaq('replacement windows'),
    ],
    photos: ['winint', 'trim', 'winext'], offset: 8,
  },
];

const INSTALL: WdPage[] = [
  {
    slug: 'rough-openings-and-headers', group: 'Installation', label: 'Rough Openings & Headers',
    h1: 'Rough Openings and Headers for Windows and Doors',
    title: 'Rough Openings and Headers, Los Angeles — Waltco Development',
    description: 'Rough openings framed for windows and doors in Los Angeles: headers, king and jack studs, level sills and openings sized to the window schedule.',
    tagline: 'The framed hole decides how well the window or door fits.',
    intro: [
      'Every window and door sits in a rough opening — the framed hole in the wall. Above it is a header that carries the load around the opening; at the sides are king and jack studs; below a window is a sill.',
      'If the opening is the wrong size, out of plumb or not level, no amount of shimming makes the unit right. We frame and check openings on our own builds and correct them on others before any window goes in. These photos show the framed openings on our Pacific Palisades house.',
    ],
    sections: [
      { h: 'Sizing the opening', p: ['Each window and door maker lists the rough opening for its units, usually a little larger than the frame so there is room to shim. We frame to the maker\'s number from the window schedule, not to a rule of thumb.'] },
      { h: 'Headers', p: ['A header\'s size depends on the span, the load from above and the wall it sits in. Large glass doors and window walls often need engineered beams, and in shear walls the framing around the opening is part of the earthquake design.'], list: ['Header size from the plans or an engineer', 'Jack studs under each end', 'Hardware and nailing called for on the structural drawings'] },
      { h: 'Checking before the unit arrives', p: ['We measure every opening against the schedule — width, height, diagonals, sill level — and mark corrections before the delivery date so the install day is not spent re-framing.'] },
    ],
    steps: ['Read the window schedule and plans', 'Frame headers, studs and sills', 'Measure every opening', 'Correct size, plumb and level', 'Hand over for wrap and flashing'],
    faq: [
      { q: 'Can a window opening be made larger?', a: 'Yes, with a new header sized for the new span. In most walls that is drawn by an engineer and permitted.' },
      quoteFaq('framing window and door openings'),
    ],
    photos: ['framing', 'winext'],
  },
  {
    slug: 'sill-pans-and-flashing', group: 'Installation', label: 'Sill Pans & Flashing',
    h1: 'Sill Pans and Flashing for Windows and Doors',
    title: 'Window and Door Flashing, Los Angeles — Waltco Development',
    description: 'Window and door flashing in Los Angeles: sill pans with end dams, jamb and head flashing lapped in order so water drains out, not into the wall.',
    tagline: 'The layers you never see are the ones that keep the wall dry.',
    intro: [
      'Most leaks blamed on a window or door come from the opening around it. Water gets past the frame in a storm, and if there is nothing under the sill to catch it and send it out, it runs into the wall.',
      'A sill pan is that catch: a waterproof tray under the unit, turned up at the back and the ends, that drains to the outside. The flashing at the sides and head is lapped over it in order. The close-ups on this page — formed end dams, flashing tape and wrap — are from our Pacific Palisades job.',
    ],
    sections: [
      { h: 'Building a sill pan', p: ['A pan can be formed from flexible flashing, a pre-formed plastic or metal pan, or a combination.'], list: ['Back dam turned up on the inside', 'End dams turned up at each jamb', 'Slight slope to the outside', 'Front edge lapped over the wrap or flashing below', 'No fasteners through the bottom of the pan'] },
      { h: 'Lapping in order', p: ['Each layer above laps over the one below: pan first, then the unit, then jamb flashing, then head flashing, then the building wrap over the head. Get the order wrong and the layers channel water inward.'] },
      { h: 'Under large glass doors', p: ['Big sliding and multi-slide doors carry a lot of water at the sill in a storm. Their pans are longer, need to be continuous across the width, and often tie into a drain or weep path. See our page on glass door thresholds and drainage.'] },
    ],
    steps: ['Prepare and slope the sill', 'Install the pan with end dams', 'Set the unit', 'Flash the jambs', 'Flash the head', 'Lap the wrap and seal'],
    faq: [
      { q: 'Can flashing be added to an existing window?', a: 'Only properly by removing the window or the siding around it. That is the main reason we favour full-frame replacement where there are leaks.' },
      quoteFaq('flashing and leak repair'),
    ],
    photos: ['flashing', 'winext'],
  },
  {
    slug: 'house-wrap-and-weatherproofing', group: 'Installation', label: 'House Wrap & Weatherproofing',
    h1: 'Building Wrap and Weatherproofing Around Openings',
    title: 'House Wrap Around Windows and Doors — Waltco Development',
    description: 'Building wrap and weatherproofing around windows and doors in Los Angeles: wrap cut and lapped at each opening so stucco and siding stay dry behind.',
    tagline: 'The weather barrier and the window have to work as one system.',
    intro: [
      'Behind stucco or siding is a water-resistive barrier — building paper or a house wrap. Stucco and siding are not waterproof on their own; the barrier is what sheds water that gets behind them.',
      'Each window and door is a hole in that barrier, so the barrier has to be cut, folded and lapped around the opening so it works with the flashing. These photos show the wrap and flashing around openings on our Pacific Palisades house.',
    ],
    sections: [
      { h: 'Cutting the wrap at an opening', p: ['The usual method is a modified I-cut: the wrap is cut across the head and down the middle, the sides folded into the opening, and a flap at the head left loose so the head flashing can slip under it.'] },
      { h: 'Stucco walls', p: ['Under stucco, Los Angeles walls typically get two layers of barrier. The window flashing has to lap correctly with both, and the stucco weep screed and casing beads are set so water can get out at the bottom.'], list: ['Two layers of barrier under stucco', 'Head flashing under the upper layer', 'Sealant joints between stucco and frame where the maker calls for them'] },
      { h: 'Siding walls', p: ['With lap or panel siding, trim and drip caps over windows and doors shed water away from the head joint. We coordinate the window trim with the siding detail.'] },
    ],
    steps: ['Install the barrier on the wall', 'Cut and fold at each opening', 'Install pans and units', 'Flash and lap', 'Tape the head flap down', 'Hand over for stucco or siding'],
    faq: [
      { q: 'Is house wrap required?', a: 'A water-resistive barrier behind exterior cladding is required by the building code. The type depends on the cladding and the plans.' },
      quoteFaq('weatherproofing openings'),
    ],
    photos: ['flashing', 'winext', 'exterior'], offset: 5,
  },
  {
    slug: 'setting-large-glass-doors', group: 'Installation', label: 'Setting Large Glass Doors',
    h1: 'Setting Large Glass Doors by Hand',
    title: 'Setting Large Glass Doors, Los Angeles — Waltco Development',
    description: 'How large glass doors are set in Los Angeles homes: panels staged, carried and tilted up by hand, tracks levelled and frames shimmed square.',
    tagline: 'Heavy glass, set by hand — planned before the truck arrives.',
    intro: [
      'Large glass door panels can be taller than a person and weigh several hundred pounds each. On many sites there is no room for a lift, so they are carried and set by hand.',
      'Our video on the main windows and doors page shows a large unit being carried, tilted up and set on our Pacific Palisades job. This page explains how a set like that is planned and done safely.',
    ],
    sections: [
      { h: 'Before install day', p: ['Panels are checked for damage on delivery and staged close to their openings, standing on padding, never flat on a corner.'], list: ['Path from staging to opening cleared and protected', 'Enough people for the heaviest panel', 'Suction cups and straps on hand', 'Track and frame already set and checked'] },
      { h: 'Tilting up and setting', p: ['A panel is carried flat or on edge, then tilted upright at the opening and lifted onto the track. Everyone knows the plan and one person calls each move. Panels are never left leaning unsecured.'] },
      { h: 'After the panels are in', p: ['Rollers are adjusted so each panel rolls with light pressure and the gaps are even, then locks and interlocks are set. We open and close the whole door several times before calling it done.'] },
    ],
    steps: ['Inspect and stage panels', 'Set and level the frame and track', 'Carry, tilt up and set panels', 'Adjust rollers and gaps', 'Set locks and seals', 'Test the full door'],
    faq: [
      { q: 'Do you ever use equipment instead?', a: 'Yes, where there is access. On tight hillside and backyard sites, hand-setting is often the only way.' },
      quoteFaq('large glass door installation'),
    ],
    photos: ['multislide'], offset: 12,
  },
  {
    slug: 'window-casing-and-trim', group: 'Installation', label: 'Window Casing & Trim',
    h1: 'Window Casing and Trim in Los Angeles',
    title: 'Window Casing and Trim, Los Angeles — Waltco Development',
    description: 'Window casing, stools, aprons and jamb extensions installed in Los Angeles homes: tight joints, even reveals and trim ready for paint or stain.',
    tagline: 'The finish carpentry that frames the view.',
    intro: [
      'Once a window is in and the drywall is done, the inside of the opening is finished with trim: jamb extensions to bring the frame flush with the wall, a stool at the sill, casing around the sides and head, and sometimes an apron below.',
      'Trim is finish carpentry, and it is one of the trades we do ourselves. The photos are from our Pacific Palisades house, where we trimmed the windows and built window seats into deep openings.',
    ],
    sections: [
      { h: 'Styles', p: ['Trim sets the style of a room as much as the window does.'], list: ['Square-edge casing for a clean modern look', 'Profiled casing to match an older house', 'Picture-frame casing on all four sides', 'Stool and apron at the sill', 'Drywall returns with no casing'] },
      { h: 'Tight joints that stay tight', p: ['We set an even reveal along the window frame, glue and pin the miters, and back-cut joints so they close tight against walls that are rarely flat. Wood is left to acclimate before it is installed.'] },
      { h: 'Deep openings and window seats', p: ['Thick walls leave a deep sill. That depth can become a window seat or a wide stool for plants. We build these as part of the trim package.'] },
    ],
    steps: ['Agree profiles and finish', 'Fit jamb extensions', 'Install stools and aprons', 'Case sides and head', 'Fill, caulk and sand', 'Ready for paint or stain'],
    faq: [
      { q: 'Can you match the trim in my house?', a: 'Usually. We match from stock profiles or have a profile milled when it is no longer made.' },
      quoteFaq('window trim'),
    ],
    photos: ['trim', 'winint'],
  },
  {
    slug: 'door-casing-and-trim', group: 'Installation', label: 'Door Casing & Trim',
    h1: 'Door Casing and Trim in Los Angeles',
    title: 'Door Casing and Trim, Los Angeles — Waltco Development',
    description: 'Door casing and trim installed in Los Angeles homes: matched profiles, even reveals, plinth blocks and headers, and clean joints at the floor.',
    tagline: 'Casing that ties every door in the house together.',
    intro: [
      'Door casing covers the gap between the door frame and the wall and gives each opening its style. Done well, every door in the house reads as one set.',
      'We case doors as part of our finish carpentry: in new houses, in remodels and when new doors replace old ones. The photos are from our Pacific Palisades job.',
    ],
    sections: [
      { h: 'Consistent reveals', p: ['The reveal — the strip of frame left showing inside the casing — is set the same on every door so the eye reads the openings as matching. We mark it with a gauge rather than by eye.'] },
      { h: 'Where casing meets the floor and base', p: ['Casing has to land cleanly on the finished floor and meet the baseboard. When floors go in after the doors, we plan the casing height for the final floor.'], list: ['Plinth blocks at the base on traditional trim', 'Headers or cornices above the door', 'Base butted or returned cleanly into the casing'] },
      { h: 'Matching old houses', p: ['In older homes we match existing casing so new doors and old ones look alike.'] },
      { h: "Paint-grade or stain-grade", p: ["Most casing is paint-grade: finger-jointed pine or MDF, filled and painted with the walls. Stain-grade casing in oak, walnut or other species needs clear wood, tighter joints and no filler, because every nail hole and joint shows through the finish. We set nails in the least visible places, match grain across a miter where we can, and let stain-grade trim acclimate in the house before cutting it."] },
    ],
    steps: ['Agree profile', 'Set reveals', 'Cut and fit casing', 'Add heads and plinths', 'Fill and caulk', 'Ready for paint'],
    faq: [
      { q: 'Do you do baseboard and crown too?', a: 'Yes — see our finish carpentry service.' },
      quoteFaq('door trim'),
    ],
    photos: ['intdoor', 'trim', 'intglass'], offset: 7,
  },
  {
    slug: 'door-adjustment-and-repair', group: 'Installation', label: 'Door Adjustment & Repair',
    h1: 'Door Adjustment and Repair in Los Angeles',
    title: 'Door Adjustment and Repair, Los Angeles — Waltco Development',
    description: 'Doors that stick, sag or will not latch, adjusted and repaired in Los Angeles: hinges, strikes, frames and closet door mechanisms put right.',
    tagline: 'Doors that stick, rub or will not latch — fixed at the cause.',
    intro: [
      'A door that sticks, swings open by itself or will not latch usually has a cause you can fix without replacing it: a loose hinge, a frame that has moved, a strike in the wrong place, or a sliding or bi-fold mechanism that has come out of adjustment.',
      'We take on door adjustment and repair as stand-alone work and on our remodels, including frames disturbed when old plaster is removed around them.',
    ],
    sections: [
      { h: 'Common problems and fixes', p: ['We look for the cause first.'], list: ['Rubbing at the top latch corner: tighten or shim the top hinge', 'Will not latch: reset or move the strike', 'Swings open or closed: frame out of plumb; re-shim the frame', 'Gap uneven: plane, re-hang or adjust hinges', 'Sliding or bi-fold closet doors jumping the track: adjust or replace the hardware'] },
      { h: 'After plaster or drywall work', p: ['When old plaster is removed around a door, the frame often moves or the casing is damaged. We re-set the frame plumb, clean up the opening and re-case it so the door works again.'] },
      { h: 'When to replace instead', p: ['A door that is split, delaminated or badly warped is usually better replaced. We tell you plainly which it is.'] },
    ],
    steps: ['Inspect door, frame and hardware', 'Find the cause', 'Adjust or repair', 'Re-set frame if needed', 'Test swing and latch'],
    faq: [
      { q: 'Do you take small door repair jobs?', a: 'Yes. Describe the doors with "Get your estimate" and we schedule a visit.' },
      quoteFaq('door repairs'),
    ],
    photos: ['intdoor', 'entry'], offset: 10,
  },
  {
    slug: 'measuring-and-ordering', group: 'Installation', label: 'Measuring & Ordering',
    h1: 'Measuring and Ordering Windows and Doors',
    title: 'Window and Door Measuring and Ordering — Waltco Development',
    description: 'Windows and doors measured and checked before ordering in Los Angeles: openings against shop drawings, swing directions, glass and escape sizes.',
    tagline: 'Most install-day problems are decided when the order is placed.',
    intro: [
      'Windows and doors are made to order and often take weeks or months to arrive. A wrong size or swing found on install day means another long wait.',
      'That is why we measure every opening and read the shop drawings before an order is placed — whether we supply the units or you buy them yourself.',
    ],
    sections: [
      { h: 'What we check', p: ['We check each line of the order against the opening and the plans.'], list: ['Rough opening width, height and diagonals', 'Unit size against the maker\'s rough opening', 'Swing direction and hinge side', 'Glass type, safety glass and energy ratings', 'Bedroom escape opening sizes', 'Grid patterns and head heights across a wall', 'Hardware finish and lock type'] },
      { h: 'Shop drawings', p: ['For large glass doors and custom units, the maker sends shop drawings. We review them against the framing and mark any change needed before you sign off.'] },
      { h: 'If you buy the units', p: ['Send us the quote before you pay for it. We check it against the openings and tell you anything that does not fit.'] },
      { h: "Who signs off the order", p: ["When we supply the units, we place the order after you approve the final list. When you buy them, you place it \u2014 after our check. Either way, one person signs off the schedule, so there is no question later about who chose a size, a swing or a glass type. We keep a copy of the signed schedule with the job file and use it again on delivery day."] },
    ],
    steps: ['Measure every opening', 'Read the plans and schedule', 'Review the quote or shop drawings', 'Mark corrections', 'Confirm and place the order'],
    faq: [
      { q: 'Do you charge to check an order?', a: 'It is part of our estimate when we install the units.' },
      quoteFaq('window and door installation'),
    ],
    photos: ['delivery', 'framing'],
  },
  {
    slug: 'delivery-and-staging', group: 'Installation', label: 'Delivery & Staging',
    h1: 'Window and Door Delivery and Staging',
    title: 'Window and Door Delivery and Staging — Waltco Development',
    description: 'Window and door deliveries handled on Los Angeles job sites: units checked on arrival, labeled to their openings and stored upright and protected.',
    tagline: 'Checked on arrival, stored safely, matched to the right opening.',
    intro: [
      'Windows and doors can be damaged between the truck and the wall more easily than anywhere else. A scratched frame or a cracked pane found after installation is a slow, costly fix.',
      'On our jobs we receive the delivery, check it and stage each unit near its opening. These photos show the units delivered and staged on our Pacific Palisades house.',
    ],
    sections: [
      { h: 'Checking the delivery', p: ['Each unit is checked against the order and the packing list as it comes off the truck.'], list: ['Size and unit number match the schedule', 'No cracked glass or chipped corners', 'Frames not racked or bent', 'Hardware boxes and screens present', 'Damage noted on the delivery receipt'] },
      { h: 'Storing on site', p: ['Units are stored upright on padding, out of the sun and rain where possible, and away from foot traffic. Labels stay on until the unit is set.'] },
      { h: 'Matching units to openings', p: ['Many units look alike. We label each opening with its schedule number so the right unit goes in the right hole.'] },
      { h: "Protecting the house", p: ["Before the delivery we protect finished floors, stairs and doorways on the path to each opening, and plan where the truck can park. Large glass panels go on padded racks or blocks, never on bare concrete or tile. On a lived-in house we stage units in the garage or a single room and bring them out one opening at a time."] },
    ],
    steps: ['Receive the delivery', 'Check every unit', 'Report damage to the supplier', 'Stage near openings', 'Install to the schedule'],
    faq: [
      { q: 'What if a unit arrives damaged?', a: 'We note it on the receipt, photograph it and contact the supplier for a replacement before install day.' },
      quoteFaq('window and door installation'),
    ],
    photos: ['delivery', 'multislide'], offset: 20,
  },
  {
    slug: 'door-hardware-installation', group: 'Installation', label: 'Door Hardware',
    h1: 'Door Hardware Installation in Los Angeles',
    title: 'Door Hardware Installation, Los Angeles — Waltco Development',
    description: 'Door hardware installed in Los Angeles: locksets, deadbolts, multi-point and smart locks, hinges, closers and stops set level and latching cleanly.',
    tagline: 'Locks, handles and hinges set at one height and working smoothly.',
    intro: [
      'Door hardware is what you touch every day. Handles set at different heights, a deadbolt that has to be forced or a lever that sags are small faults that make a new house feel unfinished.',
      'We install hardware on new doors and replace hardware on existing ones, inside and out. The photos are from our Pacific Palisades job.',
    ],
    sections: [
      { h: 'What we install', p: ['We fit hardware to the maker\'s templates.'], list: ['Passage, privacy and keyed locksets', 'Deadbolts and multi-point locks', 'Smart locks and keypads', 'Hinges, including heavy-duty and spring hinges', 'Door closers and stops', 'Flush bolts and astragals on pairs'] },
      { h: 'One height through the house', p: ['We set handles at one height throughout and line up deadbolts with handles on entry doors, so the hardware reads as one set.'] },
      { h: 'Latching cleanly', p: ['The strike is set so the door latches with a light push and the deadbolt throws without forcing. On exterior doors the weatherstrip has to compress without making the lock hard to turn.'] },
      { h: "Matching finishes through the house", p: ["Hinges, handles, stops and locks come in many finishes \u2014 black, brass, nickel, bronze \u2014 and the same name can look different from one maker to another. We lay out samples next to each other before ordering a whole house, so hinges match handles and the entry hardware matches the interior set."] },
    ],
    steps: ['Confirm hardware and finish', 'Mark heights', 'Bore and mortise to template', 'Install and adjust strikes', 'Test every door'],
    faq: [
      { q: 'Can you change all the hardware in a house?', a: 'Yes. We can re-key or replace hardware as a stand-alone job.' },
      quoteFaq('door hardware'),
    ],
    photos: ['intdoor', 'intglass', 'entry'], offset: 2,
  },
  {
    slug: 'glass-door-thresholds-and-drainage', group: 'Installation', label: 'Thresholds & Drainage',
    h1: 'Glass Door Thresholds and Drainage',
    title: 'Glass Door Thresholds and Drainage — Waltco Development',
    description: 'Thresholds and drainage under large glass doors in Los Angeles: flush and raised sills, continuous pans, weep paths and patio slopes that keep water out.',
    tagline: 'A near-level step to the patio that still keeps the rain outside.',
    intro: [
      'Many people want a glass door with almost no step between the floor inside and the patio outside. That look is possible, but the lower the sill, the more the drainage under and in front of it matters.',
      'We plan thresholds with the door maker\'s details, the floor and the patio together. The photos are from glass doors we set on our Pacific Palisades and West Los Angeles jobs.',
    ],
    sections: [
      { h: 'Flush, recessed and raised sills', p: ['Door makers offer raised sills for the most weather resistance, and recessed or flush sills set into the floor for a level step.'], list: ['Raised sill: highest water resistance, a small step', 'Recessed sill: track set into the subfloor or slab', 'Flush sill with drainage channel: needs a planned drain or weep path'] },
      { h: 'Water in front of the door', p: ['The patio or deck outside should slope away from the door. On a flush sill, a trench drain in front of the door is often part of the detail.'] },
      { h: 'Under the door', p: ['A continuous pan under the full width, sloped to the outside, catches what gets past the seals.'] },
    ],
    steps: ['Choose the sill type with the door', 'Detail floor, pan and patio', 'Recess the slab or subfloor', 'Install pan and drain', 'Set the door', 'Water test'],
    faq: [
      { q: 'Can I have a flush threshold on an existing slab?', a: 'Often, by cutting a recess in the slab for the track. We check the slab and drainage first.' },
      quoteFaq('a glass door threshold'),
    ],
    photos: ['multislide', 'westla', 'flashing'], offset: 30,
  },
];

const PROJECTS: WdPage[] = [
  {
    slug: 'pacific-palisades-new-home', group: 'Projects', label: 'Project: New Home, Pacific Palisades',
    h1: 'Windows and Doors for a New Home in Pacific Palisades',
    title: 'Project: New Home Windows and Doors, Palisades — Waltco',
    description: 'Project photos: windows and glass doors installed on a new home in Pacific Palisades, from framed openings and flashing to black-frame doors and trim.',
    tagline: 'One house, from framed openings to finished glass walls.',
    intro: [
      'This new house in Pacific Palisades was built between late 2021 and the end of 2022. Our photos follow its windows and doors from start to finish: units delivered and staged, openings framed and wrapped, sill pans and flashing, windows set from outside, large multi-panel glass doors carried in and set by hand, entry and interior doors hung, and casing and trim on the inside.',
      'Every photo on this page and in the windows and doors section is from our own job sites — this house, plus homes in Brentwood and West Los Angeles.',
    ],
    sections: [
      { h: 'What went in', p: ['The house mixes several kinds of units.'], list: ['Black-frame windows, many with divided lites', 'Large multi-panel glass doors opening to the rear terraces', 'A dark green entry door', 'Black-frame French doors', 'Interior glass doors and solid interior doors', 'Window seats and trimmed openings inside'] },
      { h: 'The sequence', p: ['Windows and doors were scheduled between framing and stucco: openings checked against the window schedule, wrap and pans installed, units set and flashed, then the wrap lapped over before the exterior finish. Inside, trim followed drywall, and doors were hung and adjusted after floors.'] },
      { h: 'The video', p: ['The short video on our main windows and doors page was filmed on this house: a large glass unit carried, tilted up and set in its opening by hand.'] },
    ],
    steps: ['Delivery and staging', 'Openings checked and wrapped', 'Windows set and flashed', 'Glass doors set by hand', 'Entry and interior doors', 'Trim and final adjustment'],
    faq: [
      { q: 'Can you do the same on our house?', a: 'Yes — on new houses, additions and remodels, and on single doors or windows.' },
      quoteFaq('a project like this'),
    ],
    photos: ['exterior', 'multislide', 'black', 'winext', 'flashing', 'entry', 'trim', 'intglass'],
  },
  {
    slug: 'fire-rebuild-windows-and-doors', group: 'Projects', label: 'Fire Rebuild Windows & Doors',
    h1: 'Windows and Doors for Fire Rebuilds in Los Angeles',
    title: 'Fire Rebuild Windows and Doors, LA — Waltco Development',
    description: 'Windows and doors for fire-rebuild homes in Los Angeles: units chosen to meet wildfire-zone rules, openings flashed, and installs scheduled with the build.',
    tagline: 'Rebuilding after a fire — with glass and doors that meet the wildfire rules.',
    intro: [
      'Many homes in Pacific Palisades, Altadena and other parts of Los Angeles County are being rebuilt after the January 2025 fires. Most of these lots sit in fire hazard severity zones, where the building code sets extra rules for exterior windows and doors.',
      'We install windows and doors on rebuild homes as part of our own builds and for owners working with their own architect. The photos show our work on a new home in Pacific Palisades.',
    ],
    sections: [
      { h: 'What the wildfire rules cover', p: ['In designated fire zones, the California building code (Chapter 7A, and R337 for houses) sets requirements for the outside of the house. For glazing and doors these include, for example:'], list: ['Exterior windows and glass doors with insulated glass that has at least one tempered pane, or units that meet a fire test or rating', 'Exterior doors with a noncombustible or ignition-resistant surface, solid-core construction to the code\'s thicknesses, or a fire rating', 'Vents and other openings protected against embers'] },
      { h: 'Ordering early', p: ['Rebuild demand has stretched lead times for some windows and doors. We review the window schedule against the plans as soon as they are approved so the order can be placed early.'] },
      { h: 'Your plans decide', p: ['Your architect\'s drawings and the building department\'s approval set what is required on your lot. We install to those drawings and check each unit\'s label against them.'] },
    ],
    steps: ['Review plans and window schedule', 'Confirm wildfire-zone requirements', 'Order early', 'Frame, wrap and flash', 'Install and inspect', 'Trim and finish'],
    faq: [
      { q: 'Do you work from my architect\'s plans?', a: 'Yes. Send the plans and window schedule with your request.' },
      { q: 'Is my lot in a fire zone?', a: 'Your building department and the state fire hazard maps show it; your architect will have checked. Our guide on wildfire-zone rules explains what it means for windows and doors.' },
      quoteFaq('rebuild windows and doors'),
    ],
    photos: ['winext', 'exterior', 'flashing'], offset: 4,
  },
  {
    slug: 'new-home-windows-and-doors', group: 'Projects', label: 'New Homes',
    h1: 'Windows and Doors for New Homes in Los Angeles',
    title: 'Windows and Doors for New Homes, LA — Waltco Development',
    description: 'Windows and doors for new houses in Los Angeles: openings, flashing, units, glass doors, entry and interior doors and trim from one licensed builder.',
    tagline: 'Every opening in a new house, from framing to final trim.',
    intro: [
      'On a new house, windows and doors touch almost every trade: framing, the weather barrier, stucco or siding, insulation, drywall, flooring and finish carpentry. When one company handles them from opening to trim, there are fewer gaps between those trades.',
      'Waltco Development builds new homes under a California B general building licence (CSLB #625535), and installs windows and doors on our own builds and for other builders.',
    ],
    sections: [
      { h: 'Where windows and doors fit in the schedule', p: ['Units are ordered once the plans are approved, often months ahead. They are installed after framing and sheathing and before the exterior finish, so the openings can be flashed into the wall.'] },
      { h: 'What we handle', p: ['On a new house we can take on all of it.'], list: ['Reviewing the window and door schedule', 'Framing and checking rough openings', 'Weather barrier, pans and flashing', 'Windows, glass doors and exterior doors', 'Interior doors and hardware', 'Casing, stools and trim'] },
      { h: 'Inspections', p: ['Framing and weather barrier inspections are scheduled before the exterior finish covers the openings.'] },
      { h: "Energy rules on a new house", p: ["New houses in California are designed to meet the state energy code, and the window and door glass is part of that calculation. The plans list the required performance values, and each unit's label must meet them. We check labels against the energy report on delivery, because the inspector will check them too before final sign-off."] },
    ],
    steps: ['Schedule review and order', 'Rough openings', 'Barrier and flashing', 'Exterior units', 'Interior doors', 'Trim and walk-through'],
    faq: [
      { q: 'Do you build the whole house?', a: 'Yes — see our new home construction service.' },
      quoteFaq('a new home'),
    ],
    photos: ['exterior', 'winext', 'multislide', 'delivery'], offset: 1,
  },
  {
    slug: 'additions-and-adus', group: 'Projects', label: 'Additions & ADUs',
    h1: 'Windows and Doors for Additions and ADUs',
    title: 'Windows and Doors for Additions and ADUs — Waltco',
    description: 'Windows and doors for room additions and ADUs in Los Angeles: units matched to the main house, openings flashed into new walls, egress sizes checked.',
    tagline: 'New rooms with windows and doors that match the house they join.',
    intro: [
      'An addition or an ADU needs its windows and doors to do two jobs: meet the code for a new living space, and look like they belong with the house next to them.',
      'We build additions and ADUs and install their windows and doors, matching frame colour, grid pattern and head height to the main house where that is the goal.',
    ],
    sections: [
      { h: 'Matching the main house', p: ['We note the existing window brand, frame colour, grid and sill height so the new units can be matched or deliberately contrasted.'] },
      { h: 'Code items in a new room', p: ['New bedrooms need an emergency escape window of a minimum size. New glass must meet the state energy rules, and glass near doors and floors must be safety glass.'], list: ['Escape openings in every bedroom', 'Energy ratings on the glass label', 'Safety glass where the code requires it', 'Exterior doors with a landing outside'] },
      { h: 'Where the new meets the old', p: ['Where an addition joins the house, we tie the new weather barrier into the old wall so water at the joint is shed outward.'] },
      { h: "Choosing units for a small space", p: ["In an ADU or small addition, windows and doors do a lot of work: light, air, the view out and the way to the yard. Placing windows high on walls that face neighbours keeps privacy while letting light in, and a glass door to a small patio makes a compact room feel bigger. We talk through placement with the drawings before units are ordered."] },
    ],
    steps: ['Survey existing windows', 'Choose and order units', 'Frame and flash', 'Install', 'Tie in to the existing wall', 'Trim and finish'],
    faq: [
      { q: 'Do you build ADUs?', a: 'Yes — see our ADU construction service.' },
      quoteFaq('an addition or ADU'),
    ],
    photos: ['framing', 'winext', 'westla'], offset: 3,
  },
  {
    slug: 'opening-a-wall-for-glass-doors', group: 'Projects', label: 'Opening a Wall for Glass Doors',
    h1: 'Opening a Wall for New Glass Doors',
    title: 'Opening a Wall for Glass Doors, LA — Waltco Development',
    description: 'Opening an existing wall for sliding or multi-slide glass doors in Los Angeles: engineered header, permit, temporary support and a flashed new opening.',
    tagline: 'From a window or blank wall to a wide opening onto the yard.',
    intro: [
      'One of the most popular remodels in Los Angeles is replacing a window or a section of wall with a wide glass door to the yard. It changes how a room is used more than almost anything else.',
      'It is also structural work. The wall above the new opening has to be carried by a new header, and in many houses that wall is part of the earthquake bracing.',
    ],
    sections: [
      { h: 'What is involved', p: ['A wall opening usually follows these stages.'], list: ['Engineer sizes the header and any new posts or hardware', 'Permit issued by the city', 'Temporary support while the wall is opened', 'New header, posts and connections installed', 'Opening wrapped, pan installed and door set', 'Stucco or siding patched outside; drywall and trim inside', 'Floor patched where the wall was'] },
      { h: 'Shear walls', p: ['If the wall is part of the lateral bracing, the engineer may add bracing elsewhere or specify a steel frame. That is decided on paper before demolition starts.'] },
      { h: 'Choosing the door', p: ['Sliders, multi-slides and folding doors each need different header and floor details. We help choose the door before the engineer designs the opening.'] },
      { h: "Inside the room", p: ["The new opening also changes the room: furniture layout, where switches and outlets go, and how the floor continues to the door. Outlets and switches in the removed wall are moved before drywall, and the floor is patched or replaced so it runs to the new sill."] },
    ],
    steps: ['Choose the door and size', 'Engineering and permit', 'Temporary support', 'Header and framing', 'Door install', 'Patch and finish'],
    faq: [
      { q: 'How long does it take?', a: 'It depends on the permit and the door lead time more than the construction. See our guide on how long installation takes.' },
      quoteFaq('opening a wall'),
    ],
    photos: ['framing', 'multislide', 'westla'], offset: 6,
  },
  {
    slug: 'remodel-window-and-door-upgrades', group: 'Projects', label: 'Remodel Upgrades',
    h1: 'Window and Door Upgrades During a Remodel',
    title: 'Window and Door Upgrades in a Remodel — Waltco Development',
    description: 'Window and door upgrades during a Los Angeles remodel: new glass doors, larger windows, entry doors and interior doors planned with the rest of the work.',
    tagline: 'The right time to change windows and doors is while the walls are open.',
    intro: [
      'If you are remodeling a kitchen, living area or whole house, that is the cheapest time to upgrade windows and doors. Walls are already open, trades are on site, and stucco and drywall patches are part of the job anyway.',
      'The Brentwood and West Los Angeles photos on this page show homes where black-frame windows and glass doors were part of larger remodel and new-build work.',
    ],
    sections: [
      { h: 'Common upgrades', p: ['These are the changes we see most.'], list: ['A window over the sink enlarged or lowered', 'A slider replaced with French or multi-slide doors', 'Old aluminium windows replaced with dual-pane units', 'A new front door and sidelights', 'Solid interior doors swapped for glass'] },
      { h: 'Planning them together', p: ['Window and door changes affect electrical, cabinets, flooring and trim. Planning them with the remodel avoids moving outlets twice or patching floors twice.'] },
      { h: 'One contractor, one schedule', p: ['As the general contractor on the remodel, we schedule the window and door work with the other trades.'] },
      { h: "Living in the house during the work", p: ["On a remodel where people are still living in the house, we close openings the same day they are cut, keep dust walls up around the work and schedule the noisiest work for set hours. Doors that lock are kept working every night, and temporary panels cover any opening left for the next day."] },
    ],
    steps: ['Walk the house and list changes', 'Engineer any new openings', 'Order early', 'Install with the remodel', 'Patch, trim and finish'],
    faq: [
      { q: 'Can windows be done later?', a: 'Yes, but it usually costs more to reopen finished walls than to do it with the remodel.' },
      quoteFaq('a remodel'),
    ],
    photos: ['brentwood', 'westla', 'black'], offset: 8,
  },
  {
    slug: 'coastal-homes', group: 'Projects', label: 'Coastal Homes',
    h1: 'Windows and Doors for Coastal Homes in Los Angeles',
    title: 'Windows and Doors for Coastal Homes — Waltco Development',
    description: 'Windows and doors for coastal Los Angeles homes: corrosion-resistant hardware, wind-driven rain detailing and finishes chosen for salt air and sun.',
    tagline: 'Salt air, sun and wind-driven rain — chosen and installed for the coast.',
    intro: [
      'Homes near the ocean — Pacific Palisades, Santa Monica, Venice, Malibu and the beach cities — are hard on windows and doors. Salt air corrodes hardware and some finishes, sun fades frames, and storms drive rain sideways into joints.',
      'We choose and install units with the coast in mind. The photos show work in Pacific Palisades and West Los Angeles.',
    ],
    sections: [
      { h: 'Choosing for the coast', p: ['Some choices make a big difference near the water.'], list: ['Stainless or coastal-rated hardware and screws', 'Factory finishes rated for coastal exposure', 'Out-swing doors that close tighter under wind', 'Sills and pans sized for wind-driven rain'] },
      { h: 'Installation details', p: ['Every fastener in the opening is corrosion-resistant, flashing is lapped with no reverse laps, and sealant joints are sized to move.'] },
      { h: 'Coastal permits', p: ['Some lots near the ocean are in the California Coastal Zone, where exterior changes can need a coastal review. Your city tells you if your address is affected.'] },
      { h: "Maintenance near the ocean", p: ["Near the water a little care goes a long way. Rinse frames, tracks and hardware with fresh water every few months to remove salt, keep weep holes clear so water can drain, and lubricate locks and rollers once a year with the product the maker recommends. Small spots of corrosion are easier to deal with early."] },
    ],
    steps: ['Assess exposure', 'Choose units and hardware', 'Detail sills and flashing', 'Install', 'Seal and test'],
    faq: [
      { q: 'How should I clean coastal windows?', a: 'Rinse salt off frames and tracks with fresh water regularly. See our care guide.' },
      quoteFaq('a coastal home'),
    ],
    photos: ['westla', 'black', 'exterior'], offset: 11,
  },
];

const AREAS_WD: WdPage[] = [
  {
    slug: 'pacific-palisades', group: 'Areas', label: 'Pacific Palisades',
    h1: 'Window and Door Installation in Pacific Palisades',
    title: 'Window and Door Installation, Pacific Palisades — Waltco',
    description: 'Window and door installation in Pacific Palisades by a licensed contractor: new homes, fire rebuilds and remodels. Photos from our Palisades job.',
    tagline: 'New homes, rebuilds and remodels — with photos from our own Palisades job.',
    intro: [
      'Waltco Development installs windows and doors in Pacific Palisades. Our photos on this page are from a new home we worked on in the Palisades in 2021 and 2022, from framing and flashing to large glass doors and trim.',
      'Since the January 2025 fire, much of the work here is rebuilding. Rebuild homes need windows and doors that meet the wildfire-zone rules, ordered early and installed in step with the build.',
    ],
    sections: [
      { h: 'Permits in the Palisades', p: ['Pacific Palisades is part of the City of Los Angeles, so permits go through LADBS. Lots near the ocean can sit in the California Coastal Zone, which may add a coastal review for exterior changes.'] },
      { h: 'What Palisades homes ask of windows and doors', p: ['Homes here combine coast, hillside and fire zone.'], list: ['Wildfire-zone glazing and doors on rebuilds', 'Salt-air-rated hardware and finishes near the ocean', 'Large glass doors to terraces and views', 'Careful staging on tight hillside lots'] },
      { h: 'Work we take on', p: ['Full houses and rebuilds, additions, remodels, and single doors or windows.'] },
      { h: "Getting started on a Palisades job", p: ["Send us your plans or a few photos and measurements with \"Get your estimate\". For rebuilds, include the window and door schedule and the fire zone noted on the plans, and we will check the units against them before giving you a written estimate."] },
    ],
    steps: ['Visit and measure', 'Review plans and rules', 'Order', 'Install', 'Trim and walk through'],
    faq: [
      { q: 'Do you work on Palisades rebuilds?', a: 'Yes. See our fire rebuild page for how we handle wildfire-zone windows and doors.' },
      quoteFaq('a Palisades home'),
    ],
    photos: ['multislide', 'black', 'exterior', 'entry', 'winext'], offset: 15,
  },
  {
    slug: 'brentwood', group: 'Areas', label: 'Brentwood',
    h1: 'Window and Door Installation in Brentwood',
    title: 'Window and Door Installation, Brentwood — Waltco Development',
    description: 'Window and door installation in Brentwood, Los Angeles: black-frame windows, glass doors and window walls. Photos from our own Brentwood jobs.',
    tagline: 'Window walls, black-frame glass and entry doors on Brentwood homes.',
    intro: [
      'Waltco Development installs windows and doors in Brentwood. The photos on this page are from our Brentwood jobs between 2022 and 2024: window walls along an office, black-frame windows and glass doors, skylights and the front entrance of a house.',
      'Brentwood homes range from older traditional houses to new modern builds, and the windows and doors follow: divided-lite wood windows on one street, steel-look glass on the next.',
    ],
    sections: [
      { h: 'Permits in Brentwood', p: ['Brentwood is in the City of Los Angeles, so window and door permits go through LADBS. Hillside lots north of Sunset can fall in a fire hazard severity zone, which brings wildfire-zone rules for new glazing and doors.'] },
      { h: 'Common Brentwood work', p: ['These come up often in Brentwood homes.'], list: ['Window walls and large fixed glass toward gardens and views', 'Black-frame windows and doors on modern remodels', 'Matching new windows to traditional houses', 'Entry doors with sidelights'] },
      { h: 'Work we take on', p: ['New homes, remodels and additions, and single doors or windows.'] },
      { h: "Getting started on a Brentwood job", p: ["Send photos and rough sizes of the windows or doors with \"Get your estimate\", or your plans for a new house or remodel. We visit, measure and give you a written estimate that lists each opening."] },
    ],
    steps: ['Visit and measure', 'Check permits and zone', 'Order', 'Install', 'Trim and walk through'],
    faq: [
      { q: 'Do you take single-door jobs in Brentwood?', a: 'Yes — a new front door, a replaced slider or one window is a job we take.' },
      { q: 'Can you match the windows on my house?', a: 'Usually — see our divided-lite and replacement windows pages.' },
      quoteFaq('a Brentwood home'),
    ],
    photos: ['brentwood'],
  },
  {
    slug: 'west-los-angeles', group: 'Areas', label: 'West Los Angeles',
    h1: 'Window and Door Installation in West Los Angeles',
    title: 'Window and Door Installation, West LA — Waltco Development',
    description: 'Window and door installation in West Los Angeles: sliding glass doors, entry doors and new-home openings. Photos from our West LA job.',
    tagline: 'Sliding glass doors and entries on West LA homes — from our own job.',
    intro: [
      'Waltco Development installs windows and doors in West Los Angeles. The photos on this page are from a home we worked on in West LA in 2023: large sliding glass doors opening to the patio, a wood entry door, and the finished back of the house.',
      'West LA lots are often narrow, with houses close together, so glass doors to a rear yard do a lot of work bringing light into the house.',
    ],
    sections: [
      { h: 'Permits in West LA', p: ['West Los Angeles is in the City of Los Angeles, so permits go through LADBS.'] },
      { h: 'Common West LA work', p: ['These are typical on West LA homes.'], list: ['Wide sliding or multi-slide doors to the rear yard', 'Replacing old aluminium windows with dual-pane units', 'New entry doors', 'Windows and doors for ADUs behind the main house'] },
      { h: 'Work we take on', p: ['New homes, ADUs, remodels, and single doors or windows.'] },
      { h: "Getting started on a West LA job", p: ["Send photos and rough sizes with \"Get your estimate\", or your plans if you are building or adding an ADU. We visit, measure and give you a written estimate opening by opening."] },
    ],
    steps: ['Visit and measure', 'Check permits', 'Order', 'Install', 'Trim and walk through'],
    faq: [
      { q: 'Can you replace a single slider in West LA?', a: 'Yes. Old aluminium sliders are a common stand-alone job; we check the sill and flash it when the old door comes out.' },
      { q: 'Do you install windows on ADUs in West LA?', a: 'Yes — see our additions and ADUs page.' },
      quoteFaq('a West LA home'),
    ],
    photos: ['westla'],
  },
];

const GUIDES: WdPage[] = [
  {
    slug: 'glass-door-cost-factors', group: 'Guides', label: 'What Glass Doors Cost',
    h1: 'What Sets the Cost of a Glass Door in Los Angeles',
    title: 'Glass Door Cost in Los Angeles: What Sets It — Waltco',
    description: 'What sets the cost of a sliding, multi-slide or French glass door in Los Angeles: size, frame, glass, opening work, permits and installation.',
    tagline: 'The door is one line of the price. The opening is often the bigger one.',
    intro: [
      'People asking what a glass door costs usually mean the door. But the installed price of a large glass door depends as much on the opening it goes into as on the unit itself.',
      'This guide lists what moves the price, so you can compare estimates line by line. We do not publish prices here because they depend on the door you choose and the wall it goes in; a written estimate after a site visit gives you real numbers.',
    ],
    sections: [
      { h: 'The door itself', p: ['These drive the unit price.'], list: ['Width and height — tall and wide panels cost more per foot', 'Type: slider, multi-slide, folding, French', 'Frame material: vinyl, aluminium, fibreglass, clad wood, steel', 'Glass: low-e, tempered, laminated, wildfire-zone glazing', 'Pocketing panels, flush sills and custom colours', 'Brand and lead time'] },
      { h: 'The opening', p: ['Often the bigger variable.'], list: ['Same-size replacement in a sound opening', 'Enlarging an opening: header, engineering, permit', 'Shear wall changes', 'Recessing a slab for a flush sill', 'Stucco, siding, drywall and floor patching'] },
      { h: 'Installation', p: ['Hand-setting heavy panels, access on the site, flashing and pans, trim inside, and haul-away of the old door all add up. A good estimate lists each.'] },
    ],
    steps: ['Choose door type and size', 'Have the opening checked', 'Get a written estimate', 'Compare line by line'],
    faq: [
      { q: 'Why do two estimates for the same door differ so much?', a: 'Usually because one includes the opening work, flashing, patching and trim and the other does not. Ask for each to be listed.' },
      quoteFaq('a glass door'),
    ],
    photos: ['multislide', 'westla'], offset: 25,
  },
  {
    slug: 'window-replacement-cost-factors', group: 'Guides', label: 'What Window Replacement Costs',
    h1: 'What Sets the Cost of Window Replacement in Los Angeles',
    title: 'Window Replacement Cost in LA: What Sets It — Waltco',
    description: 'What drives the price of replacing windows in a Los Angeles home: window type, frame, glass, retrofit vs full-frame, repairs found and finish work.',
    tagline: 'How many, what kind, and what is behind the old frames.',
    intro: [
      'Window replacement prices vary because houses vary. The same new window can be quick to install in one house and a half-day of repair and patching in the next.',
      'This guide lists what moves the price so you can read an estimate with confidence. A site visit and a written estimate give you the real numbers for your house.',
    ],
    sections: [
      { h: 'The windows', p: ['The unit price depends on these.'], list: ['Number and size of windows', 'Operating type: slider, single-hung, casement, fixed', 'Frame: vinyl, fibreglass, aluminium, clad wood', 'Glass: energy ratings, obscure, laminated, tempered where required', 'Grids, colours and special shapes'] },
      { h: 'The method', p: ['Retrofit windows install into the old frame with little wall work. Full-frame replacement removes the old frame, so the opening can be repaired and flashed, then stucco or siding and drywall are patched. Full-frame costs more and fixes more.'] },
      { h: 'What is found', p: ['Rotted sills, missing flashing or openings out of square are found only when the old window comes out. A clear estimate says how such repairs are priced.'] },
      { h: "Reading an estimate", p: ["A clear window estimate lists each opening with its size, type, glass and method, plus removal, flashing, patching inside and out, trim, permits and haul-away. If two estimates differ, compare those lines first. Ask how the estimate handles repairs found when an old window comes out, so there are no surprises mid-job."] },
    ],
    steps: ['Count and measure windows', 'Choose method per opening', 'Get a written estimate', 'Agree how hidden repairs are priced'],
    faq: [
      { q: 'Is it cheaper to replace all windows at once?', a: 'Usually per window, because set-up, permits and finish work are shared.' },
      quoteFaq('window replacement'),
    ],
    photos: ['winint', 'trim'], offset: 3,
  },
  {
    slug: 'permits-for-windows-and-doors', group: 'Guides', label: 'Permits for Windows & Doors',
    h1: 'Do Windows and Doors Need a Permit in Los Angeles?',
    title: 'Permits for Windows and Doors in Los Angeles — Waltco',
    description: 'When window and door work needs a permit in Los Angeles: replacements, new or larger openings, fire zones, coastal lots and historic homes explained.',
    tagline: 'Same-size swaps, new openings, fire zones and the coast.',
    intro: [
      'Whether window or door work needs a permit depends on what changes and where the house is. In the City of Los Angeles, permits are issued by LADBS; Santa Monica, Malibu, Beverly Hills, Culver City and the beach cities each have their own building departments.',
      'This guide gives the general picture. Your building department has the final word, and we confirm with it before starting.',
    ],
    sections: [
      { h: 'Usually permitted work', p: ['These generally need a permit.'], list: ['New openings or enlarged openings (structural)', 'Changing a window to a door', 'Window and door replacements in many cities, including LA, often as a simpler over-the-counter permit', 'Work in a fire hazard severity zone or on a designated historic home'] },
      { h: 'What the inspector looks at', p: ['For replacements: energy ratings on the glass label, safety glass where required, and bedroom escape openings. For new openings: the header, framing, hardware and flashing before they are covered.'] },
      { h: 'Coastal and historic lots', p: ['Lots in the California Coastal Zone can need coastal review for exterior changes. Historic districts may restrict window and door styles on street-facing walls.'] },
      { h: "Why permitted work matters", p: ["Permitted work is inspected, recorded with the city, and is easier to explain when you sell the house. Unpermitted structural changes, such as an opening cut without a new header, can come up in an inspection years later and be costly to put right."] },
    ],
    steps: ['Describe the work', 'Confirm with the building department', 'Pull the permit', 'Install', 'Inspection and sign-off'],
    faq: [
      { q: 'Who pulls the permit?', a: 'We do, under our licence, when we are the contractor on the job.' },
      quoteFaq('permitted window or door work'),
    ],
    photos: ['framing', 'winext'], offset: 2,
  },
  {
    slug: 'multi-slide-vs-sliding-vs-folding', group: 'Guides', label: 'Multi-Slide vs Sliding vs Folding',
    h1: 'Multi-Slide, Sliding or Folding Glass Doors?',
    title: 'Multi-Slide vs Sliding vs Folding Doors — Waltco',
    description: 'Multi-slide, standard sliding and folding (bi-fold) glass doors compared: how far they open, sight lines, weather resistance and what each needs.',
    tagline: 'Three ways to open a wall — and what each one asks of the house.',
    intro: [
      'Sliding, multi-slide and folding doors all put a wide glass opening between inside and out. They differ in how much of the wall opens, how they look closed, how they handle weather and what the opening needs.',
      'This guide compares them so you can choose before the opening is designed.',
    ],
    sections: [
      { h: 'Standard sliding doors', p: ['Two to four panels, one or more fixed. Simple, economical and reliable; open half or part of the width.'] },
      { h: 'Multi-slide doors', p: ['Several large panels that stack behind one another or into a wall pocket. Big glass, slim lines when closed, and most of the wall opens. Need a level track and often a heavy header.'] },
      { h: 'Folding doors', p: ['Narrower panels hinged together that fold to one or both sides, opening the full width. More frames show when closed, and the folded stack takes space at the side.'], list: ['Opens the most: folding (full width) or pocketing multi-slide', 'Most glass when closed: multi-slide', 'Simplest and most economical: standard slider', 'Most weather-resistant: raised-sill models of any type'] },
      { h: "Screens and shade", p: ["Each type handles screens differently. Sliders take a sliding screen easily. Multi-slide and folding doors usually need retractable or pleated screens that pull across the opening. If insects or sun on the glass are a concern, plan screens and shading when choosing the door."] },
    ],
    steps: ['Decide how much should open', 'Check space for stacks or pockets', 'Choose sill type', 'Have the opening engineered'],
    faq: [
      { q: 'Which is easiest to live with?', a: 'Standard and multi-slide doors move one panel at a time and are easy daily doors; folding doors suit houses where the whole wall is opened often.' },
      quoteFaq('a glass door'),
    ],
    photos: ['multislide', 'westla'], offset: 35,
  },
  {
    slug: 'retrofit-vs-full-frame-replacement', group: 'Guides', label: 'Retrofit vs Full-Frame',
    h1: 'Retrofit or Full-Frame Window Replacement?',
    title: 'Retrofit vs Full-Frame Window Replacement — Waltco',
    description: 'Retrofit versus full-frame window replacement for Los Angeles homes: what each involves, when the old frame can stay and when it should come out.',
    tagline: 'Keep the old frame, or take it out to the studs.',
    intro: [
      'There are two main ways to replace a window. A retrofit window fits into or over the old frame. A full-frame replacement takes the old window out completely, down to the framing.',
      'Neither is right for every house. This guide explains when each makes sense.',
    ],
    sections: [
      { h: 'Retrofit', p: ['Common on stucco houses with old aluminium windows: the old sashes come out, the new window\'s flange covers the old frame on the outside, and the stucco is not disturbed.'], list: ['Less wall work and faster', 'Slightly smaller glass area', 'Relies on the old opening being dry and sound'] },
      { h: 'Full-frame', p: ['The old frame comes out, the opening is inspected and repaired, a sill pan and flashing go in, and the wall is patched inside and out.'], list: ['Fixes leaks and hidden damage', 'Allows size changes', 'More patching and more cost'] },
      { h: 'How we decide', p: ['Signs of leaks, soft sills or stains under a window point to full-frame. A dry, sound opening with no history of leaks can take a retrofit.'] },
      { h: "Energy and glass area", p: ["Both methods use new, efficient glass. A retrofit window sits inside the old frame, so the visible glass gets a little smaller; on small windows that can be noticeable. A full-frame window keeps or even increases the glass size because the old frame is gone."] },
    ],
    steps: ['Inspect each opening', 'Choose per window', 'Price both where useful'],
    faq: [
      { q: 'Can I mix methods in one house?', a: 'Yes. Leaky openings full-frame, sound ones retrofit is common.' },
      quoteFaq('window replacement'),
    ],
    photos: ['winint', 'flashing'], offset: 6,
  },
  {
    slug: 'how-to-measure-a-window-or-door', group: 'Guides', label: 'How to Measure an Opening',
    h1: 'How to Measure a Window or Door Opening',
    title: 'How to Measure a Window or Door Opening — Waltco',
    description: 'How to measure a window or door opening for a first estimate: width, height, wall depth, swing and photos to send — and why we measure again.',
    tagline: 'Rough numbers you can take yourself for a first price.',
    intro: [
      'You can take rough measurements yourself to get a first idea of price. They are not for ordering — we measure again before any order is placed — but they make the first conversation faster.',
    ],
    sections: [
      { h: 'Windows', p: ['Measure inside the existing frame.'], list: ['Width at the top, middle and bottom; note the smallest', 'Height at the left, middle and right; note the smallest', 'Wall depth from inside face to outside face', 'Type of window and how it opens', 'A photo inside and outside'] },
      { h: 'Doors', p: ['Measure the door and the frame.'], list: ['Door width and height', 'Frame width and height outside the trim', 'Which side the hinges are on and which way it swings', 'Threshold height and floor type', 'Photos from both sides'] },
      { h: 'Why we measure again', p: ['Ordering sizes depend on the window maker, the method (retrofit or full-frame) and what is inside the wall. We take the final measurements and check them against the maker\'s data.'] },
      { h: "Things that change the order", p: ["Some details matter more than the size: whether the wall is stucco, siding or brick; whether the opening is in a bedroom and must stay an escape opening; whether the glass is near a door, tub or floor and must be safety glass. Note anything like that when you send your measurements and photos."] },
    ],
    steps: ['Measure as above', 'Take photos', 'Send with "Get your estimate"', 'We visit and measure for the order'],
    faq: [
      { q: 'Should I measure the glass or the frame?', a: 'The frame. Glass size is set by the maker from the frame size.' },
      quoteFaq('windows or doors'),
    ],
    photos: ['delivery', 'framing'], offset: 4,
  },
  {
    slug: 'choosing-an-entry-door', group: 'Guides', label: 'Choosing an Entry Door',
    h1: 'How to Choose an Entry Door',
    title: 'How to Choose an Entry Door in Los Angeles — Waltco',
    description: 'Choosing a front door for a Los Angeles home: wood, fibreglass, steel or glass, sun exposure, swing, sidelights, locks and wildfire-zone rules.',
    tagline: 'Material, sun, swing, glass and locks.',
    intro: [
      'A front door is chosen mostly for looks, but sun, wind and security should shape the choice too. This guide walks through the decisions in the order we discuss them.',
    ],
    sections: [
      { h: 'Material and sun', p: ['Doors in full afternoon sun need materials and finishes that handle it.'], list: ['Wood: beautiful, needs regular finish care in sun', 'Fibreglass: stable, low upkeep, can look like wood', 'Steel: strong and economical', 'Metal and glass: modern look, insulated glass'] },
      { h: 'Size, swing and glass', p: ['Standard doors are about 36 inches wide; wider and taller doors need a larger frame. Most entry doors swing in. Glass in or beside the door is safety glass by code; frosted or textured glass gives privacy.'] },
      { h: 'Locks and fire zones', p: ['Multi-point locks pull the door tight at several points. In a fire hazard severity zone, the exterior door must meet the wildfire rules — our wildfire guide explains the options.'] },
      { h: "Thinking about the threshold", p: ["The sill under a front door takes the most wear and water. A raised threshold seals better; a low one is easier to step over and suits accessible entries. Either way, the floor outside should slope away from the door and the sill should sit on a pan that drains out."] },
    ],
    steps: ['Pick the look and material', 'Check sun and exposure', 'Choose size and glass', 'Choose locks', 'Confirm fire-zone rules'],
    faq: [
      { q: 'Does a new door need a new frame?', a: 'Not always. If the frame is sound and square, a slab door can be fitted.' },
      quoteFaq('an entry door'),
    ],
    photos: ['entry', 'westla'], offset: 2,
  },
  {
    slug: 'black-frame-windows-what-to-know', group: 'Guides', label: 'Black Frames: What to Know',
    h1: 'Black-Frame Windows and Doors: What to Know',
    title: 'Black-Frame Windows and Doors: What to Know — Waltco',
    description: 'What to know before choosing black-frame windows and doors: frame materials, heat, grid alignment, inside finish, cleaning and coastal exposure.',
    tagline: 'The look, and what it asks of the installation.',
    intro: [
      'Black frames are one of the most requested looks in new Los Angeles homes. They read as clean, modern lines against light walls — if they are installed straight.',
      'This guide covers what to decide before ordering. Our photos are from black-frame work in Pacific Palisades and Brentwood.',
    ],
    sections: [
      { h: 'Materials', p: ['Black frames come in several materials.'], list: ['Steel: thinnest lines, heaviest, highest cost', 'Aluminium: slim, thermally broken versions perform better', 'Fibreglass: stable, takes dark colours well', 'Vinyl: economical; check the maker allows dark colours in sun', 'Clad wood: black outside, wood or paint inside'] },
      { h: 'Heat and movement', p: ['Dark frames get hotter. Use frames made for dark colours, and leave the expansion gaps the maker specifies.'] },
      { h: 'Lines and finish', p: ['Grids and head heights must line up across a wall. Inside, decide early between drywall returns and casing.'] },
      { h: "Pairing with hardware and trim", p: ["Black frames pair well with black, bronze or brushed metal hardware. Inside, white drywall returns make the frames stand out; wood casing softens them. Decide this before the order, because some windows come with interior finishes that suit one look more than the other."] },
    ],
    steps: ['Choose material', 'Line up grids on drawings', 'Decide inside finish', 'Order and install to a common line'],
    faq: [
      { q: 'Are black frames more expensive?', a: 'Often a little, depending on the maker and material, because dark colours may need special finishes or thermally broken frames. The estimate shows the difference.' },
      { q: 'Do black frames show dust?', a: 'They show dust and water spots more than white frames; a soft cloth and plain water keeps them clean.' },
      quoteFaq('black-frame windows'),
    ],
    photos: ['black', 'brentwood'], offset: 8,
  },
  {
    slug: 'why-doors-stick', group: 'Guides', label: 'Why Doors Stick',
    h1: 'Why Doors Stick, Rub or Won\'t Latch',
    title: 'Why Doors Stick, Rub or Won\'t Latch — Waltco Development',
    description: 'Why interior and exterior doors stick, rub, sag or will not latch, what you can check yourself, and when a door frame needs re-setting.',
    tagline: 'Most door problems are hinges, strikes or a frame that has moved.',
    intro: [
      'A door that suddenly sticks or will not latch is one of the most common calls we get. Most causes are simple; a few point to something moving in the house.',
    ],
    sections: [
      { h: 'Things you can check', p: ['Start with the easy ones.'], list: ['Loose hinge screws, especially the top hinge', 'Strike plate out of line with the latch', 'Paint build-up on the edge or stop', 'Weatherstrip too thick on an exterior door', 'Rug or new floor under the door'] },
      { h: 'Frame problems', p: ['If the gap at the top is wedge-shaped, the frame or the opening is out of square. That can happen after settling, wall repairs or removal of old plaster around the frame. The fix is to re-set the frame plumb.'] },
      { h: 'When to call', p: ['New cracks in walls near doors, or several doors sticking at once, are worth having looked at. Usually it is seasonal movement; occasionally it is something to fix in the structure.'] },
      { h: "Seasonal sticking", p: ["Wood doors swell a little in damp months and shrink in dry ones. If a door rubs only in winter, the fix may be as simple as sealing the top and bottom edges, which are often left unpainted, so the door takes on less moisture."] },
    ],
    steps: ['Tighten hinges', 'Check strike', 'Look at the gap shape', 'Call if the frame is out'],
    faq: [
      { q: 'Should I plane the door?', a: 'Only once the hinges and frame are right; otherwise the gap opens up when the cause is fixed.' },
      quoteFaq('door repairs'),
    ],
    photos: ['intdoor', 'trim'], offset: 12,
  },
  {
    slug: 'how-long-installation-takes', group: 'Guides', label: 'How Long Installation Takes',
    h1: 'How Long Does Window and Door Installation Take?',
    title: 'How Long Window and Door Installation Takes — Waltco',
    description: 'How long window and door jobs take in Los Angeles: order lead times, permits, installation days and finish work for replacements and new openings.',
    tagline: 'The waiting is usually longer than the work.',
    intro: [
      'For most window and door jobs, the installation itself is the short part. The longer parts are the order lead time and, for new openings, the engineering and permit.',
      'This guide breaks a job into stages so you can plan around it. Times vary by maker, season and city.',
    ],
    sections: [
      { h: 'Stages', p: ['A typical job runs in this order.'], list: ['Site visit, measure and estimate', 'Engineering and permit for new or larger openings', 'Order and manufacturing lead time', 'Installation', 'Patching, trim and paint', 'Inspection and sign-off where permitted'] },
      { h: 'Installation time', p: ['A single door or window replacement is often done in a day. A whole-house window replacement or a large glass door in a new opening takes longer, mostly because of patching and finish work.'] },
      { h: 'Keeping the house closed', p: ['On replacements we remove only what we can install the same day, so the house is closed up at night.'] },
      { h: "What can speed a job up", p: ["Deciding on units early, approving shop drawings quickly and having permits in hand before the order arrives keeps a job moving. On a remodel, clearing furniture away from openings before install day also saves time."] },
    ],
    steps: ['Measure', 'Permit if needed', 'Order', 'Install', 'Finish and inspect'],
    faq: [
      { q: 'What happens on install day?', a: 'We protect floors and furniture near the openings, remove the old units, prepare and flash each opening, set the new units, seal and trim, then clean up and walk through each window and door with you.' },
      { q: 'Can I stay in the house?', a: 'Yes, for replacements. We work room by room and keep the house closed at night.' },
      quoteFaq('window or door work'),
    ],
    photos: ['delivery', 'winext'], offset: 6,
  },
  {
    slug: 'lead-times-and-ordering', group: 'Guides', label: 'Lead Times & Ordering',
    h1: 'Window and Door Lead Times: Ordering Without Delays',
    title: 'Window and Door Lead Times and Ordering — Waltco',
    description: 'Why window and door orders take weeks or months, what lengthens lead times, and how to order so units arrive on time for your build or remodel.',
    tagline: 'Order early, order once.',
    intro: [
      'Windows and doors are made to order. Standard units can take a few weeks; large glass doors, custom colours and steel units can take months. Re-orders for a wrong size restart the clock.',
    ],
    sections: [
      { h: 'What lengthens lead times', p: ['These push dates out.'], list: ['Large or custom-size glass doors', 'Special colours and finishes', 'Steel and specialty units', 'Wildfire-zone or laminated glass', 'High demand, such as rebuild seasons', 'Shop drawing review and revisions'] },
      { h: 'Ordering once', p: ['The surest way to avoid delay is to get the order right the first time: final opening sizes, swings, glass and hardware checked against the plans before you sign.'] },
      { h: 'Timing the order', p: ['On a new build or rebuild we review the schedule as soon as plans are approved so the order can go in while framing is underway.'] },
      { h: "Checking the confirmation", p: ["After the order is placed, the supplier sends an order confirmation. We read it line by line against the schedule \u2014 sizes, swings, glass, colours, hardware \u2014 because mistakes made at data entry are easiest to fix before production starts."] },
    ],
    steps: ['Final plans', 'Review schedule and shop drawings', 'Place order', 'Track dates with the supplier', 'Receive and check'],
    faq: [
      { q: 'What if a unit arrives wrong or damaged?', a: 'We note it on delivery and contact the supplier straight away. Often the rest of the job can go ahead and the one opening is closed temporarily until the replacement arrives.' },
      { q: 'Why do steel and custom doors take longer?', a: 'They are built in smaller batches, often to drawings made for your opening, and finishes are applied to order.' },
      { q: 'Can you install units already on order?', a: 'Yes. Send us the order so we can check it against the openings.' },
      quoteFaq('ordered windows or doors'),
    ],
    photos: ['delivery'], offset: 2,
  },
  {
    slug: 'where-tempered-glass-is-required', group: 'Guides', label: 'Where Safety Glass Is Required',
    h1: 'Where Tempered (Safety) Glass Is Required',
    title: 'Where Tempered Glass Is Required in a Home — Waltco',
    description: 'Where the California Residential Code requires safety glass in homes: doors, glass near doors, large low panes, tubs and showers, stairs and railings.',
    tagline: 'The places where ordinary glass is not allowed.',
    intro: [
      'Safety glass — usually tempered, sometimes laminated — breaks into small pieces or holds together instead of forming large sharp shards. The building code requires it in places where people are likely to fall or push against glass.',
      'This guide summarises those places under the California Residential Code. Your plans and inspector have the final word, and the glass must carry a permanent safety mark.',
    ],
    sections: [
      { h: 'Places that generally need safety glass', p: ['These are the common hazardous locations.'], list: ['Glass in any door, including sliding and folding doors', 'Glass beside a door, close to its edge and low enough to be pushed', 'Large panes with a low bottom edge near a walking surface', 'Glass around tubs, showers and other wet areas', 'Glass near stairs and landings', 'Glass in railings'] },
      { h: 'Checking an order', p: ['We check each unit\'s location against these rules on the window schedule before ordering, because a window that needs tempered glass cannot be fixed on site.'] },
      { h: 'Wildfire zones', p: ['In fire hazard severity zones, exterior glazing has its own rules as well — see our wildfire-zone guide.'] },
      { h: "Laminated glass", p: ["Laminated glass is another type of safety glass: two panes bonded with a plastic layer, which holds the pieces together if broken. It is used for security, noise reduction and overhead glass such as skylights."] },
    ],
    steps: ['Mark locations on the plan', 'Check each against the rules', 'Order with safety glass where needed', 'Verify the mark on site'],
    faq: [
      { q: 'How can I tell if glass is tempered?', a: 'Tempered glass carries a small permanent mark in a corner.' },
      quoteFaq('windows or doors'),
    ],
    photos: ['winint', 'multislide'], offset: 9,
  },
  {
    slug: 'wildfire-zone-rules', group: 'Guides', label: 'Wildfire-Zone Rules',
    h1: 'Wildfire-Zone Rules for Windows and Doors',
    title: 'Wildfire-Zone Rules for Windows and Doors — Waltco',
    description: 'What California\'s wildfire-zone building rules mean for windows and exterior doors in Los Angeles: tempered multi-pane glazing, door options and vents.',
    tagline: 'What fire hazard zones ask of glass and doors.',
    intro: [
      'Large parts of Los Angeles County are mapped as fire hazard severity zones — including much of Pacific Palisades, the Santa Monica Mountains, and hillside areas from Brentwood to Altadena. New construction and many alterations there follow Chapter 7A of the California Building Code (R337 in the Residential Code).',
      'This guide summarises what those rules mean for windows and doors. Your plans and building department set what applies to your lot.',
    ],
    sections: [
      { h: 'Windows and glass doors', p: ['Exterior glazing must meet one of the code\'s options, for example:'], list: ['Insulated (multi-pane) glass with at least one tempered pane', 'Glass block', 'A fire-resistance rating', 'Units that pass the state fire test standard for glazing'] },
      { h: 'Exterior doors', p: ['Exterior doors must also meet one of the options, for example a noncombustible or ignition-resistant exterior surface, solid-core wood construction to the thicknesses in the code, a fire rating, or a door that passes the state test standard.'] },
      { h: 'What we check', p: ['We compare each unit\'s label and specification against the approved plans, and keep the documentation for the inspector.'] },
      { h: "Beyond the windows and doors", p: ["The same rules cover roofs, vents, decks, eaves and siding. Window and door choices work together with these: a compliant window in a wall with unprotected vents nearby does not protect the house on its own. Your architect's plans bring these together."] },
    ],
    steps: ['Confirm the zone', 'Specify compliant units', 'Check labels on delivery', 'Install and document'],
    faq: [
      { q: 'Do these rules apply to a single replacement?', a: 'It depends on the scope and the city. Ask your building department, or let us check when we price the job.' },
      quoteFaq('wildfire-zone windows'),
    ],
    photos: ['winext', 'exterior', 'black'], offset: 10,
  },
  {
    slug: 'window-and-door-care', group: 'Guides', label: 'Window & Door Care',
    h1: 'Caring for Windows and Doors',
    title: 'Window and Door Care and Maintenance — Waltco Development',
    description: 'Simple care for windows and doors in Los Angeles homes: cleaning tracks and frames, rinsing salt, weep holes, rollers, hinges and when to call us.',
    tagline: 'A few minutes a season keeps them working.',
    intro: [
      'Windows and doors last longer and work better with a little regular care, especially near the coast and on sliding doors with tracks that collect dirt.',
    ],
    sections: [
      { h: 'Every few months', p: ['These take minutes.'], list: ['Vacuum and wipe sliding door and window tracks', 'Check that weep holes at the bottom of frames are clear', 'Rinse salt off frames and hardware near the coast', 'Wipe frames with mild soap and water, never abrasives', 'Check weatherstrip for tears'] },
      { h: 'Once a year', p: ['Lubricate locks and hinges with the product the maker recommends, check that sliding panels roll easily, and look at the sealant joints outside for cracks.'] },
      { h: 'When to call', p: ['Water on the sill inside, fogging between panes, doors that suddenly stick or panels that drag are worth having looked at. See our door adjustment and repair page.'] },
      { h: "Sliding door rollers", p: ["When a slider starts to drag, the rollers are often worn or out of adjustment. Many sliders have adjustment screws at the bottom of the panel; turning them raises or lowers the panel so it rides on the track instead of the frame. If the rollers are worn, they can usually be replaced without replacing the door."] },
    ],
    steps: ['Clean tracks', 'Clear weeps', 'Rinse and wipe', 'Lubricate yearly', 'Call if leaks or drag'],
    faq: [
      { q: 'Which cleaners should I avoid?', a: 'Abrasive pads, ammonia on some finishes, and pressure washers on seals. Mild soap and water is safe for most frames; check the maker\'s care sheet.' },
      { q: 'What is fogging between panes?', a: 'A failed seal in insulated glass. The glass unit can often be replaced without replacing the whole window.' },
      quoteFaq('window and door repairs'),
    ],
    photos: ['multislide', 'brentwood'], offset: 40,
  },
];

export const WD_PAGES: WdPage[] = [...DOORS, ...WINDOWS, ...INSTALL, ...PROJECTS, ...GUIDES, ...AREAS_WD];
export const WD_GROUPS: WdGroup[] = ['Doors', 'Windows', 'Installation', 'Projects', 'Guides', 'Areas'];
export const wdPage = (slug: string) => WD_PAGES.find((p) => p.slug === slug);
