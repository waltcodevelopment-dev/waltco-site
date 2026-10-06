import { Cta } from './Cta';
import { Img } from './Img';
import type { Photo } from '@/content/photos.ts';

// Shared building blocks in the live-site style: dark photo hero, gold eyebrows, light headings, square edges.

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/70">
      <ol className="flex flex-wrap gap-2">
        {trail.map((t, i) => (
          <li key={t.path} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < trail.length - 1 ? <a href={t.path} className="hover:text-white">{t.name}</a> : <span aria-current="page" className="text-white">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, tagline, photo, trail, cta = true }: {
  eyebrow: string; title: string; tagline?: string; photo?: Photo; trail: { name: string; path: string }[]; cta?: boolean;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-charcoal text-white">
      {photo && <Img p={photo} eager sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover" />}
      {photo && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />}
      <div className="mx-auto max-w-site px-4 pb-20 pt-10 sm:px-6 sm:pb-28">
        <Breadcrumbs trail={trail} />
        <p className="eyebrow mt-14">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-3xl text-4xl sm:text-6xl">{title}</h1>
        {tagline && <p className="mt-6 max-w-xl text-lg text-white/85">{tagline}</p>}
        {cta && <div className="mt-10"><Cta variant="light">Get your estimate</Cta></div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, link }: { eyebrow: string; title: string; link?: { href: string; label: string } }) {
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

export function Section({ children, sand = false }: { children: React.ReactNode; sand?: boolean }) {
  return <section className={sand ? 'bg-sand' : ''}><div className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24">{children}</div></section>;
}

export function Faq({ items, title = 'Frequently asked questions' }: { items: { q: string; a: string }[]; title?: string }) {
  if (!items.length) return null;
  return (
    <div>
      <SectionHead eyebrow="Questions" title={title} />
      <dl className="mt-10 divide-y divide-line border-y border-line">
        {items.map((f) => (
          <div key={f.q} className="grid gap-3 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
            <dt className="font-medium text-ink">{f.q}</dt>
            <dd className="text-ink-2">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function PhotoGrid({ photos, cols = 3 }: { photos: Photo[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : ''}`}>
      {photos.map((p) => (
        <figure key={p.id} className="overflow-hidden bg-sand">
          <Img p={p} sizes={cols === 3 ? '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 640px) 50vw, 100vw'} className="aspect-[4/3] w-full object-cover" />
          <figcaption className="px-1 py-3 text-sm text-ink-2">{p.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <li key={i.href} className="bg-white"><a href={i.href} className="flex items-center justify-between px-5 py-4 text-[15px] text-ink hover:bg-sand">{i.label}<span aria-hidden className="text-gold-ink">→</span></a></li>
      ))}
    </ul>
  );
}
