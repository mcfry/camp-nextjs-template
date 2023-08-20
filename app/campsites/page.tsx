import Gallery from "@/app/components/Gallery"

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
  },
  {
    path: "/tent-10.jpg",
    description: "Large group: Site in the woods.",
    alt: "Site in the woods"
  },
  {
    path: "/tent-11.jpg",
    description: "Large group: Site in the woods.",
    alt: "Site in the woods"
  },
  {
    path: "/tent-12.jpg",
    description: "Large group: Site in the woods.",
    alt: "Site in the woods"
  }
]

export default function Campsite() {
  return (
    <>
      <Gallery images={images} />
    </>
  )
}
