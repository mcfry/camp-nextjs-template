import clsx from "clsx"
import Image from "next/image"
import { Mansalva } from "next/font/google"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function Gallery({
  images
}: {
  images: { path: string; description: string; alt: string }[]
}) {
  return (
    <section className="flex flex-col justify-center items-center h-[150rem] xl:h-[110rem]">
      <span
        className={clsx(
          "mb-6 text-6xl border-b-2 border-accent",
          mansalva.className
        )}
      >
        Gallery
      </span>
      <div className="grid grid-cols-2 grod-rows-6 xl:grid-cols-3 xl:grid-rows-4 gap-4">
        {images.map((image, i) => (
          <div key={i} className="">
            <picture className="relative h-[400px] w-[400px]">
              <Image
                src={image.path}
                height={400}
                width={400}
                alt={image.alt}
                className="h-[250px] w-[400px] object-cover"
              />
              <div className="bg-primary w-[400px] h-[80px]">
                <p className="p-4 text-white font-medium">{`(Campsite ${
                  i + 1
                }) ${image.description}`}</p>
              </div>
            </picture>
          </div>
        ))}
      </div>
    </section>
  )
}
