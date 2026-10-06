import type { NextConfig } from 'next';
import { isIndexable } from './lib/seo.ts';
import { REDIRECTS } from './content/redirects.ts';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      // One host (addendum A): www → apex, path kept.
      { source: '/:path*', has: [{ type: 'host', value: 'www.waltcodevelopment.com' }], destination: 'https://waltcodevelopment.com/:path*', permanent: true },
      ...REDIRECTS.map((r) => ({ ...r, permanent: true })),
    ];
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ...(isIndexable() ? [] : [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]),
      ],
    }];
  },
};

export default nextConfig;
