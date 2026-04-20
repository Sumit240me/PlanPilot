import SavedCard from '../components/SavedCard.jsx'
import { TripContext } from '../context/TripContext.jsx'
import { useContext, useEffect, useRef, useState } from 'react'
import { getAllImagesFromTrip } from '../utils/imageFallback.js'
import { useNavigate } from 'react-router-dom'

const SavedTrip = () => {
  const navigate = useNavigate();
  const { userTrips, getMyTrips } = useContext(TripContext);
  const [isLoadingTrips, setIsLoadingTrips] = useState(true);
  console.log("userTrips", userTrips);

  const token = localStorage.getItem("planpilot_token")

  useEffect(() => {
    const loadTrips = async () => {
      setIsLoadingTrips(true);
      await getMyTrips();
      setIsLoadingTrips(false);
    };

    loadTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const normalizeStatus = (status) => (status || "").trim().toLowerCase();

  const activeTrips = userTrips.filter((trip) => normalizeStatus(trip.status) === "active");
  const planningTrips = userTrips.filter((trip) => normalizeStatus(trip.status) === "planning");
  const confirmedTrips = userTrips.filter((trip) => normalizeStatus(trip.status) === "confirmed");
  const completedTrips = userTrips.filter((trip) => normalizeStatus(trip.status) === "completed");
  const cancelledTrips = userTrips.filter((trip) => normalizeStatus(trip.status) === "cancelled");


  const useReveal = () => {
    const refs = useRef(new Set());

    const setRevealRef = (el) => {
      if (el) refs.current.add(el);
    };

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.2 });

      refs.current.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);

    return setRevealRef;
  };
  const revealRef = useReveal();

  return (
    <div className='mt-16 px-4 pb-6 sm:mt-20 sm:px-6 lg:px-10'>
      <div ref={revealRef} className='reveal-scale'>
        <div className='text-4xl md:text-6xl font-bold text-gray-700' >Saved Trips</div>
        <div>
          <p className='text-gray-500 text-sm leading-relaxed mt-5 md:w-1/2'>Your curated collection of future adventure and dream destinations, waiting to be explored.</p>
        </div>
      </div>

      {!token ? <div ref={revealRef} className='text-lg font-semibold text-red-600 mt-10 reveal-scale' >Please Login to see your Saved Trips</div> :
        isLoadingTrips ? (
          <div className='text-lg font-semibold text-gray-900 mt-12'>Loading your trips...</div>
        ) : <div>
          {activeTrips?.length > 0 && <div>
            <h1 className='mt-12 text-2xl font-bold text-blue-700'>ACTIVE</h1>
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4' >
              {activeTrips.map((data, index) => (
                <SavedCard
                  key={index}
                  id={data._id}
                  img={data?.image}
                  name={data.tripTitle}
                  location={data.destination}
                  status={data.status}
                  fallbackImages={getAllImagesFromTrip(data)}
                />
              ))}
            </div>
          </div>
          }

          {planningTrips?.length > 0 &&
            <div>
              <h1  className='mt-12 text-2xl font-bold text-yellow-700'>PLANNING</h1>
              <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4' >
                {planningTrips.map((data, index) => (
                  <SavedCard
                    key={index}
                    id={data._id}
                    img={data?.image}
                    name={data.tripTitle}
                    location={data.destination}
                    status={data.status}
                    fallbackImages={getAllImagesFromTrip(data)}
                  />
                ))}
              </div>
            </div>
          }

          {confirmedTrips.length > 0 &&
          <div>
            <h1 className='mt-12 text-2xl font-bold text-green-700'>CONFIRMED</h1>
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4' >
              {confirmedTrips.map((data, index) => (
                <SavedCard
                  key={index}
                  id={data._id}
                  img={data?.image}
                  name={data.tripTitle}
                  location={data.destination}
                  status={data.status}  
                  fallbackImages={getAllImagesFromTrip(data)}
                />
              ))}
            </div>
          </div>
          }
    
          { completedTrips?.length > 0 &&
          <div>
            <h1 className='mt-12 text-2xl font-bold text-purple-700'>COMPLETED</h1>
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4' >
              {completedTrips.map((data, index) => (
                <SavedCard
                  key={index}
                  id={data._id}
                  img={data?.image}
                  name={data.tripTitle}
                  location={data.destination}
                  status={data.status}  
                  fallbackImages={getAllImagesFromTrip(data)}
                />
              ))}
            </div>
          </div>
      }

         {cancelledTrips?.length > 0 &&
          <div>
            <h1 className='mt-12 text-2xl font-bold text-red-700'>CANCELLED</h1>
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4' >
              {cancelledTrips.map((data, index) => (
                <SavedCard
                  key={index}
                  id={data._id}
                  img={data?.image}
                  name={data.tripTitle}
                  location={data.destination}
                  status={data.status}  
                  fallbackImages={getAllImagesFromTrip(data)}
                />
              ))}
            </div>
          </div>
  }
        </div>
    }

      { token && !isLoadingTrips && userTrips.length === 0 && <div ref={revealRef} className='text-lg font-semibold text-gray-900 mt-12 reveal-scale' >No saved trips yet. Start planning your next adventure!</div>}
      
      

      <div ref={revealRef} className='mt-16 sm:mt-20  reveal-scale'>
        <div className='flex flex-col md:flex-row gap-4 bg-gray-100 rounded-4xl items-center'>
          <div className='m-0 p-5 sm:p-8 md:p-4 md:pl-10'>
            <p className='text-xs font-bold text-blue-500'>RECOMMENDATION</p>
            <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mt-2'>Need more inspiration?</h1>
            <p className='text-xs text-gray-500 mt-2'>Our AI navigator has curated a list of trending destinations based on previous intrests. Check them out to expand your bucket list.</p>

            <p onClick={() => { navigate("/recommendation") }} className='mt-4 text-blue-500 font-bold flex justify-start items-center cursor-pointer'>Explore Trending Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></p>
          </div>

          <div className="grid w-full flex-1 grid-cols-2 gap-3 p-5 sm:gap-4 md:m-8 md:p-4">
            <div className="h-48 rounded-lg overflow-hidden relative">
              <img alt="Tropical" className="w-full h-full object-cover" data-alt="pristine tropical beach with white sand and leaning palm trees under a bright midday sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Ve67JDF30Vdep1QpIFegFtDbuL0eyuQ9E5xXOdb5MHLdTSsRWTu_DgozvSDtyH1xk83gO1EAt6HAp956DWMWtJ3vnmkhXYW4MTvjcg7AO7PNEiVoP-r59xq4L9bVdOo3ka0EfqYGXFlU3BqzoRenRyag5qg-KIzkhEd2cn5xxpYK66vrUgmwTGL01LTaRtbKD2UBZepbaoMeqjQTuvKTY2gCHPSwWLpN6NlR8WaLIO_uNIfKCk2lccmeDAwz5_HoCWzh1ZzQdsM" />
            </div>
            <div className="relative mt-4 h-48 overflow-hidden rounded-lg sm:mt-8">
              <img alt="Aurora" className="w-full h-full object-cover" data-alt="stunning green northern lights dancing over a snowy arctic landscape with small cabins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDR5qAeM4tlYVFDyiMArdRJ2YxPnpJLwG8MFtF0t6nYIzN9SXX5E0P7qHq1CmmJNEYk7FkY3udzYunPlsZo2EvppFTAf8WEn6q2HhevlPA0pso4eaMVaTn4T0mnuHgVwv5FU9HHjjDeIODxukV6yfTFmb9O1obrSfv90GLHgOOTwCGv54609tuwpH0ZUQpoIvY8hkz8WbVJifZJqXxJNdOl3yoJd6pr3UDbIHhjavCuuEMm4tGekPMf4vEZa-1QqIsxWo9fM-340o" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SavedTrip