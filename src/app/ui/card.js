import React from 'react'

const Card = ({ 
  image = "/image 3.png", 
  title = "Default Title", 
  description = "Default description",
  className = ""
}) => {
  return (
    <div className={`rounded-[30px] shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col ${className}`}>
        <div className="flex flex-col justify-between items-center text-center h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center flex-1 px-2">
              <h3 className="text-xl font-semibold mb-2">
                {title}
              </h3>
              <p className="leading-relaxed">
                {description}
              </p>
            </div>
        </div>
    </div>
  )
}

export default Card