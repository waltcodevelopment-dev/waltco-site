// The Waltco fact sheet — the single source for every fact on the site (Fable, 6 Oct 2026: A4, ruling 4).
// A fact is used on a page only when its status is 'confirmed'. 'pending' facts are listed so nothing is
// forgotten, but no page, meta tag or JSON-LD may render them (tests/unit/facts.test.ts and the built-page
// tests enforce this). Every value records where it came from.

export type Fact<T> = { value: T; status: 'confirmed' | 'pending'; source: string };
export type Address = { label: string; street: string; locality: string; region: string; postalCode?: string };

const CSLB = 'CSLB public record, checked 5 Oct 2026';
export const CSLB_CHECKED = '2026-10-05';

export const facts = {
  businessName: { value: 'Waltco Development', status: 'confirmed', source: 'GymLogo tenant record (owner onboarding)' } as Fact<string>,
  licenseNumber: { value: '625535', status: 'confirmed', source: 'GymLogo tenant record; shown on the current site' } as Fact<string>,
  /** CSLB public record, read 5 Oct 2026 (cslb.ca.gov LicenseDetail.aspx?LicNum=625535): current and active. */
  licenseStatus: { value: 'Current and active', status: 'confirmed', source: CSLB } as Fact<string>,
  /** CSLB issue date 08/19/1991 (record read 5 Oct 2026). Owner approved "Licensed since 1991", 5 Oct 2026. */
  licensedSince: { value: '1991', status: 'confirmed', source: CSLB } as Fact<string>,
  classifications: { value: ['B — General Building', 'C-15 — Flooring and Floor Covering'], status: 'confirmed', source: CSLB } as Fact<string[]>,
  /** Contractor's bond on file with CSLB. Bond number and surety are not shown on the site. */
  bonded: { value: true, status: 'confirmed', source: CSLB } as Fact<boolean>,
  /** CSLB shows a workers' comp exemption (no employees) and no liability policy. Never claim "insured". */
  insured: { value: false, status: 'pending', source: 'No liability certificate on file; CSLB 5 Oct 2026 shows workers\' comp exempt' } as Fact<boolean>,
  phone: { value: '213-792-5908', status: 'confirmed', source: 'Owner; shown on the current site' } as Fact<string>,
  email: { value: 'info@waltcodevelopment.com', status: 'confirmed', source: 'Owner sign-in email for GymLogo' } as Fact<string>,
  /** Customer-facing location (owner, 5 Oct 2026). Label "Shop / Showroom"; never presented as the CSLB record address. */
  showroom: { value: { label: 'Shop / Showroom', street: '9216 S. Vermont Ave', locality: 'Los Angeles', region: 'CA', postalCode: '90044' }, status: 'confirmed', source: 'Owner, 5 Oct 2026' } as Fact<Address>,
  /** Mailing and CSLB record address (CSLB 5 Oct 2026; owner approved its use as the mailing address, 5 Oct 2026). */
  mailing: { value: { label: 'Mailing Address', street: '2725 Live Oak St', locality: 'Los Angeles', region: 'CA', postalCode: '90255' }, status: 'confirmed', source: CSLB } as Fact<Address>,
  /** Owner, 5 Oct 2026: "by appointment, we work from 7 till 5 pm". Google profile says Mon–Fri 7–5, Sat 24h (owner to fix). */
  hours: { value: 'By appointment · Work hours 7 AM – 5 PM', status: 'confirmed', source: 'Owner, 5 Oct 2026' } as Fact<string>,
  sameAs: { value: [] as string[], status: 'pending', source: 'Social profiles not yet listed by the owner (W0)' } as Fact<string[]>,
} as const;

/** Where every call to action goes (B1). The site has no form of its own. */
export const INTAKE_URL = 'https://gymlogo.vercel.app/r/waltco-development?src=waltcodevelopment.com';

/** One host (addendum A): non-www apex, https, no trailing slash. */
export const SITE_URL = 'https://waltcodevelopment.com';

/** The licence line (addendum B): "bonded" only once the CSLB record shows the bond. */
export function licenceLine(): string {
  const f = facts;
  if (f.bonded.status === 'confirmed' && f.bonded.value) return `Licensed and bonded — CSLB #${f.licenseNumber.value}`;
  return `Licensed general contractor — CSLB #${f.licenseNumber.value}`;
}

export function confirmed<T>(f: Fact<T>): T | null {
  return f.status === 'confirmed' ? f.value : null;
}

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '')}`;

export const addressLine = (a: Address) => `${a.street}, ${a.locality}, ${a.region}${a.postalCode ? ` ${a.postalCode}` : ''}`;
