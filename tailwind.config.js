/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        karnataka: {
          gold: '#E5A93C',
          amber: '#F59E0B',
          red: '#C22D26',
          yellow: '#FEDB00',
          maroon: '#7A1C25',
          forest: '#1B4D3E',
          ocean: '#0F4C81',
          sand: '#FAF8F5',
          charcoal: '#1F2937',
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

