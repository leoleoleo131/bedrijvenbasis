import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FEDF0B',
        'primary-hover': '#E4CA18',
        dark: '#111111',
        muted: '#747474',
        'muted-mid': '#999999',
        surface: '#F5F5F5',
        available: '#22C55E',
        rented: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        slab: ['"Roboto Slab"', 'serif'],
      },
      maxWidth: {
        container: '1140px',
      },
      borderRadius: {
        card: '16px',
        btn: '10px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
