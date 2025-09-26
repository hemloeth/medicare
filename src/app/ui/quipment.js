import React from 'react'

const EquipmentCard = ({ image, title, button }) => {
  return (
    <div className='flex flex-col items-center justify-center w-[125px]'>
        <img src={image} alt="equipment" className="w-16 h-16 mb-4" />
        <h3 className="text-center text-sm mb-2">{title}</h3>
        <button className="bg-black text-white px-3 py-1 rounded-[6px]">{button}</button>
    </div>
  )
}

export default EquipmentCard