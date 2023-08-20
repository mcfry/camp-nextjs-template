import clsx from "clsx"
import Image from "next/image"
import { Mansalva } from "next/font/google"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function InfoEventPanel() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center lg:space-x-40 relative h-[86rem] lg:h-[56rem]">
      <div className="flex flex-col items-center lg:items-start w-[16rem] lg:w-[26rem] xl:w-[40rem] h-[40rem] lg:h-[20rem] space-y-10 mt-20 lg:mt-0">
        <span
          className={clsx(
            "text-2xl md:text-4xl whitespace-nowrap",
            mansalva.className
          )}
        >
          YOUR NEXT ADVENTURE
        </span>
        <p className="w-80 md:w-96 lg:w-fit">
          Set within 63 acres of lush woodlands that seamlessly connect with a
          scenic 100-acre county park in the southern part of Willowbrook, our
          Wild Adventures Camp-Resort in Sunville, Arizona offers an enchanting
          camping experience designed for the entire family. Amid the natural
          beauty of the surroundings, campers can revel in activities such as
          playful moments at the Water Oasis or joyous bouncing on our expansive
          jumping mats. Our campsite's diverse outdoor attractions ensure that
          every moment, from sunrise to sunset, is filled with excitement and
          engagement.
        </p>
        <span>Aug 17 - Sept 20</span>
        <button
          className={clsx(
            "btn btn-primary text-white text-2xl",
            mansalva.className
          )}
        >
          Book Now
        </button>
      </div>
      <div className="flex items-center justify-center h-[46rem] lg:h-[36rem]">
        <div
          className={clsx(
            "relative",
            "after:bg-primary after:absolute after:h-[300px] after:w-[400px] after:ml-8 after:top-[-2rem] after:z-10",
            "before:bg-accent before:absolute before:h-[300px] before:w-[400px] before:left-[-2rem] before:bottom-[-2rem] before:z-10"
          )}
        >
          <picture className="relative z-20">
            <Image src="/hiker.jpg" width={400} height={700} alt="hiker" />
          </picture>
        </div>
      </div>
    </section>
  )
}
