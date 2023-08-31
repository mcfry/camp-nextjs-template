// External
import clsx from "clsx"
import Image from "next/image"
import { Mansalva } from "next/font/google"

// Internal
import { DOMAIN } from "@/app/constants/routes"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

async function getCampsites() {
  const res = await fetch(DOMAIN + "/strapi-api/campsites?populate=*", {
    headers: {
      Authorization: `bearer ${process.env.API_KEY}`
    },
    next: {
      tags: ["campsites"] // for manual revalidation
    }
  }).then(response => {
    return response.json()
  })

  if (res.error) {
    console.log(res.error)
    return null
  } else {
    return res
  }
}

export default async function Gallery() {
  const campsites = await getCampsites()

  return (
    <section className="flex flex-col justify-center items-center h-[290rem] xs:h-[280rem] gallery-lg:h-[150rem] xl:h-[110rem]">
      <span
        className={clsx(
          "mb-6 text-6xl border-b-2 border-accent",
          mansalva.className
        )}
      >
        Gallery
      </span>
      <div className="grid grid-cols-1 grid-rows-12 gallery-lg:grid-cols-2 gallery-lg:grod-rows-6 xl:grid-cols-3 xl:grid-rows-4 gap-4">
        {campsites &&
          campsites.data.map(({ attributes }: any, i: number) => (
            <div key={i} className="w-[300px] xs:w-[400px]">
              <picture className="relative h-[400px]">
                <Image
                  src={attributes.image.data.attributes.url}
                  height={400}
                  width={400}
                  alt={attributes.image.data.attributes.alternativeText}
                  className="h-[250px] w-[300px] xs:w-[400px] object-cover"
                />
              </picture>
              <div className="bg-primary max-w-full h-[105px] xs:h-[80px]">
                <p className="p-4 text-white font-medium whitespace-normal w-4/5 xs:w-full">{`(Campsite ${
                  i + 1
                }) ${attributes.siteSize}: ${attributes.description}`}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
