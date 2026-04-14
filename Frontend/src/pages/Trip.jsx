import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { HiOutlineMapPin, HiOutlineCurrencyRupee, HiOutlineCalendarDays, HiOutlineInformationCircle, HiChevronRight } from 'react-icons/hi2'
import { TripContext } from '../context/TripContext.jsx'
import { useNavigate } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'

const Trip = () => {
    const navigate = useNavigate();
    const { getTripById, userTrips } = useContext(TripContext);
    const { id } = useParams();
    const location = useLocation();
    const [tripData, setTripData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const trip = await getTripById(id);
                console.log(trip);
                setTripData(trip.trip);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching trip:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        if (id) {
            fetchTrip();
        }
    }, [id]);

    if (loading) return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-medium">Curating your perfect itinerary...</p>
            </div>
        </div>
    );

    if (error || !tripData) return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md">
                <HiOutlineInformationCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">Trip Not Found</h2>
                <p className="text-gray-500 mb-6">We couldn't load your trip details. It might have been deleted or the link is incorrect.</p>
                <button onClick={() => window.location.href = '/'} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Back to Home
                </button>
            </div>
        </div>
    );

    const selectedCardImage = location.state?.tripImage || userTrips?.find((trip) => trip?._id === id)?.image;

    const firstActivityWithPhoto = tripData.days?.[0]?.activities.find(a => a.photos?.length > 0);
    const backgroundImage = selectedCardImage || tripData?.image || firstActivityWithPhoto?.photos[0] || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000";

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className='relative h-[60vh] w-full overflow-hidden'>
                {/* Background Image with Gradient Overlay */}
                <ImageWithFallback
                    src={backgroundImage}
                    alt={tripData.destination}
                    fallbackSeed={tripData.destination || 'travel'}
                    className='w-full h-full object-cover'
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                {/* Overlay Content */}
                <div className='absolute inset-0 flex flex-col justify-end px-10 pb-16 max-w-7xl mx-auto w-full'>
                    <div className='flex flex-col md:flex-row justify-between items-end gap-6'>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[0.65rem] text-white bg-blue-600/80 backdrop-blur-md font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit'>
                                {tripData.mood} • {tripData.numberOfDays} Days
                            </span>
                            <h1 className='text-5xl font-bold text-white max-w-2xl leading-tight'>
                                {tripData.tripTitle || `${tripData.numberOfDays} Days in ${tripData.destination}`}
                            </h1>
                            <div className='flex items-center gap-2 text-gray-200'>
                                <HiOutlineMapPin className="text-blue-400" />
                                <span className="font-medium">{tripData.destination}, {tripData.state}</span>
                            </div>
                        </div>

                        <div className='bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 flex flex-col items-start gap-1'>
                            <p className='text-white/70 text-xs uppercase tracking-widest'>Estimated Cost</p>
                            <div className='text-white font-bold text-3xl'>
                                ₹{tripData.costEstimate?.grandTotal || '0'}
                                <span className='text-sm font-medium opacity-70 ml-1'>/total</span>
                            </div>
                            <button className='mt-4 bg-white text-gray-900 px-8 py-2.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-all shadow-lg'>
                                Save Itinerary
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-10 py-16 flex flex-col lg:flex-row gap-16'>
                {/* Main Content */}
                <div className='lg:w-2/3'>
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                            <h2 className='text-3xl font-bold text-gray-800'>About this journey</h2>
                        </div>
                        <p className='text-lg text-gray-600 leading-relaxed mb-6 italic'>
                            "{tripData.tripIntro}"
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                            {tripData.extraNotes || "This custom-crafted itinerary is designed to give you an authentic experience of " + tripData.destination + ". We've balanced iconic landmarks with hidden local spots to ensure your trip is both memorable and unique."}
                        </p>
                    </section>

                    <section className="mb-16">
                        <div className='flex justify-between items-top'>
                            <h2 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3">
                                <HiOutlineCalendarDays className="text-blue-600" />
                                Curated Itinerary
                            </h2>

                            <div className='text-blue-500 font-semibold text-sm leading-relaxed mt-4 flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16">
                                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                            </svg>Each Day's Itinerary</div>
                        </div>
                        <div className="relative border-l-2 border-gray-100 ml-4 pl-12 space-y-16">
                            {tripData.days?.map((day, idx) => (
                                <div key={idx} className="relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-14.25 top-0 w-8 h-8 rounded-full bg-white border-4 border-blue-600 shadow-md z-10 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-blue-600">{day.dayNumber}</span>
                                    </div>

                                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4 w-full">
                                            <div>
                                                <h4 className="text-blue-600 font-bold uppercase tracking-widest text-[0.65rem] mb-1">Day {day.dayNumber.toString().padStart(2, '0')}</h4>
                                                <h3 className="text-2xl font-bold text-gray-800">{day.title}</h3>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                {day.isTravelDay && (
                                                    <span className="bg-amber-50 text-amber-700 text-[0.6rem] font-bold px-2 py-1 rounded uppercase tracking-wider">Travel Day</span>
                                                )}
                                                <div 
                                                    onClick={() => navigate(`/dayTrip/${id}/${day.dayNumber}`)} 
                                                    className='flex items-center gap-0.5 text-blue-700 font-bold text-sm cursor-pointer hover:text-blue-700 transition-colors group/know'
                                                >
                                                    View in Detail
                                                    <HiChevronRight className="w-3 h-3 transition-transform group-hover/know:translate-x-0.5" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-500 mb-8 leading-relaxed">{day.summary}</p>

                                        <div>
                                            {day.activities.map((activity, actIdx) => (
                                                <div key={actIdx} className="group flex flex-col md:flex-row gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest">{activity.slot} • {activity.arrivalTime}</span>
                                                            {activity.entryFee > 0 && <span className="text-[0.6rem] text-green-600 bg-green-50 px-2 py-0.5 rounded">₹{activity.entryFee}</span>}
                                                        </div>
                                                        <h5 className="text-sm font-semibold text-gray-800">{activity.name}</h5>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className='lg:w-1/3 space-y-8 sticky top-32 self-start'>
                    {/* Cost Breakdown */}
                    <div className='bg-white p-8 rounded-3xl shadow-sm border border-gray-100'>
                        <h3 className='text-xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
                            <HiOutlineCurrencyRupee className="text-blue-600" />
                            Cost Breakdown
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>Total Entry Fees</span>
                                <span className="font-bold text-gray-700">₹{tripData.costEstimate?.entryFees}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>Estimated Food</span>
                                <span className="font-bold text-gray-700">₹{tripData.costEstimate?.estimatedFood}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>Local Transport</span>
                                <span className="font-bold text-gray-700">₹{tripData.costEstimate?.estimatedTransport}</span>
                            </div>
                            <div className="h-px bg-gray-100 my-4"></div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-gray-800">Grand Total</span>
                                <span className="text-2xl font-black text-blue-600">₹{tripData.costEstimate?.grandTotal}</span>
                            </div>
                            <p className="text-[0.65rem] text-gray-400 mt-4 leading-relaxed">
                                {tripData.costEstimate?.note}
                            </p>
                        </div>
                    </div>

                    {/* Insider Trip Info */}
                    <div className='bg-linear-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden'>
                        <div className="relative z-10">
                            <h3 className='text-xl font-bold mb-4'>Closing Notes</h3>
                            <p className='text-sm text-white/80 leading-relaxed mb-8 italic'>
                                "{tripData.closingNote}"
                            </p>
                            <div className="h-px bg-white/20 mb-6"></div>
                            <div className='flex items-center gap-4'>
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                    <span className="font-bold text-xs">PP</span>
                                </div>
                                <div>
                                    <p className='text-sm font-bold'>PlanPilot AI</p>
                                    <p className='text-[0.65rem] text-white/60'>Your Personal Travel Concierge</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-10 translate-y-10 blur-3xl"></div>
                    </div>

                    {/* Back to Home Button */}
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-all text-sm uppercase tracking-widest"
                    >
                        Back to Planner
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Trip