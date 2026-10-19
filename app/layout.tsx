import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import { SITE_URL } from '@/content/facts.ts';
import { isIndexable } from '@/lib/seo.ts';
import { businessLd } from '@/lib/schema.ts';
import { JsonLd } from '@/components/ui';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: isIndexable() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface pb-16 font-sans text-ink sm:pb-0">
        <JsonLd data={businessLd()} />
        <Header />
        {children}
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
