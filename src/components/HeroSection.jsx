import Buttons from "./Buttons"
import heroBanner from '../assets/Images/hero-banner.png'


function HeroSection() {
  return (
    <section id="hero-body" className="font-[poppins] w-[100%] mx-auto  relative flex">
    <img className="absolute" src={heroBanner} alt="" />
        <div id="left-section" className="w-[100%] max-w-[40rem] items-center mx-[15rem] py-[15rem] z-[1000000]">
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
