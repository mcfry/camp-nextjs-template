import Banner from "@/app/components/Banner"
import InfoPanel from "@/app/components/InfoPanel"
import InfoEventPanel from "@/app/components/InfoEventPanel"
import Testimonials from "@/app/components/Testimonials"
import Ratings from "./components/Ratings"

export default function Home() {
  return (
    <>
      <Banner />
      <div className="flex justify-center items-center">
        <Ratings number={4} size="rating-lg" color="bg-green-500" />
      </div>
      <InfoPanel />
      <InfoEventPanel />
      <Testimonials />
    </>
  )
}
