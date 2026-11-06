import React from 'react'
import { useContext, useState, useRef, useEffect } from 'react'
import RecommendCard from '../components/RecommendCard.jsx'
import { useNavigate } from 'react-router-dom'
import { TripContext } from '../context/TripContext.jsx'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const notify = (message, type) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    theme: "light",
    transition: Bounce,
  });
};
  const { allCities, allTrips, generateTrip } = useContext(TripContext);
  const featuredTrips = allTrips.slice(0, 4);
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryOptions = [
    { id: "heritage", label: "Heritage & Culture", icon: HiCollection, desc: "Monuments, forts, temples" },
    { id: "food", label: "Local Cuisine", icon: HiOutlineFire, desc: "Restaurants, street food" },
    { id: "adventure", label: "Adventure & Nature", icon: HiOutlineGlobeAlt, desc: "Parks, treks, wildlife" },
    { id: "other", label: "Scenic & Relaxation", icon: HiOutlineGlobeAlt, desc: "Beaches, views, shopping" }
  ]

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
    if (isSubmitting) return;

    if (!localStorage.getItem("planpilot_token")) {
      notify("Please sign in before creating an itinerary.", "error");
      navigate("/signin");
      return;
    }

    // Basic validation
    if (!formData.destination || formData.destination === "Select Destination") {
      notify("Please select a destination", "error");
      return;
    }

    if (!formData.mood || formData.mood === "Select Mood" || !formData.companions || formData.companions === "Who's coming?" || !formData.budget || formData.budget === "Select Budget") {
      notify("Please fill in all required fields", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await generateTrip(formData);
      if (result?.tripId) {
        notify("Trip generated successfully!", "success");
        navigate(`/trip/${result.tripId}`);
      } else {
        notify("We couldn't create your trip. Please try again.", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className='mt-16 px-4 pb-6 sm:mt-20 sm:px-6 lg:px-10'>
      <ToastContainer />
      <div ref={revealRef} className='mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:gap-10 reveal-scale'>
        <div className='w-full md:w-5/12'>
          <div className='flex flex-col '>
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">
              <HiOutlineSparkles /> Travel, thoughtfully planned
            </span>
            <h1 className='bg-linear-to-br from-gray-900 via-blue-700 to-blue-500 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl'>Find your perfect trip</h1>
            <p className='mt-4 max-w-xl text-sm leading-relaxed text-gray-500'>Turn a few preferences into a day-by-day journey filled with places you will actually want to remember.</p>
          </div>
          <div className='mt-6 flex flex-col gap-5 rounded-3xl border border-amber-100 bg-white p-4 shadow-xl shadow-blue-100/40 sm:mt-8 sm:p-6'>
            <div className="flex items-start justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest text-amber-600">Step 1 of 1</p>
                <h2 className="text-xl font-bold text-gray-800">Build your escape</h2>
                <p className="mt-1 text-xs text-gray-400">Tell us what makes a perfect trip for you.</p>
              </div>
              <div className="rounded-full bg-amber-100 p-3 text-amber-700">
                <HiOutlineSparkles className="text-xl" />
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineMapPin className="text-blue-500" /> WHERE TO?
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.destination}
                      name='destination'
                      className='h-11 w-full rounded-lg border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium text-gray-700 transition-all appearance-none hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-50'>
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
                    <HiOutlineSparkles className="text-blue-500" /> TRIP VIBE
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.mood}
                      name='mood'
                      className='h-11 w-full rounded-lg border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium text-gray-700 transition-all appearance-none hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-50'>
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

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center gap-2 text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest px-1'>
                    <HiOutlineUsers className="text-blue-500" /> COMPANIONS
                  </label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.companions}
                      name="companions"
                      className='h-11 w-full rounded-lg border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium text-gray-700 transition-all appearance-none hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-50'>
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
                      className='h-11 w-full rounded-lg border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium text-gray-700 transition-all appearance-none hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-50'>
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

              <button type='submit' disabled={isSubmitting} className="flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 disabled:cursor-wait disabled:opacity-70">
                {isSubmitting ? "Creating your itinerary..." : "Create my itinerary"}
                {!isSubmitting && <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
              </button>
              <p className="text-center text-[0.65rem] text-gray-400">Sign in required · Your preferences stay private</p>
            </form>
          </div>
        </div>

        <div className="relative min-h-105 w-full overflow-hidden rounded-3xl bg-slate-950 shadow-2xl md:min-h-135 md:w-7/12">
          <img alt="Travellers overlooking a mountain valley" className="absolute inset-0 h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-blue-950/20"></div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
            <span className="mb-4 inline-block rounded-full bg-amber-300/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-amber-950 backdrop-blur-md">Made for your kind of travel</span>
            <h2 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">Less scrolling.<br /><span className="text-amber-300">More living.</span></h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">Choose your destination and travel style. PlanPilot turns your ideas into a practical, personal itinerary in moments.</p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              {[["01", "Pick a place"], ["02", "Set your vibe"], ["03", "Start exploring"]].map(([number, label]) => (
                <div key={number} className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                  <p className="text-lg font-bold text-amber-300">{number}</p>
                  <p className="mt-1 text-[0.65rem] font-semibold text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Journeys */}
      <div ref={revealRef} className='mt-16 sm:mt-20 reveal-scale'>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          <h1 className='text-xl font-bold text-gray-800'>Popular Journeys</h1>
        </div>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='mt-2 text-sm text-gray-500'>Real itineraries created by the PlanPilot community.</p>
          <button onClick={() => navigate('/recommendation')} className='text-blue-600 font-semibold text-sm cursor-pointer flex items-center'>View All<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg></button>
        </div>

        <div className='mt-8 flex flex-col flex-nowrap gap-4 overflow-x-auto pb-2 no-scrollbar sm:gap-8 md:flex-row lg:gap-10'>
          {featuredTrips.length > 0 ? featuredTrips.map((trip) => (
            <RecommendCard key={trip._id} trip={trip} />
          )) : (
            <div className="w-full rounded-3xl border border-dashed border-blue-200 bg-blue-50/60 p-8 text-center">
              <HiOutlineSparkles className="mx-auto mb-3 text-2xl text-blue-500" />
              <h2 className="font-bold text-gray-800">Your next journey starts here</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">Create an itinerary above and it will appear here for other travellers to discover.</p>
              <button onClick={() => navigate('/recommendation')} className="mt-5 rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-blue-700">Browse recommendations</button>
            </div>
          )}
        </div>
      </div>

      {/* Last card options */}

      <section ref={revealRef} className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:py-32 reveal-scale">
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
