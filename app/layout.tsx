import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "رونق - معطرات سيارات دعائية",
  description: "فواحات دعائية فاخرة مخصصة للشركات. اطبع شعار شركتك على معطرات سيارات بجودة عالية.",
  generator: "v0.app",
  keywords: ["معطرات سيارات", "فواحات دعائية", "هدايا دعائية", "طباعة شعارات", "رونق"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#996B3D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
