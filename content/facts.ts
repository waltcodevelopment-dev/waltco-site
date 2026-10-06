// The Waltco fact sheet — the single source for every fact on the site (Fable, 6 Oct 2026: A4, ruling 4).
// A fact is used on a page only when its status is 'confirmed'. 'pending' facts are listed so nothing is
// forgotten, but no page, meta tag or JSON-LD may render them (tests/unit/facts.test.ts and the built-page
// tests enforce this). Every value records where it came from.

export type Fact<T> = { value: T; status: 'confirmed' | 'pending'; source: string };

export const facts = {
  businessName: { value: 'Waltco Development', status: 'confirmed', source: 'GymLogo tenant record (owner onboarding)' } as Fact<string>,
  licenseNumber: { value: '625535', status: 'confirmed', source: 'GymLogo tenant record; shown on the current site' } as Fact<string>,
  /** Shown only after Walter reads the CSLB record and files it with a date (W0). */
  classifications: { value: ['B — General Building', 'C-15 — Flooring'], status: 'pending', source: 'Owner statement; CSLB record not yet read (W0)' } as Fact<string[]>,
  bonded: { value: false, status: 'pending', source: 'CSLB record not yet read (W0)' } as Fact<boolean>,
  insured: { value: false, status: 'pending', source: 'No current general-liability policy noted yet (W0)' } as Fact<boolean>,
  phone: { value: '213-792-5908', status: 'confirmed', source: 'Owner; shown on the current site' } as Fact<string>,
  email: { value: 'info@waltcodevelopment.com', status: 'confirmed', source: 'Owner sign-in email for GymLogo' } as Fact<string>,
  /** The public business location the owner chooses to show. Never described as the licence-record address. */
  streetAddress: { value: '9216 S. Vermont Ave', status: 'confirmed', source: 'Owner; shown on the current site' } as Fact<string>,
  locality: { value: 'Los Angeles', status: 'confirmed', source: 'Owner; shown on the current site' } as Fact<string>,
  region: { value: 'CA', status: 'confirmed', source: 'Owner; shown on the current site' } as Fact<string>,
  postalCode: { value: '', status: 'pending', source: 'Not yet in the fact sheet (W0)' } as Fact<string>,
  hours: { value: 'Mon–Fri 7:00 am – 6:00 pm', status: 'pending', source: 'Fable proposal for the Business Profile; owner to confirm (W0)' } as Fact<string>,
  sameAs: { value: [] as string[], status: 'pending', source: 'Social profiles not yet listed by the owner (W0)' } as Fact<string[]>,
} as const;

/** Where every call to action goes (B1). The site has no form of its own. */
export const INTAKE_URL = 'https://gymlogo.vercel.app/r/waltco-development?src=waltcodevelopment.com';

/** One host (addendum A): non-www apex, https, no trailing slash. */
export const SITE_URL = 'https://waltcodevelopment.com';

/** The licence line until the CSLB record is filed (addendum B). */
export function licenceLine(): string {
  const f = facts;
  if (f.bonded.status === 'confirmed' && f.bonded.value) return `Licensed and bonded — CSLB #${f.licenseNumber.value}`;
  return `Licensed general contractor — CSLB #${f.licenseNumber.value}`;
}

export function confirmed<T>(f: Fact<T>): T | null {
  return f.status === 'confirmed' ? f.value : null;
}

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '')}`;
