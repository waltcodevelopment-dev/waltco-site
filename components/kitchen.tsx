import { Cta } from './Cta';
import { Img } from './Img';
import { Faq, JsonLd, LinkList, PageHero, PhotoGrid, Section, SectionHead } from './ui';
import { SC_PHOTOS } from '@/content/sc-photos.ts';
import { SVC_CITY, svcCityPath } from '@/content/service-city.ts';
import { BUILD, CHART, CHART_FAQ, KITCHEN_CHART, KITCHEN_COST, KITCHEN_HUB, LAYOUTS, ORDER, TIERS } from '@/content/kitchen.ts';
import { breadcrumbLd, faqLd, serviceLd } from '@/lib/schema.ts';
import { telHref, facts } from '@/content/facts.ts';
import { ChartLooks } from './catalog';

// Kitchen hub system, Legno-style: hub → color chart → how to order, with sibling links on every page.
const ph = (id: string) => SC_PHOTOS.find((p) => p.id === id)!;
const cityLinks = () => SVC_CITY.filter((x) => x.service === 'kitchen-remodeling').map((x) => ({ href: svcCityPath(x), label: x.label }));

function QuickLinks() {
  const items = [
    { href: KITCHEN_CHART, label: 'Cabinet color chart' },
    { href: KITCHEN_COST, label: 'What a kitchen costs' },
    { href: '#how-to-order', label: 'How to order an estimate' },
    { href: '#kitchen-cities', label: 'Kitchens by city' },
  ];
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((i) => <li key={i.href}><a href={i.href} className="label inline-block border border-line bg-white px-4 py-3 text-ink hover:border-ink">{i.label}</a></li>)}
    </ul>
  );
}

/** Sections added to the kitchen-remodeling service page, after the intro. */
export function KitchenHubTop() {
  return (
    <>
      <Section>
        <QuickLinks />
        <div className="mt-16"><SectionHead eyebrow="Pick a look" title="Kitchen styles from our jobs" link={{ href: KITCHEN_CHART, label: 'See the full chart' }} /></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHART.slice(0, 4).map((g) => (
            <a key={g.id} href={`${KITCHEN_CHART}#${g.id}`} className="group block bg-sand">
              <Img p={ph(g.photos[0])} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
              <p className="label px-4 py-4 text-ink group-hover:text-gold-ink">{g.h}</p>
            </a>
          ))}
        </div>
      </Section>
      <Section sand>
        <SectionHead eyebrow="Three finish levels" title="One kitchen, priced three ways" link={{ href: KITCHEN_COST, label: 'Full price breakdown' }} />
        <p className="mt-6 max-w-3xl text-ink-2">A galley kitchen of about 177 sq ft with 34 linear feet of cabinets, priced in October 2026 from our own price list. Same room and same trade work; only the finishes change. Permits, appliances and fixtures not included.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.name} className="bg-white p-8">
              <p className="label text-gold-ink">{t.name}</p>
              <p className="h-display mt-3 text-4xl text-ink">{t.total}</p>
              <ul className="mt-6 space-y-2">{t.lines.map((l) => <li key={l} className="flex gap-3 text-[15px] text-ink-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />{l}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHead eyebrow="What we build" title="Every part of the kitchen, one contractor" />
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {BUILD.map((b) => (
            <div key={b.h}>
              <h3 className="text-lg text-ink">{b.href ? <a href={b.href} className="underline decoration-line underline-offset-4 hover:text-gold-ink">{b.h}</a> : b.h}</h3>
              <p className="mt-2 text-ink-2">{b.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-16"><SectionHead eyebrow="Layouts" title="Galley, L, U or island" /></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LAYOUTS.map((l) => <div key={l.h} className="border border-line p-6"><p className="label text-ink">{l.h}</p><p className="mt-3 text-[15px] text-ink-2">{l.p}</p></div>)}
        </div>
      </Section>
    </>
  );
}

/** The Legno "send your color and lengths" block: what to send, then the one CTA (GymLogo intake, rule B1). */
export function KitchenOrder() {
  return (
    <Section sand>
      <div id="how-to-order" className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHead eyebrow="How to order" title="What to send for a kitchen estimate" />
          <ol className="mt-8 space-y-4">
            {ORDER.map((x, i) => <li key={x} className="flex gap-4 text-ink-2"><span className="text-xs tracking-label text-gold-ink">{String(i + 1).padStart(2, '0')}</span><span>{x}</span></li>)}
          </ol>
        </div>
        <div className="h-fit bg-white p-8">
          <p className="label text-ink">Send it in one form</p>
          <p className="mt-4 text-ink-2">Answer the questions in the estimate form and attach your photos. For remodels you get a ballpark from our price list before the site visit, then a written estimate with three finish levels after we measure.</p>
          <div className="mt-8"><Cta>Get your estimate</Cta></div>
          <p className="mt-6 text-sm text-muted">Or call <a href={telHref(facts.phone.value)} className="underline">{facts.phone.value}</a></p>
        </div>
      </div>
    </Section>
  );
}

export function KitchenCities() {
  return (
    <div id="kitchen-cities"><LinkList items={[...cityLinks(), { href: KITCHEN_CHART, label: 'Cabinet color chart' }]} /></div>
  );
}

// ── /services/cabinetry/color-chart ──────────────────────────────────────────────────────
export function KitchenChartView() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Custom Cabinetry', path: '/services/cabinetry' }, { name: 'Color chart', path: KITCHEN_CHART }];
  const intro = 'Kitchen styles and cabinet colors from Waltco Development\'s own jobs in Los Angeles, Beverly Hills, Santa Monica and Pacific Palisades, grouped so you can point to the look you want.';
  return (
    <main>
      <JsonLd data={[breadcrumbLd(trail), serviceLd('Cabinet Color Chart', KITCHEN_CHART, intro), faqLd(CHART_FAQ)]} />
      <PageHero eyebrow="Custom cabinetry" title="Cabinet Color Chart" tagline="Real kitchens and cabinets we built, grouped by cabinet color, counter and detail. Pick a look code and send it with your estimate request." photo={ph(CHART[0].photos[0])} trail={trail} />
      <Section>
        <p className="max-w-3xl text-lg text-ink-2">{intro} Every photo is captioned with the city and year. Colors on a screen are close but not exact, so we confirm every color with a sample before anything is finished.</p>
        <nav aria-label="Chart sections" className="mt-10">
          <ul className="flex flex-wrap gap-3">
            {CHART.map((g) => <li key={g.id}><a href={`#${g.id}`} className="label inline-block border border-line px-4 py-3 text-ink hover:border-ink">{g.h}</a></li>)}
          </ul>
        </nav>
      </Section>
      {CHART.map((g, i) => (
        <Section key={g.id} sand={i % 2 === 0}>
          <div id={g.id}>
            <SectionHead eyebrow={`${g.photos.length} photos`} title={g.h} />
            <p className="mt-6 max-w-3xl text-ink-2">{g.p}</p>
            <p className="mt-3 text-sm text-muted">{`To order this look, tell us: ${g.ask}`}</p>
            <div className="mt-10"><PhotoGrid photos={g.photos.map(ph)} /></div>
          </div>
        </Section>
      ))}
      <ChartLooks />
      <KitchenOrder />
      <Section><Faq items={CHART_FAQ} title="Color chart questions" /></Section>
      <Section sand>
        <SectionHead eyebrow="Kitchen remodeling" title="More kitchen pages" link={{ href: KITCHEN_HUB, label: 'Kitchen remodeling' }} />
        <div className="mt-10"><LinkList items={[{ href: KITCHEN_HUB, label: 'Kitchen remodeling in Los Angeles' }, { href: KITCHEN_COST, label: 'What a kitchen remodel costs' }, ...cityLinks(), { href: '/services/cabinetry', label: 'Custom cabinetry' }]} /></div>
      </Section>
    </main>
  );
}
