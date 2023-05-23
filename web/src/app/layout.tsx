import { ReactNode } from 'react'
import './globals.css'
import { Vollkorn as Vollk, Kumbh_Sans as Kumbh } from '@next/font/google'
import { ShoppingCartProvider } from '../components/ShoppingCartContext'

const vollkorn = Vollk({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-vollk',
})

const kumbhsans = Kumbh({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-kumbh',
})

export const metadata = {
  title: 'UrbanAvenue',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${vollkorn.variable} ${kumbhsans.variable} font-sans`}
    >
      <body
        className={`bg-white text-black scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300`}
      >
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </body>
    </html>
  )
}
