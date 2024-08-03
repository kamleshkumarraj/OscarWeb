import best_image_1 from '../assets/Images/best-1.svg'
import best_image_2 from '../assets/Images/best-2.svg'
import best_image_3 from '../assets/Images/best-3.svg'
import best_image_4 from '../assets/Images/best-4.svg'
import BestCart from './BestCart'
function BestSeller() {
    const bsetImageArray = [best_image_1, best_image_2, best_image_3, best_image_4 ,best_image_1, best_image_2, best_image_3, best_image_4]
  return (
    <div id="best-sellers" className="max-w-[138rem] font-[poppins] mx-auto my-[2rem]">
      <div id="heading">
        <h1 className="text-[2.4rem] my-[3.5rem]">Bestsellers for a reason</h1>
      </div>
      <div id="sub-heading">
        <h2 className="text-[1.6rem] mb-[3.5rem]">See why these signage favorites are flying off our virtual shelves</h2>
      </div>

      <div id="bset-product-section" className='grid xl:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-[4rem]'>
        {
            bsetImageArray.map((img , idx) => {
               return <BestCart key={idx}
                    image = {img}
                />
            })
        }
      </div>
      <div id="btn" className='text-center my-[3rem]'>
        <button>
          <p className='text-center text-[1.1rem] py-[1rem] px-[1.5rem] rounded-[.5rem] text-[#fff] bg-[#FF7D04]'>View All</p>
        </button>
      </div>
    </div>

    
  )
}

export default BestSeller
