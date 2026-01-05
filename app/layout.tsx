import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Krushit Babariya - Full Stack Java Developer',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and System Design. Building scalable web applications with modern technologies.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, System Design, Web Development, Portfolio, JavaScript, TypeScript',
  authors: [{ name: 'Krushit Babariya' }],
  creator: 'Krushit Babariya',
  publisher: 'Krushit Babariya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://krushit-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Krushit Babariya - Full Stack Java Developer',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and System Design. Building scalable web applications with modern technologies.',
    url: 'https://krushit-portfolio.vercel.app',
    siteName: 'Krushit Babariya Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Krushit Babariya - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krushit Babariya - Full Stack Java Developer',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and System Design.',
    images: ['/og-image.jpg'],
    creator: '@krushitpatel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} bg-gray-900 text-white antialiased`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
