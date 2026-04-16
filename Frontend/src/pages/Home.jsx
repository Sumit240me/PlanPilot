import React from 'react'
import { useContext, useState } from 'react'
import destinations from '../assets/card.js'
import RecommendCard from '../components/RecommendCard.jsx'
import { useNavigate } from 'react-router-dom'
import { TripContext } from '../context/TripContext.jsx'
import {
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleBottomCenterText
} from 'react-icons/hi2'
import {
  HiCollection,
  HiOutlineFire,
  HiOutlineGlobeAlt,
  HiCheck
} from 'react-icons/hi'

const Home = () => {

  //  destination,
  //         mood,
  //         budget,
  //         companions,
  //         startDate,
  //         endDate,
  //         extraNotes = "",

  const { allCities, generateTrip, trip } = useContext(TripContext);
  const data = destinations.slice(0, 4);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    mood: "",
    budget: "",
    companions: "",
    startDate: "",
    endDate: "",
    extraNotes: "",
    categories: ["heritage", "food", "adventure", "other"]
  })

  const categoryOptions = [
    { id: "heritage", label: "Heritage & Culture", icon: HiCollection, desc: "Monuments, forts, temples" },
    { id: "food", label: "Local Cuisine", icon: HiOutlineFire, desc: "Restaurants, street food" },
    { id: "adventure", label: "Adventure & Nature", icon: HiOutlineGlobeAlt, desc: "Parks, treks, wildlife" },
    { id: "other", label: "Scenic & Relaxation", icon: HiOutlineGlobeAlt, desc: "Beaches, views, shopping" }
  ]

  const toggleCategory = (categoryId) => {
    setFormData(prev => {
      const newCategories = prev.categories.includes(categoryId)
        ? prev.categories.filter(c => c !== categoryId)
        : [...prev.categories, categoryId];

      if (newCategories.length === 0) return prev;

      return { ...prev, categories: newCategories };
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value // dynamic key
    })
  }

  // handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.destination || formData.destination === "Select Destination") {
      alert("Please select a destination");
      return;
    }

    if (formData.categories.length === 0) {
      alert("Please select at least one category preference");
      return;
    }

    const result = await generateTrip(formData);
    if (result && result.tripId) {
      navigate(`/trip/${result.tripId}`);
    } else {
      alert("Failed to generate trip. Please try again.");
    }
  }

  return (
    <div className='mt-16 px-4 pb-6 sm:mt-20 sm:px-6 lg:px-10'>
      <div className='flex flex-col gap-10 md:flex-row md:justify-evenly'>
        <div className='w-full md:w-1/3'>
          <div className='flex flex-col '>
            <h1 className='bg-linear-to-br from-gray-800 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>Find your perfect trip</h1>
            <p className='text-gray-500 mt-5'>Experience the world through curated journeys designed for the serene traveler. Your next escape starts with a single choice.</p>
          </div>
          <div className='mt-8 flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-10 sm:p-8'>
            <div className="border-b border-gray-50 pb-4">
              <h2 className="text-xl font-bold text-gray-800">Plan your escape</h2>
              <p className="text-xs text-gray-400">Everything you need for your next journey</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineMapPin className="text-blue-500" /> DESTINATION
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.destination}
                      name='destination'
                      className='w-full rounded-lg h-12 pl-4 pr-10 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50'>
                      <option>Select Destination</option>
                      {allCities.map((city) => (
                        <option key={city._id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineSparkles className="text-blue-500" /> MOOD
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.mood}
                      name='mood'
                      className='w-full rounded-lg h-12 pl-4 pr-10 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50'>
                      {/* "relaxing", "adventure", "cultural", "romantic", "luxury", "hidden gems" */}
                      <option>Select Mood</option>
                      <option>relaxing</option>
                      <option>adventure</option>
                      <option>romantic</option>
                      <option>cultural</option>
                      <option>luxury</option>
                      <option>hidden gems</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineUsers className="text-blue-500" /> COMPANIONS
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.companions}
                      name="companions"
                      className='w-full rounded-lg h-12 pl-4 pr-10 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50'>
                      <option>Who's coming?</option>
                      {/* "solo", "couple", "family", "friends" */}
                      <option>solo</option>
                      <option>couple</option>
                      <option>family</option>
                      <option>friends</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineBanknotes className="text-blue-500" /> BUDGET
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.budget}
                      name='budget'
                      className='w-full rounded-lg h-12 pl-4 pr-10 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50'>
                      <option>Select Budget</option>
                      {/* "budget", "mid-range", "luxury" */}
                      <option>budget</option>
                      <option>mid-range</option>
                      <option>luxury</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineCalendarDays className="text-blue-500" /> DEPARTURE
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.startDate}
                    name='startDate'
                    type="date" className='w-full rounded-lg h-12 px-4 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-50' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineCalendarDays className="text-blue-500" /> RETURN
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.endDate}
                    name="endDate"
                    type="date" className='w-full rounded-lg h-12 px-4 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-50' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                  <HiOutlineChatBubbleBottomCenterText className="text-blue-500" /> SPECIAL REQUESTS
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.extraNotes}
                  name='extraNotes'
                  rows="2"
                  placeholder="Anything else?"
                  className='w-full rounded-lg p-3 text-gray-700 font-medium border border-gray-200 bg-white hover:border-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-50 resize-none'
                ></textarea>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                  <HiCollection className="text-blue-500" /> PREFERENCES (Select at least 1)
                </label>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4'>
                  {categoryOptions.map((cat) => {
                    const isSelected = formData.categories.includes(cat.id);
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        className={`
                          relative p-3 rounded-lg border-2 transition-all text-left
                          ${isSelected
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}
                        `}
                      >
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <HiCheck className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <Icon className={`w-5 h-5 mb-1 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`} />
                        <div className="font-semibold text-xs">{cat.label}</div>
                        <div className="text-[0.6rem] text-gray-400 mt-0.5 hidden md:block">{cat.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button type='submit' className="w-full h-12 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                Create Itinerary
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>

        <div className="relative h-90 w-full md:h-150 md:w-2/3">
          <div className="absolute right-2 top-0 z-0 h-60 w-[85%] overflow-hidden rounded-xl shadow-2xl sm:right-6 sm:h-80 md:right-10 md:h-112.5 md:w-4/5 md:translate-x-12">
            <img alt="Pristine white sand beach" className="w-full h-full object-cover" data-alt="Stunning aerial view of a turquoise tropical beach with white sand and palm tree shadows in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvus5PnzlF3WbYe_80CzOa_Ua3Fps0rkuRlcmcOOMOLsbLiXXPn5ZJ4ZSoDoeWgpTtTJAcEvmQl6b28LFn7tplv0hA1cGDM9r90hUx8lmFw0IZDtyxxOZgvFSo0k3fgjBcpT1ktaKZd0sBDMWgCE1H3ffnuvmcvLDYwqD33e4OIBlU2Ki8_ZnXa1Dn8XYjOfA8pj8-4d3mUOJOeeVAkQ_OfHjKKEyAoI4padoBBdhdSb7Kjp_x8_-0YVI6T1YS8IeDNm4Pm1uxDmI" />
          </div>
          <div className="absolute bottom-0 left-2 z-10 h-42.5 w-[70%] -translate-x-1 overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:left-8 sm:h-55 md:left-20 md:h-75 md:w-3/5 md:-translate-x-8">
            <img alt="Snowy mountain peaks" className="w-full h-full object-cover" data-alt="Majestic snow-capped mountain peaks reflecting the warm pink and orange hues of a sunset with misty valleys below" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoG0Y7otZHWmztQZHpm1Ffvzk9m1F31pow3tb7TIbAUFXwTuuTR7gozKHc6sdcpBUvvyJuvdq6kaeE3AVXTwF6nOA6m7lhZ-pyl6FFRDR2jq0UpWww9ikkaCHyyHBCJTF8enHgGIfAeJAX8ct1S3qGnx0Eb3bax0rIQyq2wqTefIlG2hq6Oilqef9Wjo8KSS1pQwCIbyToMpMZra7GdYYWEyC9HIFRhqtXhKneYPCj9Ji3JwTBcIp33FwZVXR5zlQi9NqTTSJHYzI" />
          </div>
          <div className="absolute right-4 top-1/2 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-primary-container/20 backdrop-blur-xl sm:right-1/4 sm:h-32 sm:w-32">
            <div className="text-primary font-headline font-bold text-center leading-tight">
              500+<br /><span className="text-[0.6rem] uppercase tracking-widest opacity-80">Trips</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Journeys */}
      <div className='mt-16 sm:mt-20'>
        <h1 className='text-xl font-bold text-gray-800'>Popular Journeys</h1>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-gray-500 text-sm mt-2'>Hand-picked destinations by our senoir travel experts</p>
          <button onClick={() => navigate('/recommendation')} className='text-blue-600 font-semibold text-sm cursor-pointer flex items-center'>View All<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg></button>
        </div>

        <div className='mt-8 flex flex-col flex-nowrap gap-4 overflow-x-auto pb-2 no-scrollbar sm:gap-8 md:flex-row lg:gap-10'>
          {data.map((destination) => (
            <RecommendCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>

      {/* Last card options */}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="grid items-center gap-8 sm:gap-16 lg:grid-cols-12">
          <div className="relative h-80 overflow-hidden rounded-xl sm:h-105 lg:col-span-7 lg:h-125">
            <img alt="Woman traveler on boat" className="w-full h-full object-cover" data-alt="A peaceful portrait of a woman looking out at a turquoise lake from a vintage wooden boat in a scenic mountain range" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1REI-CDvD_fiqs59HBb4ko67DeTKaOnCYe-oRXQAGlG4BWR8x7EhX8gBbzDkzSrzazzGKKdN0LWdXVpXwHMsHoYx6r1JLZ8vRp4WOLfyfrzig2jY_qHHXYbxPFHytNDkj-lAPxoGoDlHndyIPjN1Qg_lGp2o9oBRA26SzRYzFAWg72ojpsN77Gp5W-t6RkXJwJ8D00_7wUFa4H8UgfaDFRVLhBgm-IcdUiPs1VQbkZuFMyf1ugCwLOSO9b839dsjOL4Zufpm5ZPg" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 max-w-xs text-white sm:bottom-10 sm:left-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Our Philosophy</span>
              <h3 className="text-2xl font-headline font-bold">Journeys that breathe life into your soul.</h3>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <p className='h-1 w-8 rounded-sm bg-blue-500 md:w-20'></p>
            <h2 className="text-3xl font-headline font-extrabold leading-tight text-gray-700 text-on-surface md:text-4xl">Travel beyond the generic guidebooks.</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We believe in slow travel. Instead of ticking off boxes, we help you find the rhythm of a city, the silence of a mountain peak, and the true hospitality of local communities.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                {/* <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm" data-icon="done">done</span> */}
                <span className="font-medium text-on-surface text-gray-500">Expertly vetted accommodations</span>
              </li>
              <li className="flex items-center gap-4">
                {/* <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm" data-icon="done">done</span> */}
                <span className="font-medium text-on-surface text-gray-500">Personalized route optimization</span>
              </li>
              <li className="flex items-center gap-4">
                {/* <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm" data-icon="done">done</span> */}
                <span className="font-medium text-on-surface text-gray-500">24/7 concierge support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home