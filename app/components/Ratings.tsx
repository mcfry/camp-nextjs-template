import clsx from "clsx"

export default function Ratings({
  number,
  size,
  color = "bg-orange-400"
}: {
  number: number
  size: "rating-sm" | "rating-md" | "rating-lg"
  color?: string
}) {
  const count = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <div className={clsx(`rating`, size)}>
      {count.map((_, index) => (
        <input
          key={index}
          type="radio"
          className={clsx("mask mask-star-2", color)}
          checked={index + 1 === number}
          aria-label={"rating " + index}
          disabled
        />
      ))}
    </div>
  )
}
