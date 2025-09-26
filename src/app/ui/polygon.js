import React from 'react'

const Polygon = ({ image, text }) => {
  return (
    <div 
      className='w-[125px] h-[125px]'
    >
      <div 
        className='w-full h-full bg-[#fdfcfd] flex flex-col items-center justify-center p-2'
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          borderRadius: '15px'
        }}
      >
        {image && (
          <img 
            src={image} 
            alt={text || 'Icon'} 
            className='w-10 h-10 object-contain mb-2'
          />
        )}
        {text && (
          <p className='text-xs text-center text-gray-700 font-medium leading-tight'>{text}</p>
        )}
      </div>
    </div>
  )
}

export default Polygon