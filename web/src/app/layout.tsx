import { ReactNode } from 'react'
import './globals.css'
import { Vollkorn } from '@next/font/google'

const vollkorn = Vollkorn({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
})

export const metadata = {
  title: 'UrbanAvenue | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={`${vollkorn.className}`}>
      <body
        className={`bg-white scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300`}
      >
        {children}
      </body>
    </html>
  )
}
