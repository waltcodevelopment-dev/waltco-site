import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ROUTES } from '@/content/routes.ts';
import { canonicalFor } from '@/lib/seo.ts';
import { descriptionFor, titleFor } from '@/lib/meta.ts';
import { licenceLine } from '@/content/facts.ts';
import { Cta } from '@/components/Cta';

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

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const r = find((await params).slug);
  if (!r) notFound();
  return (
    <main className="mx-auto max-w-site px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink">{r.label}</h1>
      <p className="mt-3 text-ink-2">{licenceLine()}</p>
      <p className="mt-6 max-w-2xl text-ink-2">This page is being rewritten from the Waltco fact sheet.</p>
      <div className="mt-8"><Cta /></div>
    </main>
  );
}
