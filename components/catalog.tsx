import { Cta } from './Cta';
import { Img } from './Img';
import { Calculator } from './Calculator';
import { KitchenOrder } from './kitchen';
import { Faq, JsonLd, LinkList, PageHero, PhotoGrid, Section, SectionHead } from './ui';
import { SC_PHOTOS } from '@/content/sc-photos.ts';
import { BLOG_POSTS } from '@/content/routes.ts';
import { CAB, KIT, COLOR_CHART, LIVE, PLANNED, PROJECTS, STYLES, SUPPORT, catPage, looksOf, type CatPage } from '@/content/catalog.ts';
import { breadcrumbLd, collectionLd, faqLd, productLd, serviceLd } from '@/lib/schema.ts';

// E&K-model catalog page: hub → style → look, projects and buying pages, each with photos, specs, FAQ, schema
// and links to its parent, siblings and pairings.
const ph = (id: string) => SC_PHOTOS.find((p) => p.id === id)!;
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
export function CatCards({ pages, codes = false }: { pages: CatPage[]; codes?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pages.map((x) => (
        <a key={x.path} href={x.path} className="group block bg-sand">
          {x.photos[0] && <Img p={ph(x.photos[0])} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />}
          <p className="label px-4 pt-4 text-ink group-hover:text-gold-ink">{x.short}</p>
          {codes && x.code && <p className="px-4 pt-1 text-xs tracking-label text-muted">{x.code}</p>}
          <p className="px-4 pb-4 pt-2 text-sm text-ink-2">{x.tagline}</p>
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

export function CatalogView({ path }: { path: string }) {
  const p = catPage(path)!;
  const trail = trailOf(p);
  const photos = p.photos.map(ph).map((x) => (p.code ? { ...x, alt: `${x.alt} (look ${p.code})` } : x));
  const looks = p.kind === 'style' ? looksOf(p.path) : [];
  const siblings = (p.kind === 'look' ? LIVE.filter((x) => x.kind === 'look' && x.path !== p.path)
    : p.kind === 'style' ? STYLES.filter((x) => x.path !== p.path)
    : p.kind === 'project' ? PROJECTS.filter((x) => x.hub === p.hub && x.path !== p.path)
    : SUPPORT.filter((x) => x.path !== p.path));
  const pairs = (p.pairs ?? []).map(linkOf).filter((x): x is { href: string; label: string } => !!x);
  const guides = BLOG_POSTS.filter((b) => (p.guides ?? []).includes(b.slug) || b.slug === 'kitchen-remodel-cost-los-angeles-2026')
    .map((b) => ({ href: `/blog/${b.slug}`, label: b.label }));
  const summary = p.intro[0];
  const ld = [breadcrumbLd(trail), faqLd(p.faq)];
  if (p.kind === 'look') ld.push(productLd({ name: p.name, path: p.path, description: summary, sku: p.code!, images: p.photos.map((i) => ph(i).lg.src) }));
  else if (p.kind === 'style') ld.push(collectionLd(p.name, p.path, summary, looks.map((l) => ({ name: l.name, path: l.path }))));
  else ld.push(serviceLd(p.name, p.path, summary));
  const buying = [`${KIT}/pricing`, `${KIT}/cost-calculator`, `${KIT}/how-to-order`, COLOR_CHART].filter((x) => x !== p.path);

  return (
    <main>
      <JsonLd data={ld} />
      <PageHero eyebrow={p.code ? `Look ${p.code}` : HUB[p.hub].name} title={p.kind === 'look' || p.kind === 'style' ? `${p.name} in Los Angeles` : p.name} tagline={p.tagline} photo={photos[0]} trail={trail} />

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
              <div className="mt-5"><Specs specs={p.specs} /></div>
              <p className="mt-5 text-sm text-muted">To order, mention look code {p.code} in your estimate request.</p>
              <div className="mt-6"><Cta>Get your estimate</Cta></div>
            </div>
          )}
        </div>
      </Section>

      {looks.length > 0 && (
        <Section sand>
          <SectionHead eyebrow={`${looks.length} looks`} title={`${p.short} looks from our jobs`} link={{ href: COLOR_CHART, label: 'Full color chart' }} />
          <div className="mt-10"><CatCards pages={looks} codes /></div>
        </Section>
      )}

      {path === `${KIT}/cost-calculator` && (
        <Section sand>
          <SectionHead eyebrow="Calculator" title="Price your kitchen" />
          <div className="mt-10"><Calculator /></div>
        </Section>
      )}

      {photos.length > 0 && (
        <Section>
          <SectionHead eyebrow={`${photos.length} photos`} title={p.kind === 'project' && path.endsWith('full-kitchen-remodel') ? 'The kitchen, step by step' : `${p.short} photos from our jobs`} link={{ href: '/portfolio', label: 'Full portfolio' }} />
          <div className="mt-10"><PhotoGrid photos={photos.slice(p.kind === 'support' ? 0 : 1)} /></div>
        </Section>
      )}

      {p.sections.length > 0 && (
        <Section sand>
          <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
            {p.sections.map((s) => (
              <div key={s.h}>
                <h2 className="h-display text-2xl text-ink">{s.h}</h2>
                <div className="mt-4 space-y-3 text-ink-2">{s.p.map((x) => <p key={x.slice(0, 24)}>{x}</p>)}</div>
                {s.list && <ul className="mt-4 space-y-2">{s.list.map((x) => <li key={x} className="flex gap-3 text-ink-2"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />{x}</li>)}</ul>}
              </div>
            ))}
          </div>
        </Section>
      )}

      <KitchenOrder />
      <Section><Faq items={p.faq} title={`${p.short} questions`} /></Section>

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
  const looks = LIVE.filter((x) => x.kind === 'look');
  return (
    <Section>
      <SectionHead eyebrow={`${looks.length} looks with codes`} title="Order by look code" />
      <p className="mt-6 max-w-3xl text-ink-2">Each look has its own page with photos, specifications and a code. Mention the code in your estimate request and we start from that look.</p>
      <div className="mt-10"><CatCards pages={looks} codes /></div>
      <p className="mt-10 text-sm text-muted">{`More looks are coming as we photograph them: ${PLANNED.filter((x) => x.path.includes('-cabinets/') ).map((x) => x.name).join(', ')}.`}</p>
    </Section>
  );
}
