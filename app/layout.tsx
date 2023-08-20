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
      <body className="min-h-screen bg-tanbase">
        <Navbar />

        <main
          className={clsx(
            "flex flex-col mt-16 text-black",
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
