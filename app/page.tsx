import Banner from "@/app/components/Banner"
import InfoPanel from "@/app/components/InfoPanel"
import InfoEventPanel from "@/app/components/InfoEventPanel"
import InfoImagePanel from "@/app/components/InfoImagePanel"

export default function Home() {
  return (
    <>
      <Banner />
      <InfoPanel />
      <InfoEventPanel />
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
    </>
  )
}
