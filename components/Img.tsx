import type { Photo } from '@/content/photos.ts';

// Responsive photo: WebP first (about half the bytes), JPEG fallback; two prebuilt sizes (≤ 300 KB each);
// explicit width/height so nothing jumps; lazy below the fold. No runtime image service.
const webp = (src: string) => src.replace(/\.jpg$/, '.webp');

export function Img({ p, sizes = '100vw', className = '', eager = false }: { p: Photo; sizes?: string; className?: string; eager?: boolean }) {
  const one = p.lg.src === p.sm.src;
  const set = (f: (s: string) => string) => (one ? f(p.sm.src) : `${f(p.sm.src)} ${p.sm.w}w, ${f(p.lg.src)} ${p.lg.w}w`);
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={set(webp)} sizes={one ? undefined : sizes} />
      <img src={p.sm.src} srcSet={one ? undefined : set((s) => s)} sizes={one ? undefined : sizes} alt={p.alt} width={p.sm.w} height={p.sm.h}
        loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding={eager ? 'sync' : 'async'} className={className} />
    </picture>
  );
}
