import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cabañas El Refugio del Valle | Valle de Punilla, Córdoba",
  description:
    "Cabañas rodeadas de naturaleza en las sierras de Córdoba. Descanso, tranquilidad y confort para parejas y familias.",
  keywords: ["cabañas córdoba", "valle de punilla", "alquiler cabañas", "turismo córdoba", "sierras de córdoba"],
  openGraph: {
    title: "Cabañas El Refugio del Valle",
    description: "Descansá en las sierras de Córdoba. Naturaleza, tranquilidad y confort.",
    type: "website",
  },
  generator: "v0.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
