// External
import Image from "next/image"

// Internal
import { DOMAIN } from "@/app/constants/routes"

async function getTestimonials() {
  const res = await fetch(DOMAIN + "/strapi-api/testimonials?populate=*", {
    headers: {
      Authorization: `bearer ${process.env.API_KEY}`
    },
    next: {
      tags: ["testimonials"] // for manual revalidation
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

export default async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <section className="flex flex-col justify-center items-center h-[46rem] xs:h-[42rem] sm:h-[38rem]">
      <div className="carousel w-full lg:w-4/5 xl:w-3/5">
        {testimonials &&
          testimonials.data.map(({ attributes }: any, index: number) => {
            return (
              <div
                key={`slide${index + 1}`}
                id={`slide${index + 1}`}
                className="carousel-item relative w-full"
              >
                <div className="flex justify-center items-center w-full p-10">
                  <div className="card relative sm:flex-row items-center bg-white border-2 border-primary shadow-xl w-[20rem] sm:w-[34rem] 2xl:w-[38rem] space-y-10 xs:space-y-4 sm:space-y-0 sm:space-x-10 p-10">
                    <picture>
                      <Image
                        width={150}
                        height={150}
                        src={attributes.image.data.attributes.url}
                        alt={attributes.image.data.attributes.alternativeText}
                        className="h-[125px] w-[125px] rounded-full border-2 border-accent object-none"
                        style={{
                          objectPosition: `${attributes.imagePositionFromTop}% ${attributes.imagePositionFromLeft}%`
                        }}
                      />
                    </picture>
                    <p className="w-40 xs:w-60 sm:w-80 z-20 before:content-['\0022'] before:text-9xl before:text-accent before:absolute before:top-[9.5rem] before:xs:top-32 before:sm:left-[9.5rem] before:2xl:left-40 before:sm:top-4">
                      {attributes.testimonial}
                    </p>
                  </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${
                      index + 1 === 1 ? testimonials.data.length : index
                    }`}
                    className="btn btn-circle bg-primary text-accent hover:bg-accent hover:text-primary border-none"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      index + 1 === testimonials.data.length ? 1 : index + 2
                    }`}
                    className="btn btn-circle bg-primary text-accent hover:bg-accent hover:text-primary border-none"
                  >
                    ❯
                  </a>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
