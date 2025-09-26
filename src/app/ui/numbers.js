import React from 'react'

const Numbers = ({ number, text }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-4xl font-poppins font-bold'>{number}</p>
        <p className='text-sm font-poppins'>{text}</p>
    </div>
  )
}

export default Numbers