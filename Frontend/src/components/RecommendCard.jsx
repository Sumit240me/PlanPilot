import React from 'react'
import { FaHeart } from "react-icons/fa";

const RecommendCard = (destination) => {
  const { image, alt, title, category, description, price } = destination;
  return (
    <div className='flex flex-col rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer'>
      <div className='w-80 h-80 shrink-0'>
        <img src={destination.image || getRandomCityImageUrl(destination.destination, destination._id)} alt={destination.alt} className='w-full h-full object-cover rounded-t-4xl hover:scale-105 transition-all duration-300' />
      </div>
      <div className="p-2 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold font-bold text-gray-800">{destination.title}</h3>
          <span className="bg-tertiary-container text-on-tertiary-container text-[0.65rem] font-bold px-2 py-1 rounded-full uppercase tracking-tighter bg-violet-200">{destination.category}</span>
        </div>
        <p className="text-xs text-gray-500">{destination.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-md font-bold text-blue-500">${destination.price} <span className="text-xs font-normal text-on-surface-variant text-gray-500">/ person</span></span>
          <FaHeart
            className="text-blue-500 text-sm"
            style={{ fill: "none", stroke: "#3b82f6", strokeWidth: 40 }}
          />
        </div>
      </div>
    </div>
  )
}

export default RecommendCard