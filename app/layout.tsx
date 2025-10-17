import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Influenza - Connect Brands with Influencers",
    template: "%s | Influenza"
  },
  description: "The complete platform for influencer marketing. Discover, analyze, and collaborate with top influencers across all major social media platforms.",
  keywords: ["influencer marketing", "social media", "brand collaboration", "influencer discovery", "marketing platform"],
  authors: [{ name: "Influenza Team" }],
  creator: "Influenza",
  publisher: "Influenza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://influenza.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://influenza.app",
    title: "Influenza - Connect Brands with Influencers",
    description: "The complete platform for influencer marketing. Discover, analyze, and collaborate with top influencers.",
    siteName: "Influenza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Influenza - Connect Brands with Influencers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influenza - Connect Brands with Influencers",
    description: "The complete platform for influencer marketing. Discover, analyze, and collaborate with top influencers.",
    images: ["/og-image.jpg"],
    creator: "@influenza",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
