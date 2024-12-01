/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a2e',
          secondary: '#16213e',
          accent: '#0f172a'
        },
        primary: {
          DEFAULT: '#6d28d9',
          light: '#7c3aed',
          dark: '#5b21b6'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};