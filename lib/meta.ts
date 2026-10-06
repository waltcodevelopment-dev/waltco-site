// Titles and descriptions (A3; addendum D limits: title ≤ 60 chars and unique, no doubled suffix;
// description 70–160 chars and unique). Pure TS for node --test.
import { facts } from '../content/facts.ts';
import type { Route } from '../content/routes.ts';

const NAME = facts.businessName.value;
const fit = (...options: string[]) => options.find((t) => t.length <= 60) ?? options[options.length - 1].slice(0, 60);

export function titleFor(r: Route): string {
  switch (r.kind) {
    case 'home':
      return fit(`${NAME} — General Contractor & Hardwood Flooring, LA`, `${NAME} — General Contractor, Los Angeles`);
    case 'service':
      return fit(`${r.label} in Los Angeles — ${NAME}`, `${r.label} — ${NAME}`);
    case 'area':
      return fit(`General Contractor ${r.label} | ${NAME}`, `Contractor ${r.label} | ${NAME}`);
    default:
      return fit(`${r.label} | ${NAME}`, r.label);
  }
}

export function descriptionFor(r: Route): string {
  const lic = `CSLB #${facts.licenseNumber.value}`;
  const d = (() => {
    switch (r.kind) {
      case 'home':
        return `${NAME} is a licensed general contractor in Los Angeles (${lic}). Every inquiry is answered, and estimates come from our own numbers.`;
      case 'service':
        return `${r.label} in Los Angeles by ${NAME}, a licensed general contractor (${lic}). Request an estimate online.`;
      case 'area':
        return `${NAME} works as a licensed general contractor in ${r.label} (${lic}). Request an estimate for your project online.`;
      case 'contact':
        return `Contact ${NAME}, licensed general contractor in Los Angeles (${lic}): phone, email, and an online estimate request.`;
      default:
        return `${r.label} — ${NAME}, licensed general contractor in Los Angeles (${lic}). Request an estimate online.`;
    }
  })();
  return d.length <= 160 ? d : `${d.slice(0, 157)}…`;
}
