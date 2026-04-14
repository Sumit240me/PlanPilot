import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const token = localStorage.getItem('planpilot_token');

  const handleLogout = () => {
    localStorage.removeItem('planpilot_token');
    setVisible(false);
    window.location.reload();
  }

  useEffect(() => {
    if(token){
      setVisible(true);
    }
  },[visible])

  return (
    <div className='sticky top-0 px-6 py-6 flex fex-row  justify-between bg-white z-50'>
      <NavLink to='/' className='w-1/4 font-bold text-2xl'>PlanPilot </NavLink>
      <div className='w-2/4 flex nowrap justify-center'>
        <NavLink to='/' className={({ isActive }) =>
          `mr-6 relative pb-1 ${isActive ? "text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"
          } `
        }>Home</NavLink>
        <NavLink to='/recommendation' className={({ isActive }) =>
          `mr-6 relative pb-1 ${isActive ? "text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"
          }`
        }>Recommendation</NavLink>
        <NavLink to='/savedTrip' className={({ isActive }) =>
          `mr-6 relative pb-1 ${isActive ? "text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"
          }`
        }>Saved-Trip</NavLink>
        {/* <NavLink to='/trip' className={({ isActive }) =>
          `mr-6 relative pb-1 ${isActive ? "text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"
          }`
        }>Current</NavLink>
        <NavLink to='/dayTrip' className={({ isActive }) =>
          `mr-6 relative pb-1 ${isActive ? "text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"
          }`
        }>Todays-plan</NavLink> */}
        <NavLink to='/about' className={({ isActive }) =>
          `mr-6 relative pb-1 ${isActive ? "text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"
          }`
        }>About</NavLink>
      </div>
      <div className='w-1/4 flex justify-end'>
        <div className="relative">{token && visible ?
          <div className='flex gap-2'>
            <div onClick={() => navigate("/profile")} className='cursor-pointer p-1 rounded-full hover:bg-slate-100 transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-blue-600 bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </div>
            <div onClick={handleLogout} className='cursor-pointer flex items-center px-4 py-2.5 text-sm font-medium text-red-500 rounded-2xl bg-red-50 hover:text-red-700 transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right shrink-0 mr-3" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                  </svg>Logout
                </div>
          </div>
          : <NavLink to='/signin' className='w-full px-4 py-1 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white flex justify-center items-center font-medium tracking-wide transition-all shadow-md shadow-blue-200'>Login</NavLink>}</div>
      </div>
    </div>
  )
}

export default Navbar