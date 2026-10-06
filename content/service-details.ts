// Addendum C (Fable, 6 Oct 2026): every service page 300–500 words from the fact sheet — what the service
// includes (scope, in services.ts), how Waltco runs the job, what the estimate covers and excludes, who it is
// for, one CTA. No prices, no numbers without a source. Written fresh for this site.

export type ServiceDetail = {
  whoFor: string;
  howWeRun: string[];
  covers: string[];
  excludes: string[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'general-construction': {
    whoFor: 'Homeowners and property owners in Los Angeles with a project that involves several trades at once — an addition, a structural change, a rebuild — and who want one licensed contractor responsible for all of it.',
    howWeRun: ['Walk the site and read the plans with you.', 'Write the scope and estimate, line by line.', 'Pull permits and schedule inspections.', 'Coordinate every trade and delivery on site.', 'Walk the finished work with you before handover.'],
    covers: ['Labour and materials for the written scope', 'Permit filing and inspection scheduling', 'Subcontractor coordination', 'Site protection and clean-up'],
    excludes: ['Architectural and engineering drawings (prepared by your architect and engineer)', 'Permit and plan-check fees charged by the city', 'Work not listed in the written scope'],
  },
  'hardwood-flooring': {
    whoFor: 'Anyone putting in a new wood floor, matching an existing one, or bringing a worn floor back — in a single room, a whole house, or as part of a remodel or new build.',
    howWeRun: ['Look at the subfloor and moisture conditions before recommending solid or engineered wood.', 'Agree species, width, pattern and finish, with stain samples made on site.', 'Remove the old floor and prepare the subfloor.', 'Install, sand and finish, room by room.', 'Walk the floor with you and leave care instructions.'],
    covers: ['Floor removal and disposal when listed', 'Subfloor preparation listed in the estimate', 'Installation, sanding, stain and finish coats', 'Thresholds, nosings and base shoe listed in the estimate'],
    excludes: ['Moving furniture and appliances unless listed', 'Subfloor structural repairs found after removal (priced separately before work continues)', 'Material upgrades chosen after the estimate'],
  },
  'new-home-construction': {
    whoFor: 'Owners with a lot and a set of plans — or plans in progress — who want a licensed builder to take the house from foundation to move-in.',
    howWeRun: ['Review the architect\'s plans and engineering with you.', 'Build the estimate from the plans, phase by phase.', 'Track plan check and pull permits.', 'Build in phases — foundation, framing, rough-ins, finishes — with inspections at each stage.', 'Final inspection and walkthrough.'],
    covers: ['Construction labour and materials for the approved plans', 'Permit filing and inspections', 'Subcontractor coordination for licensed trades', 'Finish carpentry and flooring listed in the scope'],
    excludes: ['Design, architecture and engineering fees', 'City fees and utility connection charges', 'Landscaping and furnishings unless listed'],
  },
  'full-home-remodeling': {
    whoFor: 'Owners who want to change how a whole house works — layout, kitchen, baths, floors — rather than updating one room at a time.',
    howWeRun: ['Walk every room with you and list what changes and what stays.', 'Plan the phases so you know which parts of the home are usable when.', 'Demolition, structural work and rough-ins, with inspections.', 'Kitchens, baths, floors and trim.', 'Walkthrough and close-out list.'],
    covers: ['Demolition and disposal', 'Construction and finish work in the written scope', 'Permits and inspections', 'Protection of the areas you are still living in'],
    excludes: ['Hidden conditions found behind walls (priced and agreed before work continues)', 'Appliances and fixtures you buy yourself', 'City fees'],
  },
  'kitchen-remodeling': {
    whoFor: 'Homeowners replacing a dated or poorly laid-out kitchen who want cabinets, counters and floors planned together rather than by three different companies.',
    howWeRun: ['Measure the kitchen and talk through how you use it.', 'Settle layout, cabinets, counters and floor, then write the estimate.', 'Set up a temporary kitchen area if you are staying at home.', 'Demolition, rough-ins and inspections, then cabinets, counters, tile and floor.', 'Final walkthrough.'],
    covers: ['Cabinet supply and installation (custom or prefabricated, as chosen)', 'Countertop installation and tile', 'Plumbing and electrical by licensed subcontractors, with permits where needed', 'Flooring listed in the estimate'],
    excludes: ['Appliances unless listed', 'Changes to the plan after cabinets are ordered', 'City fees'],
  },
  'bathroom-remodeling': {
    whoFor: 'Owners redoing a primary bath, a guest bath or a full gut, who want tile, glass, plumbing and vanity handled as one job.',
    howWeRun: ['Measure the room and agree layout, fixtures and tile.', 'Write the estimate, including waterproofing.', 'Demolition and rough plumbing, with inspection where required.', 'Waterproofing, tile, glass, vanity and fixtures.', 'Final walkthrough and close-out.'],
    covers: ['Demolition and disposal', 'Shower waterproofing and tile', 'Vanity, fixtures and glass listed in the estimate', 'Plumbing and electrical by licensed subcontractors'],
    excludes: ['Fixtures and tile you choose after the estimate', 'Damage found behind walls (priced and agreed before work continues)', 'City fees'],
  },
  'adu-construction': {
    whoFor: 'Single-family owners in Los Angeles adding a rental unit, space for family, or a home office — detached, attached, a garage conversion or a junior ADU.',
    howWeRun: ['Review the lot, the plans and the utilities with you and your designer.', 'Track plan review with the building department.', 'Foundation, framing and rough-ins, with inspections.', 'Kitchen, bath, floors and finishes.', 'Final inspection and handover.'],
    covers: ['Construction labour and materials for the approved plans', 'Permit filing and inspections', 'Licensed subcontractors for electrical and plumbing', 'Finishes listed in the estimate'],
    excludes: ['Design and engineering', 'City fees, school fees and utility connection charges', 'Landscaping unless listed'],
  },
  'room-additions': {
    whoFor: 'Owners who need another bedroom, a primary suite, a family room or an office, and would rather build on than move.',
    howWeRun: ['Review the plans and engineering with you.', 'Write the estimate, including how the addition ties into the existing roof and walls.', 'Pull permits; foundation, framing and roofing tie-in.', 'Windows, insulation, drywall, floors and trim to match the house.', 'Final inspection and walkthrough.'],
    covers: ['Construction labour and materials for the approved plans', 'Permits and inspections', 'Tie-in to the existing structure and finishes listed in the scope'],
    excludes: ['Design and structural engineering', 'City fees', 'Changes to the existing house beyond the scope'],
  },
  cabinetry: {
    whoFor: 'Anyone fitting out a kitchen, bath, closet or living space who wants cabinets that fit the room and line up with the floor and trim around them.',
    howWeRun: ['Measure on site.', 'Agree custom or prefabricated, layout, finish and hardware.', 'Price both options on the same layout if you want to compare.', 'Deliver, install and adjust.', 'Final walkthrough.'],
    covers: ['Cabinet supply and installation as listed', 'Hardware listed in the estimate', 'Trim and filler pieces needed for a finished fit'],
    excludes: ['Countertops unless listed', 'Plumbing and electrical changes unless listed', 'Design changes after ordering'],
  },
  'finish-carpentry': {
    whoFor: 'Owners finishing a new build or remodel, or upgrading trim, stairs and built-ins in an existing home.',
    howWeRun: ['Walk the rooms and agree profiles and materials.', 'Match existing trim where needed.', 'Install, fill and prepare for paint or stain.', 'Final walkthrough.'],
    covers: ['Materials and installation listed in the estimate', 'Profile matching where listed', 'Preparation for paint or stain'],
    excludes: ['Painting unless listed', 'Custom-milled profiles unless listed', 'Wall repairs found during removal'],
  },
  'development-management': {
    whoFor: 'Owners building on their own land who want someone on their side tracking the architect, engineers, building department and contractors.',
    howWeRun: ['Review your goals, budget and site.', 'Coordinate design and engineering through plan check.', 'Bid the work and review contractor proposals with you.', 'Track budget and schedule during construction.', 'Close out and sign-off.'],
    covers: ['The coordination and reporting agreed in writing'],
    excludes: ['Design, engineering and construction contracts (signed directly by you)', 'City fees'],
  },
};
