import './globals.css'
import type { Metadata } from 'next'
import NavComp from './nav'
import { fonts } from '@/util/design/font'

export const metadata: Metadata = {
  title: 'nucknuck front-end',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${fonts.cinzel} ${fonts.notosanskr} ${fonts.inter} ${fonts.robotomono}`}>
      <body className='box-border w-full h-full'>
          <NavComp/>
          {children}
      </body>
    </html>
  )
}
