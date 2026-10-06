import { facts, telHref } from '@/content/facts.ts';
import { Cta } from './Cta';

const NAV = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/services/hardwood-flooring', label: 'Wood Flooring' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Resources' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/contact', label: 'Contact' },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label={`${facts.businessName.value} — home`}>
      <span aria-hidden className="grid h-9 w-9 place-items-center bg-charcoal text-sm font-bold text-gold">W</span>
      <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-label text-ink">{facts.businessName.value}</span>
    </a>
  );
}

// Live-site header: white bar, logo square, uppercase spaced nav, black call to action. On small screens the
// nav folds into a no-JavaScript <details> menu.
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
          {NAV.map((n) => <a key={n.href} href={n.href} className="whitespace-nowrap text-[11px] uppercase tracking-[0.15em] text-ink-2 hover:text-ink">{n.label}</a>)}
        </nav>
        <div className="hidden items-center gap-5 sm:flex [&_a[data-cta]]:whitespace-nowrap">
          <a href={telHref(facts.phone.value)} className="hidden whitespace-nowrap text-sm text-ink 2xl:inline">{facts.phone.value}</a>
          <Cta>Get your estimate</Cta>
        </div>
        <details className="relative xl:hidden">
          <summary className="label cursor-pointer list-none border border-line px-3 py-2 text-ink">Menu</summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 w-64 border border-line bg-white p-4 shadow-lg">
            {NAV.map((n) => <a key={n.href} href={n.href} className="block py-2 text-[12px] uppercase tracking-label text-ink-2 hover:text-ink">{n.label}</a>)}
            <a href={telHref(facts.phone.value)} className="mt-2 block py-2 text-sm text-ink">{facts.phone.value}</a>
            <div className="mt-3"><Cta>Get your estimate</Cta></div>
          </nav>
        </details>
      </div>
    </header>
  );
}
