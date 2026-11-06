import React, { useContext, useState } from 'react'
import { TripContext } from '../context/TripContext.jsx'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useContext(TripContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

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