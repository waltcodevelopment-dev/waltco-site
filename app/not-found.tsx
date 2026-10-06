import { Cta } from '@/components/Cta';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-site px-4 py-14 sm:px-6">
      <h1 className="h-display text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-ink-2">
        Go to the <a className="text-gold-ink underline" href="/">home page</a>, see our{' '}
        <a className="text-gold-ink underline" href="/services">services</a>, or <a className="text-gold-ink underline" href="/contact">contact us</a>.
      </p>
      <div className="mt-8"><Cta /></div>
    </main>
  );
}
