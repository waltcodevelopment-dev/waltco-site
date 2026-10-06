import type { Config } from 'tailwindcss';
import { theme } from './content/theme.ts';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      maxWidth: { site: theme.maxWidth },
      borderRadius: { DEFAULT: theme.radius },
      // The live site uses the system UI sans (SF Pro on Apple devices) at light weights; no web font to download.
      fontFamily: { sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'] },
      letterSpacing: { label: '0.2em', eyebrow: '0.3em' },
    },
  },
  plugins: [],
} satisfies Config;
