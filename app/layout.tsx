import "./globals.css"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

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
        <nav
          className={clsx(
            "navbar justify-center bg-primary border-b-4 border-black drop-shadow-xl fixed top-0 z-50",
            bricolage.className
          )}
        >
          <Image
            src="/bonfire.png"
            width={50}
            height={50}
            className="mr-6"
            alt="bonfire"
          />
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-accent"
          >
            Home
          </Link>
          <Link
            href="/campsites"
            className="btn btn-ghost normal-case text-xl text-accent"
          >
            Campsites
          </Link>
        </nav>

        <main
          className={clsx(
            "flex flex-col mt-16 text-black",
            bricolage.className
          )}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
