'use client';
import { useMemo, useState } from 'react';
import { Cta } from './Cta';

// Kitchen quick-quote: guided by layout shape, like the box-beam measuring guide. Rates are our price list
// (cabinets per linear foot, counters and floors per sq ft). Everything else comes from Estimate 79775 (19 Oct 2026):
// 34 LF of cabinets, 41 sq ft of counter (1.2 sq ft per LF), 177 sq ft of floor, $5,354 of trade work, and the
// backsplash and other finish lines per level, scaled here by cabinet length. A galley of 17 + 17 ft with the
// example floor reproduces that estimate exactly: $20,146 / $37,242 / $60,433.
const LEVELS = [
  { name: 'Standard', what: 'Prefabricated cabinets · laminate counters · engineered wood floor', cab: 275, counter: 40, floor: 7, finish: 2563 },
  { name: 'Mid-range', what: 'New stained or painted cabinets · quartz · solid hardwood', cab: 650, counter: 100, floor: 14, finish: 3210 },
  { name: 'High-end', what: 'Custom-built cabinets · higher-grade quartz · solid hardwood', cab: 1200, counter: 150, floor: 20, finish: 4589 },
];
const EX_LF = 34, COUNTER_PER_LF = 41 / 34, TRADE = 5354, CORNER = 2;
type Shape = 'one' | 'galley' | 'L' | 'U';
const SHAPES: { id: Shape; name: string; walls: string[]; corners: number; tip: string }[] = [
  { id: 'one', name: 'One wall', walls: ['A'], corners: 0, tip: 'All cabinets on one wall. Measure the wall from end to end of the cabinets.' },
  { id: 'galley', name: 'Galley', walls: ['A', 'B'], corners: 0, tip: 'Two parallel runs facing each other. Measure each run.' },
  { id: 'L', name: 'L-shaped', walls: ['A', 'B'], corners: 1, tip: 'Two runs meeting at a corner. Measure each wall all the way into the corner; we take out the corner overlap.' },
  { id: 'U', name: 'U-shaped', walls: ['A', 'B', 'C'], corners: 2, tip: 'Three runs on three walls. Measure each wall all the way into the corners; we take out the overlaps.' },
];
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const num = (v: string) => Math.max(0, Number(v) || 0);

// Top-down plan sketch: cabinet runs in gold, walls labelled A/B/C, optional island.
function Plan({ shape, island, small = false }: { shape: Shape; island: boolean; small?: boolean }) {
  const run = 'fill-[#D49A4C]';
  const t = small ? 10 : 14;
  return (
    <svg viewBox="0 0 160 120" className={small ? 'h-20 w-full' : 'h-44 w-full'} aria-hidden>
      <rect x="6" y="6" width="148" height="108" className="fill-none stroke-[#9aa0a8]" strokeWidth="1.5" strokeDasharray="4 3" />
      {(shape === 'one' || shape === 'galley' || shape === 'L' || shape === 'U') && <rect x="10" y="10" width="140" height="18" className={run} />}
      {shape === 'galley' && <rect x="10" y="92" width="140" height="18" className={run} />}
      {(shape === 'L' || shape === 'U') && <rect x="10" y="28" width="18" height="82" className={run} />}
      {shape === 'U' && <rect x="132" y="28" width="18" height="82" className={run} />}
      {island && <rect x="55" y="54" width="50" height="22" className="fill-[#24395A]" />}
      {!small && (
        <g className="fill-[#1d2433]" fontSize={t} fontWeight="700" fontFamily="Inter, Arial">
          <text x="80" y="24" textAnchor="middle">A</text>
          {shape === 'galley' && <text x="80" y="106" textAnchor="middle">B</text>}
          {(shape === 'L' || shape === 'U') && <text x="19" y="76" textAnchor="middle">B</text>}
          {shape === 'U' && <text x="141" y="76" textAnchor="middle">C</text>}
          {island && <text x="80" y="70" textAnchor="middle" className="fill-white" fontSize="10">island</text>}
        </g>
      )}
    </svg>
  );
}

function Num({ id, label, unit, value, set, hint }: { id: string; label: string; unit: string; value: string; set: (s: string) => void; hint?: string }) {
  return (
    <label htmlFor={id} className="block">
      <span className="label text-ink">{label}</span>
      <span className="mt-2 flex items-center border border-line bg-white">
        <input id={id} type="number" min={0} step={0.5} inputMode="decimal" value={value} onChange={(e) => set(e.target.value)} className="w-full px-4 py-3 text-lg text-ink outline-none" />
        <span className="px-4 text-sm text-muted">{unit}</span>
      </span>
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-8">
      <p className="text-xs tracking-label text-gold-ink">{`STEP ${n}`}</p>
      <h3 className="h-display mt-2 text-2xl text-ink">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function Calculator() {
  const [shape, setShape] = useState<Shape>('galley');
  const [walls, setWalls] = useState<Record<string, string>>({ A: '17', B: '17', C: '10' });
  const [island, setIsland] = useState(false);
  const [isl, setIsl] = useState({ l: '6', w: '3' });
  const [floorMode, setFloorMode] = useState<'new' | 'keep'>('new');
  const [room, setRoom] = useState({ l: '', w: '', area: '177' });
  const [copied, setCopied] = useState(false);
  const sh = SHAPES.find((s) => s.id === shape)!;

  const q = useMemo(() => {
    const wallFt = sh.walls.reduce((t, w) => t + num(walls[w]), 0);
    const perim = Math.max(0, wallFt - sh.corners * CORNER);
    const islL = island ? num(isl.l) : 0, islW = island ? num(isl.w) : 0;
    const lf = perim + islL;
    const counter = perim * COUNTER_PER_LF + islL * islW;
    const floor = floorMode === 'new' ? (num(room.l) && num(room.w) ? num(room.l) * num(room.w) : num(room.area)) : 0;
    const levels = LEVELS.map((l) => {
      const cab = lf * l.cab, ct = counter * l.counter, fl = floor * l.floor, fin = l.finish * (lf / EX_LF);
      return { ...l, cab, ct, fl, fin, total: cab + ct + fl + fin + TRADE };
    });
    return { perim, lf, counter, floor, levels };
  }, [sh, walls, island, isl, floorMode, room]);

  const summary = [
    `Kitchen quick quote (waltcodevelopment.com)`,
    `Layout: ${sh.name}${island ? ` + island ${isl.l} × ${isl.w} ft` : ''}`,
    `Walls: ${sh.walls.map((w) => `${w} ${walls[w] || 0} ft`).join(', ')}`,
    `Cabinets: ${q.lf.toFixed(1)} linear ft · Counters: ${Math.round(q.counter)} sq ft · Floor: ${floorMode === 'new' ? `${Math.round(q.floor)} sq ft` : 'keep existing'}`,
    ...q.levels.map((l) => `${l.name}: ${usd(l.total)}`),
  ].join('\n');

  const copy = async () => {
    try { await navigator.clipboard.writeText(summary); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch { setCopied(false); }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
      <div className="space-y-10">
        <Step n={1} title="Pick your kitchen shape">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-label="Kitchen shape">
            {SHAPES.map((s) => (
              <button key={s.id} type="button" role="radio" aria-checked={shape === s.id} onClick={() => setShape(s.id)}
                className={`border p-3 text-left transition-colors ${shape === s.id ? 'border-ink bg-sand' : 'border-line bg-white hover:border-ink'}`}>
                <Plan shape={s.id} island={false} small />
                <span className="label mt-2 block text-ink">{s.name}</span>
              </button>
            ))}
          </div>
        </Step>

        <Step n={2} title="Measure each wall of cabinets">
          <div className="grid gap-8 sm:grid-cols-[1fr_1fr]">
            <div className="bg-white p-4"><Plan shape={shape} island={island} /><p className="mt-3 text-sm text-ink-2">{sh.tip}</p></div>
            <div className="space-y-5">
              {sh.walls.map((w) => (
                <Num key={w} id={`wall-${w}`} label={`Wall ${w}`} unit="ft" value={walls[w]} set={(v) => setWalls({ ...walls, [w]: v })}
                  hint={w === 'A' ? 'Along the wall, where the cabinets go. Uppers and base on the same wall count once.' : undefined} />
              ))}
            </div>
          </div>
        </Step>

        <Step n={3} title="Island">
          <div className="flex gap-3">
            {[false, true].map((v) => (
              <button key={String(v)} type="button" onClick={() => setIsland(v)} aria-pressed={island === v}
                className={`label border px-5 py-3 ${island === v ? 'border-ink bg-sand text-ink' : 'border-line bg-white text-ink-2 hover:border-ink'}`}>
                {v ? 'Add an island' : 'No island'}
              </button>
            ))}
          </div>
          {island && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Num id="isl-l" label="Island length" unit="ft" value={isl.l} set={(v) => setIsl({ ...isl, l: v })} hint="Cabinets along the island count by this length." />
              <Num id="isl-w" label="Island depth" unit="ft" value={isl.w} set={(v) => setIsl({ ...isl, w: v })} hint="Top depth, including any seating overhang." />
            </div>
          )}
        </Step>

        <Step n={4} title="Floor">
          <div className="flex flex-wrap gap-3">
            {(['new', 'keep'] as const).map((m) => (
              <button key={m} type="button" onClick={() => setFloorMode(m)} aria-pressed={floorMode === m}
                className={`label border px-5 py-3 ${floorMode === m ? 'border-ink bg-sand text-ink' : 'border-line bg-white text-ink-2 hover:border-ink'}`}>
                {m === 'new' ? 'New wood floor' : 'Keep my floor'}
              </button>
            ))}
          </div>
          {floorMode === 'new' && (
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <Num id="room-l" label="Room length" unit="ft" value={room.l} set={(v) => setRoom({ ...room, l: v })} />
              <Num id="room-w" label="Room width" unit="ft" value={room.w} set={(v) => setRoom({ ...room, w: v })} />
              <Num id="room-a" label="Or total area" unit="sq ft" value={room.area} set={(v) => setRoom({ ...room, area: v })} hint="Used when length and width are empty." />
            </div>
          )}
        </Step>
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="bg-white p-6 sm:p-8" aria-live="polite">
          <p className="label text-ink">Your kitchen, three ways</p>
          <p className="mt-2 text-sm text-muted">{`${q.lf.toFixed(1)} linear ft of cabinets · ${Math.round(q.counter)} sq ft of counter · ${floorMode === 'new' ? `${Math.round(q.floor)} sq ft of floor` : 'existing floor kept'}`}</p>
          <div className="mt-6 space-y-5">
            {q.levels.map((l) => (
              <div key={l.name} className="border-t border-line pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="label text-gold-ink">{l.name}</p>
                  <p className="h-display text-3xl text-ink">{usd(l.total)}</p>
                </div>
                <p className="mt-1 text-xs text-muted">{l.what}</p>
                <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-ink-2">
                  <dt>Cabinets</dt><dd className="text-right">{usd(l.cab)}</dd>
                  <dt>Counters</dt><dd className="text-right">{usd(l.ct)}</dd>
                  {floorMode === 'new' && <><dt>Floor</dt><dd className="text-right">{usd(l.fl)}</dd></>}
                  <dt>Backsplash, other</dt><dd className="text-right">{usd(l.fin)}</dd>
                  <dt>Trade work</dt><dd className="text-right">{usd(TRADE)}</dd>
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-line pt-6">
            <p className="text-sm text-ink-2">Send these numbers with your estimate request and we start from them.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={copy} className="label border border-ink px-5 py-3 text-ink hover:bg-sand">{copied ? 'Copied' : 'Copy my numbers'}</button>
              <Cta>Get your estimate</Cta>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">A ballpark from our price list and one priced kitchen (Estimate 79775, October 2026), not a quote. Not included: permits, appliances, sinks and fixtures, and moving plumbing, gas or walls. The written estimate follows a site measure, which is free in our service area.</p>
        </div>
      </div>
    </div>
  );
}
