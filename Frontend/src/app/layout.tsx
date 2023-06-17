import './globals.css'
import {ReactNode} from 'react'
import { Roboto_Flex as Roboto} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Controle De Materiais',
  description: '',
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-white text-black`}>{children}</body>
    </html>
  )
}
