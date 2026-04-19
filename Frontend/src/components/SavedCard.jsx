import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'

const SavedCard = ({ img, name, location, id, fallbackImages }) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col shadow-md shadow-gray-200 rounded-4xl hover:shadow-lg hover:shadow-gray-300 transition-all cursor-pointer bg-white'>
      <div className='w-full h-50'>
        <ImageWithFallback 
          src={img} 
          alt={name} 
          fallbackSeed={location || name || 'travel'}
          fallbackImages={fallbackImages}
          className='w-full h-50 rounded-t-4xl object-cover' 
        />
      </div>
      <div className='p-4'>
        <p className='text-xs font-bold text-blue-500'>{location}</p>
        <h1 className='text-md font-bold text-gray-800'>{name}</h1>
      </div>

      <div className='flex flex-row px-4 pb-4 gap-2 justify-between items-center'>
        <button onClick={() => navigate(`/trip/${id}`, { state: { tripImage: img } })} className='px-2 py-1 rounded-4xl w-5/6 bg-primary text-on-primary font-medium shadow-md shadow-primary/20 transition-all cursor-pointer bg-blue-500 text-white'>View Details</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
        </svg>
      </div>

    </div>
  )
}

export default SavedCard
