import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        '3xl': '1620px',
      },
    },
  },
}

export default config
