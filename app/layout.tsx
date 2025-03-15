import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Familjen_Grotesk } from "next/font/google"
import Layout from "@/components/Layout"
import { cn } from "@/lib/utils"

const familjenGrotesk = Familjen_Grotesk({ subsets: ["latin"],  variable: "--font-sans"  })

export const metadata: Metadata = {
  title: "Muhammad Faiz",
  description: "A modern, responsive portfolio for developers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          familjenGrotesk.variable
        )}>
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  )
}

