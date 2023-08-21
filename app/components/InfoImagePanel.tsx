import clsx from "clsx"
import Image from "next/image"
import { Mansalva } from "next/font/google"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function InfoImagePanel({
  panelType,
  imageSrc,
  imageAlt
}: {
  panelType: "left" | "right"
  imageSrc: string
  imageAlt: string
}) {
  return (
    <section
      className={clsx(
        "flex lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 relative h-[40rem] lg:h-[24rem]",
        panelType === "left" ? "flex-col" : "flex-col-reverse space-y-reverse"
      )}
    >
      {panelType === "left" && (
        <>
          <div className="flex lg:flex-[11] lg:justify-end">
            <div className="flex flex-col items-center xs:items-start space-y-3">
              <div
                className={clsx(
                  "text-2xl whitespace-nowrap",
                  mansalva.className
                )}
              >
                NOMAHEGON LAKE
              </div>

              <p className="w-4/5 xs:w-96">
                Take a swim at Nomahegon, located 2 miles from our campground!
              </p>

              <div
                tabIndex={0}
                className="w-4/5 xs:w-96 collapse collapse-arrow border border-base-300 bg-primary text-white"
              >
                <div className="collapse-title text-xl font-medium">
                  More Information
                </div>
                <div className="collapse-content">
                  <p>Some more stuff about that big sexy lake</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-[10]">
            <div className="stack">
              <Image
                src={imageSrc}
                width={400}
                height={400}
                className="grid w-[300px] xs:w-[400px] h-[266px] object-cover rounded bg-primary text-primary-content place-content-center"
                alt={imageAlt}
              />
              <div className="grid w-[300px] xs:w-[400px] h-[266px] rounded bg-accent text-accent-content place-content-center" />
              <div className="grid w-[300px] xs:w-[400px] h-[266px] rounded bg-secondary text-secondary-content place-content-center" />
            </div>
          </div>
        </>
      )}

      {panelType === "right" && (
        <>
          <div className="flex lg:flex-[10] lg:justify-end">
            <div className="stack">
              <Image
                src={imageSrc}
                width={400}
                height={400}
                className="grid w-[300px] xs:w-[400px] h-[266px] object-cover rounded bg-primary text-primary-content place-content-center"
                alt={imageAlt}
              />
              <div className="grid w-[300px] xs:w-[400px] h-[266px] object-cover rounded bg-accent text-accent-content place-content-center" />
              <div className="grid w-[300px] xs:w-[400px] h-[266px] object-cover rounded bg-secondary text-secondary-content place-content-center" />
            </div>
          </div>
          <div className="lg:flex-[11]">
            <div className="flex flex-col items-center xs:items-start space-y-3">
              <div
                className={clsx(
                  "text-2xl whitespace-nowrap",
                  mansalva.className
                )}
              >
                NOMAHEGON LAKE
              </div>

              <p className="w-4/5 xs:w-96">
                Take a swim at Nomahegon, located 2 miles from our campground!
              </p>

              <div
                tabIndex={0}
                className="w-4/5 xs:w-96 collapse collapse-arrow border border-base-300 bg-primary text-white"
              >
                <div className="collapse-title text-xl font-medium">
                  More Information
                </div>
                <div className="collapse-content">
                  <p>Some more stuff about that big sexy lake</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
