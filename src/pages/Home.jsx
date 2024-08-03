import BannerDetails from "../components/BannerDetails"
import BestSeller from "../components/BestSeller"
import CategoryBanner from "../components/CategoryBanner"
import Discount from "../components/Discount"
import HeroSection from "../components/HeroSection"
import SliderComp from "../components/SliderComp"
import Subscribe from "../components/Subscribe"
function Home() {
  return (
    <div className="w-[100%]"  id="home-page">
      <div id="hero-section" className="w-[100%]">
        <HeroSection />
      </div>
      <div id="banner-section" className="w-[100%]">
        <CategoryBanner />
      </div>
      <div id="bestseller-section" className="p-[2rem]">
        <BestSeller />
      </div>
      <div id="slider" className="my-[3rem] max-w-[138rem] mx-auto px-[2rem]">
        <SliderComp />
      </div>
      <div id="banner-details" className="w-[100%] p-[4rem]">
        <BannerDetails />
      </div>
      <div id="discount-page" className="p-[2rem]">
        <Discount />
      </div>
      <div id="subscribe">
        <Subscribe />
      </div>
    </div>
  )
}

export default Home
