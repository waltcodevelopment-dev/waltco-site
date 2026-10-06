// JSON-LD (W3). Every value comes from content/facts.ts or the page's own content — nothing typed in here.
// GeneralContractor carries the CSLB licence as a credential, the Shop / Showroom as the customer-facing address
// (it is the Google Business Profile address), and the twelve service areas.
import { facts, SITE_URL, telHref } from '../content/facts.ts';
import { AREAS } from '../content/routes.ts';
import { canonicalFor } from './seo.ts';

const ORG_ID = `${SITE_URL}/#business`;
type Ld = Record<string, unknown>;

export function businessLd(): Ld {
  const shop = facts.showroom.value;
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': ORG_ID,
    name: facts.businessName.value,
    url: SITE_URL,
    telephone: telHref(facts.phone.value).replace('tel:', ''),
    email: facts.email.value,
    image: `${SITE_URL}/og/waltco-development.jpg`,
    logo: `${SITE_URL}/icon.png`,
    address: {
      '@type': 'PostalAddress', streetAddress: shop.street, addressLocality: shop.locality,
      addressRegion: shop.region, postalCode: shop.postalCode, addressCountry: 'US',
    },
    areaServed: AREAS.map((a) => ({ '@type': 'City', name: `${a.label}, CA` })),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: `California contractor licence #${facts.licenseNumber.value}`,
      recognizedBy: { '@type': 'GovernmentOrganization', name: 'Contractors State License Board', url: 'https://www.cslb.ca.gov' },
    },
    identifier: { '@type': 'PropertyValue', propertyID: 'CSLB license', value: facts.licenseNumber.value },
    knowsAbout: facts.classifications.status === 'confirmed' ? facts.classifications.value : undefined,
    ...(facts.sameAs.status === 'confirmed' && facts.sameAs.value.length ? { sameAs: facts.sameAs.value } : {}),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: canonicalFor(t.path) })),
  };
}

export function serviceLd(name: string, path: string, description: string, area?: string): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name, description, url: canonicalFor(path),
    provider: { '@id': ORG_ID },
    areaServed: area ? { '@type': 'City', name: `${area}, CA` } : AREAS.map((a) => ({ '@type': 'City', name: `${a.label}, CA` })),
  };
}

export function articleLd(title: string, path: string, description: string, updated: string): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title, description, url: canonicalFor(path), dateModified: updated,
    author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID },
    image: `${SITE_URL}/og/waltco-development.jpg`,
  };
}

export function faqLd(faq: { q: string; a: string }[]): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
