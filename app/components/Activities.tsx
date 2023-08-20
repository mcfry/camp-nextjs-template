import clsx from "clsx"
import { Mansalva } from "next/font/google"

import Activity from "./helpers/Activity"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function Activities() {
  return (
    <section className="flex flex-col justify-center mt-[-38px] h-[44rem]">
      {/* Heading */}
      <header
        className={clsx(
          "mb-6 text-6xl self-center border-b-2 border-accent",
          mansalva.className
        )}
      >
        Activities
      </header>

      {/* Activities */}
      <div className="flex flex-col space-y-20">
        <Activity
          imageObj1={{ path: "/fishing-pole.svg", name: "Fishing" }}
          imageObj2={{ path: "/swimming-pool.svg", name: "Swimming" }}
        />
        <Activity
          imageObj1={{ path: "/camping.svg", name: "Camping" }}
          imageObj2={{ path: "/hiking.svg", name: "Hiking" }}
        />
        <Activity
          imageObj1={{ path: "/rafting.svg", name: "Rafting" }}
          imageObj2={{ path: "/picnic.svg", name: "Picnicing" }}
        />
      </div>
    </section>
  )
}
