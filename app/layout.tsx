// External
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import clsx from "clsx"

// Internal
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "",
  description: ""
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="flex flex-col min-h-screen bg-tanbase">
        <Navbar />

        <main
          className={clsx(
            "flex flex-col mt-16 text-black min-h-screen flex-grow",
            bricolage.className
          )}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
