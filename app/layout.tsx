import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gimnàs Robert - Centre Esportiu a Parets del Vallès",
  description:
    "Més de 30 anys d'experiència en fitness, musculació i arts marcials. Sala de musculació, cardio, kickboxing i entrenament personalitzat.",
  keywords: "gimnàs, fitness, musculació, kickboxing, Parets del Vallès, entrenament personalitzat",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Gimnàs Robert - Centre Esportiu a Parets del Vallès",
    description: "Més de 30 anys d'experiència en fitness, musculació i arts marcials",
    type: "website",
    locale: "ca_ES",
    alternateLocale: "es_ES",
    images: [
      {
        url: '/images/logo-gimnas-robert-gimnasio-oficial.png',
        width: 1200,
        height: 630,
        alt: 'Gimnàs Robert - Centre Esportiu',
      },
    ],
  },
  manifest: '/manifest.json',
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" className={`${inter.variable} antialiased`}>
      <body className="overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
