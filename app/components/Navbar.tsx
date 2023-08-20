import Image from "next/image"
import Link from "next/link"
import { Bricolage_Grotesque } from "next/font/google"
import clsx from "clsx"

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] })

const pages = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/campsites",
    name: "Campsites"
  },
  {
    path: "/thingstodo",
    name: "Things to Do"
  },
  {
    path: "/events",
    name: "Events"
  },
  {
    path: "/about",
    name: "About"
  }
]

export default function Navbar() {
  return (
    <nav
      className={clsx(
        "navbar justify-center bg-primary border-b-4 border-black drop-shadow-xl fixed top-0 z-50",
        bricolage.className
      )}
    >
      <div className="hidden md:flex">
        <Image
          src="/bonfire.png"
          width={50}
          height={50}
          className="mr-6"
          alt="bonfire"
        />
        {pages.map(page => (
          <Link
            key={page.path}
            href={page.path}
            className="btn btn-primary normal-case text-xl text-accent"
          >
            {page.name}
          </Link>
        ))}
      </div>

      <div className="flex w-full justify-between mx-4 md:hidden">
        <Image
          src="/bonfire.png"
          width={50}
          height={50}
          className="mr-6"
          alt="bonfire"
        />
        <div className="dropdown-end dropdown z-30">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <Image
              src="/hamburger.svg"
              width={50}
              height={50}
              alt="mobile menu"
            />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-30 w-52 bg-accent p-2 shadow"
          >
            {pages.map(page => {
              return (
                <li className="z-20" key={page.name}>
                  <a
                    href={page.path}
                    className="block rounded py-2 pl-3 pr-4 font-semibold text-primary hover:text-white md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    {page.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
