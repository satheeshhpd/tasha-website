/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF3D5',
          200: '#F5E6AC',
          300: '#EED37B',
          400: '#E5BF46',
          500: '#D4AF37', // Regal Zari Gold
          600: '#B89324',
          700: '#917118',
          800: '#6E5414',
          900: '#4D3A11',
          light: '#F5E6AC',
          DEFAULT: '#D4AF37',
          dark: '#917118',
        },
        noir: {
          950: '#070709',
          900: '#0B0B0E', // Royal Noir
          850: '#111016',
          800: '#16151E',
          700: '#22202C',
          600: '#322F40',
        },
        ruby: {
          DEFAULT: '#8B1E3F',
          dark: '#5E1026',
          light: '#BA3158',
        },
        emeraldDeep: {
          DEFAULT: '#0A4D3C',
          dark: '#063327',
          light: '#136D56',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FBF3D5 0%, #D4AF37 50%, #917118 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF4D0 50%, #D4AF37 100%)',
        'noir-gradient': 'radial-gradient(ellipse at top, #1A1926 0%, #0B0B0E 70%, #050507 100%)',
      }
    },
  },
  plugins: [],
}
