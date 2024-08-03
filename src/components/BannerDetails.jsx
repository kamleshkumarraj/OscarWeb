import banner_1 from '../assets/Images/banner-1.svg'
import banner_2 from '../assets/Images/banner-2.svg'
import banner_3 from '../assets/Images/banner-3.svg'
function BannerDetails() {
  return (
    <div className="bg-[#648FA4] w-[100%] font-[poppins] md:items-center pr-[2rem] gap-[2rem] flex md:pl-[6rem] pl-[2rem] py-[2rem] flex-col md:flex-row" id="banner-details">
      <div id="detils" className="max-w-[30rem] ">
        <h1 className="text-[2.4rem] font-[600] text-[#3A3A3A]">Stand out with a custom, budget-friendly design.</h1>
        <p className="text-[1.2rem] text-[#fff] pt-[1.5rem]">Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours </p>
        <div id="btn" className='my-[3rem]'>
        <button>
          <p className='text-center text-[1.1rem] py-[1rem] px-[1.5rem] rounded-[.5rem] text-[#fff] bg-[#FF7D04]'>Work With Designer</p>
        </button>
      </div>
      </div>
      <div id="banner" className='flex gap-[2rem]'>
        <div id="banner-1">
          <img className='w-[100%]' src={banner_1} alt="" />
        </div>
        <div id="banner-2">
          <img className='w-[100%]' src={banner_2} alt="" />
        </div>
        <div id="banner-3">
          <img className='w-[100%]' src={banner_3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerDetails
