"use client"

import React, { useState } from 'react'
import ServiceCard from '../ui/servicecard'

const Service = () => {
  const [activeCard, setActiveCard] = useState(3) // Center card is active by default
  const [previousCard, setPreviousCard] = useState(3) // Track previous center card

  const services = [
    {
      image: "/MRI.png",
      title: "MRI SCAN",
      description: "An MRI scan is a radiological investigation used to assess soft tissue structures in the body. It is a particular and precise imaging scan for all parts of the body. MRI scans find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "10 minutes",
      sortdescription: "Magnetic Resonance Imaging",
      price: "₹ 1500"
    },
    {
      image: "/MRI.png",
      title: "CT SCAN",
      description: "A CT scan is a radiological investigation used to assess soft tissue structures in the body. It is a particular and precise imaging scan for all parts of the body. CT scans find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "15 minutes",
      sortdescription: "Computed Tomography",
      price: "₹ 2000"
    },
    {
      image: "/MRI.png",
      title: "X-RAY",
      description: "An X-ray is a radiological investigation used to assess bone structures in the body. It is a particular and precise imaging scan for all parts of the body. X-rays find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "5 minutes",
      sortdescription: "Radiography",
      price: "₹ 500"
    },
    {
      image: "/MRI.png",
      title: "X-RAY",
      description: "An X-ray is a radiological investigation used to assess bone structures in the body. It is a particular and precise imaging scan for all parts of the body. X-rays find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "5 minutes",
      sortdescription: "Radiography",
      price: "₹ 500"
    },
    {
      image: "/MRI.png",
      title: "X-RAY",
      description: "An X-ray is a radiological investigation used to assess bone structures in the body. It is a particular and precise imaging scan for all parts of the body. X-rays find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "5 minutes",
      sortdescription: "Radiography",
      price: "₹ 500"
    },
    {
      image: "/MRI.png",
      title: "X-RAY",
      description: "An X-ray is a radiological investigation used to assess bone structures in the body. It is a particular and precise imaging scan for all parts of the body. X-rays find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "5 minutes",
      sortdescription: "Radiography",
      price: "₹ 500"
    },
    {
      image: "/MRI.png",
      title: "X-RAY",
      description: "An X-ray is a radiological investigation used to assess bone structures in the body. It is a particular and precise imaging scan for all parts of the body. X-rays find use in every branch of medicine to discern the anatomical cause of a disease or pathology.",
      minutes: "5 minutes",
      sortdescription: "Radiography",
      price: "₹ 500"
    },

  ]

  return (
    <div className='flex bg-[#f0f1f1] flex-col items-center justify-center pt-20 pb-20 gap-20'>
      <h2 className='text-5xl w-1/2 text-center font-poppins'>Precise, affordable radiology
      services — available in your area.</h2>
      
      <div className='relative w-full h-[500px] flex justify-center items-center overflow-hidden max-w-7xl mx-auto'>
        {services.map((service, index) => {
          // Calculate relative position from center (always show 3 on each side)
          let relativeIndex = index - activeCard
          
          // Handle infinite loop for relative positioning
          if (relativeIndex > services.length / 2) {
            relativeIndex -= services.length
          } else if (relativeIndex < -services.length / 2) {
            relativeIndex += services.length
          }
          
          const isActive = relativeIndex === 0
          const isLeft = relativeIndex < 0
          const isRight = relativeIndex > 0
          const distance = Math.abs(relativeIndex)
          
          let transform = ''
          let zIndex = 0
          let opacity = 1
          let scale = 1
          
          if (isActive) {
            zIndex = 1000 // Very high z-index for active card
            scale = 1
            opacity = 1
            transform = 'translateX(-50%) translateZ(0)' // Center using left: 50% and translateX(-50%)
          } else if (distance <= 2) {
            // Show only 2 cards on each side
            if (isLeft) {
              transform = `translateX(calc(-50% - ${100 + (distance - 1) * 80}px)) translateZ(0)`
              zIndex = 10 - distance // Much lower z-index than active card
            } else {
              transform = `translateX(calc(-50% + ${100 + (distance - 1) * 80}px)) translateZ(0)`
              zIndex = 10 - distance // Much lower z-index than active card
            }
            opacity = 0.4
            scale = 1
          } else {
            // Hide cards beyond 2 on each side
            transform = 'translateX(-50%) translateZ(0)'
            zIndex = 1
            opacity = 0
            scale = 0.8
          }
          
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out cursor-pointer will-change-transform"
              style={{
                transform: transform,
                zIndex: zIndex,
                opacity: opacity,
                scale: scale,
                 filter: isActive ? 'none' : 'blur(6px)', // Add more blur to non-active cards
              }}
              onClick={() => {
                // Smooth transition when clicking a card
                setActiveCard(index) // Set new center
              }}
            >
              <ServiceCard 
                image={service.image}
                title={service.title}
                description={service.description}
                minutes={service.minutes}
                sortdescription={service.sortdescription}
                price={service.price}
                className={`${
                  isActive 
                    ? 'shadow-2xl' 
                    : 'shadow-none' // Remove shadows from non-active cards
                } transition-all duration-700`}
              />
            </div>
          )
        })}
      </div>
      
      {/* Navigation buttons */}
      <div className='flex justify-center items-center gap-16'>
        <button
          onClick={() => setActiveCard(activeCard === 0 ? services.length - 1 : activeCard - 1)}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setActiveCard(activeCard === services.length - 1 ? 0 : activeCard + 1)}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Service