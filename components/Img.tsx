import type { Photo } from '@/content/photos.ts';

// Plain responsive <img>: two prebuilt sizes (≤ 300 KB each), explicit width/height so nothing jumps, lazy
// below the fold. No runtime image service.
export function Img({ p, sizes = '100vw', className = '', eager = false }: { p: Photo; sizes?: string; className?: string; eager?: boolean }) {
  const srcSet = p.lg.src === p.sm.src ? undefined : `${p.sm.src} ${p.sm.w}w, ${p.lg.src} ${p.lg.w}w`;
  return (
    <img src={p.sm.src} srcSet={srcSet} sizes={srcSet ? sizes : undefined} alt={p.alt} width={p.sm.w} height={p.sm.h}
      loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" className={className} />
  );
}
