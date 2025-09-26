import React from 'react'
import ImageCard from '../ui/imagecard'

const Categories = () => {

    const categories = [
        {
            image: "/nursing.png",
            title: "Home Nursing"
        },
        {
            image: "/babycare.png",
            title: "Baby Care"
        },
        {
            image: "/sleep.png",
            title: "Sleepanalyst"
        },
        {
            image: "/nursecall.png",
            title: "Nurse on Call"
        },
        {
            image: "/elderlycare.png",
            title: "Elderly Care"
        },
        {
            image: "/patient.png",
            title: "Patient Care"
        }    
    ]
  return (

    <div className='bg-white py-20 px-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-4xl font-poppins mb-4'>
          Because hospitals aren't home.
          <br />
          Medify brings healthcare to you.
        </h1>
      </div>
       <div className="mt-12">
         {/* First row */}
         <div className="flex justify-center gap-4 mb-4">
           <ImageCard 
             key={0} 
             image={categories[0].image} 
             title={categories[0].title}
             isFirst={true}
             isLast={false}
           />
           <ImageCard 
             key={1} 
             image={categories[1].image} 
             title={categories[1].title}
             isFirst={false}
             isLast={false}
           />
           <ImageCard 
             key={2} 
             image={categories[2].image} 
             title={categories[2].title}
             isFirst={false}
             isLast={false}
           />
         </div>
         
         {/* Second row */}
         <div className="flex justify-center gap-4">
           <ImageCard 
             key={3} 
             image={categories[3].image} 
             title={categories[3].title}
             isFirst={false}
             isLast={false}
           />
           <ImageCard 
             key={4} 
             image={categories[4].image} 
             title={categories[4].title}
             isFirst={false}
             isLast={false}
           />
           <ImageCard 
             key={5} 
             image={categories[5].image} 
             title={categories[5].title}
             isFirst={false}
             isLast={true}
           />
         </div>
       </div>
<div className='flex justify-center'>
<button className='bg-black text-white px-14 py-4 rounded-[99px] cursor-pointer hover:bg-gray-100 transition-colors mt-20'>Book Now</button>

    </div>    </div>
  )
}

export default Categories