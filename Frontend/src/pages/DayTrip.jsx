import React, { useContext, useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { TripContext } from '../context/TripContext.jsx';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import ImageWithFallback from '../components/ImageWithFallback'

const RecenterMap = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center);
    }
  }, [center, map]);
  return null;
};

const DayTrip = () => {
  const { id } = useParams();
  const { dayNumber } = useParams();
  const { getTripById } = useContext(TripContext);
  const [tripData, setTripData] = useState({});
  const [trip, setTrip] = useState({});
  const [mapCenter, setMapCenter] = useState([23.2599, 77.4126]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      const trip = await getTripById(id);
      if (trip && trip.trip) {
        setTrip(trip.trip);
        const dayData = trip.trip.days[dayNumber - 1];
        setTripData(dayData);
        const firstActivityWithCoordinates = dayData?.activities?.find((activity) => activity.coordinates);

        if (firstActivityWithCoordinates) {
          const { lat, lng } = firstActivityWithCoordinates.coordinates;
          setMapCenter([lat, lng]);
          setSelectedLocation({
            lat,
            lng,
            name: firstActivityWithCoordinates.name,
          });
        } else {
          setSelectedLocation(null);
        }
      }
    };
    fetchTrip();
  }, [id, dayNumber]);

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

  const handleViewLocation = (activity) => {
    if (!activity.coordinates) return;
    const { lat, lng } = activity.coordinates;
    setMapCenter([lat, lng]);
    setSelectedLocation({
      lat,
      lng,
      name: activity.name,
    });
  };

  const openInGoogleMaps = () => {
    const [lat, lng] = mapCenter;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const startDate = new Date(trip.startDate);
  const TripDate = new Date(startDate.getTime() + (dayNumber - 1) * 24 * 60 * 60 * 1000);

  return (
    <div className='bg-transparent px-4 py-6 sm:px-6 lg:p-10'>
      <div ref={revealRef} className='flex flex-col reveal-scale'>
        <h2 className='flex flex-row items-center gap-2 text-sm font-semibold text-blue-700 sm:text-base'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill shrink-0" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          {tripData.city}, {tripData.state}
        </h2>
        <div className='mt-4 wrap-break-word text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
          Day {tripData.dayNumber}: {tripData.title}
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <p className='mt-4 w-full text-gray-700 md:w-1/2'>{tripData.dayOpener}</p>
          {trip.startDate && (
            <div className='flex w-full items-center gap-2 rounded-4xl bg-gray-200 px-3 py-2 shadow-sm md:w-auto'>
              <HiOutlineCalendarDays className="shrink-0 text-2xl text-blue-700" />
              <div className='flex flex-col justify-center'>
                <p className='text-xs font-semibold text-gray-500'>DATE</p>
                <p className='font-semibold text-blue-700'>{TripDate.toLocaleDateString()}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div ref={revealRef} className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-15 reveal-scale">
        <div className='w-full lg:w-2/3'>
          <div className='relative ml-3 space-y-16 border-l-2 border-gray-200 pl-6 sm:ml-4 sm:pl-12'>
            {tripData.activities?.map((activity, index) => (
              <div key={index} className='relative'>
                <div className='absolute -left-7.75 top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-blue-200 shadow-sm sm:-left-14.75'>
                  <div className='h-2 w-2 rounded-full bg-blue-700'></div>
                </div>

                <div className='flex flex-col gap-6 rounded-4xl bg-white p-5 sm:p-6 md:flex-row md:gap-12 md:p-8'>
                  {activity.photos.length > 0 && (
                    <div className='w-full md:w-1/3'>
                      <ImageWithFallback
                        className='h-56 w-full rounded-4xl object-cover sm:h-64 md:h-64 md:w-70'
                        src={activity.photos[0]}
                        alt={activity.name}
                        fallbackSeed={activity.name || tripData.city || 'travel'}
                      />
                    </div>
                  )}

                  <div className='flex flex-col md:w-2/3'>
                    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                      <p className='w-fit rounded-4xl bg-blue-200 px-2 py-1 text-xs font-bold uppercase'>
                        {activity.slot.toUpperCase()} - {activity.arrivalTime.toUpperCase()} {activity.slot === 'morning' ? 'AM' : 'PM'}
                      </p>
                      <p
                        onClick={() => handleViewLocation(activity)}
                        className='flex cursor-pointer items-center gap-1 text-xs font-bold uppercase text-blue-700 hover:text-blue-600'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        View Location
                      </p>
                    </div>

                    <div className='mt-4 wrap-break-word text-2xl font-bold text-gray-800'>{activity.name}</div>

                    <div className='mt-4 text-sm text-gray-500'>{activity.aiDescription}</div>

                    <div className='mt-4 flex items-start gap-2 rounded-4xl border-l-6 border-l-blue-600 bg-blue-100 p-4 text-xs text-gray-700'>
                      <span className='shrink-0 text-blue-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
                        </svg>
                      </span>
                      <div>
                        <span className='font-bold text-blue-700'>Pro Tip:</span> {activity.insiderTip}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={revealRef} className='mt-10 w-full lg:mt-0 lg:w-1/3 lg:sticky lg:top-32 lg:self-start reveal-scale'>
          <div onClick={openInGoogleMaps} className='group relative z-0 h-65 overflow-hidden rounded-4xl border-4 border-white shadow-xl cursor-pointer sm:h-75 md:h-87.5 md:justify-end'>
            <div className='pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-10'>
              <span className='rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg'>Open in Maps</span>
            </div>
            <MapContainer
              center={mapCenter}
              zoom={12}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />

              {selectedLocation && (
                <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                  <Tooltip direction='top' offset={[0, -8]} permanent opacity={1}>
                    <div className='font-bold text-blue-700'>{selectedLocation.name}</div>
                  </Tooltip>
                </Marker>
              )}

              <RecenterMap center={mapCenter} />
            </MapContainer>
          </div>

          <div className='mt-10 rounded-4xl bg-white p-4'>
            <h2 className='text-2xl font-bold text-gray-800'>Daily Briefing</h2>
            <p className='mt-4 text-sm text-gray-500'>{tripData.summary}</p>

            <div className='mt-4 flex flex-col gap-2 text-sm font-bold text-gray-500 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 0-2-2z" />
                </svg>
                Budget:
              </div>
              <div className='text-gray-800'>$200-400</div>
            </div>

            <div className='mt-4 flex flex-col gap-2 text-sm font-bold text-gray-500 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-walking" viewBox="0 0 16 16">
                  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                  <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                </svg>
                Companions:
              </div>
              <div className='text-gray-800'>{trip.companions}</div>
            </div>

            <div className='mt-4 flex flex-col gap-2 text-sm font-bold text-gray-500 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 0-1H9V3.5" />
                </svg>
                Total Hours:
              </div>
              <div className='text-gray-800'>{tripData.totalHours}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayTrip  
