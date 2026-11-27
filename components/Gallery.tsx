'use client';
import { useState } from 'react';
import { Img } from './Img';
import type { Photo } from '@/content/photos.ts';

// Product gallery (E&K product-page style): one large photo with its caption, thumbnails underneath.
// All photos are in the HTML for crawlers; the click only swaps which one is large.
export function Gallery({ photos }: { photos: Photo[] }) {
  const [i, setI] = useState(0);
  const p = photos[i];
  const go = (d: number) => setI((i + d + photos.length) % photos.length);
  return (
    <div>
      <div className="relative bg-black/30">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <Img p={p} eager={i === 0} sizes="(min-width: 1024px) 60vw, 100vw" className="h-full w-full object-cover" />
        </div>
        {photos.length > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-ink hover:bg-white">‹</button>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-ink hover:bg-white">›</button>
            <span className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 text-xs text-white">{`${i + 1} / ${photos.length}`}</span>
          </>
        )}
      </div>
      <p className="mt-3 min-h-[2.5rem] text-sm text-white/75">{p.alt}</p>
      {photos.length > 1 && (
        <ul className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {photos.map((x, n) => (
            <li key={x.id}>
              <button type="button" onClick={() => setI(n)} aria-label={`Show photo ${n + 1}`} aria-current={n === i}
                className={`block aspect-square w-full overflow-hidden border-2 ${n === i ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                <Img p={x} sizes="120px" className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
