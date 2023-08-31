import clsx from "clsx"
import Image from "next/image"

export default function Activity({
  imageObj1,
  imageObj2
}: {
  imageObj1: { path: string; name: string }
  imageObj2: { path: string; name: string }
}) {
  return (
    <div className="flex justify-evenly relative">
      <div
        className={clsx(
          "relative z-0",
          "before:h-24 before:w-24 before:bg-accent before:rounded-full before:absolute before:top-[-15px] before:left-[-16px] before:z-0",
          "after:border-accent after:border-b-[14px] after:min-[300px]:w-[140px] after:min-[350px]:w-[180px] after:min-[500px]:w-[260px] after:min-[750px]:w-[340px] after:min-[975px]:w-[420px] after:min-[1200px]:w-[500px] after:min-[1450px]:w-[580px] after:min-[1700px]:w-[660px] after:min-[1950px]:w-[740px] after:min-[2200px]:w-[820px] after:min-[2450px]:w-[900px] after:min-[2700px]:w-[980px] after:min-[2950px]:w-[1060px] after:min-[3200px]:w-[1140px] after:min-[3450px]:w-[1220px] after:min-[3700px]:w-[1300px] after:absolute after:bottom-[22px] after:z-0"
        )}
      >
        <picture className="relative">
          <Image
            src={imageObj1.path}
            height={64}
            width={64}
            className="relative opacity-[.99]"
            style={{
              transform: "translate3d(0, 0, 0px)",
              WebkitTransform: "translate3d(0, 0, 0px)",
              zIndex: 9
            }}
            alt={imageObj1.name}
          />
        </picture>
        <span className="w-40 text-center absolute left-[-48px] mt-5">
          {imageObj1.name}
        </span>
      </div>
      <div
        className={clsx(
          "relative z-0",
          "before:h-24 before:w-24 before:bg-accent before:rounded-full before:absolute before:top-[-15px] before:left-[-16px] before:z-0",
          "after:border-accent"
        )}
      >
        <picture className="relative">
          <Image
            src={imageObj2.path}
            height={64}
            width={64}
            className="relative opacity-[.99]"
            style={{
              transform: "translate3d(0, 0, 0px)",
              WebkitTransform: "translate3d(0, 0, 0px)",
              zIndex: 9
            }}
            alt={imageObj2.name}
          />
        </picture>
        <span className="w-40 text-center absolute left-[-48px] mt-5">
          {imageObj2.name}
        </span>
      </div>
    </div>
  )
}
