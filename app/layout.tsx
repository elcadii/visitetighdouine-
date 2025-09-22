import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jamaâat Tighdouine - Gateway to the Atlas",
  description:
    "Discover the beauty of Jamaâat Tighdouine in Al Haouz, Morocco. Experience Amazigh culture, natural springs, rock carvings, and traditional pottery in the heart of the Atlas Mountains.",
  generator: "v0.app",
  keywords: "Morocco, Atlas Mountains, Amazigh culture, Tighdouine, Al Haouz, tourism, pottery, Yagour Plateau",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
