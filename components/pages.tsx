import { Cta } from './Cta';
import { Img } from './Img';
import { Faq, JsonLd, LinkList, PageHero, PhotoGrid, Section, SectionHead } from './ui';
import { addressLine, facts, licenceLine, telHref } from '@/content/facts.ts';
import { photo, PHOTOS } from '@/content/photos.ts';
import { AREAS, BLOG_POSTS, SERVICES } from '@/content/routes.ts';
import { servicePage } from '@/content/services.ts';
import { SERVICE_DETAILS } from '@/content/service-details.ts';
import { AREA_PAGES, areaPage } from '@/content/areas.ts';
import { POSTS, post } from '@/content/posts.ts';
import { articleLd, breadcrumbLd, faqLd, serviceLd } from '@/lib/schema.ts';

const HOME = { name: 'Home', path: '/' };
const label = (slug: string, list: { slug: string; label: string }[]) => list.find((x) => x.slug === slug)?.label ?? slug;

// ── About ────────────────────────────────────────────────────────────────────────────────────────────────
export function AboutPage() {
  const trail = [HOME, { name: 'About', path: '/about' }];
  const shop = facts.showroom.value;
  return (
    <main>
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="Who we are" title="Waltco Development" tagline="A licensed Los Angeles general contractor for building, remodeling and wood floors." photo={photo('entry-hall-hardwood')} trail={trail} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">Building homes in Los Angeles, one job at a time.</h2>
            <div className="mt-6 space-y-4 text-ink-2">
              <p>Waltco Development builds and remodels homes across Los Angeles — new construction, additions, kitchens and baths, cabinetry, finish carpentry and hardwood floors.</p>
              <p>{`Licensed since ${facts.licensedSince.value}: we hold California contractor licence #${facts.licenseNumber.value} from the Contractors State License Board, with B General Building and C-15 Flooring classifications and a contractor's bond on file.`}</p>
              <p>Waltco is owner-run. Walter Contreras is involved in every job, from the first estimate to the final walkthrough, and every client gets a written scope and estimate before work starts.</p>
            </div>
          </div>
          <div className="relative">
            <Img p={photo('walter-contreras')} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] w-full object-cover" />
            <div className="on-dark absolute bottom-0 left-0 bg-charcoal px-6 py-5 text-white">
              <p className="text-[10px] uppercase tracking-eyebrow text-gold">{shop.label}</p>
              <p className="mt-1 text-sm">{shop.street}</p>
              <p className="text-sm text-on-dark">{`${shop.locality}, ${shop.region} ${shop.postalCode ?? ''}`.trim()}</p>
            </div>
          </div>
        </div>
      </Section>
      <Section sand>
        <p className="eyebrow">Our mission</p>
        <h2 className="h-display mt-3 max-w-3xl text-3xl text-ink sm:text-4xl">Build with precision. Deliver with integrity. Stand behind every project we touch.</h2>
        <dl className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            ['Quality', 'Every job is held to the same standard, whatever its size.'],
            ['Integrity', 'Transparent pricing, honest timelines and clear communication from day one.'],
            ['Community', 'Rooted in Los Angeles, with our shop and showroom on South Vermont Avenue.'],
          ].map(([t, d]) => <div key={t} className="border-t border-gold pt-4"><dt className="text-sm font-semibold">{t}</dt><dd className="mt-2 text-ink-2">{d}</dd></div>)}
        </dl>
      </Section>
      <Section>
        <SectionHead eyebrow="How we work" title="Our Process" />
        <ol className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Consultation', 'Tell us what you want to build. We reply, and for floors and remodels send a ballpark from our own price list.'],
            ['Plans & permits', 'We work from your architect\'s or designer\'s plans, settle the scope, and pull the permits.'],
            ['Construction', 'One licensed contractor runs the job, with regular updates and inspections along the way.'],
            ['Final walkthrough', 'We walk the finished project with you and close out anything left before handover.'],
          ].map(([t, d], i) => (
            <li key={t} className="border-b border-r border-line p-8">
              <p className="text-xs tracking-label text-gold-ink">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 text-sm font-semibold">{t}</h3>
              <p className="mt-3 text-[15px] text-ink-2">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </main>
  );
}

// ── Services index ───────────────────────────────────────────────────────────────────────────────────────
export function ServicesIndexPage() {
  const trail = [HOME, { name: 'Services', path: '/services' }];
  return (
    <main>
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="What we do" title="Our Services" tagline="Construction, remodeling, cabinetry and wood floors — from one licensed contractor." photo={photo('marble-island-kitchen')} trail={trail} />
      <Section>
        <p className="eyebrow">Full spectrum</p>
        <h2 className="h-display mt-3 max-w-3xl text-3xl text-ink sm:text-4xl">From first plans to the finished floor — every phase under one contract.</h2>
        <div className="mt-14 space-y-16">
          {SERVICES.map((s, i) => {
            const pg = servicePage(s.slug)!;
            return (
              <article key={s.slug} className="grid gap-8 md:grid-cols-2 md:items-center">
                <a href={`/services/${s.slug}`} className={i % 2 ? 'md:order-2' : ''}>
                  <Img p={photo(pg.photos[0])} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                </a>
                <div>
                  <p className="text-xs tracking-label text-gold-ink">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="h-display mt-3 text-3xl text-ink"><a href={`/services/${s.slug}`} className="hover:text-gold-ink">{s.label}</a></h2>
                  <p className="mt-4 text-lg text-ink">{pg.tagline}</p>
                  <p className="mt-4 text-ink-2">{pg.intro[0]}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {pg.scope.slice(0, 6).map((x) => <li key={x} className="flex gap-3 text-[15px] text-ink-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />{x}</li>)}
                  </ul>
                  <a href={`/services/${s.slug}`} className="label mt-7 inline-block border-b border-ink pb-1 text-ink hover:text-gold-ink">{`More on ${s.label.toLowerCase()}`}</a>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </main>
  );
}

// ── Service page ─────────────────────────────────────────────────────────────────────────────────────────
export function ServicePageView({ slug }: { slug: string }) {
  const pg = servicePage(slug)!;
  const name = label(slug, SERVICES);
  const path = `/services/${slug}`;
  const trail = [HOME, { name: 'Services', path: '/services' }, { name, path }];
  const photos = pg.photos.map(photo);
  const d = SERVICE_DETAILS[slug];
  return (
    <main>
      <JsonLd data={[breadcrumbLd(trail), serviceLd(name, path, pg.intro[0]), faqLd(pg.faq)]} />
      <PageHero eyebrow="Services" title={`${name} in Los Angeles`} tagline={pg.tagline} photo={photos[0]} trail={trail} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow">About this service</p>
            <div className="mt-5 space-y-4 text-lg text-ink-2">{pg.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
            <p className="mt-8 text-sm text-muted">{licenceLine()}</p>
          </div>
          <div className="bg-sand p-8">
            <p className="label text-ink">Scope of work</p>
            <ul className="mt-5 space-y-3">
              {pg.scope.map((s) => <li key={s} className="flex gap-3 text-[15px] text-ink-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />{s}</li>)}
            </ul>
            <div className="mt-8"><Cta>Get your estimate</Cta></div>
          </div>
        </div>
      </Section>
      <Section sand>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who it&rsquo;s for</p>
            <p className="mt-4 text-lg text-ink">{d.whoFor}</p>
            <p className="eyebrow mt-12">How we run the job</p>
            <ol className="mt-5 space-y-4">
              {d.howWeRun.map((x, i) => (
                <li key={x} className="flex gap-4 text-ink-2"><span className="text-xs tracking-label text-gold-ink">{String(i + 1).padStart(2, '0')}</span><span>{x}</span></li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">What the estimate covers</p>
            <ul className="mt-5 space-y-3">{d.covers.map((x) => <li key={x} className="flex gap-3 text-ink-2"><span aria-hidden className="text-gold-ink">✓</span>{x}</li>)}</ul>
            <p className="eyebrow mt-10">Not included unless listed</p>
            <ul className="mt-5 space-y-3">{d.excludes.map((x) => <li key={x} className="flex gap-3 text-ink-2"><span aria-hidden className="text-muted">—</span>{x}</li>)}</ul>
            <p className="mt-8 text-sm text-muted">Every number in a Waltco estimate comes from our own price list, and the written estimate lists exactly what is and is not included.</p>
          </div>
        </div>
      </Section>
      {photos.length > 1 && (
        <Section>
          <SectionHead eyebrow="Our work" title={`${name} photos`} link={{ href: '/portfolio', label: 'Full portfolio' }} />
          <div className="mt-10"><PhotoGrid photos={photos.slice(1, 7)} /></div>
        </Section>
      )}
      <Section sand>
        <Faq items={pg.faq} />
      </Section>
      <Section>
        <SectionHead eyebrow="Also from Waltco" title="Other services" />
        <div className="mt-10"><LinkList items={SERVICES.filter((s) => s.slug !== slug).map((s) => ({ href: `/services/${s.slug}`, label: s.label }))} /></div>
        <p className="mt-10 text-ink-2">{`${name} from Waltco Development in`}{' '}
          {AREAS.map((a, i) => <span key={a.slug}>{i ? (i === AREAS.length - 1 ? ' and ' : ', ') : ''}<a href={`/service-areas/${a.slug}`} className="text-gold-ink underline">{a.label}</a></span>)}
          . <a href="/service-areas" className="text-gold-ink underline">All service areas</a></p>
      </Section>
    </main>
  );
}

// ── Portfolio ────────────────────────────────────────────────────────────────────────────────────────────
const GROUPS: { tag: string; title: string }[] = [
  { tag: 'kitchen', title: 'Kitchens' }, { tag: 'bathroom', title: 'Bathrooms' }, { tag: 'flooring', title: 'Wood Flooring' },
  { tag: 'carpentry', title: 'Stairs & Finish Carpentry' }, { tag: 'construction', title: 'Construction & Additions' },
];
export function PortfolioPage() {
  const trail = [HOME, { name: 'Portfolio', path: '/portfolio' }];
  const used = new Set<string>();
  const groups = GROUPS.map((g) => {
    const ps = PHOTOS.filter((p) => p.tags.includes(g.tag) && !p.tags.includes('people') && !used.has(p.id));
    ps.forEach((p) => used.add(p.id));
    return { ...g, photos: ps };
  }).filter((g) => g.photos.length);
  return (
    <main>
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="Our work" title="Portfolio" tagline="Kitchens, baths, wood floors, stairs and construction from Waltco Development jobs." photo={photo('oak-floor-fireplace')} trail={trail} />
      <Section>
        <nav aria-label="Portfolio sections" className="flex flex-wrap gap-3">
          {groups.map((g) => <a key={g.tag} href={`#${g.tag}`} className="label border border-line px-4 py-3 text-ink hover:border-ink">{g.title}</a>)}
        </nav>
        <div className="mt-14 space-y-20">
          {groups.map((g) => (
            <div key={g.tag} id={g.tag} className="scroll-mt-28">
              <SectionHead eyebrow="Portfolio" title={g.title} />
              <div className="mt-8"><PhotoGrid photos={g.photos} /></div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

// ── Contact ──────────────────────────────────────────────────────────────────────────────────────────────
export function ContactPage() {
  const trail = [HOME, { name: 'Contact', path: '/contact' }];
  const shop = facts.showroom.value;
  const mail = facts.mailing.value;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${facts.businessName.value}, ${addressLine(shop)}`)}`;
  return (
    <main>
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="Let's talk" title="Contact Waltco Development" tagline="Tell us about your project — online, by phone or by email." trail={trail} cta={false} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Start your project</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">Get your estimate online.</h2>
            <p className="mt-5 text-ink-2">Describe the job and add photos or plans if you have them. You get a reply from Waltco Development, and for floors and remodels a ballpark from our own price list before the site visit.</p>
            <div className="mt-8"><Cta>Get your estimate</Cta></div>
          </div>
          <dl className="grid gap-6 bg-sand p-8 text-[15px]">
            <div><dt className="label text-muted">Call</dt><dd className="mt-1"><a href={telHref(facts.phone.value)} className="text-lg text-ink hover:text-gold-ink">{facts.phone.value}</a></dd></div>
            <div><dt className="label text-muted">Email</dt><dd className="mt-1"><a href={`mailto:${facts.email.value}`} className="text-ink hover:text-gold-ink">{facts.email.value}</a></dd></div>
            <div><dt className="label text-muted">Hours</dt><dd className="mt-1 text-ink">{facts.hours.value}</dd></div>
            <div><dt className="label text-muted">Visit</dt><dd className="mt-1 text-ink"><span className="font-semibold">{`${shop.label}:`}</span> {addressLine(shop)}<br /><a href={maps} className="label mt-2 inline-block text-gold-ink" rel="noopener">Get directions →</a></dd></div>
            <div><dt className="label text-muted">Mail</dt><dd className="mt-1 text-ink-2">{`${mail.label}: ${addressLine(mail)}`}</dd></div>
          </dl>
        </div>
      </Section>
    </main>
  );
}

// ── Service areas ────────────────────────────────────────────────────────────────────────────────────────
export function AreasIndexPage() {
  const trail = [HOME, { name: 'Service Areas', path: '/service-areas' }];
  return (
    <main>
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="Where we build" title="Service Areas" tagline="From our shop on South Vermont Avenue we work across Los Angeles, the Westside, the coast and the Valley." photo={photo('light-oak-floor-stair')} trail={trail} />
      <Section>
        <SectionHead eyebrow="Service areas" title="Cities and neighbourhoods we serve" />
        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {AREA_PAGES.map((a) => (
            <a key={a.slug} href={`/service-areas/${a.slug}`} className="bg-white p-6 hover:bg-sand">
              <h3 className="text-lg font-light text-ink">{label(a.slug, AREAS)}</h3>
              <p className="mt-2 text-sm text-ink-2">{a.tagline}</p>
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}

export function AreaPageView({ slug }: { slug: string }) {
  const a = areaPage(slug)!;
  const name = label(slug, AREAS);
  const path = `/service-areas/${slug}`;
  const trail = [HOME, { name: 'Service Areas', path: '/service-areas' }, { name, path }];
  const dept = a.jurisdiction === 'LADBS' ? 'the Los Angeles Department of Building and Safety (LADBS)' : a.department!;
  const faq = [
    { q: `Who issues building permits in ${name}?`, a: `${a.jurisdiction === 'LADBS' ? `${name} is part of the City of Los Angeles, so permits are issued by` : 'Permits are issued by'} ${dept}. We pull the permits for our jobs and schedule the inspections.` },
    ...(a.coastal ? [{ q: `Does my ${name} project need coastal review?`, a: 'Some projects in the coastal zone need a coastal development permit or exemption in addition to building permits. We check this for your address before plans are final.' }] : []),
    ...(a.fire ? [{ q: 'Do you take fire rebuild projects?', a: `Yes. For homes damaged in ${a.fire}, describe your project with "Get your estimate" and we will reply.` }] : []),
    { q: `How do I get an estimate in ${name}?`, a: 'Use "Get your estimate" and describe the job. You get a reply from Waltco Development, and for floors and remodels a ballpark from our own price list before the site visit.' },
  ];
  return (
    <main>
      <JsonLd data={[breadcrumbLd(trail), serviceLd(`General contractor in ${name}`, path, `${a.tagline} Licensed general contractor, CSLB #${facts.licenseNumber.value}.`, name), faqLd(faq)]} />
      <PageHero eyebrow={`Serving ${name}`} title={`General Contractor in ${name}`} tagline={a.tagline} trail={trail} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-lg text-ink-2">
            <p>{`Waltco Development is a licensed general contractor (CSLB #${facts.licenseNumber.value}) working in ${name} from our shop and showroom on South Vermont Avenue in Los Angeles. We build additions and ADUs, remodel kitchens and baths, and install and refinish hardwood floors under our C-15 flooring licence.`}</p>
            <p>{`Permits for ${name} projects are issued by ${dept}.${a.coastal ? ` Much of ${name} lies in the California coastal zone, where some projects need coastal review as well.` : ''}${a.fire ? ` Many homeowners here are rebuilding after ${a.fire}.` : ''}`}</p>
          </div>
          <div className="bg-sand p-8">
            <p className="label text-ink">{`Services in ${name}`}</p>
            <ul className="mt-5 space-y-2">
              {SERVICES.map((s) => <li key={s.slug}><a href={`/services/${s.slug}`} className="text-[15px] text-ink-2 hover:text-gold-ink">{s.label}</a></li>)}
            </ul>
            <div className="mt-8"><Cta>Get your estimate</Cta></div>
          </div>
        </div>
      </Section>
      <Section sand><Faq items={faq} /></Section>
      <Section>
        <SectionHead eyebrow="Also serving" title="Nearby areas" link={{ href: '/service-areas', label: 'All service areas' }} />
        <div className="mt-10"><LinkList items={a.near.map((n) => ({ href: `/service-areas/${n}`, label: label(n, AREAS) }))} /></div>
      </Section>
    </main>
  );
}

// ── Blog ─────────────────────────────────────────────────────────────────────────────────────────────────
const fmt = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export function BlogIndexPage() {
  const trail = [HOME, { name: 'Resources', path: '/blog' }];
  return (
    <main>
      <JsonLd data={breadcrumbLd(trail)} />
      <PageHero eyebrow="Resources" title="Construction Guides for LA Homeowners" tagline="Plain answers on licences, permits, ADUs, kitchens and rebuilding — before you hire." trail={trail} />
      <Section>
        <div className="grid gap-px bg-line md:grid-cols-2">
          {BLOG_POSTS.map((b) => {
            const p = post(b.slug)!;
            return (
              <a key={b.slug} href={`/blog/${b.slug}`} className="group bg-white p-8 hover:bg-sand">
                <p className="text-xs text-muted">{`Updated ${fmt(p.updated)}`}</p>
                <h2 className="mt-3 text-2xl font-light leading-snug text-ink group-hover:text-gold-ink">{p.title}</h2>
                <p className="mt-3 text-ink-2">{p.dek}</p>
                <p className="label mt-6 text-ink">Read guide →</p>
              </a>
            );
          })}
        </div>
      </Section>
    </main>
  );
}

export function PostPageView({ slug }: { slug: string }) {
  const p = post(slug)!;
  const path = `/blog/${slug}`;
  const trail = [HOME, { name: 'Resources', path: '/blog' }, { name: p.title, path }];
  return (
    <main>
      <JsonLd data={[breadcrumbLd(trail), articleLd(p.title, path, p.dek, p.updated), faqLd(p.faq)]} />
      <PageHero eyebrow="Guide" title={p.title} trail={trail} cta={false} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted">{`${facts.businessName.value} · Updated ${fmt(p.updated)}`}</p>
        <p className="mt-6 text-xl font-light leading-relaxed text-ink">{p.dek}</p>
        {p.sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="h-display text-2xl text-ink">{s.h}</h2>
            {s.p.map((t) => <p key={t.slice(0, 24)} className="mt-4 text-ink-2">{t}</p>)}
            {s.list && <ul className="mt-4 space-y-2">{s.list.map((l) => <li key={l} className="flex gap-3 text-ink-2"><span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />{l}</li>)}</ul>}
          </section>
        ))}
        <div className="mt-14 bg-sand p-8">
          <p className="label text-ink">Related services</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {p.related.map((r) => <li key={r}><a href={`/services/${r}`} className="label border border-line bg-white px-4 py-3 text-ink hover:border-ink">{label(r, SERVICES)}</a></li>)}
          </ul>
          <div className="mt-8"><Cta>Get your estimate</Cta></div>
        </div>
        <div className="mt-16"><Faq items={p.faq} /></div>
        <div className="mt-16">
          <SectionHead eyebrow="More guides" title="Keep reading" />
          <div className="mt-8"><LinkList items={POSTS.filter((x) => x.slug !== slug).map((x) => ({ href: `/blog/${x.slug}`, label: x.title }))} /></div>
        </div>
      </article>
    </main>
  );
}

