import React from 'react'
import pandaImg from '../assets/panda.png'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='p-10 bg-gray-100'>
            <div className='md:flex flex-row justify-between'>

                <div className='flex flex-row'>
                    <img className='h-24 w-24' src={pandaImg} alt="avtar image" />
                    <div className='flex flex-col ml-4'>
                        <div className='text-4xl font-bold text-gray-700'>Alex Harrison</div>
                        <div className='mt-2 text-sm text-gray-600'>alex.harrison@planpilot.com</div>
                        <div className='mt-4 flex flex-row justify-between gap-2'>
                            <div className='bg-gray-200 px-2 py-1 rounded-full text-xs text-blue-500 font-semibold'>PREMIUM MEMBER</div>
                            <div className='bg-blue-100 px-2 py-1 rounded-full text-xs text-gray-700 font-semibold'>GLOBE TROTTER</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-10 mt-10'>
                    <div className='p-4 bg-white rounded-4xl' >
                        <h1 className='text-gray-600'>Total Trips</h1>
                        <p className='text-lg font-semibold text-blue-500'>24</p>
                    </div>
                    <div className='p-4 bg-white rounded-4xl'>
                        <h1 className='text-gray-600'>Avg Rating</h1>
                        <p className='text-lg font-semibold text-blue-500 flex items-center gap-2'>4.9 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg></p>
                    </div>
                </div>
            </div>

            <div className='md:flex flex-row mt-8 gap-10'>
                {/* left side bar */}
                <div className='flex flex-col gap-3 text-gray-700 md:w-1/6 h-fit md:sticky top-32 self-start'>
                    <NavLink to='/profile' className={({ isActive }) => `flex items-center gap-3 p-1 rounded-2xl ${isActive ? 'font-semibold text-black bg-blue-500' : ''} hover:text-black`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill shrink-0" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>Edit Profile</NavLink>
                    <NavLink to='/profile/travelPreferences' className={({ isActive }) => `flex items-center gap-3 p-1 rounded-2xl ${isActive ? 'font-semibold text-black bg-blue-500' : ''} hover:text-black hover:bg-gray-100`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle shrink-0" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    </svg>Travel Preferences</NavLink>
                    <NavLink to='/savedTrip' className={({ isActive }) => `flex items-center gap-3 p-1 rounded-2xl ${isActive ? 'font-semibold text-black bg-blue-500' : ''} hover:text-black hover:bg-gray-100`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-airplane shrink-0" viewBox="0 0 16 16">
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                    </svg>MyTrips</NavLink>
                    <NavLink to='/profile/accountSecurity' className={({ isActive }) => `flex items-center gap-3 p-1 rounded-2xl ${isActive ? 'font-semibold text-black bg-blue-500' : ''} hover:text-black hover:bg-gray-100`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill" viewBox="0 0 16 16">
                        <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                    </svg>Account Security</NavLink>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs font-semibold text-gray-500'>ACCOUNT ACTIONS</p>
                        <NavLink to='/profile/deleteAccount' className={({ isActive }) => `flex items-center gap-3 p-1 rounded-2xl text-red-500 ${isActive ? 'font-semibold text-black bg-blue-500' : ''} hover:text-red-700 hover:bg-red-100`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 shrink-0" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>Delete Account</NavLink>
                    </div>
                    <div className="mt-6 relative rounded-xl overflow-hidden aspect-[3/4] group">
                        <img alt="Scenic mountain landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Beautiful turquoise lake in the Canadian Rockies surrounded by pine forests and snow-capped peaks under a bright sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfpEqdgjiElWuCyHN8Zo7oDlCnshNnBONABytQME73womYv6nQ-evKXWNJTx-dCjOgJLGNOOmciLGYjRggsuvAe_TwUM30Nc4zKREgoTtnXT2llPd7YoaOGGta0JmkWp404OpyfoDxzDPyHU31lbA6T4uex76akkHbTGJ3oMuXRYHY5viIvP8U1SYtGBxxQ9_peLRV99ZQk2ztEGV1WS4dTJ-HzyNvJGdS0aN1Tx3aLkq6pbJCNY6rkdFa4iRsBMssdvb19G79N-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                            <p className="text-on-primary font-headline font-bold text-lg leading-tight text-white">Next Stop: Amalfi Coast?</p>
                            <p className="text-on-primary/80 text-xs mt-2 font-medium text-white">Personalized recommendations based on your 24 trips.</p>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className='md:w-5/6'>
                    <div className='flex flex-col md:flex-row justify-between h-fit gap-4 md:gap-8'>
                        <form className='w-2/3 bg-white p-12 rounded-4xl'>
                            <div className='flex justify-between'>
                                <h1>Basic Information</h1>
                                <button className='flex gap-2 justify-center text-blue-700'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                </svg>Edit</button>
                            </div>

                            <div className='flex flex-col md:flex-row md:gap-8 mt-6'>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-xs font-semibold text-gray-600">
                                        FULL NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        defaultValue="Alex Harrison"
                                        placeholder="Alex Harrison"
                                        className="rounded-md 
                                    placeholder-black font-bold 
                                    focus:outline-none focus:ring-0"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-600">
                                        EMAIL ADDRESS
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        defaultValue="alex.harrison@planpilot.com"
                                        placeholder="alex.harrison@planpilot.com"
                                        className="rounded-md 
                                    placeholder-black font-bold
                                    focus:outline-none focus:ring-0"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row md:gap-8 mt-6'>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="location" className="text-xs font-semibold text-gray-600">
                                        LOCATION
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        defaultValue="New Delhi, India"
                                        placeholder="New Delhi, India"
                                        className="rounded-md 
                                    placeholder-black font-bold 
                                    focus:outline-none focus:ring-0"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phone" className="text-xs font-semibold text-gray-600">
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        defaultValue="+91 1234567890"
                                        placeholder="+91 1234567890"
                                        className="rounded-md 
                                    placeholder-black font-bold
                                    focus:outline-none focus:ring-0"
                                    />
                                </div>
                            </div>
                        </form>
                        <div className='w-1/3 p-12 rounded-4xl bg-blue-700 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z" />
                            </svg>
                            <h1 className='text-lg mt-4 font-semibold'>Account Secure</h1>
                            <p className='text-xs mt-2'>Two-factor authentication is active.Last login was 2 hours ago.</p>
                            <button className='mt-4 bg-blue-600 text-white w-full py-1 rounded-2xl font-semibold'>Security log</button>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4 mt-8'>
                        <div className='w-1/2 rounded-4xl bg-gray-200 p-12'>
                            <h1 className='text-xl font-bold text-gray-700'>Travel Style</h1>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 justify-center items-center'>
                                <p className='bg-white px-2 py-1 rounded-2xl text-sm font-semibold text-gray-600 justify-center items-center '>Luxury Boutique</p>
                                <p className='bg-white px-2 py-1 rounded-2xl text-sm font-semibold text-gray-600 justify-center items-center'>Slow Travel</p>
                                <p className='bg-white px-2 py-1 rounded-2xl text-sm font-semibold text-gray-600 justify-center items-center'>Culinary Arts</p>
                                <p className='bg-white px-2 py-1 rounded-2xl text-sm font-semibold text-gray-600 justify-center items-center '>Mountain Hiking</p>
                            </div>
                            <p className='mt-4 text-gray-500 text-sm'>"Always looking for the quietest sunrise spots and local artisan workshops."</p>
                        </div>
                        <div className='w-1/2 rounded-4xl'><div className="col-span-6 md:col-span-3 relative rounded-4xl overflow-hidden min-h-[240px] group">
                            <img alt="Italy trip" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 rounded-4xl" data-alt="Dreamy sunset over the colorful coastal houses of Positano, Italy, reflecting warm oranges and pinks in the calm sea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6fca8R5XZjqr3AuWURnrLKcbFybXcdnat9uDc3Okb4YSdC48lLRu7VShCYB_01gEQf8531VOIBHmPzKcJfsD7WMi3RVm49h_JHD601py3lYaniRZDNa9cd8jvizzKXqUdx8SiwwAGYpuLUqlrfQPvEwohBUYoeOeyFGpSi8xws2ddYEykWaeuHP3s0YRTQ4izJnE2VUmIAwap3SE1KpTM8_PYDDicxBs6kFF5VS9sMThId6NvrJLD4nMwH3UxSOhESR2zNWOUnt4" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Most Recent</p>
                                <h3 className="text-white font-headline text-2xl font-bold">Amalfi Coast Itinerary</h3>
                                <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1 text-white text-xs">
                                        <span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
                                        May 2024
                                    </div>
                                    <div className="flex items-center gap-1 text-white text-xs">
                                        <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                                        Italy
                                    </div>
                                </div>
                            </div>
                        </div></div>
                    </div>

                    <div className='mt-8 rounded-4xl p-12 bg-red-100 border border-red-300'>
                        <p className='text-2xl md:text-4xl font-semibold md:font-bold text-red-500'>Danger Zone</p>
                        <div className='flex flex-row justify-between'>
                            <p className='mt-2 text-lg text-gray-700'>Deleting your account will permanetly remove all your itineraries, travel history, and earned rewards.</p>
                            <button className='px-4 py-1 bg-red-500 rounded-4xl'>Proceed to Deletion</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Profile