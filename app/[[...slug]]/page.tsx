import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ROUTES } from '@/content/routes.ts';
import { canonicalFor } from '@/lib/seo.ts';
import { descriptionFor, titleFor } from '@/lib/meta.ts';
import { licenceLine } from '@/content/facts.ts';
import { Cta } from '@/components/Cta';
import { Home } from '@/components/home/Home';

// One template for all 35 approved URLs during W1. Page copy arrives in W2 (Jasper, from the fact sheet only);
// until then each page shows its heading, the licence line and the one call to action.

export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.path === '/' ? [] : r.path.slice(1).split('/') }));
}

const find = (slug?: string[]) => ROUTES.find((r) => r.path === (slug?.length ? `/${slug.join('/')}` : '/'));

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const r = find((await params).slug);
  if (!r) return {};
  return { title: { absolute: titleFor(r) }, description: descriptionFor(r), alternates: { canonical: canonicalFor(r.path) } };
}

const EYEBROW: Record<string, string> = {
  home: 'General Contractor · Los Angeles', page: 'Waltco Development', service: 'Services', area: 'Service Areas',
  'blog-index': 'Resources', blog: 'Resources', contact: 'Contact',
};

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const r = find((await params).slug);
  if (!r) notFound();
  if (r.kind === 'home') return <Home />;
  return (
    <main>
      {/* Live-site page hero: dark ground (the project photo goes behind it in W2), gold eyebrow, light heading. */}
      <section className="on-dark relative bg-charcoal py-20 text-white sm:py-28">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <p className="eyebrow">{EYEBROW[r.kind]}</p>
          <h1 className="h-display mt-5 text-4xl sm:text-6xl">
            {r.label}
          </h1>
          <p className="mt-6 max-w-xl text-on-dark">{licenceLine()}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Cta variant="light">Get your estimate</Cta>
          </div>
        </div>
      </section>
      <section className="bg-sand">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6">
          <p className="eyebrow">In progress</p>
          <h2 className="h-display mt-4 text-3xl text-ink">This page is being rewritten from the Waltco fact sheet.</h2>
        </div>
      </section>
    </main>
  );
}
