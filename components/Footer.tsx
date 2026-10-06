import { addressLine, facts, licenceLine, telHref } from '@/content/facts.ts';
import { AREAS, SERVICES } from '@/content/routes.ts';
import { Cta } from './Cta';

// Live-site closing band (#1A1A1A) and dark footer (#111). Facts come only from content/facts.ts.
export function Footer() {
  const shop = facts.showroom.value;
  const mail = facts.mailing.value;
  return (
    <>
      <section className="on-dark bg-charcoal text-white">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Start your project</p>
            <h2 className="h-display mt-4 text-3xl sm:text-4xl">Let&rsquo;s build something great together.</h2>
            <p className="mt-4 max-w-xl text-on-dark">Tell us about the project and you get a reply from Waltco Development.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Cta variant="gold">Get your estimate</Cta>
            <a href={telHref(facts.phone.value)} className="label inline-flex items-center border border-white/40 px-6 py-4 text-white hover:border-white">Call {facts.phone.value}</a>
          </div>
        </div>
      </section>
      <footer className="on-dark bg-night text-white">
        <div className="mx-auto grid max-w-site gap-10 px-4 py-16 text-sm sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-label">{facts.businessName.value}</p>
            <p className="mt-3 text-gold">{licenceLine()}</p>
            <p className="mt-5"><a href={telHref(facts.phone.value)} className="hover:text-gold">{facts.phone.value}</a></p>
            <p><a href={`mailto:${facts.email.value}`} className="hover:text-gold">{facts.email.value}</a></p>
            <p className="mt-3 text-on-dark" data-hours>{facts.hours.value}</p>
            <p className="mt-5" data-address="showroom"><span className="font-semibold">{`${shop.label}:`}</span> {addressLine(shop)}</p>
            <p className="mt-1 text-xs text-on-dark" data-address="mailing">{`${mail.label}: ${addressLine(mail)}`}</p>
          </div>
          <div>
            <p className="label text-gold">Services</p>
            <ul className="mt-4 space-y-2 text-on-dark">
              {SERVICES.map((s) => <li key={s.slug}><a href={`/services/${s.slug}`} className="hover:text-white">{s.label}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="label text-gold">Service areas</p>
            <ul className="mt-4 space-y-2 text-on-dark">
              {AREAS.map((a) => <li key={a.slug}><a href={`/service-areas/${a.slug}`} className="hover:text-white">{a.label}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 px-4 py-6 text-center text-xs text-on-dark">© {facts.businessName.value} · CSLB #{facts.licenseNumber.value}</p>
      </footer>
    </>
  );
}
