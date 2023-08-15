import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      }
    },
    fontFamily:{
      sans: ['var(--font-inter)'],
      mono: ['var(--font-roboto-mono)'],
      cinzel :['var(--font-cinzel)'],
      notosanskr :['var(--font-notosanskr)'],
      BlackHanSans : ["BlackHanSans"],
      SCDream : ["SCDream"],
    }
  },
  plugins: [],
}
export default config
