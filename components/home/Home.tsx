import { Cta } from '@/components/Cta';
import { Img } from '@/components/Img';
import { facts } from '@/content/facts.ts';
import { photo } from '@/content/photos.ts';
import { AREAS, BLOG_POSTS } from '@/content/routes.ts';

// Home page: the live waltcodevelopment.com layout, section by section (captured 5 Oct 2026), with the copy
// corrected to the fact sheet. Removed from the old page: "premier", "30+ years", "200+ projects", "100% licensed
// & insured", the Blue Planet / RIPS section, "Architecture", the contact form, and "our team / hire locally"
// (CSLB shows no employees). Section order, grounds and type follow the live page.

const SERVICES_HOME = [
  { n: '01', href: '/services/general-construction', title: 'General Construction', text: 'Residential construction from the ground up — new homes, additions and structural work.' },
  { n: '02', href: '/services/hardwood-flooring', title: 'Wood Flooring', text: 'Hardwood installation, refinishing and custom patterns, under our C-15 flooring licence.' },
  { n: '03', href: '/services/kitchen-remodeling', title: 'Kitchen Remodeling', text: 'Kitchens from layout and cabinetry to counters and finish floors.' },
  { n: '04', href: '/services/bathroom-remodeling', title: 'Bathroom Remodeling', text: 'Showers, tubs, tile and vanities, built to the plan you approve.' },
  { n: '05', href: '/services/cabinetry', title: 'Custom Cabinetry', text: 'Custom cabinetry and finish carpentry, built to last.' },
  { n: '06', href: '/services/room-additions', title: 'Room Additions', text: 'More space on the home you already have, framed and finished.' },
];

const FEATURED = [
  { id: 'marble-island-kitchen', cat: 'Kitchen', title: 'Marble Waterfall Island' },
  { id: 'freestanding-tub-bathroom', cat: 'Bathroom', title: 'Tub & Glass Shower' },
  { id: 'oak-floor-fireplace', cat: 'Wood Flooring', title: 'Light Oak Living Room' },
  { id: 'wood-ceiling-kitchen', cat: 'Kitchen', title: 'Wood Ceiling Kitchen' },
  { id: 'framing-telehandler', cat: 'New Construction', title: 'Second-Storey Framing' },
  { id: 'herringbone-floor', cat: 'Wood Flooring', title: 'Herringbone Floor' },
];

const REASONS = [
  { title: 'Licensed for building and floors', text: `CSLB #${facts.licenseNumber.value}: B General Building and C-15 Flooring, with a contractor's bond on file.` },
  { title: 'Transparent pricing', text: "Detailed estimates with no hidden fees. You know exactly what you're paying for." },
  { title: 'One contractor, start to finish', text: 'Construction, cabinetry and flooring from one licensed contractor.' },
  { title: 'Rooted in Los Angeles', text: 'Our shop and showroom is on South Vermont Avenue in Los Angeles.' },
];

function SectionHead({ eyebrow, title, link }: { eyebrow: string; title: string; link?: { href: string; label: string } }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h-display mt-3 text-3xl text-ink sm:text-[30px]">{title}</h2>
      </div>
      {link && <a href={link.href} className="label border-b border-ink pb-1 text-ink hover:text-gold-ink">{link.label}</a>}
    </div>
  );
}

export function Home() {
  const hero = photo('light-oak-floor-stair');
  const shop = facts.showroom.value;
  return (
    <main>
      {/* 1 · Hero — full-bleed photo, dark wash, gold eyebrow, light 86px heading (live). */}
      <section className="on-dark relative isolate overflow-hidden bg-charcoal text-white">
        <Img p={hero} eager sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="mx-auto max-w-site px-4 py-32 sm:px-6 sm:py-44">
          <p className="eyebrow">General Contractor · Los Angeles, CA</p>
          <h1 className="h-display mt-5 text-5xl sm:text-7xl lg:text-[86px] lg:leading-[1.02]">
            Build with <em className="font-extralight">intention</em>.
          </h1>
          <p className="mt-6 max-w-xl text-white/85">
            Waltco Development is a licensed general contractor building, remodeling and installing wood floors in homes across Los Angeles.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/portfolio" className="label inline-flex items-center bg-white px-6 py-4 text-ink hover:bg-sand">View our work →</a>
            <Cta variant="outline">Get your estimate</Cta>
          </div>
        </div>
      </section>

      {/* 2 · Intro band (sand) — the old stats row replaced by licence facts from the CSLB record. */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-site gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">{facts.businessName.value}</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">From Los Angeles to the coast — we build what others dream.</h2>
          </div>
          <dl className="grid grid-cols-3 gap-6 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div><dt className="label text-muted">Licence</dt><dd className="h-display mt-2 text-3xl">B</dd><dd className="text-sm text-ink-2">General Building</dd></div>
            <div><dt className="label text-muted">Licence</dt><dd className="h-display mt-2 text-3xl">C-15</dd><dd className="text-sm text-ink-2">Flooring</dd></div>
            <div><dt className="label text-muted">CSLB</dt><dd className="h-display mt-2 text-3xl">#{facts.licenseNumber.value}</dd><dd className="text-sm text-ink-2">Licensed &amp; bonded</dd></div>
          </dl>
        </div>
      </section>

      {/* 3 · Services — numbered list (live). */}
      <section>
        <div className="mx-auto max-w-site px-4 py-24 sm:px-6">
          <SectionHead eyebrow="What we do" title="Our Services" link={{ href: '/services', label: 'All services' }} />
          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_HOME.map((s) => (
              <a key={s.href} href={s.href} className="group border-b border-r border-line p-8 hover:bg-sand">
                <p className="text-xs tracking-label text-gold-ink">{s.n}</p>
                <h3 className="mt-4 text-sm font-semibold tracking-wide text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] text-ink-2">{s.text}</p>
                <p className="label mt-6 text-ink group-hover:text-gold-ink">Learn more →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Featured projects (sand) — six photos, category + title (live). */}
      <section className="bg-sand">
        <div className="mx-auto max-w-site px-4 py-24 sm:px-6">
          <SectionHead eyebrow="Portfolio" title="Featured Projects" link={{ href: '/portfolio', label: 'Full portfolio' }} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((f) => (
              <figure key={f.id} className="group relative aspect-[4/3] overflow-hidden bg-charcoal">
                <Img p={photo(f.id)} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                  <span className="text-[10px] uppercase tracking-eyebrow text-gold">{f.cat}</span>
                  <span className="mt-1 block text-sm font-medium">{f.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Why choose us — photo + location tag, four reasons (live), facts corrected. */}
      <section>
        <div className="mx-auto grid max-w-site gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <Img p={photo('walter-contreras')} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] w-full object-cover" />
            <div className="on-dark absolute bottom-0 left-0 bg-charcoal px-6 py-5 text-white">
              <p className="text-[10px] uppercase tracking-eyebrow text-gold">{shop.label}</p>
              <p className="mt-1 text-sm">{shop.street}</p>
              <p className="text-sm text-on-dark">{`${shop.locality}, ${shop.region} ${shop.postalCode ?? ''}`.trim()}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">A contractor you can trust from day one to move-in day.</h2>
            <p className="mt-5 text-ink-2">Waltco Development builds and remodels homes in Los Angeles with the same care on every job, and gives every client a clear, written estimate before work starts.</p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {REASONS.map((r) => (
                <div key={r.title} className="border-t border-gold pt-4">
                  <dt className="text-sm font-semibold text-ink">{r.title}</dt>
                  <dd className="mt-2 text-[15px] text-ink-2">{r.text}</dd>
                </div>
              ))}
            </dl>
            <a href="/about" className="label mt-10 inline-block border-b border-ink pb-1 text-ink hover:text-gold-ink">Our story</a>
          </div>
        </div>
      </section>

      {/* 6 · Service areas (sand) — the twelve area pages (live). */}
      <section className="bg-sand">
        <div className="mx-auto max-w-site px-4 py-24 sm:px-6">
          <SectionHead eyebrow="Where we build" title="Service Areas" link={{ href: '/service-areas', label: 'View all service areas' }} />
          <ul className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-4">
            {AREAS.map((a) => (
              <li key={a.slug} className="bg-sand"><a href={`/service-areas/${a.slug}`} className="block px-5 py-5 text-[15px] text-ink hover:bg-white">{a.label}</a></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 · Resources — the guides (live), titles only until their copy is rewritten. */}
      <section>
        <div className="mx-auto max-w-site px-4 py-24 sm:px-6">
          <SectionHead eyebrow="Resources" title="Construction Guides for LA Homeowners" link={{ href: '/blog', label: 'All guides' }} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((b) => (
              <a key={b.slug} href={`/blog/${b.slug}`} className="group border-t-2 border-ink pt-6">
                <h3 className="text-lg font-light leading-snug text-ink group-hover:text-gold-ink">{b.label}</h3>
                <p className="label mt-5 text-ink">Read guide →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
