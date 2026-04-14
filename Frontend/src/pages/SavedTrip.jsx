import SavedCard from '../components/SavedCard.jsx'
import { TripContext } from '../context/TripContext.jsx'
import { useContext ,useEffect} from 'react'
import { getRandomCityImageUrl } from '../utils/imageFallback.js'
import { useNavigate } from 'react-router-dom'

const SavedTrip = () => {
  const navigate = useNavigate();
  const { userTrips, getMyTrips } = useContext(TripContext);
  //console.log(userTrips);

  const token = localStorage.getItem("planpilot_token")

  useEffect(() => {
    getMyTrips();
  },[]);

  return (
    <div className='mt-20 m-10'>
      <div className='text-4xl md:text-6xl font-bold text-gray-700' >Saved Trips</div>
      <div className='flex flex-row justify-between'>
        <p className='text-gray-500 text-sm leading-relaxed mt-5 w-1/2'>Your curated collection of future adventure and dream destinations, waiting to be explored.</p>
        <div className='flex flex-row gap-2 mt-5'>
          <button className='px-2 rounded-4xl bg-primary text-on-primary font-medium shadow-md shadow-primary/20 transition-all cursor-pointer bg-blue-500 text-white'>All</button>
          <button className='px-2 rounded-4xl bg-surface-container-high text-on-surface-variant transition-colors font-medium cursor-pointer bg-gray-200 text-gray-700 hover:bg-gray-300'>Cities</button>
          <button className='px-2 rounded-4xl bg-surface-container-high text-on-surface-variant transition-colors font-medium cursor-pointer bg-gray-200 text-gray-700 hover:bg-gray-300'>Nature</button>
        </div>
      </div>

     {!token ? <div className='text-lg font-semibold text-red-600 mt-10' >Please Login to see your Saved Trips</div> : <div></div>}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12' >
        {userTrips.map((data, index) => (
          <SavedCard
            key={index}
            id={data._id}
            img={data.image || getRandomCityImageUrl(data.destination, data._id)}
            name={data.tripTitle}
            location={data.destination}
          />
        ))}
      </div>

      <div className='mt-20 m-10'>
        <div className='flex gap-4 bg-gray-100 rounded-4xl'>
          <div className='p-4 m-10'>
            <p className='text-xs font-bold text-blue-500'>RECOMMENDATION</p>
            <h1 className='text-4xl font-bold text-gray-800 mt-2'>Need more inspiration?</h1>
            <p className='text-xs text-gray-500 mt-2'>Our AI navigator has curated a list of trending destinations based on previous intrests. Check them out to expand your bucket list.</p>

            <p onClick={() => {navigate("/recommendation")}} className='mt-4 text-blue-500 font-bold flex justify-start items-center cursor-pointer'>Explore Trending Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full p-4 m-8">
            <div className="h-48 rounded-lg overflow-hidden relative">
              <img alt="Tropical" className="w-full h-full object-cover" data-alt="pristine tropical beach with white sand and leaning palm trees under a bright midday sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Ve67JDF30Vdep1QpIFegFtDbuL0eyuQ9E5xXOdb5MHLdTSsRWTu_DgozvSDtyH1xk83gO1EAt6HAp956DWMWtJ3vnmkhXYW4MTvjcg7AO7PNEiVoP-r59xq4L9bVdOo3ka0EfqYGXFlU3BqzoRenRyag5qg-KIzkhEd2cn5xxpYK66vrUgmwTGL01LTaRtbKD2UBZepbaoMeqjQTuvKTY2gCHPSwWLpN6NlR8WaLIO_uNIfKCk2lccmeDAwz5_HoCWzh1ZzQdsM" />
            </div>
            <div className="h-48 rounded-lg overflow-hidden relative mt-8">
              <img alt="Aurora" className="w-full h-full object-cover" data-alt="stunning green northern lights dancing over a snowy arctic landscape with small cabins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDR5qAeM4tlYVFDyiMArdRJ2YxPnpJLwG8MFtF0t6nYIzN9SXX5E0P7qHq1CmmJNEYk7FkY3udzYunPlsZo2EvppFTAf8WEn6q2HhevlPA0pso4eaMVaTn4T0mnuHgVwv5FU9HHjjDeIODxukV6yfTFmb9O1obrSfv90GLHgOOTwCGv54609tuwpH0ZUQpoIvY8hkz8WbVJifZJqXxJNdOl3yoJd6pr3UDbIHhjavCuuEMm4tGekPMf4vEZa-1QqIsxWo9fM-340o" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SavedTrip