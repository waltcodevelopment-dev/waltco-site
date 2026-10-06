import type { Config } from 'tailwindcss';
import { theme } from './content/theme.ts';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      maxWidth: { site: theme.maxWidth },
      borderRadius: { DEFAULT: theme.radius },
      boxShadow: { DEFAULT: theme.shadow },
      fontFamily: { display: ['var(--font-display)', 'sans-serif'], sans: ['var(--font-body)', 'sans-serif'] },
    },
  },
  plugins: [],
} satisfies Config;
