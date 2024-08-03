import SliderComp from "./SliderComp"



function CategoryBanner() {
  
  return (
    <div id='banner-category' className='text-[poppins] max-w-[138rem] mx-auto'>
      <div id="banner-heading">
        <h1 className='text-center font-[600] text-[1.8rem] my-[4rem]'>Explore Categories</h1>
      </div>

      <SliderComp />
    </div>
  )
}

export default CategoryBanner
