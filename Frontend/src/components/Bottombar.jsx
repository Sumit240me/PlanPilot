import React from 'react'
import { useEffect, useRef } from 'react';

const Bottombar = () => {

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
    <div ref={revealRef} className='reveal-scale'>
          <div className='flex flex-col items-center justify-center p-6 sm:p-10'>
            <h1 className='text-center text-2xl font-bold text-gray-700 sm:text-4xl'>Can't decide where to go?</h1>
            <p className='mt-4 w-full text-center text-xs text-gray-500 sm:w-2/3 lg:w-1/2'>Let our AI-powered travel navigator build a custom itinerary based on your preferences, budget, and travel style. Design your dream vacation with just a few clicks.</p>

            <div className='mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5' >
              <button className='w-full rounded-full bg-linear-to-br from-blue-600 to-blue-400 px-6 py-2.5 font-medium text-white shadow-md transition-all cursor-pointer hover:from-blue-700 hover:to-blue-600 sm:w-auto'>Start Custom Itinerary</button>
              <button className='w-full rounded-full bg-surface-container-high px-6 py-2.5 font-medium text-on-surface-variant text-gray-700 transition-colors cursor-pointer hover:bg-gray-300 sm:w-auto'>Take Travel Quiz</button>
           </div>
        </div>
    </div>
  )
}

export default Bottombar