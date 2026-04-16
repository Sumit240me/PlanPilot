import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t-0 mt-16 bg-slate-50'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-4'>
      <div className='flex flex-col gap-3'>
        <span className='text-lg font-bold text-slate-900' >PlanPilot</span>
        <p className='text-[0.75rem] text-slate-500'>Elevating travel planning to an art form. Seamless, serene, and sophisticated navigation for the modern explorer.</p>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-bold text-slate-900'>EXPLORE</div>
        <p className='text-sm text-slate-500'>Destination</p>
        <p className='text-sm text-slate-500'>Blog</p>
        <p className='text-sm text-slate-500'>Travel Guides</p>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-bold text-slate-900'>SUPPORT</div>
        <p className='text-sm text-slate-500'>About Us</p>
        <p className='text-sm text-slate-500'>Terms of Service</p>
        <p className='text-sm text-slate-500'>Privacy Policy</p>

      </div>
      <div className='flex flex-col gap-3'>
        <div className='font-bold text-slate-900'>CONNECT</div>
        <p className="text-[0.6875rem] text-slate-500 dark:text-slate-400">© 2026 PlanPilot. The Serene Navigator.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer