import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem('planpilot_token');

  const handleLogout = () => {
    localStorage.removeItem('planpilot_token');
    setVisible(false);
    setMenuOpen(false);
    window.location.reload();
  }

  useEffect(() => {
    setVisible(Boolean(token));
  }, [token])

  const navLinkClassName = ({ isActive }) =>
    `relative pb-1 ${isActive ? "text-blue-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500" : "text-gray-600 hover:text-gray-900"}`

  const handleNavClick = () => {
    setMenuOpen(false);
  }

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between gap-3 bg-white px-4 py-4 sm:px-6 sm:py-6'>
      <NavLink to='/' className='shrink-0 text-xl font-bold sm:text-2xl'>PlanPilot </NavLink>

      <div className='hidden flex-1 justify-center md:flex'>
        <NavLink to='/' className={({ isActive }) => `${navLinkClassName({ isActive })} mr-6`}>Home</NavLink>
        <NavLink to='/recommendation' className={({ isActive }) => `${navLinkClassName({ isActive })} mr-6`}>Recommendation</NavLink>
        <NavLink to='/savedTrip' className={({ isActive }) => `${navLinkClassName({ isActive })} mr-6`}>Saved-Trip</NavLink>
        <NavLink to='/about' className={({ isActive }) => `${navLinkClassName({ isActive })} mr-6`}>About</NavLink>
      </div>

      <div className='relative flex shrink-0 justify-end'>
        <button
          type='button'
          onClick={() => setMenuOpen((open) => !open)}
          className='mr-3 flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-slate-100 md:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineXMark className='text-3xl' /> : <HiOutlineBars3 className='text-3xl' />}
        </button>

        <div className='relative'>
          {token && visible ? (
            <div className='flex gap-2'>
              <div onClick={() => navigate('/profile')} className='cursor-pointer rounded-full p-1 transition-colors hover:bg-slate-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle text-blue-600" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
              <div onClick={handleLogout} className='cursor-pointer flex items-center rounded-2xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-500 transition-colors hover:text-red-700'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right mr-3 shrink-0" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                </svg>
                Logout
              </div>
            </div>
          ) : (
            <NavLink to='/signin' className='flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-1 font-medium tracking-wide text-white transition-all shadow-md shadow-blue-200 hover:bg-blue-700 active:scale-[0.98]'>Login</NavLink>
          )}

          {menuOpen && (
            <div className='absolute right-0 top-full mt-4 w-52 rounded-3xl border border-gray-100 bg-white p-4 shadow-xl sm:w-56 md:hidden'>
              <div className='flex flex-col gap-3'>
                <NavLink to='/' onClick={handleNavClick} className={navLinkClassName}>Home</NavLink>
                <NavLink to='/recommendation' onClick={handleNavClick} className={navLinkClassName}>Recommendation</NavLink>
                <NavLink to='/savedTrip' onClick={handleNavClick} className={navLinkClassName}>Saved-Trip</NavLink>
                <NavLink to='/about' onClick={handleNavClick} className={navLinkClassName}>About</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar