import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_URL } from '@/content/facts.ts';
import { isIndexable } from '@/lib/seo.ts';

// next/font downloads the fonts at build time and serves them from this site: no Google Fonts request at runtime.
const display = Manrope({ subsets: ['latin'], weight: ['700'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: isIndexable() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ground font-sans text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
