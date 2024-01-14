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
  description: 'Portfolio website showcasing my work and experience as a software engineer currently based in Ireland.',
  openGraph: {
    title: 'Sergiu Mereacre',
    description: "Portfolio website showcasing my work and experience as a software engineer currently based in Ireland."
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sergiu Mereacre",
  "jobTitle": "Software Developer",
  "url": "https://sergiu.ie",
  "email": "contact@sergiu.ie",
  "image": "https://sergiu.ie/profile.png",
  "sameAs": [
    "https://www.linkedin.com/in/sergiumereacre/",
  ],
  "height": "187cm",
  "gender": "male",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Limerick",
    "sameAs": "https://www.ul.ie/"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='dark'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "bfa63409f4ec48f987d5018b749dd4c6"}'></script>
      </body>
    </html>
  )
}
