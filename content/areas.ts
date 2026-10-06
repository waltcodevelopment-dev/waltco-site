// Service-area pages (W2). The live pages said "trusted in <city> for over 30 years" and "fully insured" —
// both removed. Each page now carries facts that are true of the place itself (who issues permits, coastal
// zone, recent wildfire) and never claims a past Waltco job there until Walter confirms one.

export type AreaPage = {
  slug: string;
  tagline: string;
  jurisdiction: 'LADBS' | 'own';
  department?: string;   // for cities with their own building department
  coastal?: boolean;
  fire?: string;         // a wildfire the area is rebuilding from
  near: string[];        // slugs of neighbouring area pages
};

export const AREA_PAGES: AreaPage[] = [
  { slug: 'los-angeles', tagline: 'Building and remodeling across the City of Los Angeles.', jurisdiction: 'LADBS', near: ['west-los-angeles', 'hollywood', 'mar-vista'] },
  { slug: 'west-los-angeles', tagline: 'Remodels, additions and floors on the Westside.', jurisdiction: 'LADBS', near: ['santa-monica', 'mar-vista', 'los-angeles'] },
  { slug: 'santa-monica', tagline: 'Coastal remodels with Santa Monica\'s own permit process.', jurisdiction: 'own', department: 'the City of Santa Monica Building and Safety Division', coastal: true, near: ['venice', 'west-los-angeles', 'pacific-palisades'] },
  { slug: 'malibu', tagline: 'Building and rebuilding on the Malibu coast.', jurisdiction: 'own', department: 'the City of Malibu', coastal: true, fire: 'the January 2025 Palisades Fire', near: ['pacific-palisades', 'santa-monica'] },
  { slug: 'pacific-palisades', tagline: 'Rebuilds, remodels and additions in the Palisades.', jurisdiction: 'LADBS', coastal: true, fire: 'the January 2025 Palisades Fire', near: ['malibu', 'santa-monica', 'west-los-angeles'] },
  { slug: 'hollywood', tagline: 'Remodels and additions in Hollywood\'s older homes.', jurisdiction: 'LADBS', near: ['los-angeles', 'west-los-angeles'] },
  { slug: 'encino', tagline: 'Valley remodels, additions and ADUs in Encino.', jurisdiction: 'LADBS', near: ['reseda', 'los-angeles'] },
  { slug: 'venice', tagline: 'Remodels and ADUs on Venice\'s small coastal lots.', jurisdiction: 'LADBS', coastal: true, near: ['santa-monica', 'mar-vista'] },
  { slug: 'manhattan-beach', tagline: 'South Bay remodels under Manhattan Beach\'s own review.', jurisdiction: 'own', department: 'the City of Manhattan Beach Community Development Department', coastal: true, near: ['redondo-beach'] },
  { slug: 'redondo-beach', tagline: 'Remodels, additions and floors in Redondo Beach.', jurisdiction: 'own', department: 'the City of Redondo Beach Building and Safety Division', coastal: true, near: ['manhattan-beach'] },
  { slug: 'mar-vista', tagline: 'Remodels, additions and ADUs in Mar Vista.', jurisdiction: 'LADBS', near: ['venice', 'west-los-angeles', 'santa-monica'] },
  { slug: 'reseda', tagline: 'Remodels, additions and ADUs in Reseda.', jurisdiction: 'LADBS', near: ['encino', 'los-angeles'] },
];

export const areaPage = (slug: string) => AREA_PAGES.find((a) => a.slug === slug);
