import Image from "next/image"
import "./Banner.css"

export default function Banner() {
  return (
    <section className="flex flex-col justify-center items-center relative h-[40rem]">
      <div className="flex flex-col justify-center items-center font-bold h-full z-10">
        <span className="text-9xl text-white layered-text-shadow">
          OPEN NOW
        </span>
        <span className="text-4xl text-white layered-text-shadow-smaller">
          Book your adventure today!
        </span>
      </div>
      <Image
        src="/banner.jpg"
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-full object-none absolute"
        style={{ objectPosition: "0% 50%" }}
        priority={true}
        alt="banner"
      />

      {/* Banner Curve */}
      <div className="custom-shape-divider-bottom-1692385678">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}
