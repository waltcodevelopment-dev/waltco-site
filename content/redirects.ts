// The 301 map (Fable ruling 2): every changed or removed URL → its approved target. Empty in this release —
// no structure change ships together with the hosting change. Tested in tests/unit/routes.test.ts.
export const REDIRECTS: { source: string; destination: string }[] = [];
