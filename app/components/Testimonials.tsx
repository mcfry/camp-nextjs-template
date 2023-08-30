import Image from "next/image"

const testimonialImages = [
  {
    path: "/hiker_testimonial.jpg",
    alt: "Hiker Testimonial Picture",
    position: "58% 50%",
    testimonial: `I had an awesome time at this campground! The place is
    gorgeous, the facilities are top-notch, and the staff is
    super friendly. Whether you're into outdoor adventures or
    just chilling by the campfire, it's the perfect spot to
    unwind and have a blast. I'm definitely planning on going
    back for more fun!`
  },
  {
    path: "/hiker_testimonial2.jpg",
    alt: "Hiker Testimonial Picture 2",
    position: "35% 25%",
    testimonial: `This campground was a blast! The scenery was amazing, the facilities were really nice, and the staff was super cool. Whether you're into outdoor stuff or just hanging out by the fire, it's a great place to kick back and have a good time. I'm already thinking about when I can go back!`
  },
  {
    path: "/hiker_testimonial3.jpg",
    alt: "Hiker Testimonial Picture 3",
    position: "15% 85%",
    testimonial: `The natural beauty all around was stunning, the facilities were spot-on, and the staff felt like friends. Whether you're up for outdoor adventures or just relaxing by the campfire, it's the perfect spot to unwind and make memories. I'm definitely counting down to my next visit!`
  }
]

export default function Testimonials() {
  return (
    <section className="flex flex-col justify-center items-center h-[46rem] xs:h-[42rem] sm:h-[38rem]">
      <div className="carousel w-full lg:w-4/5 xl:w-3/5">
        {testimonialImages.map((image, index) => {
          return (
            <div
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <div className="flex justify-center items-center w-full p-10">
                <div className="card relative sm:flex-row items-center bg-white border-2 border-primary shadow-xl w-[20rem] sm:w-[34rem] 2xl:w-[38rem] space-y-10 xs:space-y-4 sm:space-y-0 sm:space-x-10 p-10">
                  <picture>
                    <Image
                      width={150}
                      height={150}
                      src={image.path}
                      alt={image.alt}
                      className="h-[125px] w-[125px] rounded-full border-2 border-accent object-none"
                      style={{ objectPosition: image.position }}
                    />
                  </picture>
                  <p className="w-40 xs:w-60 sm:w-80 z-20 before:content-['\0022'] before:text-9xl before:text-accent before:absolute before:top-[9.5rem] before:xs:top-32 before:sm:left-[9.5rem] before:2xl:left-40 before:sm:top-4">
                    {image.testimonial}
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${
                    index + 1 === 1 ? testimonialImages.length : index
                  }`}
                  className="btn btn-circle bg-primary text-accent hover:bg-accent hover:text-primary border-none"
                >
                  ❮
                </a>
                <a
                  href={`#slide${
                    index + 1 === testimonialImages.length ? 1 : index + 2
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
