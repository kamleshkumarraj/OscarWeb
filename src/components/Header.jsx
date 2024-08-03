import { CiFolderOn, CiHeart, CiSearch } from "react-icons/ci"
import { TiArrowLeft, TiArrowRight } from "react-icons/ti"
import headerlogo from '../assets/Logo/header-logo.svg'
import { LuContact } from "react-icons/lu"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { FaBars } from "react-icons/fa"

//code for header parts.
function Header() {
    const lists = ["Bussiness Cards","PostCard & Print Advertising" , "Sign Banner & Poster","Labels, Stickers & Packagins","Home & Photo gifts","Wedding","Clothing & Bags","Design & logo"]
  return (
    <header className='w-[100%] bg-[#282828] pt-[1rem] font-[DomSans] text-[#ffff]' id="nav-bar">
        <nav id="top-nav" className="flex justify-around max-w-[80rem] mx-auto">
            <div id="left-btn">
                <TiArrowLeft size={'2rem'}/>
            </div>
            <div id="para"><p className="text-[1.4rem]">Free Home Shipping above 5000</p></div>
            <div id="right-btn">
                <TiArrowRight size={'2rem'}/>
            </div>
        </nav>
        <div id="bottom-nav" className="text-[#ffff ] bg-[#524BAD] py-[1rem] px-[2rem] w-[100%] mt-[1rem]">
            <nav id="top-bar" className="max-w-[120rem] mx-auto flex justify-between items-center border-b-[1px] border-[#ffffffad] pb-[1.2rem]">
                <div id="serch" className="hidden sm:flex gap-[1rem] items-center">
                    <div id="search-logo">
                        <CiSearch size={'2rem'}/>
                    </div>
                    <p id="tag">
                        What are you looking for?
                    </p>
                </div>
                <div id="logo" className="w-[22rem]">
                    <img className="w-[100%] h-[100%]" src={headerlogo}  alt="header-logo" />
                </div>
                <div id="menu" className="sm:flex gap-[3rem] hidden ">
                    <a href=""><LuContact size={'2rem'} /></a>
                    <a href=""><CiHeart size={'2rem'} /></a>
                    <a href=""><LiaShoppingBagSolid size={'2rem'} /></a>
                    <a href=""><CiFolderOn size={'2rem'} /></a>
                </div>
                <div id="bars" className="sm:hidden hover:cursor-pointer">
                <FaBars size={'2.4rem'} /></div>
            </nav>
            <nav id="bottom-bar" className=" hidden  max-w-[120rem] mx-auto px-[2rem] gap-[1.5rem] py-[.8rem] md:flex">
                {
                    lists.map((list , idx) =>{
                        return <li className="list-none text-[1.2rem] uppercase" key={idx} id="list">{list}</li>
                    })
                }
            </nav>
        </div>
    </header>
  )
}

export default Header
