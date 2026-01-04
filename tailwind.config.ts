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
      // NOTE: RoomCard 이미지 크기 (220px = 13.75rem)
      spacing: {
        'room-card': '13.75rem', // 220px
      },
    },
  },
  plugins: [],
} satisfies Config;
