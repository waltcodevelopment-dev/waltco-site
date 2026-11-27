'use client';
import { useState } from 'react';

// Kitchen cost calculator: our price-list rates × the client's measurements, plus the fixed trade work from
// Estimate 79775 ($5,354), and the example's backsplash and other finish lines per level. With the defaults
// (34 LF, 41 sq ft, 177 sq ft) it reproduces the example exactly: $20,146 / $37,242 / $60,433. Standard / mid-range / high-end, same as the priced example.
const LEVELS = [
  { name: 'Standard', cab: 275, counter: 40, floor: 7, finish: 2563 },
  { name: 'Mid-range', cab: 650, counter: 100, floor: 14, finish: 3210 },
  { name: 'High-end', cab: 1200, counter: 150, floor: 20, finish: 4589 },
];
const TRADE = 5354;
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;

function Field({ id, label, unit, value, set }: { id: string; label: string; unit: string; value: number; set: (n: number) => void }) {
  return (
    <label htmlFor={id} className="block">
      <span className="label text-ink">{label}</span>
      <span className="mt-2 flex items-center border border-line bg-white">
        <input id={id} type="number" min={0} inputMode="decimal" value={value} onChange={(e) => set(Math.max(0, Number(e.target.value) || 0))}
          className="w-full px-4 py-3 text-lg text-ink outline-none" />
        <span className="px-4 text-sm text-muted">{unit}</span>
      </span>
    </label>
  );
}

export function Calculator() {
  const [lf, setLf] = useState(34);
  const [counter, setCounter] = useState(41);
  const [floor, setFloor] = useState(177);
  const [withFloor, setWithFloor] = useState(true);
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <div className="space-y-6">
        <Field id="calc-lf" label="Cabinet run" unit="linear ft" value={lf} set={setLf} />
        <Field id="calc-counter" label="Counter area" unit="sq ft" value={counter} set={setCounter} />
        <Field id="calc-floor" label="Floor area" unit="sq ft" value={floor} set={setFloor} />
        <label className="flex items-center gap-3 text-ink-2"><input type="checkbox" checked={withFloor} onChange={(e) => setWithFloor(e.target.checked)} /> Include a new wood floor</label>
        <p className="text-sm text-muted">Starts with our 177 sq ft example kitchen, so the first totals match its estimates. Backsplash and other finish lines come from the same example; trade work ({usd(TRADE)}) covers demolition, reconnects, outlets, patching and clean-up.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3" aria-live="polite">
        {LEVELS.map((l) => {
          const cab = lf * l.cab, ct = counter * l.counter, fl = withFloor ? floor * l.floor : 0;
          return (
            <div key={l.name} className="bg-white p-6">
              <p className="label text-gold-ink">{l.name}</p>
              <p className="h-display mt-3 text-3xl text-ink">{usd(cab + ct + fl + l.finish + TRADE)}</p>
              <dl className="mt-5 space-y-1 text-sm text-ink-2">
                <div className="flex justify-between gap-2"><dt>Cabinets</dt><dd>{usd(cab)}</dd></div>
                <div className="flex justify-between gap-2"><dt>Counters</dt><dd>{usd(ct)}</dd></div>
                {withFloor && <div className="flex justify-between gap-2"><dt>Floor</dt><dd>{usd(fl)}</dd></div>}
                <div className="flex justify-between gap-2"><dt>Backsplash, other</dt><dd>{usd(l.finish)}</dd></div>
                <div className="flex justify-between gap-2"><dt>Trade work</dt><dd>{usd(TRADE)}</dd></div>
              </dl>
            </div>
          );
        })}
        <p className="text-sm text-muted sm:col-span-3">A ballpark from our rates, not a quote. Permits, appliances, sinks and fixtures not included.</p>
      </div>
    </div>
  );
}
