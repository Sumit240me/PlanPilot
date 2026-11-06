import React,{ useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'

const Card = ({ image, tripTitle, destination, grandTotal, tripIntro, id, fallbackImages }) => {
    const navigate = useNavigate();

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

    const openTrip = () => navigate(`/trip/${id}`, { state: { tripImage: image } });

    return (
        <article
            ref={revealRef}
            role="link"
            tabIndex="0"
            onClick={openTrip}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openTrip();
                }
            }}
            className='group flex cursor-pointer flex-col overflow-hidden rounded-4xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 reveal-scale'
        >
            <ImageWithFallback 
                src={image} 
                alt={destination} 
                fallbackSeed={destination || 'travel'}
                fallbackImages={fallbackImages}
                className='h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='p-4 flex-1'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-bold text-gray-700'>{tripTitle}</h2>
                    <p className='mb-1 text-xs font-semibold uppercase tracking-wider text-amber-600'>STARTS FROM</p>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-xs text-gray-500 font-semibold flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-geo-alt-fill mr-1" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>{destination}</p>
                    <p className='text-gray-800 font-bold'>${grandTotal}</p>
                </div>
                <p className='text-gray-500 text-xs leading-relaxed mt-4'>{tripIntro}</p>
            </div>
            <div className='mx-4 mb-4 rounded-full bg-amber-50 py-2 text-center font-semibold text-amber-700 transition-colors group-hover:bg-blue-600 group-hover:text-white'>
                View Details
            </div>
        </article>
    )
}

export default Card