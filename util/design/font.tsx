import { Inter, Roboto_Mono, Noto_Sans_KR, Cinzel} from 'next/font/google'

const notosanskr = Noto_Sans_KR({
   subsets: ['latin'], 
   weight: ['100'],
   variable: '--font-notosanskr',
})

const cinzel = Cinzel({
  subsets: ['latin'], 
  variable: '--font-cinzel',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const fonts = {
  'notosanskr':notosanskr.variable,
  'cinzel': cinzel.variable,
  'inter': inter.variable,
  'robotomono' :roboto_mono.variable,
}

export {fonts}