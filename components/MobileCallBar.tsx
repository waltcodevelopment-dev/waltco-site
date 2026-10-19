import { facts, telHref } from '@/content/facts.ts';
import { Cta } from './Cta';

// Phones only: a bar fixed to the bottom of the screen with the two actions that bring work in —
// call, or open the estimate form. Added 19 Oct 2026 so the phone number is one tap away on every page.
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white sm:hidden [&_a[data-cta]]:w-full">
      <a href={telHref(facts.phone.value)} className="label flex items-center justify-center px-4 py-4 text-ink">Call {facts.phone.value}</a>
      <Cta>Get your estimate</Cta>
    </div>
  );
}
