import BannerDetails from "../components/BannerDetails"
import BestSeller from "../components/BestSeller"
import CategoryBanner from "../components/CategoryBanner"
import Discount from "../components/Discount"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SliderComp from "../components/SliderComp"
function Home() {
  return (
    <div className="w-[100%]"  id="home-page">
      <Header />
      <div id="hero-section" className="w-[100%]">
        <HeroSection />
      </div>
      <div id="banner-section" className="w-[100%]">
        <CategoryBanner />
      </div>
      <div id="bestseller-section">
        <BestSeller />
      </div>
      <div id="slider" className="my-[3rem] max-w-[138rem] mx-auto px-[2rem]">
        <SliderComp />
      </div>
      <div id="banner-details" className="w-[100%] p-[4rem]">
        <BannerDetails />
      </div>
      <div id="discount-page">
        <Discount />
      </div>
    </div>
  )
}

export default Home
