export default function Ratings({
  number,
  size
}: {
  number: number
  size: string
}) {
  const count = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <div className={`rating rating${size}`}>
      {count.map((_, index) => (
        <input
          key={index}
          className="mask mask-star-2 bg-orange-400"
          checked={index + 1 === number}
          disabled
        />
      ))}
    </div>
  )
}
