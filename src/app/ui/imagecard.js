import React from 'react'
import Image from 'next/image'

const ImageCard = ({image, title, isFirst, isLast}) => {
  // Different styling for first and last cards
  const getCardStyles = () => {
    if (isFirst) {
      return "bg-white border-2 border-gray-200 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden";
    } else if (isLast) {
      return "bg-white border-2 border-gray-200 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden";
    } else {
      return "bg-white border-2 border-gray-200 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden";
    }
  };

  const getImageStyles = () => {
    if (isFirst) {
      return "w-full h-full object-cover rounded-xl";
    } else if (isLast) {
      return "w-full h-full object-cover rounded-xl";
    } else {
      return "w-full h-full object-cover rounded-xl";
    }
  };

  const getTitleStyles = () => {
    if (isFirst) {
      return "absolute left-4 bottom-4 font-semibold text-white z-10";
    } else if (isLast) {
      return "absolute left-4 bottom-4 font-semibold text-white z-10";
    } else {
      return "absolute left-4 bottom-4 font-semibold text-white z-10";
    }
  };

  const getCardDimensions = () => {
    if (isFirst) {
      return { width: '527px', height: '244px' };
    } else if (isLast) {
      return { width: '527px', height: '244px' };
    } else {
      return { width: '278px', height: '284px' };
    }
  };

  return (
    <div className={getCardStyles()} style={getCardDimensions()}>
        <Image 
          src={image} 
          alt={title} 
          width={527}
          height={284}
          className={getImageStyles()}
        />
        <h3 className={getTitleStyles()}>
          {title}
        </h3>
    </div>
  )
}

export default ImageCard