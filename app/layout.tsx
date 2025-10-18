import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { SmoothScrollIndicator } from "@/components/smooth-scroll-indicator"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Influenzi - Connect Brands with Influencers",
  description:
    "The complete platform for influencer marketing. Discover, analyze, and collaborate with top influencers.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className={`font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
          <SmoothScrollIndicator />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
