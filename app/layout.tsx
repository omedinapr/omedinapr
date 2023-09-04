import BackToTop from '@/components/BackToTop'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oscar Medina - Personal Site',
  description: 'Oscar Medina developer by day and developer by night, based out of New Jersey.',
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
