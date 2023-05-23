import { Nav } from '@/components/Nav'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}
