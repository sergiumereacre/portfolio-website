import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Sergiu Mereacre / Portfolio',
  description: 'Explore the distinguished portfolio of Sergiu Mereacre, an embodiment of my professional journey, expertise, and passions. Witness a carefully curated collection of my accomplishments, skills, and experiences, leaving a lasting impression of who I am.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='dark'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
