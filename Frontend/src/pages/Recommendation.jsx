import React,{ useContext, useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import Bottombar from '../components/Bottombar.jsx'
import { TripContext } from '../context/TripContext.jsx' 


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
 },[])

  return (
    <div className='mt-20 m-10'>
      <div>
        <h2 className='font-bold text-blue-500'>CURATED FOR YOU</h2>
        <div className=' mt-2 text-4xl md:text-6xl font-bold'>
          <h1 className='text-gray-700'>Discover Your Next</h1>
          <h1 className="bg-linear-to-br from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Serene Escape
          </h1>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-gray-500 text-sm leading-relaxed mt-5 w-1/2'>Hand-picked destinations matching your travel profile. From hidden coastal gems to majestic mountain retreats, find the journey that speaks to your soul.</p>
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
          onClick={() => setFilter('coastal')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'coastal' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Coastal
        </button>
        <button
          onClick={() => setFilter('mountain')}
          className={`px-6 py-2.5 rounded-full transition-colors font-medium cursor-pointer ${filter === 'mountain' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Mountain
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
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
        {filteredTrips.map((destination,index) => (
          <Card key={index} image={destination.days[0].activities[0].photos[0]} tripTitle={destination.tripTitle} destination={destination.destination} grandTotal={destination.costEstimate.grandTotal} tripIntro={destination.tripIntro} id={destination._id} />
        ))}
        {filteredTrips.length === 0 && (
          <div className='col-span-full text-center text-gray-500 mt-10'>
            <p>No destinations found for the selected category.</p>
          </div>
        )}
      </div>

      <div className='mt-20 bg-gray-100 rounded-4xl'>
        <Bottombar />
      </div>
    </div>
  )
}

export default Recommendation