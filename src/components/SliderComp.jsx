import cateImage_1 from '../assets/Images/Category Image-1.svg'
import cateImage_2 from '../assets/Images/Category Image-12svg.svg'
import cateImage_3 from '../assets/Images/Category Image-3.svg'
import cateImage_4 from '../assets/Images/Category Image-4.svg'
import cateImage_5 from '../assets/Images/Category Image-5.svg'
import cateImage_6 from '../assets/Images/Category Image-6.svg'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

function SliderComp() {
    const imageArr = [cateImage_1, cateImage_2, cateImage_3, cateImage_4 , cateImage_5 , cateImage_6]
  return (
    <section id="section" className='flex items-center gap-[10rem] py-[2rem]'>
        <div id="left-btn"><FaArrowCircleLeft size={'2.4rem'} /></div>
        <div id="cart-section" className='grid grid-cols-6 gap-[6rem]'>
        {
          imageArr.map((image , idx) =>{
           return <img src={image} alt=""key={idx} />
          })
        }
        </div>
        <div id="right-btn"><FaArrowCircleRight size={'2.4rem'} /></div>
      </section>
  )
}

export default SliderComp
