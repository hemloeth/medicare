import React from 'react'

const ServiceCard = ({image, title, description, minutes, sortdescription, price, className = '', ...props}) => {
  return (
    <div className={`flex flex-col p-6 w-[435px] h-[487px] bg-white rounded-[30px] ${className}`} {...props}>
        <div className=''>
             <div className='border-1 border-[#f0f1f1] rounded-full w-fit p-2'>
             <div className='rounded-full w-fit bg-[#f0f1f1] '>
            <img src={image} alt="service" className='w-[50px] h-[50px] p-2 rounded-full'/>
            </div>
             </div>
            <h3 className='text-2xl font-poppins pt-4'>{title}</h3>
            <p>{sortdescription}</p>
            <p className='px-4 py-2 mt-2 inline-block rounded-lg bg-[#f0f1f1]'>{minutes}</p>
            <p className='mt-20 text-sm'>{description}</p>
            <div className='h-[2px] w-[90%] mx-auto bg-[#D9D9D9] mt-4'></div>
            <div className='mt-auto'>
              <p className='mt-2 text-sm font-poppins'>Starting From</p>
              <div className='flex flex-row items-center justify-between'>
              <p className='text-3xl font-poppins font-semibold'>{price}</p>
              <button className='bg-[#000000] text-white px-8 py-2 rounded-[8px] cursor-pointer'>Details</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard