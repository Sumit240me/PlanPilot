import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'

const Card = ({ image, tripTitle, destination, grandTotal, tripIntro, id, fallbackImages }) => {
    const navigate = useNavigate();

    return (
        <div className='bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer flex flex-col'>
            <ImageWithFallback 
                src={image} 
                alt={destination} 
                fallbackSeed={destination || 'travel'}
                fallbackImages={fallbackImages}
                className='w-full h-80 object-cover' 
            />
            <div className='p-4 flex-1'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-bold text-gray-700'>{tripTitle}</h2>
                    <p className='text-xs font-semibold text-primary uppercase tracking-wider mb-1 text-blue-500'>STARTS FROM</p>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-xs text-gray-500 font-semibold flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-geo-alt-fill mr-1" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>{destination}</p>
                    <p className='text-gray-800 font-bold'>${grandTotal}</p>
                </div>
                <p className='text-gray-500 text-xs leading-relaxed mt-4'>{tripIntro}</p>
            </div>
            <div className='mb-4 mx-4'>
                <button onClick={() => navigate(`/trip/${id}`, { state: { tripImage: image } })} className='bg-gray-200 text-blue-500 w-full py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-300 transition-colors'>View Details</button>
            </div>
        </div>
    )
}

export default Card