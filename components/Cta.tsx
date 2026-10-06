import { INTAKE_URL } from '@/content/facts.ts';

// The only call to action on the site (B1): every one opens the GymLogo intake. Marked data-cta so the
// built-page test can check every CTA's href.
export function Cta({ children = 'Get your estimate', variant = 'primary' }: { children?: string; variant?: 'primary' | 'quiet' }) {
  const cls = variant === 'primary'
    ? 'inline-flex items-center rounded bg-primary px-5 py-3 font-medium text-white hover:bg-[#162c48]'
    : 'inline-flex items-center rounded border border-line bg-surface px-5 py-3 font-medium text-primary hover:border-primary';
  return <a data-cta href={INTAKE_URL} className={cls}>{children}</a>;
}
