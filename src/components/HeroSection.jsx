import Buttons from "./Buttons"
import heroBanner from '../assets/Images/hero-banner.png'
import hero from '../assets/Images/hero.jpeg'

function HeroSection() {
  return (
    <section id="hero-body" className="font-[poppins] w-[100%] mx-auto  relative flex bg-[#648FA4]">
    <img className="absolute w-[100%] h-[100%] hidden sm:block" src={heroBanner} alt="" />
        <div id="left-section" className="w-[100%] bg-[#648FA4] lg:max-w-[40rem] items-center lg:mx-[15rem] sm:max-w-[30rem] mx-[2rem] sm:py-[10rem] py-[4rem] lg:py-[15rem] z-[1000000]">
        <img className="self-center text-center rounded-[2rem] sm:hidden w-[100%]" src={hero} alt="" />
            <div id="heading">
                <h1 className="text-[3rem] font-[800] py-[1.5rem] text-[#4E69AE]">CUSTOM SIGNS</h1>
            </div>
            <div id="para" className="text-[#fff] text-[1.4rem] pb-[3rem]">
                <p>20% off all signage | Code: SIGNS20 | Enter code at checkout. Cannot be combined with other promo codes, promotions or discounts.</p>
            </div>
            <div id="button" className="flex gap-[2rem] flex-wrap">
                <Buttons label={'Vinyl Banners'}/>
                <Buttons label={'Yard Signs'}/>
                <Buttons label={'Retractable Banner'}/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
