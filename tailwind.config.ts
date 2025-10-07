import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-button': '#df2058',
      },
      fontFamily: {
        NotoSansKR: ['NotoSansKR'],
      },
    },
  },
  plugins: [],
} satisfies Config;
