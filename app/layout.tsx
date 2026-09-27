import BackToTop from '@/components/BackToTop'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const SITE_URL = 'https://www.oscarmedina.me'
const TITLE = 'Oscar Medina - Full Stack Developer'
const DESCRIPTION =
  'Oscar Medina — developer by day and by night, based out of New Jersey. Building automation and software products.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: 'Oscar Medina',
  authors: [{ name: 'Oscar Medina', url: SITE_URL }],
  creator: 'Oscar Medina',
  keywords: [
    'Oscar Medina',
    'full stack developer',
    'software engineer',
    'TypeScript',
    'React',
    'Next.js',
    'NestJS',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: 'Building software products and automation systems.',
    url: SITE_URL,
    siteName: 'Oscar Medina',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Building software products and automation systems.',
    creator: '@omedinapr',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oscar Medina',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://www.github.com/omedinapr',
    'https://www.linkedin.com/in/omedinapr/',
    'https://x.com/omedinapr',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
