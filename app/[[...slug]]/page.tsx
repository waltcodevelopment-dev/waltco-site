import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ROUTES } from '@/content/routes.ts';
import { canonicalFor } from '@/lib/seo.ts';
import { descriptionFor, titleFor } from '@/lib/meta.ts';
import { Home } from '@/components/home/Home';
import { AboutPage, AreaPageView, AreasIndexPage, BlogIndexPage, ContactPage, PortfolioPage, PostPageView, ServicePageView, ServicesIndexPage } from '@/components/pages';

// All 35 approved URLs are prerendered from content/*.ts; nothing else exists (dynamicParams = false).
export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.path === '/' ? [] : r.path.slice(1).split('/') }));
}

const find = (slug?: string[]) => ROUTES.find((r) => r.path === (slug?.length ? `/${slug.join('/')}` : '/'));

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const r = find((await params).slug);
  if (!r) return {};
  const title = titleFor(r);
  const description = descriptionFor(r);
  const url = canonicalFor(r.path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: r.kind === 'blog' ? 'article' : 'website', url, title, description, siteName: 'Waltco Development', locale: 'en_US',
      images: [{ url: '/og/waltco-development.jpg', width: 1200, height: 630, alt: 'Waltco Development — licensed general contractor, Los Angeles' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og/waltco-development.jpg'] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const r = find((await params).slug);
  if (!r) notFound();
  const leaf = r.path.split('/').pop()!;
  switch (r.kind) {
    case 'home': return <Home />;
    case 'service': return <ServicePageView slug={leaf} />;
    case 'area': return <AreaPageView slug={leaf} />;
    case 'blog': return <PostPageView slug={leaf} />;
    case 'blog-index': return <BlogIndexPage />;
    case 'contact': return <ContactPage />;
    default:
      switch (r.path) {
        case '/about': return <AboutPage />;
        case '/services': return <ServicesIndexPage />;
        case '/portfolio': return <PortfolioPage />;
        case '/service-areas': return <AreasIndexPage />;
      }
  }
  notFound();
}
