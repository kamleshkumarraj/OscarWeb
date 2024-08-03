import dist_1 from '../assets/Images/dis-1.svg'
import dist_2 from '../assets/Images/dis-2.svg'
import dist_3 from '../assets/Images/dis-3.svg'
import dist_4 from '../assets/Images/dis-4.svg'
import dist_5 from '../assets/Images/dis-5.svg'
import dist_6 from '../assets/Images/dis-6.svg'
function Discount() {
    const imgArr = [dist_1, dist_2, dist_3 , dist_4,dist_5,dist_6]
  return (
    <div id="discount" className="max-w-[100rem] mx-auto my-[2rem]">
      <div id="heading">
        <h1 className="text-[3rem] font-[600] text-center">Follow products and discounts on Instagram</h1>
      </div>
      <div id="image-section" className=" grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 gap-[2rem] my-[1rem]">
        {
            imgArr.map((img,  idx) =>{ 
                return <img className='' src={img} key={idx} alt="discount_iamge" />
            })
        }

      </div>
    </div>
  )
}

export default Discount
