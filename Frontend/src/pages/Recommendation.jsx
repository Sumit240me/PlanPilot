import React,{ useContext, useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import Bottombar from '../components/Bottombar.jsx'
import { TripContext } from '../context/TripContext.jsx' 
import { getAllImagesFromTrip } from '../utils/imageFallback.js'
const Recommendation = () => {
  const { allTrips,getAllTrips } = useContext(TripContext);

  const trips = allTrips
 
  const [filter, setFilter] = useState('all');

  const filteredTrips = trips.filter((trip) => {
    if (filter === 'all') {
      return true;
    }
    return trip.mood === filter;
  });
 
 console.log("trips",trips);

 useEffect(() => {
   getAllTrips();
 },[]);

  return (
    <div className='mt-16 px-4 pb-6 sm:mt-20 sm:px-6 lg:px-10'>
      <div>
        <h2 className='font-bold text-blue-500'>CURATED FOR YOU</h2>
        <div className=' mt-2 text-4xl md:text-6xl font-bold'>
          <h1 className='text-gray-700'>Discover Your Next</h1>
          <h1 className="bg-linear-to-br from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Serene Escape
          </h1>
        </div>
        <div>
          <p className='text-gray-500 text-sm leading-relaxed mt-5 md:w-1/2'>Hand-picked destinations matching your travel profile. From hidden coastal gems to majestic mountain retreats, find the journey that speaks to your soul.</p>
        </div>
      </div>

      {/* Cards components */}

      {/* Navbar for cards */}

      <div className="flex flex-wrap gap-3 mt-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          All Destinations
        </button>
        <button
          onClick={() => setFilter('relaxing')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'relaxing' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Relaxing
        </button>
        <button
          onClick={() => setFilter('adventure')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'adventure' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Adventure
        </button>
        <button
          onClick={() => setFilter('cultural')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'cultural' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Cultural Heritage
        </button>
        <button
          onClick={() => setFilter('romantic')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'romantic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Romantic
        </button>
        <button
          onClick={() => setFilter('luxury')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'luxury' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Luxury
        </button>
      </div>

      {/* Cards */}
        {/* // image, tripTitle,destination,grandTotal, tripIntro, id */}
      <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
        {filteredTrips.map((destination,index) => (
          <Card key={index} image={destination.image} tripTitle={destination.tripTitle} destination={destination.destination} grandTotal={destination.costEstimate?.grandTotal} tripIntro={destination.tripIntro} id={destination._id} fallbackImages={getAllImagesFromTrip(destination)} />
        ))}
        {filteredTrips.length === 0 && (
          <div className='col-span-full text-center text-gray-500 mt-10'>
            <p>No destinations found for the selected category.</p>
          </div>
        )}
      </div>

      <div className='mt-16 overflow-hidden rounded-4xl bg-gray-100 sm:mt-20'>
        <Bottombar />
      </div>
    </div>
  )
}

export default Recommendation