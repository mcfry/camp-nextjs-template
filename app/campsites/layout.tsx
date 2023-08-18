export default function CampsiteLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col justify-content-center items-center">
      parent
      {children}
    </section>
  )
}
