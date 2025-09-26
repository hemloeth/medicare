import React from 'react'
import Card from '../ui/card'

const Feature = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
        <h2 className='text-5xl font-poppins'>Comfort Care and Consultation</h2>
        <p className='mt-4 w-1/2 text-center'>User Comfort is always been our top priority. User can get online consultations from our top experts or can book nursing services
        and caretaker right from our app.</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-3xl px-4 justify-items-center'>
          <div className="flex flex-col items-center">
            <Card 
              image="/feature.png"
              title="Get online Doctor Consultation with Top Specialists"
              description="You can choose between call or chat to consult with our experts"
              className="bg-white text-gray-800"
            />
            <button className="bg-black text-white px-6 py-2 rounded-[99px] cursor-pointer hover:bg-blue-700 transition-colors mt-20">
              Consult Now
            </button>
          </div>
          
          <div className="flex flex-col items-center">
            <Card 
              image="/feature1.png"
              title="Get Qualified Professional Nursing Services and CareTaker at Home"
              description="Currently available for Hyderabad only, more cities will be inlcuded in coming time"
              className='bg-black text-white'
            />
            <button className="bg-black text-white px-6 py-2 rounded-[99px] cursor-pointer hover:bg-gray-100 transition-colors mt-20">
              Book Service
            </button>
          </div>
        </div>
    </div>
  )
}

export default Feature