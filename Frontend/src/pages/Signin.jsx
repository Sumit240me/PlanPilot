import React, { useContext, useEffect, useState } from 'react'
import { TripContext } from '../context/TripContext.jsx'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate();
  const {login} = useContext(TripContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const token = localStorage.getItem("planpilot_token")
  // useEffect(() => {
  //   if(token){
  //     navigate("/")
  //   }
  // }, [token])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const response = await login(email, password)
    console.log(response);
    if(response.status === 200){
      navigate("/")
    }else{
      setError(response.response.data.message)
    }
  }

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6 relative overflow-hidden">

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="hidden md:flex relative min-h-[600px] flex-col justify-end overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Serene alpine lake at sunrise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/30 to-transparent" />
          <div className="relative z-10 p-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
              PlanPilot
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xs opacity-90">
              Your journey begins with a single, serene step. Navigate the world with curated intent.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-8 py-14 md:px-14">
            
          <div className="mb-10">
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-3 rounded shadow-sm flex items-center gap-3 w-full animate-in fade-in slide-in-from-top-2 duration-300">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700 text-sm font-medium text-left">{error}</p>
              </div>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
              Welcome back
            </h2>
            <p className="text-slate-500 text-sm">
              Access your saved itineraries and recommendations.
            </p>
          </div>

          <div className="space-y-5">

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="navigator@planpilot.com"
                className="w-full px-5 py-3.5 bg-slate-100 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-600 font-medium hover:underline underline-offset-4">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-5 py-3.5 bg-slate-100 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSubmit}
                type="button"
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-base tracking-wide transition-all shadow-lg shadow-blue-200"
              >
                Login
              </button>
            </div>

            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <span className="relative bg-white px-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="text-sm font-semibold text-slate-700">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.5-105.5C115.7 756.1 65 651.6 65 551.8c0-167.1 109.1-255.4 216.1-255.4 59 0 108.2 38.9 145.2 38.9 35.3 0 90.5-41.3 157.3-41.3 31.4 0 127.6 2.6 190.5 86.4zm-151.2-115.2c28.7-35.9 48.8-85.7 48.8-135.5 0-7.1-.6-14.3-1.9-20.1-46.5 1.9-101.9 31.4-135.5 71.9-26.1 30.8-50.6 80.6-50.6 131.1 0 7.7 1.3 15.4 1.9 17.9 3.2.6 8.4 1.3 13.6 1.3 41.3 0 93.1-28.1 123.7-66.6z"/>
                </svg>
                <span className="text-sm font-semibold text-slate-700">Apple</span>
              </button>
            </div>
          </div>

          {/* Sign up link */}
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?
              <a href="/signup" className="text-blue-600 font-bold hover:underline underline-offset-4 ml-1">
                Sign Up
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
    </>
  )
}

export default Signin