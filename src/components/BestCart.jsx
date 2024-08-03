import group_ball from '../assets/Images/group-ball.svg'
function BestCart({image , label}) {
  return (
    <div className="w-[100%] h-[100%] bg-[#F9F1E7] p-[2rem] rounded-[1rem]">
      <img className="w-[100%] " src={image} alt="" />
      <p className="py-[.5rem] text-[.8rem]">{`standard (3.5’’ x 2’’`}</p>
      <p className="py-[.5rem] text-[.8rem]">100 from $14.99</p>
      <img className='w-[50%] my-[1rem]' src={group_ball} alt="" />
    </div>
  )
}

export default BestCart
