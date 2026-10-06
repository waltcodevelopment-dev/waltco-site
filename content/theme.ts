// Waltco design tokens (Fable ruling 7, 6 Oct 2026). Deliberately not GymLogo's palette: two brands.
export const theme = {
  colors: {
    ink: '#1C1917', 'ink-2': '#57534E', ground: '#FAFAF7', surface: '#FFFFFF', line: '#E7E5E4',
    primary: '#1E3A5F', 'primary-soft': '#E8EEF5', accent: '#B4530A', 'accent-soft': '#F7E9DA',
    ok: '#15803D', warn: '#B45309', crit: '#B91C1C',
  },
  maxWidth: '1120px',
  radius: '8px',
  shadow: '0 1px 2px rgba(28,25,23,.06)',
} as const;
