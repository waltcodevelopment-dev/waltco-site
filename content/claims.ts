// Banned phrases (27 Sep claims policy; Fable addendum D, 6 Oct 2026). The build fails if any appears anywhere in
// rendered HTML: body, title, meta, alt text or JSON-LD. Matching is case-insensitive on visible words.
export const BANNED: { label: string; re: RegExp }[] = [
  { label: '30+ years', re: /30\s*\+\s*years/i },
  { label: 'over 30 years', re: /over\s+30\s+years/i },
  { label: '200+', re: /200\s*\+/ },
  { label: 'carbon-negative', re: /carbon[\s-]*negative/i },
  { label: 'Blue Planet', re: /blue\s+planet/i },
  { label: 'RIPS', re: /\bRIPS\b/ },
  { label: 'premier', re: /\bpremier\b/i },
  { label: 'fully insured', re: /fully\s+insured/i },
  { label: '100%', re: /100\s*%/ },
  { label: 'guarantee', re: /\bguarantee/i },
  { label: 'AI', re: /\bAI\b/ },
  { label: 'best', re: /\bbest\b/i },
  { label: 'a number followed by years or projects', re: /\b\d[\d,]*\s*\+?\s*(years|projects)\b/i },
  // Fable hardwood ruling, 6 Oct 2026 (Part A.6): wording from the old reclaimed-floors sites.
  { label: 'widely regarded', re: /widely\s+regarded/i },
  { label: 'premium', re: /\bpremium\b/i },
  { label: 'elite', re: /\belite\b/i },
  { label: 'proud leaders', re: /proud\s+leaders?/i },
];

export function bannedIn(text: string): string[] {
  return BANNED.filter((b) => b.re.test(text)).map((b) => b.label);
}
