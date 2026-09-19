/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#032B43',
          primary: '#073B5C',
          blue: '#0B5E8E',
          accent: '#1472A8',
          light: '#EAF5FA',
          gold: '#D99A24',
          dark: '#102A43',
        },
        navy: {
          50: '#EAF5FA',
          100: '#D5EAF5',
          200: '#B0D8ED',
          300: '#84C1E1',
          400: '#52A7D4',
          500: '#1B86C4',
          600: '#1472A8',
          700: '#0E608F',
          800: '#0B5E8E',
          900: '#073B5C',
          950: '#032B43',
        },
        gold: {
          50: '#FDFCF6',
          100: '#FBF5E5',
          200: '#F6E6BF',
          300: '#F0D492',
          400: '#E7BD5A',
          500: '#D99A24',
          600: '#B88018',
          700: '#8F6110',
          800: '#6E480C',
          900: '#4D3108',
        },
        karnataka: {
          gold: '#D99A24',
          amber: '#F59E0B',
          red: '#C22D26',
          yellow: '#FEDB00',
          maroon: '#7A1C25',
          forest: '#1B4D3E',
          ocean: '#073B5C',
          sand: '#FAF8F5',
          charcoal: '#102A43',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

