import { facts, telHref } from '@/content/facts.ts';
import { Cta } from './Cta';

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/services/hardwood-flooring', label: 'Wood Flooring' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blog', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-primary">{facts.businessName.value}</a>
        <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] text-ink-2">
          {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-4">
          <a href={telHref(facts.phone.value)} className="font-medium text-ink">{facts.phone.value}</a>
          <Cta>Get your estimate</Cta>
        </div>
      </div>
    </header>
  );
}
