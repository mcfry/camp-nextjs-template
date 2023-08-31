import clsx from "clsx"
import { Mansalva } from "next/font/google"

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] })

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 flex-grow">
      <span
        className={clsx(
          "bg-gradient-to-r from-primary to-orange-900 bg-clip-text text-transparent font-bold text-9xl",
          mansalva.className
        )}
      >
        About Us
      </span>
      <p className="w-3/5">
        Welcome to our campgrounds, where adventure and relaxation intertwine to
        create unforgettable experiences in the heart of nature. Nestled amidst
        stunning landscapes, our campgrounds offer a haven for outdoor
        enthusiasts, families, and friends seeking to reconnect with the great
        outdoors. With a commitment to providing exceptional amenities and a
        warm, welcoming atmosphere, we invite you to escape the hustle and
        bustle of everyday life and immerse yourself in the tranquility of
        nature. Our well-maintained facilities, diverse range of activities, and
        friendly staff ensure that every moment spent here is filled with joy
        and wonder. Whether you're an avid hiker, a nature photographer, a
        fishing enthusiast, or simply someone looking to unwind by the campfire,
        our campgrounds have something special for everyone. Join us and be part
        of our vibrant community that shares a deep appreciation for the beauty
        and serenity of the natural world. Your adventure begins here.
      </p>
    </section>
  )
}
