import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TripContext } from '../context/TripContext.jsx';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const RecenterMap = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center);
    }
  }, [center]);
  return null;
};
import ImageWithFallback from '../components/ImageWithFallback'

const DayTrip = () => {
  const { id } = useParams();
  const { dayNumber } = useParams();
  const { getTripById } = useContext(TripContext);
  const [tripData, setTripData] = useState({});
  const [trip, setTrip] = useState({});
  const [mapCenter, setMapCenter] = useState([23.2599, 77.4126]);

  useEffect(() => {
    const fetchTrip = async () => {
      const trip = await getTripById(id);
      if (trip && trip.trip) {
        setTrip(trip.trip);
        const dayData = trip.trip.days[dayNumber - 1];
        setTripData(dayData);
        if (dayData && dayData.activities && dayData.activities.length > 0 && dayData.activities[0].coordinates) {
          setMapCenter([dayData.activities[0].coordinates.lat, dayData.activities[0].coordinates.lng]);
        }
      }
    };
    fetchTrip();
  }, [id, dayNumber]);

  const handleViewLocation = (lat, lng) => {
    setMapCenter([lat, lng]);
  };

  const openInGoogleMaps = () => {
    const [lat, lng] = mapCenter;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const startDate = new Date(trip.startDate);
  const TripDate = new Date(startDate.getTime() + (dayNumber - 1) * 24 * 60 * 60 * 1000);

  return (
    <div className='p-10 bg-gray-100'>

      <div className='flex flex-col'>
        <h2 className='flex gap-2 items-center text-blue-700 font-semibold' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg> {tripData.city}, {tripData.state}</h2>
        <div className='mt-4 text-2xl md:text-4xl font-bold text-gray-900'>Day {tripData.dayNumber}: {tripData.title}</div>
        <div className='flex justify-between items-center'>
          <p className='mt-4 text-gray-700 w-1/2'>{tripData.dayOpener}</p>
          {trip.startDate && (
            <div className='flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-4xl shadow-sm'><HiOutlineCalendarDays className="text-blue-700 text-2xl" />
              <div className='flex flex-col justify-center'>
                <p className='text-xs text-gray-500 font-semibold'>DATE</p>
                <p className='text-blue-700 font-semibold'>{TripDate.toLocaleDateString()}</p></div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 md:flex gap-15">
        {/* Left with the journey details */}
        <div className='md:w-2/3'>

          <div className='relative border-l-2 border-gray-200 ml-4 pl-12 space-y-16'>

            {tripData.activities?.map((activity, index) => (
              <div key={index} className='relative'>
                <div className='absolute -left-[59px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 border-2 border-white shadow-sm'>
                  <div className='w-2 h-2 bg-blue-700 rounded-full'></div>
                </div>
                <div className='md:flex p-8 gap-12 bg-white rounded-4xl'>
                  {activity.photos.length > 0 && (
                    <div className='md:w-1/3 w-full'>
                      <ImageWithFallback
                        className='rounded-4xl h-64 w-70 object-cover'
                        src={activity.photos[0]}
                        alt={activity.name}
                        fallbackSeed={activity.name || tripData.city || 'travel'}
                      />
                    </div>
                  )}
                  <div className='md:w-2/3 flex flex-col'>
                    <div className='flex justify-between items-center'>
                      <p className='text-xs font-bold px-2 py-1 bg-blue-200 w-fit rounded-4xl uppercase'>{activity.slot.toUpperCase()} - {activity.arrivalTime.toUpperCase()} {activity.slot === "morning" ? "AM" : "PM"}</p>
                      <p onClick={() => handleViewLocation(activity.coordinates.lat, activity.coordinates.lng)} className='text-xs font-bold text-blue-700 cursor-pointer hover:text-blue-600 uppercase flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>View Location</p>
                    </div>
                    <div className='mt-4 text-2xl font-bold text-gray-800' >{activity.name}</div>

                    <div className='mt-4 text-sm text-gray-500'>{activity.aiDescription}</div>

                    <div className='mt-4 bg-blue-100 p-4 rounded-4xl text-gray-700 text-xs border-l-6 border-l-blue-600 flex items-center gap-2'><span className='text-blue-700'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
                    </svg></span><div><span className='font-bold text-blue-700'>Pro Tip:</span> {activity.insiderTip}</div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className='mt-10 md:mt-0 md:w-1/3 sticky top-32 self-start'>
          <div onClick={openInGoogleMaps} className='rounded-4xl overflow-hidden shadow-xl border-4 border-white h-[350px] md:justify-end relative z-0 cursor-pointer group'>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none flex items-center justify-center">
               <span className="text-white font-bold bg-blue-600 px-3 py-1 rounded-full text-xs shadow-lg">Open in Maps</span>
            </div>
            <MapContainer
              center={mapCenter}
              zoom={12}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />

              {tripData.activities?.map((activity, idx) => (
                activity.coordinates && (
                  <Marker
                    key={idx}
                    position={[activity.coordinates.lat, activity.coordinates.lng]}
                  >
                    <Popup>
                      <div className='font-bold text-blue-700'>{activity.name}</div>
                    </Popup>
                  </Marker>
                )
              ))}
              <RecenterMap center={mapCenter} />
            </MapContainer>
          </div>

          <div className='mt-10 p-4 bg-white rounded-4xl'>
            <h2 className='text-2xl font-bold text-gray-800'>Daily Briefing</h2>
            <p className='mt-4 text-sm text-gray-500'>{tripData.summary}</p>
            <div className='mt-4 text-sm text-gray-500 font-bold flex justify-between'><div className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
            </svg>Budget:</div><div className='text-gray-800'>$200-400</div></div>
            <div className='mt-4 text-sm text-gray-500 font-bold flex justify-between'><div className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-walking" viewBox="0 0 16 16">
              <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
              <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
            </svg>Companions:</div><div className='text-gray-800'>{trip.companions}</div></div>
            <div className='mt-4 text-sm text-gray-500 font-bold flex justify-between'><div className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 0-1H9V3.5" />
            </svg>Total Hours:</div> <div className='text-gray-800'>{tripData.totalHours}</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayTrip  