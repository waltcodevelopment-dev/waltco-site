// The nine hardwood sub-pages under /services/hardwood-flooring (Fable, "Waltco Hardwood Pages and Google Profile
// Plan", 6 Oct 2026, Parts A–B; brief docs/flooring-pages-brief.md approved by the owner 12 Oct 2026).
// Written new for this site — nothing copied from reclaimedfloors.org/.net. Facts only from content/facts.ts.
// No prices, no years-in-business counts, no superlatives (content/claims.ts). Photos: content/floor-photos.ts.

export type FloorSection = { h: string; p: string[]; list?: string[] };
export type FloorPage = {
  slug: string;
  label: string;          // breadcrumb and link text
  h1: string;
  title: string;          // ≤ 60 characters, unique
  description: string;    // 70–160 characters, unique
  tagline: string;
  intro: string[];
  sections: FloorSection[];
  steps: string[];
  faq: { q: string; a: string }[];
  hubScope: string;       // the matching line in the hub page's "Scope of work" list
};

const priceFaq = (what: string) => ({
  q: `How is ${what} priced?`,
  a: 'Describe the job with "Get your estimate". You get a ballpark from our own price list before the site visit, then a written estimate once we have measured and seen the floor.',
});

export const FLOOR_PAGES: FloorPage[] = [
  {
    slug: 'installation',
    label: 'Solid & Engineered Installation',
    h1: 'Hardwood Floor Installation in Los Angeles',
    title: 'Hardwood Floor Installation, LA — Waltco Development',
    description: 'Solid and engineered hardwood floors installed across Los Angeles under a C-15 flooring licence. Subfloor checked first, written estimate before work.',
    tagline: 'Solid and engineered wood floors, laid by a licensed flooring contractor.',
    intro: [
      'A new wood floor is only as good as what sits under it and how each board is fastened. We start every installation by looking at the subfloor — wood or concrete — and checking moisture in both the subfloor and the flooring before a single board goes down.',
      'Waltco Development holds a California C-15 Flooring and Floor Covering licence alongside our B General Building licence, so the same company that plans the job is licensed to install the floor.',
    ],
    sections: [
      {
        h: 'Solid or engineered: how we decide',
        p: [
          'Solid hardwood is one piece of wood from top to bottom. It can be sanded and refinished many times over its life, and it is usually nailed down over a plywood subfloor.',
          'Engineered hardwood has a real wood wear layer bonded to a stable core. It moves less with changes in humidity, which makes it the usual choice over a concrete slab, over radiant heat, and in rooms where the air changes a lot through the year. It can be glued down or floated, depending on the product and the slab.',
          'We recommend one or the other after we have seen the subfloor, not before.',
        ],
      },
      {
        h: 'Fastening methods',
        p: ['How the floor is held down depends on the product and what is underneath it.'],
        list: ['Nail-down over plywood or another wood subfloor', 'Glue-down over a flat, dry concrete slab', 'Floating installation over an underlayment, where the product allows it', 'Moisture barrier or sound underlayment where the subfloor or building calls for one'],
      },
    ],
    steps: ['Check the subfloor for flatness, moisture and loose areas.', 'Bring the flooring in and let it settle to the room before it goes down.', 'Lay out the rows so the boards line up with the main walls and doorways.', 'Install, cutting around door casings and leaving an expansion gap at the walls.', 'Fit thresholds, base and shoe moulding, then walk the floor with you.'],
    faq: [
      { q: 'Can hardwood go over a concrete slab?', a: 'Yes. Over a slab we usually use engineered hardwood, glued down or floated over a moisture barrier, after checking the slab is flat and dry enough.' },
      { q: 'Do you install flooring we buy ourselves?', a: 'We can, once we have seen the product and its installation instructions. The written estimate states who supplies the material.' },
      priceFaq('a new floor installation'),
    ],
    hubScope: 'Solid and engineered hardwood installation',
  },
  {
    slug: 'wide-plank',
    label: 'Wide-Plank Floors',
    h1: 'Wide-Plank Hardwood Floors',
    title: 'Wide-Plank Hardwood Floors, LA — Waltco Development',
    description: 'Wide-plank oak and walnut floors laid with attention to board selection, moisture and fastening. Licensed C-15 flooring work in Los Angeles County.',
    tagline: 'Wider boards, fewer seams, and more of the wood itself on show.',
    intro: [
      'Wide boards show more of the grain and give a room a calmer, less busy look. They also ask more of the installer: a wide board moves more across its width when humidity changes, so preparation and fastening matter more than they do with narrow strip flooring.',
      'Most of the wide-plank floors we lay are white oak, in engineered or solid form, in widths chosen with you from samples.',
    ],
    sections: [
      {
        h: 'Why wide boards need more care',
        p: [
          'Every board swells and shrinks a little across its width as the seasons change. Across a narrow strip that movement is small; across a wide plank it is several times larger, and it shows up as gaps in dry months or cupping in damp ones.',
          'That is why, for wide planks, we lean towards engineered boards over concrete, check moisture in the subfloor and the wood before installing, and often combine glue and nails over plywood so each board is held along its whole length.',
        ],
      },
      {
        h: 'Laying out a wide-plank floor',
        p: [
          'With fewer, longer boards, each one is more visible. We sort the boards before they go down, spreading colour and grain across the room so no area looks patchy, and we keep end joints well apart from row to row.',
          'In long hallways and open plans we plan the run of the boards from the main entrance, so the floor reads as one surface from room to room.',
        ],
      },
      {
        h: 'Living with a wide-plank floor',
        p: [
          'Wide boards show wear and colour change across larger areas, so felt pads under furniture and rugs at entries go a long way. Keeping indoor humidity steady through the year, with the heating and air conditioning you already have, is the simplest way to keep seams tight.',
          'When the finish wears, a solid or thick-wear-layer engineered wide plank can be sanded and refinished like any other wood floor.',
        ],
      },
    ],
    steps: ['Choose species, width and finish from samples.', 'Check subfloor flatness and moisture.', 'Sort boards for colour and length before installing.', 'Install with the fastening method suited to the subfloor.', 'Finish on site or fit pre-finished boards, then walk the floor with you.'],
    faq: [
      { q: 'How wide can the boards be?', a: 'That depends on the product and the subfloor. We go through the options with samples and recommend a width and construction that suit your rooms.' },
      { q: 'Will a wide-plank floor gap in summer or winter?', a: 'All wood moves a little. Checking moisture before installing, choosing the right construction and keeping indoor humidity steady keep that movement small.' },
      priceFaq('a wide-plank floor'),
    ],
    hubScope: 'Wide-plank floors',
  },
  {
    slug: 'herringbone-and-parquet',
    label: 'Herringbone, Chevron & Parquet',
    h1: 'Herringbone, Chevron and Parquet Floors',
    title: 'Herringbone & Parquet Floors, LA — Waltco Development',
    description: 'Herringbone, chevron and parquet wood floors laid out by hand in Los Angeles. Pattern planned to the room, built by a licensed flooring contractor.',
    tagline: 'Pattern floors set out by hand, from a single hallway to a whole house.',
    intro: [
      'A pattern floor is built from many short pieces, and every one of them has to line up. Herringbone sets rectangular blocks at right angles in a zigzag; chevron cuts the ends at an angle so the points meet in a straight line; parquet panels repeat a set geometric design.',
      'We plan the pattern on paper before any wood is cut, so the centre line, the borders and the doorways all land where they should.',
    ],
    sections: [
      {
        h: 'Planning the layout',
        p: [
          'In a pattern floor, small errors add up across the room. We snap a centre line along the main view — usually from the front door or down the length of a hallway — and work outwards from it, so the pattern looks straight from where people see it most.',
          'We decide early whether the pattern runs wall to wall or sits inside a border, and how it meets other floors at thresholds and stairs.',
        ],
      },
      {
        h: 'Herringbone, chevron or parquet?',
        p: ['Each pattern changes the feel of a room in its own way.'],
        list: ['Herringbone: a classic zigzag of rectangular blocks; works in hallways and large rooms alike', 'Chevron: angled ends meet in a clean point, giving a sharper, more modern line', 'Parquet panels: repeated squares or set designs, often with a border around the room', 'Custom layouts: combinations of patterns and borders drawn for the space'],
      },
      {
        h: 'Where pattern floors work well',
        p: [
          'Herringbone suits long hallways, where the zigzag leads the eye down the room, and open living spaces that need a focal point without a rug. Chevron reads more graphic and suits simpler, modern interiors. Parquet panels sit well in formal rooms and entries.',
          'A pattern can also run in one room and change to straight boards in the next, with a border or threshold marking the change.',
        ],
      },
    ],
    steps: ['Measure the room and draw the pattern to scale.', 'Set the centre line and starting point.', 'Cut and fit each piece, checking alignment row by row.', 'Fit the border and thresholds.', 'Sand flat and finish, then walk the floor with you.'],
    faq: [
      { q: 'Is a herringbone floor glued or nailed?', a: 'It depends on the subfloor and the product. Over concrete the blocks are usually glued; over plywood they are often glued and nailed. We choose the method once we have seen the subfloor.' },
      { q: 'Can you match a pattern floor that is already there?', a: 'Usually. We match the block size, species and finish so a repair or an extension blends with the existing floor.' },
      priceFaq('a pattern floor'),
    ],
    hubScope: 'Herringbone, chevron and custom parquet',
  },
  {
    slug: 'reclaimed-wood',
    label: 'Reclaimed Wood Floors',
    h1: 'Reclaimed Wood Floors',
    title: 'Reclaimed Wood Floors, Los Angeles — Waltco Development',
    description: 'Reclaimed wood floors installed and finished in Los Angeles: boards checked, sorted and laid so the character shows and the floor stays sound.',
    tagline: 'Old wood with its marks and colour, installed as a sound, finished floor.',
    intro: [
      'Reclaimed wood has already lived one life — as barn siding, beams or old flooring — and carries the saw marks, nail holes and colour that come with it. Those marks are the reason people choose it, but old wood also needs more checking before it becomes a floor.',
      'We have installed reclaimed oak, pine and mixed-species floors in homes across Los Angeles, and finish them so the character shows without making the floor hard to live with.',
    ],
    sections: [
      {
        h: 'What we check before installing',
        p: [
          'Every board is looked at before it goes down. We watch for hidden metal, loose knots, splits and boards that are too thin after milling, and we check the moisture of the wood, since reclaimed stock may have been stored in very different conditions from your home.',
          'Boards that will not hold up are set aside for trim or cut out entirely.',
        ],
      },
      {
        h: 'Laying and finishing old wood',
        p: [
          'Reclaimed boards vary in width, colour and surface. We lay the floor out dry first, mixing boards so dark and light pieces are spread across the room rather than bunched together.',
          'The finish is chosen to keep the texture: some floors are sanded lightly so the saw marks stay, others are sanded smooth and oiled. We make a sample on site so you see the result before the whole floor is finished.',
        ],
      },
      {
        h: 'Where the wood comes from',
        p: [
          'Reclaimed flooring is milled from wood salvaged from older buildings: barn boards, structural timbers and old floors. Each lot is different, so we look at the actual boards for your job before confirming the layout and finish, rather than relying on a small sample alone.',
          'Leftover boards can often be used for stair treads, shelving or a mantel so the same wood carries through the house.',
        ],
      },
    ],
    steps: ['Inspect and sort the reclaimed boards.', 'Check moisture in the wood and the subfloor.', 'Lay the floor out dry to balance colour and width.', 'Install, filling or keeping marks as agreed.', 'Sample the finish on site, then finish the floor.'],
    faq: [
      { q: 'Is a reclaimed floor harder to keep clean?', a: 'Not with the right finish. Saw marks and nail holes are sealed along with the rest of the surface, so day-to-day cleaning is the same as any finished wood floor.' },
      { q: 'Can reclaimed wood be used over a concrete slab?', a: 'Yes, with the right preparation. Over concrete we check slab moisture and use a suitable barrier or an engineered reclaimed product.' },
      priceFaq('a reclaimed wood floor'),
    ],
    hubScope: 'Reclaimed wood floors',
  },
  {
    slug: 'stain-and-color-matching',
    label: 'Stain & Color Matching',
    h1: 'Wood Floor Stain and Color Matching',
    title: 'Floor Stain & Color Matching, LA — Waltco Development',
    description: 'Custom wood floor stains and color matching in Los Angeles: samples made on your own floor so new boards, repairs and additions blend in.',
    tagline: 'Stain samples made on your own floor, so you see the color before we commit to it.',
    intro: [
      'The same stain looks different on white oak, red oak and walnut, and different again under morning light and evening light. That is why we never choose a color from a brochure alone — we make samples on your wood, in your room.',
      'Color matching matters most when new flooring meets old: an addition, a repaired section, or new stairs that need to look like the floor around them.',
    ],
    sections: [
      {
        h: 'How we make stain samples',
        p: [
          'After the floor is sanded, we lay out several small samples side by side on the actual boards, each one labelled with its stain mix. You look at them in daylight and with the room lights on, and we adjust until the color is right.',
          'For a match to existing floors we mix and test until the new section sits next to the old without a visible line, allowing for the way the existing finish has aged.',
        ],
      },
      {
        h: 'What changes the final color',
        p: ['A stain is only one part of the finished color.'],
        list: ['Species: oak, walnut and pine each take stain differently', 'Sanding: how fine the last pass is changes how much stain the wood absorbs', 'Finish: oil, water-based and other topcoats each shift the tone slightly', 'Light: the same floor reads warmer or cooler depending on the windows and fixtures'],
      },
      {
        h: 'Matching new work to old floors',
        p: [
          'Additions and remodels often join a new floor to one that has been in the house for years. The old finish may have yellowed or faded, and the wood itself darkens with light. We sample against the oldest visible part of the existing floor, near the joint, and adjust the mix in small steps until the two floors read as one.',
          'Where the two floors cannot be made to match closely enough, we suggest a threshold or a change of direction so the joint looks planned.',
        ],
      },
    ],
    steps: ['Look at the existing floors, furniture and light in the room.', 'Sand a test area to the same grit as the final floor.', 'Apply labelled samples side by side.', 'Adjust the mix until you approve one sample.', 'Finish the floor with the approved stain and topcoat.'],
    faq: [
      { q: 'Can you match a floor that is decades old?', a: 'Usually. Old finishes change color over time, so we sample against the existing floor and adjust the mix until the new boards blend in.' },
      { q: 'Do I approve the color before the whole floor is stained?', a: 'Yes. Nothing is stained beyond the samples until you have chosen one.' },
      priceFaq('color matching'),
    ],
    hubScope: 'Custom stain and colour matching',
  },
  {
    slug: 'sanding-and-refinishing',
    label: 'Sanding & Refinishing',
    h1: 'Hardwood Floor Sanding and Refinishing',
    title: 'Floor Sanding & Refinishing, LA — Waltco Development',
    description: 'Hardwood floor sanding and refinishing in Los Angeles: sanding to bare wood, stain if wanted, and finish coats, room by room, with dust under control.',
    tagline: 'Worn, scratched or dull floors sanded back to bare wood and finished again.',
    intro: [
      'A solid hardwood floor, and many engineered floors with a thick enough wear layer, can be sanded back to fresh wood and finished again. Refinishing removes scratches, worn traffic paths and old stain, and lets you change the color while you are at it.',
      'Our photos on this page follow the work in order: sanding, edging, bare wood, stain, finish coats and the finished room.',
    ],
    sections: [
      {
        h: 'Sanding, step by step',
        p: [
          'The main floor is sanded with a large sander in several passes, each with a finer grit, to remove the old finish and flatten the surface. An edger reaches the margins along the walls, and the corners and tight spots are finished by hand.',
          'Between passes the floor is vacuumed so grit from one pass does not scratch the next. Gaps and nail holes are filled before the final pass.',
        ],
      },
      {
        h: 'Stain and finish coats',
        p: [
          'If you want a new color, we make samples on the sanded floor first (see stain and color matching). The finish then goes on in several thin coats, with a light buff between coats so each one bonds to the last.',
          'We plan the work so rooms are closed off while coats dry, and we tell you when the floor can take foot traffic, furniture and rugs.',
        ],
      },
      {
        h: 'Recoat or full refinish?',
        p: [
          'Not every tired floor needs to go back to bare wood. If the finish is dull but the wood underneath is not scratched through, a screen and recoat — a light buff of the existing finish and one fresh coat — can bring it back with less work and less downtime.',
          'Deep scratches, worn traffic paths, water marks or a change of colour need a full sand to bare wood. We look at the floor and tell you which one it needs before you decide.',
        ],
      },
    ],
    steps: ['Move or protect furniture and seal off the work area.', 'Sand the main floor in passes, finer each time.', 'Edge along the walls and hand-scrape corners.', 'Fill, vacuum and apply stain if chosen.', 'Apply finish coats, buffing between each.'],
    faq: [
      { q: 'Can every wood floor be refinished?', a: 'Solid hardwood almost always can. Engineered floors can be refinished if the wear layer is thick enough; we check before quoting.' },
      { q: 'How long until we can use the room again?', a: 'It depends on the finish and the number of coats. We give you the timing for foot traffic and for furniture in the written estimate.' },
      priceFaq('sanding and refinishing'),
    ],
    hubScope: 'Sanding and refinishing',
  },
  {
    slug: 'stairs',
    label: 'Stairs, Treads & Nosings',
    h1: 'Hardwood Stairs, Treads and Nosings',
    title: 'Hardwood Stairs & Treads, LA — Waltco Development',
    description: 'Hardwood stair treads, risers and nosings made to match your floor in Los Angeles: measured step by step, fitted and finished on site.',
    tagline: 'Treads, risers and nosings that match the floor around them.',
    intro: [
      'Stairs take more wear than almost any other part of a floor, and every step is a slightly different size. We measure each tread on its own and cut it to fit, rather than assuming the stairs are all the same.',
      'Wood stairs are usually planned together with the floors they connect, so species, color and finish match from the landing to the treads.',
    ],
    sections: [
      {
        h: 'Treads, risers and nosings',
        p: [
          'The tread is the part you step on; the riser is the upright face between steps; the nosing is the rounded front edge of the tread or landing. On a wood stair all three should line up with the floor at the top and bottom so the change from floor to stair looks intentional.',
          'Where stairs meet a wood floor at a landing, we fit a matching nosing so the edge is finished and the boards line up.',
        ],
      },
      {
        h: 'Straight, curved and open stairs',
        p: [
          'Straight stairs are measured step by step. Curved and winder stairs have tapered treads, each one cut from a template of its own step. On open stairs with metal or cable railings, the tread ends show, so they are finished as carefully as the top surface.',
          'Painted risers with wood treads are a common choice; so are wood risers stained to match.',
        ],
      },
      {
        h: 'Squeaks, safety and wear',
        p: [
          'A squeaking stair usually means a tread moving against its riser or stringer. When we fit new treads we glue and fasten them so they sit tight, and on existing stairs we fix loose treads from above or below before refinishing.',
          'Stairs see the most wear in the house, so we use the same durable finish as the floor, applied in thin coats, and make sure each nosing edge is smooth and even.',
        ],
      },
    ],
    steps: ['Measure every tread and riser individually.', 'Choose species and finish to match the floors.', 'Cut and fit treads, risers and nosings.', 'Sand and finish on site, or fit pre-finished parts.', 'Check every step for squeaks and movement before handover.'],
    faq: [
      { q: 'Can you put wood treads on stairs that are now carpeted?', a: 'Usually, yes. We remove the carpet, check the structure underneath and either cap the existing steps or replace the treads.' },
      { q: 'Can new stairs match my existing floor?', a: 'Yes. We match species and stain with samples so the stairs and floor read as one.' },
      priceFaq('stair work'),
    ],
    hubScope: 'Stair treads and nosings',
  },
  {
    slug: 'floor-removal-and-subfloor',
    label: 'Floor Removal & Subfloor Prep',
    h1: 'Floor Removal and Subfloor Preparation',
    title: 'Floor Removal & Subfloor Prep, LA — Waltco Development',
    description: 'Old floor removal and subfloor preparation in Los Angeles before new hardwood: tear-out, scraping, leveling, repairs and moisture checks.',
    tagline: 'The work under the floor that decides how long the new one lasts.',
    intro: [
      'Most problems with a new wood floor start underneath it: a slab that is not flat, a subfloor that is damp, or old adhesive left behind. Preparing the subfloor is the part of the job you do not see once the floor is down, and the part we spend the most care on.',
      'The photos on this page run in order, from tearing out the old floor to a subfloor ready for new wood.',
    ],
    sections: [
      {
        h: 'Taking out the old floor',
        p: [
          'Old carpet, tile, vinyl or wood is removed and hauled away. Glued-down floors leave adhesive behind, which is scraped or ground off so the new floor bonds to a clean surface.',
          'Once the old floor is up, we can see the subfloor itself. If we find damaged plywood, rot or a structural problem, we stop, show you, and price the repair before work continues.',
        ],
      },
      {
        h: 'Getting the subfloor ready',
        p: ['What happens next depends on what is underneath.'],
        list: ['Concrete slabs: ground or scraped clean, cracks patched, low spots filled with leveling compound', 'Wood subfloors: loose panels screwed down, damaged sections replaced, high spots sanded', 'Moisture checks on both slab and wood before any flooring arrives', 'Moisture barrier or underlayment where the product or slab calls for it'],
      },
      {
        h: 'Why flatness and moisture matter',
        p: [
          'A wood floor laid over a dip or hump will flex, squeak or open at the seams, and a damp slab can make boards cup or lift. Checking flatness with a straightedge and measuring moisture in the slab or plywood before the flooring arrives catches these problems while they are still simple to fix.',
          'We record the readings and keep them with the job, so the decision to proceed is based on numbers taken on site.',
        ],
      },
    ],
    steps: ['Protect the rooms around the work area.', 'Remove and haul away the old floor.', 'Scrape or grind off old adhesive.', 'Repair, patch and level the subfloor.', 'Check moisture and flatness before the new floor goes in.'],
    faq: [
      { q: 'What if you find damage under the old floor?', a: 'We stop, show you what we found, and give you a written price for the repair before any further work.' },
      { q: 'Is removal and disposal included?', a: 'When it is listed in the written estimate, yes. The estimate states exactly which removal and preparation work is included.' },
      priceFaq('removal and subfloor preparation'),
    ],
    hubScope: 'Old floor removal and subfloor preparation',
  },
  {
    slug: 'beams-and-ceilings',
    label: 'Wood Beams & Ceilings',
    h1: 'Wood Beams and Ceiling Details',
    title: 'Wood Beams & Ceilings, Los Angeles — Waltco Development',
    description: 'Wood ceiling beams and ceiling details built and installed in Los Angeles homes, finished to match the floors, doors and cabinetry.',
    tagline: 'Wood ceiling beams set in place and finished to match the rest of the room.',
    intro: [
      'Wood beams bring the warmth of the floor up to the ceiling. In many of our jobs the same crew builds the floors, the beams, the mouldings, the doors and the cabinetry, so the wood tones are planned together rather than matched afterwards.',
      'Most of the beams we install are decorative box beams or solid timbers fixed to the ceiling structure; the photos on this page show one installation from first beam to last.',
    ],
    sections: [
      {
        h: 'How beams are installed',
        p: [
          'We start by finding the ceiling framing and marking the beam layout on the ceiling, so the spacing is even and lines up with walls, windows and light fixtures.',
          'Each beam is lifted, levelled and fastened into the framing. Hollow box beams are built around a mounting block so they sit tight to the ceiling; solid timbers are fixed with hidden fasteners where the structure allows.',
        ],
      },
      {
        h: 'Matching beams to floors and trim',
        p: [
          'Beams usually look right when they relate to something else in the room — the floor, the doors, the window frames or a mantel. We sample stains on the beam material next to the floor or trim it should match, the same way we do for floors.',
          'Ceiling details can also include wood plank ceilings, coffered layouts and trim where the ceiling meets the wall.',
        ],
      },
      {
        h: 'Planning beams with the rest of the room',
        p: [
          'Beam layout is easiest to get right before the ceiling is finished: lighting, speakers and sprinkler heads can then be placed between the beams instead of being cut around them. On a remodel we mark the beam lines early and coordinate with the electrician.',
          'Beams can also be added to an existing finished ceiling; in that case we find the framing first and plan the fixings around what is already there.',
        ],
      },
    ],
    steps: ['Find the ceiling framing and mark the layout.', 'Build or prepare each beam.', 'Lift, level and fasten the beams.', 'Fill, sand and stain to the approved sample.', 'Walk the room with you before handover.'],
    faq: [
      { q: 'Are the beams structural?', a: 'The beams on this page are decorative. Structural beams are part of a framing or remodeling project and are built to the engineer\'s drawings under a permit.' },
      { q: 'Can beams match my floors and doors?', a: 'Yes. We sample stains on the beam material against the floor or trim so the tones work together.' },
      priceFaq('beam and ceiling work'),
    ],
    hubScope: 'Wood beams and ceiling details',
  },
];

export const floorPage = (slug: string) => FLOOR_PAGES.find((p) => p.slug === slug);
export const FLOOR_HUB = '/services/hardwood-flooring';
export const floorPath = (slug: string) => `${FLOOR_HUB}/${slug}`;
