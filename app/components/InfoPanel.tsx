import clsx from "clsx"
import { Mansalva } from "next/font/google"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function InfoPanel() {
  return (
    <section className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-center items-center lg:space-x-16 xl:space-x-40 relative h-[27rem]">
      <div
        className={clsx(
          "text-2xl md:text-4xl whitespace-nowrap",
          mansalva.className
        )}
      >
        WHY STAY WITH US?
      </div>
      <div className="w-80 md:w-96">
        <p>
          Visit a place where family fun is the main attraction and memories are
          waiting to be made. Jellystone Park™ Quarryville, PA is an
          award-winning Pennsylvania campground located a short distance away
          from Philadelphia. It's not just a campground, it's Jellystone Park™!
          Plus, only 50% down is required to book on all future bookings -
          allowing you s'more flexibility!
        </p>
      </div>
    </section>
  )
}
