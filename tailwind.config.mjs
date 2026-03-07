/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary
          dark:        '#0A2463',   // Deep Navy — hero bg, footer, dark sections
          blue:        '#3E92CC',   // Professional Blue — links, secondary highlights
          // Accent
          accent:      '#C65A1E',   // Burnt Orange — CTAs, icons, active borders
          accentHover: '#A34716',   // Darker Burnt Orange — hover states
          accentLight: '#F6E6DC',   // Soft Accent Background — card tints, cream areas
          // Neutrals
          bg:          '#F5F7FA',   // Soft Off-White — page background
          cream:       '#F6E6DC',   // Alias for accentLight (used in templates)
          border:      '#E2E8F0',   // Borders
          textMain:    '#2A2A2A',   // Body text
          textLight:   '#6B7280',   // Muted / secondary text
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans:  ['Inter', '"Helvetica Neue"', 'Arial', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
      },
    },
  },
  plugins: [],
};
