import React from 'react'

const Bottombar = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-10'>
           <h1 className='text-4xl font-bold text-gray-700'>Can't decide where to go?</h1>
           <p className='text-gray-500 text-xs mt-4 w-1/2 text-center'>Let our AI-powered travel navigator build a custom itinerary based on your preferences, budget, and travel style. Design your dream vacation with just a few clicks.</p>

           <div className='mt-10 flex flex-row gap-5' >
              <button className='px-6 py-2.5 rounded-full font-medium shadow-md transition-all cursor-pointer text-white bg-gradient-to-br from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-600'>Start Custom Itinerary</button>
              <button className='px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant transition-colors font-medium cursor-pointer text-gray-700 hover:bg-gray-300'>Take Travel Quiz</button>
           </div>
        </div>
    </div>
  )
}

export default Bottombar