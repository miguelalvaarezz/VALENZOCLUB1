import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-merriweather",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://valenzoclub.com'),
  title: {
    default: "VALENZO CLUB | Access the Night - Exclusive Fashion & Elite Membership",
    template: "%s | VALENZO CLUB"
  },
  description: "We don't sell clothes — we sell access. Exclusive fashion for the elite. Join VALENZO CLUB and become part of the most exclusive fashion community. Limited edition drops, exclusive events, and elite membership.",
  keywords: [
    "VALENZO CLUB",
    "exclusive fashion",
    "elite fashion",
    "luxury clothing",
    "limited edition",
    "fashion membership",
    "premium fashion",
    "exclusive events",
    "elite community",
    "high-end fashion",
    "designer clothing",
    "fashion club",
    "luxury lifestyle",
    "exclusive access"
  ],
  authors: [{ name: "VALENZO CLUB" }],
  creator: "VALENZO CLUB",
  publisher: "VALENZO CLUB",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valenzoclub.com',
    siteName: 'VALENZO CLUB',
    title: 'VALENZO CLUB | Access the Night - Exclusive Fashion & Elite Membership',
    description: 'We don\'t sell clothes — we sell access. Exclusive fashion for the elite. Join the most exclusive fashion community.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VALENZO CLUB - Exclusive Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VALENZO CLUB | Access the Night',
    description: 'We don\'t sell clothes — we sell access. Exclusive fashion for the elite.',
    creator: '@valenzoclub',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://valenzoclub.com',
  },
  category: 'Fashion',
  classification: 'Luxury Fashion Brand',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        <StructuredData />
        <Providers>
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
