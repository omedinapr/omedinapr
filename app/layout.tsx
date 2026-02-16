import BackToTop from '@/components/BackToTop'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oscar Medina - Full Stack Developer',
  description: 'Oscar Medina — developer by day and by night, based out of New Jersey. Building automation and software products.',
  metadataBase: new URL('https://www.oscarmedina.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Oscar Medina - Full Stack Developer',
    description: 'Building software products and automation systems.',
    url: 'https://www.oscarmedina.me',
    siteName: 'Oscar Medina',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscar Medina - Full Stack Developer',
    description: 'Building software products and automation systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
