import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TripContextProvider from './context/TripContext.jsx'

createRoot(document.getElementById('root')).render(
    <TripContextProvider>
      <App />
    </TripContextProvider>

)
