// The 301 map (Fable ruling 2): every changed or removed URL → its approved target. Empty in this release —
// no structure change ships together with the hosting change. Tested in tests/unit/routes.test.ts.
// 10 Oct 2026: /services/architecture was still in Google's index from an earlier version of the old site and
// returned 404. Architecture-only work is not offered (architect licence required), so it goes to general construction.
export const REDIRECTS: { source: string; destination: string }[] = [
  { source: '/services/architecture', destination: '/services/general-construction' },
];
