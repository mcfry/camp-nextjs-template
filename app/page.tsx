import Banner from "@/app/components/Banner"
import InfoPanel from "@/app/components/InfoPanel"
import InfoEventPanel from "@/app/components/InfoEventPanel"
import InfoImagePanel from "@/app/components/InfoImagePanel"
import Gallery from "@/app/components/Gallery"
import Activities from "@/app/components/Activities"

const images = [
  {
    path: "/tent-1.jpg",
    description: "Large group: Nice site in the woods.",
    alt: "Site in the woods"
  },
  {
    path: "/tent-2.jpg",
    description: "Small group: Surrounded by trees with a stone base.",
    alt: "Site surrounded by trees"
  },
  {
    path: "/tent-3.jpg",
    description:
      "Small group: Secluded with tree cover, with vistas of the city.",
    alt: "Site with with vista"
  },
  {
    path: "/tent-4.jpg",
    description: "Large group: Open area perfect for large groups.",
    alt: "Large open site"
  },
  {
    path: "/tent-5.jpg",
    description: "Large group: Site by the lake.",
    alt: "Site by the lake"
  },
  {
    path: "/tent-6.jpg",
    description: "Large group: Site in the woods.",
    alt: "Site in the woods"
  },
  {
    path: "/tent-7.jpg",
    description: "Large group: Site by the lake.",
    alt: "Site by the lake"
  },
  {
    path: "/hiker_in_tent.jpg",
    description: "Large group: Site by the lake.",
    alt: "Site by the lake"
  },
  {
    path: "/tent-9.jpg",
    description: "Large group: Site in the woods.",
    alt: "Site in the woods"
  }
]

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
      <Gallery images={images} />
      <Activities />
    </>
  )
}
