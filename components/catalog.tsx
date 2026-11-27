import { Fragment } from 'react';
import { Cta } from './Cta';
import { Img } from './Img';
import { Calculator } from './Calculator';
import { Gallery } from './Gallery';
import { KitchenOrder } from './kitchen';
import { Breadcrumbs, Faq, JsonLd, LinkList, PageHero, PhotoGrid, Section, SectionHead } from './ui';
import { SC_PHOTOS } from '@/content/sc-photos.ts';
import { CAT_PHOTOS } from '@/content/cat-photos.ts';
import { LINE_PHOTOS } from '@/content/line-photos.ts';
import { BLOG_POSTS } from '@/content/routes.ts';
import { CAB, KIT, COLOR_CHART, LIVE, SWATCH, PLANNED, PROJECTS, STYLES, SUPPORT, catPage, looksOf, type CatPage } from '@/content/catalog.ts';
import { breadcrumbLd, collectionLd, faqLd, productLd, serviceLd } from '@/lib/schema.ts';

// E&K-model catalog page: hub → style → look, projects and buying pages, each with photos, specs, FAQ, schema
// and links to its parent, siblings and pairings.
const ALL = [...SC_PHOTOS, ...CAT_PHOTOS, ...LINE_PHOTOS];
const ph = (id: string) => ALL.find((p) => p.id === id)!;
const HUB = { cabinetry: { name: 'Custom Cabinetry', path: CAB }, 'kitchen-remodeling': { name: 'Kitchen Remodeling', path: KIT } } as const;
const linkOf = (path: string) => {
  const p = catPage(path);
  if (p) return { href: p.path, label: p.name };
  if (path === '/services/bathroom-remodeling') return { href: path, label: 'Bathroom remodeling' };
  if (path === '/services/hardwood-flooring') return { href: path, label: 'Hardwood flooring' };
  return null;
};

export function trailOf(p: CatPage) {
  const hub = HUB[p.hub];
  const t = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: hub.name, path: hub.path }];
  const st = p.style ? catPage(p.style) : undefined;
  if (st) t.push({ name: st.short, path: st.path });
  t.push({ name: p.short, path: p.path });
  return t;
}

/** Card grid of catalog pages (looks on a style page, styles on a hub). */
export function CatCards({ pages, codes = false, brief = false }: { pages: CatPage[]; codes?: boolean; brief?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pages.map((x) => (
        <a key={x.path} href={x.path} className="group block bg-sand">
          {x.photos[0] && <Img p={ph(x.photos[0])} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />}
          <p className="label px-4 pt-4 text-ink group-hover:text-gold-ink">{x.short}</p>
          {codes && x.code && <p className="px-4 pt-1 text-xs tracking-label text-muted">{x.code}</p>}
          {brief ? <div className="pb-4" /> : <p className="px-4 pb-4 pt-2 text-sm text-ink-2">{x.tagline}</p>}
        </a>
      ))}
    </div>
  );
}

function Specs({ specs }: { specs: [string, string][] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {specs.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 py-3 text-[15px]"><dt className="text-muted">{k}</dt><dd className="text-ink">{v}</dd></div>
      ))}
    </dl>
  );
}


/** Product-page top for a look (E&K product layout): gallery left, name, code, color, price and buttons right. */
function LookTop({ p, photos, trail }: { p: CatPage; photos: ReturnType<typeof ph>[]; trail: { name: string; path: string }[] }) {
  const spec = (k: string) => p.specs?.find(([a]) => a === k)?.[1];
  const facts = [['Door', spec('Door')], ['Finish', spec('Finish') ?? spec('Color')], [p.line ? 'Line' : 'Built', p.line ? 'Factory finished' : 'Prefab, painted or custom']].filter((f) => f[1]) as [string, string][];
  return (
    <section className="on-dark bg-charcoal text-white">
      <div className="mx-auto max-w-site px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        <Breadcrumbs trail={trail} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div>
            <Gallery photos={photos} />
            {p.line && <p className="mt-2 text-xs text-white/55">Catalog photos of the prefabricated line we install, not photos of our jobs.</p>}
          </div>
          <div className="lg:pt-2">
            <p className="eyebrow">{p.line ? 'Prefabricated line' : 'From our jobs'} · {p.code}</p>
            <h1 className="h-display mt-4 text-4xl leading-tight sm:text-5xl">{p.name}</h1>
            <p className="mt-2 text-sm uppercase tracking-label text-white/60">Installed in Los Angeles by Waltco Development</p>
            <p className="mt-6 text-lg text-white/85">{p.tagline}</p>
            {SWATCH[p.code!] && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-label text-white/60">Color</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {SWATCH[p.code!].map((c) => <span key={c} title={c} className="h-10 w-10 border border-white/30" style={{ backgroundColor: c }} />)}
                  <span className="text-xs text-white/55">Approximate on screen; confirmed with a sample.</span>
                </div>
              </div>
            )}
            <div className="mt-8 border-y border-white/15 py-6">
              <p className="h-display text-4xl">{p.line ? '$275' : '$275 – $1,200'}<span className="ml-2 text-base text-white/65">per linear foot</span></p>
              <p className="mt-1 text-sm text-white/60">{p.line ? 'Prefabricated, factory finished. Install, counters and floor on the same estimate.' : 'Prefabricated, new stained or painted, or custom built.'}</p>
            </div>
            <dl className="mt-6 grid grid-cols-[6rem_1fr] gap-y-2 text-sm">
              {facts.map(([k, v]) => <Fragment key={k}><dt className="text-white/55">{k}</dt><dd className="text-white/90">{v}</dd></Fragment>)}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta variant="gold">Get your estimate</Cta>
              <a href={`${KIT}/cost-calculator`} className="label inline-flex items-center justify-center border border-white/60 px-6 py-4 text-white hover:border-white hover:bg-white/10">Price my kitchen</a>
            </div>
            <p className="mt-4 text-xs text-white/55">{`Mention code ${p.code} in your request.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CatalogView({ path }: { path: string }) {
  const p = catPage(path)!;
  const trail = trailOf(p);
  const photos = p.photos.map(ph).map((x) => (p.code ? { ...x, alt: `${x.alt} (look ${p.code})` } : x));
  const looks = p.kind === 'style' ? looksOf(p.path) : [];
  const siblings = (p.kind === 'look' ? LIVE.filter((x) => x.kind === 'look' && x.path !== p.path && !!x.line === !!p.line)
    : p.kind === 'style' ? STYLES.filter((x) => x.path !== p.path)
    : p.kind === 'project' ? PROJECTS.filter((x) => x.hub === p.hub && x.path !== p.path)
    : SUPPORT.filter((x) => x.path !== p.path));
  const pairs = (p.pairs ?? []).map(linkOf).filter((x): x is { href: string; label: string } => !!x);
  const auto = p.line ? ['prefab-vs-custom-kitchen-cabinets', 'kitchen-cabinet-cost-per-linear-foot-los-angeles']
    : p.kind === 'look' || p.kind === 'style' ? ['cabinet-door-styles-explained', 'how-to-choose-kitchen-cabinet-colors']
    : path.includes('countertops') || path.includes('islands') ? ['quartz-vs-marble-vs-granite-countertops']
    : p.kind === 'support' ? ['how-to-measure-kitchen-for-new-cabinets', 'kitchen-cabinet-cost-per-linear-foot-los-angeles']
    : ['refinish-or-replace-kitchen-cabinets'];
  const guides = BLOG_POSTS.filter((b) => [...(p.guides ?? []), ...auto].includes(b.slug) || b.slug === 'kitchen-remodel-cost-los-angeles-2026')
    .map((b) => ({ href: `/blog/${b.slug}`, label: b.label }));
  const summary = p.intro[0];
  const ld = [breadcrumbLd(trail), faqLd(p.faq)];
  if (p.kind === 'look') ld.push(productLd({ name: p.name, path: p.path, description: summary, sku: p.code!, images: p.photos.map((i) => ph(i).lg.src), line: p.line }));
  else if (p.kind === 'style') ld.push(collectionLd(p.name, p.path, summary, looks.map((l) => ({ name: l.name, path: l.path }))));
  else ld.push(serviceLd(p.name, p.path, summary));
  const buying = [`${KIT}/pricing`, `${KIT}/cost-calculator`, `${KIT}/how-to-order`, COLOR_CHART].filter((x) => x !== p.path);

  return (
    <main>
      <JsonLd data={ld} />
      {p.kind === 'look' ? <LookTop p={p} photos={photos} trail={trail} /> : <PageHero eyebrow={p.code ? `Look ${p.code}` : HUB[p.hub].name} title={p.kind === 'style' ? `${p.name} in Los Angeles` : p.name} tagline={p.tagline} photo={photos[0]} trail={trail} />}

      <Section>
        <div className={p.specs ? 'grid gap-14 lg:grid-cols-[1.3fr_1fr]' : ''}>
          <div className="max-w-3xl">
            <div className="space-y-4 text-lg text-ink-2">{p.intro.map((x) => <p key={x.slice(0, 24)}>{x}</p>)}</div>
            {p.tones && (
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div><p className="eyebrow">Color and tone</p><p className="mt-3 text-ink-2">{p.tones}</p></div>
                <div><p className="eyebrow">Kitchens it suits</p><p className="mt-3 text-ink-2">{p.suits}</p></div>
              </div>
            )}
          </div>
          {p.specs && (
            <div className="h-fit bg-sand p-8">
              <p className="label text-ink">Specifications</p>
              {p.kind === 'look' && <p className="mt-1 text-xs text-muted">{`${p.name} · ${p.code}`}</p>}
              <div className="mt-5"><Specs specs={p.specs} /></div>
              <p className="mt-5 text-sm text-muted">To order, mention look code {p.code} in your estimate request.</p>
            </div>
          )}
        </div>
      </Section>

      {looks.length > 0 && (
        <Section sand>
          <SectionHead eyebrow={`${looks.length} looks`} title={p.line ? 'Colors and styles in the line' : `${p.short} looks from our jobs`} link={{ href: COLOR_CHART, label: 'Full color chart' }} />
          <div className="mt-10"><CatCards pages={looks} codes /></div>
        </Section>
      )}

      {path === `${KIT}/cost-calculator` && (
        <Section sand>
          <SectionHead eyebrow="Calculator" title="Price your kitchen" />
          <div className="mt-10"><Calculator /></div>
        </Section>
      )}

      {photos.length > 0 && p.kind !== 'look' && (
        <Section>
          <SectionHead eyebrow={`${photos.length} photos`} title={p.line ? `${p.short}: photos of the line` : p.kind === 'project' && path.endsWith('full-kitchen-remodel') ? 'The kitchen, step by step' : `${p.short} photos from our jobs`} link={{ href: p.line ? COLOR_CHART : '/portfolio', label: p.line ? 'Our own jobs by color' : 'Full portfolio' }} />
          {p.line && <p className="mt-4 max-w-3xl text-sm text-muted">Catalog photos of the prefabricated line we install, not photos of our jobs. Our own installed kitchens are on our other cabinet pages, captioned with city and year.</p>}
          <div className="mt-10"><PhotoGrid photos={photos.slice(p.kind === 'support' ? 0 : 1)} /></div>
        </Section>
      )}

      {p.sections.length > 0 && (
        <Section sand>
          <div className={p.kind === 'look' ? 'grid gap-4 md:grid-cols-3' : 'grid gap-x-14 gap-y-12 md:grid-cols-2'}>
            {p.sections.map((s, n) => (
              <div key={s.h} className={p.kind === 'look' ? 'bg-white p-8' : ''}>
                {p.kind === 'look' && <p className="text-xs tracking-label text-gold-ink">{String(n + 1).padStart(2, '0')}</p>}
                <h2 className={`h-display text-2xl text-ink ${p.kind === 'look' ? 'mt-3' : ''}`}>{s.h}</h2>
                <div className="mt-4 space-y-3 text-ink-2">{s.p.map((x) => <p key={x.slice(0, 24)}>{x}</p>)}</div>
                {s.list && <ul className="mt-4 space-y-2">{s.list.map((x) => <li key={x} className="flex gap-3 text-ink-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />{x}</li>)}</ul>}
              </div>
            ))}
          </div>
        </Section>
      )}

      <KitchenOrder />
      <Section><Faq items={p.faq} title={`${p.short} questions`} /></Section>

      {p.kind === 'look' && siblings.length > 0 && (
        <Section>
          <SectionHead eyebrow={p.line ? 'Prefabricated line' : 'More looks'} title={p.line ? 'More colors in the line' : 'More looks from our jobs'} link={{ href: p.line ? `${CAB}/prefabricated-cabinets` : COLOR_CHART, label: p.line ? 'All prefabricated cabinets' : 'Cabinet color chart' }} />
          <div className="mt-10"><CatCards pages={siblings.slice(0, 8)} codes brief /></div>
        </Section>
      )}

      <Section sand>
        {pairs.length > 0 && (
          <div className="mb-14">
            <SectionHead eyebrow="Goes with" title="Pairs well with" />
            <div className="mt-8"><LinkList items={pairs} /></div>
          </div>
        )}
        <SectionHead eyebrow={HUB[p.hub].name} title={p.kind === 'look' ? 'Other looks' : p.kind === 'style' ? 'Other cabinet styles' : p.kind === 'project' ? 'Related projects' : 'Planning your kitchen'} link={{ href: HUB[p.hub].path, label: HUB[p.hub].name }} />
        <div className="mt-8"><LinkList items={[...siblings.map((x) => ({ href: x.path, label: x.name })), ...buying.filter((b) => !siblings.some((s) => s.path === b)).map((b) => linkOf(b) ?? { href: b, label: 'Cabinet color chart' }), ...guides]} /></div>
      </Section>
    </main>
  );
}

/** Catalog links added to the cabinetry and kitchen service pages (one section, additive). */
export function CatalogHubLinks({ hub }: { hub: 'cabinetry' | 'kitchen-remodeling' }) {
  const projects = PROJECTS.filter((x) => x.hub === hub);
  const support = SUPPORT.map((x) => ({ href: x.path, label: x.name }));
  return (
    <Section>
      {hub === 'cabinetry' && (
        <div className="mb-16">
          <SectionHead eyebrow="Cabinet styles" title="Door styles and looks" link={{ href: COLOR_CHART, label: 'Cabinet color chart' }} />
          <div className="mt-10"><CatCards pages={STYLES} /></div>
        </div>
      )}
      <SectionHead eyebrow="Projects" title={hub === 'cabinetry' ? 'Cabinetry we build' : 'Kitchen projects'} />
      <div className="mt-10"><CatCards pages={projects} /></div>
      <div className="mt-14"><LinkList items={[...support, { href: COLOR_CHART, label: 'Cabinet color chart' }]} /></div>
    </Section>
  );
}

/** Color chart: every live look with its code, then the looks we are photographing next. */
export function ChartLooks() {
  const looks = LIVE.filter((x) => x.kind === 'look' && !x.line);
  const line = LIVE.filter((x) => x.kind === 'look' && x.line);
  return (
    <Section>
      <SectionHead eyebrow={`${looks.length} looks with codes`} title="Order by look code" />
      <p className="mt-6 max-w-3xl text-ink-2">Each look has its own page with photos, specifications and a code. Mention the code in your estimate request and we start from that look.</p>
      <div className="mt-10"><CatCards pages={looks} codes /></div>
      {line.length > 0 && (
        <div className="mt-16">
          <SectionHead eyebrow={`${line.length} prefabricated colors`} title="Prefabricated line, $275 per linear foot" link={{ href: `${CAB}/prefabricated-cabinets`, label: 'Prefabricated cabinets' }} />
          <p className="mt-6 max-w-3xl text-ink-2">Factory-finished colors from the line we install, shown in catalog photos of the line.</p>
          <div className="mt-10"><CatCards pages={line} codes /></div>
        </div>
      )}
      <p className="mt-10 text-sm text-muted">{`More looks are coming as we photograph them: ${PLANNED.filter((x) => x.path.includes('-cabinets/') ).map((x) => x.name).join(', ')}.`}</p>
    </Section>
  );
}
