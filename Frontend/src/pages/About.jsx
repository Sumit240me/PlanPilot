import React from 'react'
import { useEffect, useRef } from 'react';


const About = () => {

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
    <div className='px-4 sm:px-6 lg:px-10'>
      <div ref={revealRef} className='flex flex-col md:flex-row gap-12 justify-between items-center reveal-scale'>
        <div className='w-full p-4 sm:p-8 md:w-1/2'>
          <h1 className=' text-2xl md:text-5xl font-bold text-gray-800' >Your Journey,</h1>
          <h1 className='mt-2 bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-5xl'>Guided by Intent.</h1>

          <p className='mt-6 text-sm text-gray-600'>We believe travel should be more than a checklist. It's about curated moments, seamless flows, and experiences designed with your intuition in mind.</p>

          <button className='mt-6 rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-4 py-2 text-white transition-all duration-300 hover:scale-105'>Explore Destination</button>
        </div>

        <div className='h-full w-full md:w-1/2 md:px-8'>
          <img className='ml-0 w-full rounded-4xl md:ml-8 md:h-fit md:w-3/4' src="https://plus.unsplash.com/premium_photo-1722897351107-839479f0f12a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>

      <div ref={revealRef} className='mt-20 flex flex-col items-center justify-center rounded-4xl bg-gray-100 p-6 sm:p-8 md:p-12 reveal-scale'>
        <h1 className='text-2xl font-semibold text-gray-800'>Our Mission</h1>
        <div className='mt-10 flex w-full flex-col items-center justify-center gap-10 md:max-w-5xl md:flex-row md:gap-20 md:px-6'>
          <div className='bg-white p-8 rounded-4xl'>
            {/* Icon */}
            <h1 className='mt-4 text-lg font-semibold text-gray-700' >Personalized intution</h1>
            <p className='mt-4 text-xs text-gray-500'>Travel technology often complicates the journy. We've built an engine that anticipates your preference based an emotional resonance, not just historical data. It's the difference between a list of hotels and a recommendation thal feels like it was choosen bya close friend.</p>
          </div>
          <div className='bg-white p-8 rounded-4xl'>
            {/* Ai icon */}
            <h1 className='mt-4 text-lg font-semibold text-gray-700'>Cognitive Ease</h1>
            <p className='mt-4 text-xs text-gray-500'>Choise paralysis is the enemy of exploration.Our interface is designed to reduce the mental load of planning by using breathing room and total layering.We strip away the noise so you can focus on the excitement of the upcoming depature.</p>
          </div>
        </div>
      </div>

      <div ref={revealRef} className='mt-20 reveal-scale'>
        <h1 className='text-2xl font-bold'>How It Works</h1>
        <p className='mt-4 text-sm text-gray-700'>Three steps to your next meaningful memory</p>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='mt-10'>
            <div className='text-8xl text-gray-300 font-semibold'>01</div>
            <div className='mt-4 p-8 bg-gray-100 rounded-4xl'>
              <h1 className='text-lg font-semibold text-gray-700'>Set Preference</h1>
              <p className='mt-4 text-sm text-gray-700'>Tell us what fuels you spirt-<br></br> architecture, solitude, or street food. We listen for the quiet details.</p>
            </div>
          </div>
          <div className='mt-10'>
            <div className='text-8xl text-gray-300 font-semibold'>02</div>
            <div className='mt-4 p-8 bg-gray-100 rounded-4xl'>
              <h1 className='text-lg font-semibold text-gray-700'>Discover Destinations</h1>
              <p className='mt-4 text-sm text-gray-700'>Explore a curated short-list of locations that match your specific vibe and current travel intent.</p>
            </div>
          </div>
          <div className='mt-10'>
            <div className='text-8xl text-gray-300 font-semibold'>03</div>
            <div className='mt-4 p-8 bg-gray-100 rounded-4xl'>
              <h1 className='text-lg font-semibold text-gray-700'>Plan Your Trip</h1>
              <p className='mt-4 text-sm text-gray-700'>Auto-generated a flexible itinerary that feels spontaneous yet prefecly structured for ease.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Founder Descriptions */}
      <div ref={revealRef} className='mt-20 flex flex-col gap-6 rounded-4xl p-5 shadow-lg transition-all duration-300 hover:scale-105 sm:p-8 md:flex-row md:gap-20 md:p-10 reveal-scale'>
        <div className='w-full md:w-1/3'>
          <h1 className='text-4xl font-bold text-gray-800'>Get In Touch</h1>
          <p className='mt-4 text-sm text-gray-700'>Have questions or want to collaborate? Out team is always here to help guide your journey.</p>

          <div className='flex items-center mt-4'>
            <span className='p-2 rounded-full bg-gray-200'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg></span>
            <p className='ml-2 text-sm text-gray-700'>hello@planpilot.io</p>
          </div>

          <div className='flex items-center mt-4'>
            <span className='p-2 rounded-full bg-gray-200'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg></span>
            <p className='ml-2 text-sm text-gray-700'>Bhopal,India</p>
          </div>
        </div>
        <div className='w-full md:w-2/3'>
          <form action="#" className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
                <input className="mt-2 w-full bg-surface-container-low border-none rounded-md px-6 py-2 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 bg-gray-100" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-on-surface-variant ml-1">Email</label>
                <input className="mt-2 w-full bg-surface-container-low border-none rounded-md px-6 py-2 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 bg-gray-100" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-on-surface-variant ml-1">Message</label>
              <textarea className="mt-2 w-full bg-surface-container-low border-none rounded-md px-6 py-2 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline/50 bg-gray-100 " placeholder="How can we help your next adventure?" rows="5"></textarea>
            </div>
            <button className="bg-linear-to-br from-blue-600 to-blue-400 text-white font-bold py-2 rounded-4xl transition-all shadow-lg hover:shadow-primary/30" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About