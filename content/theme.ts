// Waltco design tokens. Owner decision, 5 Oct 2026: keep the current waltcodevelopment.com look (black, white,
// gold; light system sans; uppercase spaced labels), replacing Fable ruling 7's palette. Measured from the live
// site the same day. Fixed: the live gold (#C9A84C) is 2.3:1 on white, so gold TEXT on light grounds uses
// gold-ink (5.5:1); #C9A84C stays for dark grounds (7.6:1+), rules and fills. Grey text is #555/#6B6B6B (≥4.9:1).
export const theme = {
  colors: {
    ink: '#1A1A1A',        // headings, body on light (17:1 on white)
    'ink-2': '#555555',    // secondary text on light (6.9:1 on sand)
    muted: '#6B6B6B',      // small print on light (4.9:1 on sand)
    surface: '#FFFFFF',
    sand: '#F8F6F2',       // alternate light sections (live site)
    night: '#111111',      // dark sections and footer (live site)
    charcoal: '#1A1A1A',   // CTA band, dark buttons (live site)
    line: '#E8E4DC',
    gold: '#C9A84C',       // live brand gold — on dark grounds, rules and fills only
    'gold-ink': '#7A6018', // gold for text on light grounds
    'on-dark': '#A3A3A3',  // secondary text on night (7.5:1)
  },
  maxWidth: '1200px',
  radius: '0px',           // live site uses square corners
} as const;
