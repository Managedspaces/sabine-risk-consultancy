/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0B1120',
        },
        brand: {
          dark: '#1E293B',
          mid: '#334155',
          accent: '#4A7C59',
          accentLight: '#6BAF7A',
          bg: '#F8FAFC',
          cream: '#F1F5F0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
