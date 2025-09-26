import React from 'react'

const Navbar = () => {
  return (
    <div className='z-[9999] bg-white/30 fixed top-4 backdrop-blur-[45px] shadow-md flex rounded-full items-center px-8 py-4 mx-auto'>
        <ul className='flex items-center gap-10 justify-center flex-row'>
            <li><img src="/logo.png" alt="logo" width={50
              
            } height={50} /></li>
            <li>Home</li>
            <li>Nursing</li>
            <li>Consultance</li>
            <li>Radiology</li>
            <li>Pathology</li>
            <li>Pharmacy</li>
            <li>Lab</li>
            <li>Home Care</li>
        </ul>
    </div>
  )
}

export default Navbar