import React from 'react'
import { Phone } from 'lucide-react'
import Navbar from './navbar'

const HeroSection = () => {
  return (
    <div className='bg-[#f1f0f1] h-screen w-full relative'>
        <div className='flex justify-center w-full'>
            <Navbar />
        </div>
        <div className='ml-16 max-w-xs sm:ml-8 sm:max-w-sm md:ml-16 md:max-w-md lg:ml-32 lg:max-w-lg xl:ml-[415px] xl:max-w-none'>
            <img src="/vector.png" alt="herosection" />
        </div>
       <div className=' -mt-10 md:mt-0 flex justify-center items-start absolute top-[150px] left-0 right-0'>
         <h1 className='text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] text-center leading-none font-poppins font-semibold'>
          <div>Your Pocket Partner</div><div className="mt-4">For Healthier <span className="border sm:border md:border-2 lg:border-2 xl:border-2 2xl:border-2 border-[#b8b9b9] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[28px] inline-flex items-center h-[36px] sm:h-[50px] md:h-[70px] lg:h-[104px] align-middle"><img src="/image 3.png" alt="herosection" className="w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[104px] lg:h-[104px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[28px] bg-[#efefef] rotate-[12deg] ml-[-3px] sm:ml-[-5px] md:ml-[-7px] lg:ml-[-10px] mt-0.5 sm:mt-1 md:mt-1.5" style={{boxShadow: '0px 3px 6px 0px rgba(89, 89, 89, 0.89), 0px 12px 12px 0px rgba(89, 89, 89, 0.77)'}} /><span className="px-1 sm:px-1.5 md:px-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] font-poppins font-bold">Life</span></span></div>
        </h1>
       </div>
        <div className='flex justify-center items-center mt-15 sm:mt-15 md:-mt-8 lg:-mt-10 xl:-mt-16'>
             <img src="/vector 2.png" alt="herosection" className='w-[100px] h-[30px] sm:w-[150px] sm:h-[50px] md:w-[200px] md:h-[65px] lg:w-[250px] lg:h-[80px] xl:w-[300px] xl:h-[100px] 2xl:w-[350px] 2xl:h-[350px]'/>
         </div>
          <div className='flex justify-center items-center flex-col absolute top-[70%] left-0 right-0 w-full'>
             <p className='text-center max-w-4xl px-4'>Medifyhome is a healthcare platform that provides medical services in the comfort of your home. We offer a wide range of healthcare services, including doctor visits at home. Get professional medical care from our specialists—delivered where you feel most comfortable.Be assured of constant support and assistance from Medifyhome.</p>
 <div className='mt-10 flex gap-20'>
 <button className='bg-[#000000] text-white px-4 py-2 rounded-[99px] cursor-pointer'>Book Now</button>
 <button className='bg-[#f1f0f1] border-1 border-[#e1e1e1] text-black px-6 py-2 rounded-[99px] flex items-center gap-2 cursor-pointer'><Phone className="w-4 h-4" />Enquiry</button>
 </div>
          </div>
    </div>
  )
}

export default HeroSection