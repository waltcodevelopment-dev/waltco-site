import { facts, telHref } from '@/content/facts.ts';
import { Cta } from './Cta';
import { PlankIcon } from './PlankIcon';

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
    <a href="/" className="flex items-center gap-3">
      <PlankIcon className="h-[18px] w-auto shrink-0" />
      <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-ink sm:text-[13px] sm:tracking-label xl:text-[12px] xl:tracking-[0.14em]">{facts.businessName.value}</span>
    </a>
  );
}

// Live-site header: white bar, logo square, uppercase spaced nav, black call to action. On small screens the
// nav folds into a no-JavaScript <details> menu. The phone shows lg–xl (from xl the full nav needs the room; it is
// also in the footer and on Contact); below md the bottom call bar carries call and estimate
// (27 Nov 2026: header Call button dropped on phones and spacing tightened, so the bar no longer overflows).
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 xl:gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-3 xl:flex">
          {NAV.map((n) => <a key={n.href} href={n.href} className="whitespace-nowrap text-[11px] uppercase tracking-[0.1em] text-ink-2 hover:text-ink">{n.label}</a>)}
        </nav>
        <div className="hidden shrink-0 items-center gap-4 md:flex [&_a[data-cta]]:whitespace-nowrap">
          <a href={telHref(facts.phone.value)} className="hidden whitespace-nowrap text-sm font-semibold text-ink lg:inline xl:hidden">{facts.phone.value}</a>
          <Cta>Get your estimate</Cta>
        </div>
        <a href={telHref(facts.phone.value)} aria-label={`Call ${facts.phone.value}`} className="label ml-auto hidden border border-charcoal px-3 py-2 text-ink">Call</a>
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
