import { INTAKE_URL } from '@/content/facts.ts';

// The only call to action on the site (B1): every one opens the GymLogo intake. Marked data-cta so the
// built-page test can check every CTA's href. Styles follow the live site's square, uppercase buttons.
const STYLES = {
  dark: 'bg-charcoal text-white hover:bg-black',            // on light grounds
  light: 'bg-white text-ink hover:bg-sand',                  // on photos / dark grounds
  outline: 'border border-white/60 text-white hover:border-white hover:bg-white/10', // on photos / dark grounds
  gold: 'bg-gold text-ink hover:bg-[#d6b75c]',               // on dark grounds
} as const;

export function Cta({ children = 'Get your estimate', variant = 'dark' }: { children?: string; variant?: keyof typeof STYLES }) {
  return (
    <a data-cta href={INTAKE_URL} className={`label inline-flex items-center justify-center px-6 py-4 transition-colors ${STYLES[variant]}`}>
      {children}
    </a>
  );
}
