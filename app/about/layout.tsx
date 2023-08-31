export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <section className="flex flex-col flex-grow">{children}</section>
}
