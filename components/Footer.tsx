import { addressLine, facts, licenceLine, telHref } from '@/content/facts.ts';
import { AREAS, SERVICES } from '@/content/routes.ts';

export function Footer() {
  const shop = facts.showroom.value;
  const mail = facts.mailing.value;
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-site gap-8 px-4 py-10 text-[15px] sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display font-bold text-primary">{facts.businessName.value}</p>
          <p className="mt-2 text-ink-2">{licenceLine()}</p>
          <p className="mt-2"><a href={telHref(facts.phone.value)}>{facts.phone.value}</a></p>
          <p><a href={`mailto:${facts.email.value}`}>{facts.email.value}</a></p>
          <p className="mt-3" data-address="showroom"><span className="font-medium">{`${shop.label}:`}</span> {addressLine(shop)}</p>
          <p className="mt-1 text-sm text-ink-2" data-address="mailing">{`${mail.label}: ${addressLine(mail)}`}</p>
        </div>
        <div>
          <p className="font-medium">Services</p>
          <ul className="mt-2 space-y-1 text-ink-2">
            {SERVICES.map((s) => <li key={s.slug}><a href={`/services/${s.slug}`} className="hover:text-primary">{s.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="font-medium">Service areas</p>
          <ul className="mt-2 space-y-1 text-ink-2">
            {AREAS.map((a) => <li key={a.slug}><a href={`/service-areas/${a.slug}`} className="hover:text-primary">{a.label}</a></li>)}
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-sm text-ink-2">© {facts.businessName.value}</p>
    </footer>
  );
}
