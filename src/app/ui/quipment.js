import React from 'react'
import Image from 'next/image'

const EquipmentCard = ({ image, title, button }) => {
  return (
    <div className='flex flex-col items-center justify-center w-[125px]'>
        <Image src={image} alt="equipment" width={64} height={64} className="w-16 h-16 mb-4" />
        <h3 className="text-center text-sm mb-2">{title}</h3>
        <button className="bg-black text-white px-3 py-1 rounded-[6px]">{button}</button>
    </div>
  )
}

export default EquipmentCard