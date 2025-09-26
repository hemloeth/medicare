import React from 'react'
import Polygon from '../ui/polygon'
import Numbers from '../ui/numbers'

const Experts = () => {
  return (
    <div className='relative bg-[#f0f1f1] h-screen pt-20 mt-20'>
        <div className='flex flex-col items-center gap-8'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-5xl font-poppins'>Book a Consultation with Our Experts Today</h2>
                <p className='mt-4 text-center'>Our top experts are 24x7 available for consultation. User can dial in or directly book an appointment from our medify app. </p>
            </div>
        </div>
        <div>
        <div className='absolute left-1/2 top-78 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2'>
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon image="/dietician.png" text="Dietician" />
            <Polygon image="/dentist.png" text="Dentist" />
            <Polygon image="/Nephrologist.png" text="Nephrologist" />
            <Polygon image="/orthopadic.png" text="Orthopedician" />
            <Polygon />
            <Polygon />
            <Polygon />
            
        </div>
        <div className='absolute left-1/2 top-104 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2'>
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon image="/dermotology.png" text="Dermatologist" />
            <Polygon image="/gyanocology.png" text="Gynecologist" />
            <Polygon image="/physician.png" text="Physician" />
            <Polygon image="/therapy.png" text="Physiotherapy" />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            
        </div>
        <div className='absolute left-1/2 top-130 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2'>
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon image="/urologist.png" text="Urologist" />
            <Polygon image="/neurology.png" text="Neurologist" />
            <Polygon image="/endocrinology.png" text="Endocrinology" />
            <Polygon image='yoga expert.png' text="Yoga Expert" />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            
        </div>
        <div className='absolute left-1/2 top-156 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2'>
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon image="/cardiologist.png" text="Cardiologist" />
            <Polygon image="/bear.png" text="Pediatrician" />
            <Polygon image='/diabetologist.png' text="Diabetologist" />
            <Polygon image='/Pulmonologist.png' text="Pulmonologist" />
            <Polygon />
            <Polygon />
            <Polygon />
            <Polygon />
            
        </div>
        </div>
        <div className='bg-white w-full mt-140 flex flex-row gap-20 justify-center items-center p-4'>
            <Numbers number="1,30,000+ " text="Platform Visters" />
            <Numbers number="192+ " text="Clinics" />
            <Numbers number="197+ " text="Hospitals" />
            <Numbers number="1296+ " text="Doctors" />
        </div>
         <div className='flex flex-row gap-30 justify-center items-center pt-5 bg-[#f0f1f1] p-4'>
             <button className='bg-black text-white px-15 py-4 rounded-[99px] cursor-pointer flex items-center gap-3'>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                 </svg>
                 Call Now
             </button>
             <div className='h-10 w-0.5 bg-black'></div>
             <button className='bg-black text-white px-15 py-4 rounded-[99px] cursor-pointer flex items-center gap-3'>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                 </svg>
                 Schedule
             </button>
         </div>
    </div>
  )
}

export default Experts