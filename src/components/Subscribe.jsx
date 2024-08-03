
function Subscribe() {
  return (
    <div id="subscribe" className="max-w-[50rem] mx-auto mt-[5rem]">

        <div id="heading">
            <h1 className="text-[2.8rem] font-[600] text-center">Or subscribe to the newsletter</h1>
        </div>

        <div id="form" className="text-center">
            <form action="" className="flex gap-[2rem] my-[3rem] justify-center">
                <div id="email" className="w-[80%]">
                    <input className="focus:outline-none border-b-[.5px] border-[#000] px-[1rem] py-[.5rem] w-[100%] text-[1.4rem]" type="email" placeholder="Enter your Email Address ..."/>
                </div>
                <div id="submit" className="w-[20%]">
                    <input className="focus:outline-none border-b-[.5px] border-[#000] w-[100%] text-[1.4rem] px-[1rem] py-[.5rem]" type="submit" placeholder="submit"/>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Subscribe
