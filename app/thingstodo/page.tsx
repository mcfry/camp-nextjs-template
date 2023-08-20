import InfoImagePanel from "@/app/components/InfoImagePanel"
import Activities from "@/app/components/Activities"

export default function ThingsToDo() {
  return (
    <>
      <InfoImagePanel
        panelType="left"
        imageSrc="/hiker_in_tent.jpg"
        imageAlt="hiker in tent"
      />
      <InfoImagePanel
        panelType="right"
        imageSrc="/hiker_in_tent.jpg"
        imageAlt="hiker in tent"
      />
      <Activities />
    </>
  )
}
