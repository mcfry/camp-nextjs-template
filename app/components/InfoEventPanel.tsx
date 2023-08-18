import clsx from "clsx"
import Image from "next/image"
import { Mansalva } from "next/font/google"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function InfoEventPanel() {
  return (
    <section className="flex justify-center items-center space-x-40 relative h-[48rem]">
      <div className="flex flex-col w-[40rem] space-y-10">
        <span className={clsx("text-5xl", mansalva.className)}>
          YOUR NEXT ADVENTURE
        </span>
        <p>
          Located on 63 lush, wooded acres that adjoin a scenic, 100-acre county
          park in Southern Lancaster, Yogi Bear's Jellystone Park™ Camp-Resort
          in Quarryville, Pennsylvania offers a breathtaking camping experience
          the whole family will enjoy! When our campers aren't busy swimming and
          splashing at Yogi Bear's Water Zone or bouncing high on our jumping
          pillows, they can enjoy endless outdoor attractions that will keep
          everyone busy from dawn 'till dusk at our Pennsylvania camping resort.
          Just a short drive to any of the Amish Country and Hershey area
          attractions, Jellystone Park™ is the perfect spot to start making
          camping memories that will last a lifetime!
        </p>
        <span>[Event dates here]</span>
        <button
          className={clsx(
            "btn btn-primary text-white text-2xl",
            mansalva.className
          )}
        >
          Book Now
        </button>
      </div>
      <div
        className={clsx(
          "relative after:bg-primary after:absolute after:h-[300px] after:w-[400px] after:ml-8 after:top-[-2rem] after:z-10",
          "before:bg-accent before:absolute before:h-[300px] before:w-[400px] before:left-[-2rem] before:bottom-[-2rem] before:z-10"
        )}
      >
        <picture className="relative z-20">
          <Image src="/hiker.jpg" width={400} height={700} alt="hiker" />
        </picture>
      </div>
    </section>
  )
}
