import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home.jsx'
import Recommendation from './pages/Recommendation.jsx'
import SavedTrip from './pages/SavedTrip.jsx'
import Trip from './pages/Trip.jsx'
import DayTrip from './pages/DayTrip.jsx'
import Doreview from './pages/Doreview.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import MainLayout from './pages/MainLayout.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
//import TravelPreferences from './pages/TravelPreferences.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Pages with Header and Footer */}
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>

          {/* Pages with Header and Footer */}
          <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/recommendation' element={<Recommendation />} />
          <Route path='/savedTrip' element={<SavedTrip />} />
          <Route path='/trip/:id' element={<Trip />} />
          <Route path='/dayTrip/:id/:dayNumber' element={<DayTrip />} />
          <Route path='/about' element={<About />} />
          <Route path='/review/:id' element={<Doreview />} />
          <Route path='/profile' element={<Profile />} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
