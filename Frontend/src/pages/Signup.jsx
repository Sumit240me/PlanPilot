import React, { useContext, useState } from 'react'
import { TripContext } from '../context/TripContext.jsx'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const { register } = useContext(TripContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async() => {
    try {
      await register(name, email, password);
      setName(""),
      setEmail(""),
      setPassword("");

      if(localStorage.getItem("planpilot_token")){
        navigate("/signin");
      }

    } catch (err) {
      const msg = err.response?.data?.message || 'An error occurred';
      setError(msg);
      console.log(err);
    }

  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 p-4">

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[50%] rounded-full bg-violet-400/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2 md:max-h-[96vh]">

        <div className="hidden overflow-hidden bg-linear-to-br from-blue-600 to-blue-800 p-8 text-white md:flex md:flex-col md:justify-between lg:p-10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">PlanPilot</h1>
            <p className="text-2xl lg:text-3xl font-bold leading-tight opacity-90 mt-8">
              Your journey starts with a single, serene step.
            </p>
            <p className="text-sm lg:text-base mt-4 opacity-80 max-w-xs leading-relaxed">
              Join a community of modern travelers who value precision, beauty, and the art of the perfect itinerary.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <div className="text-xs">
                <p className="font-semibold">Curated Recommendations</p>
                <p className="opacity-70 mt-0.5">AI-driven paths for your unique pace.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-6 md:px-10 overflow-y-auto">

          <div className="mb-6 text-center md:text-left">
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-3 rounded shadow-sm flex items-center gap-3 w-full animate-in fade-in slide-in-from-top-2 duration-300">
                <svg className="h-5 w-5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700 text-sm font-medium text-left">{error}</p>
              </div>
            )}
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-1">Create Account</h2>
            <p className="text-slate-500 text-xs">Join the Serene Navigator ecosystem.</p>
          </div>

          <div className="space-y-4">

            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">
                Full Name
              </label>
              <input
                value={name}
                type="text"
                placeholder="Smith"
                className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all"
                 onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                value={email}
                type="email"
                placeholder="alex@example.com"
                className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all pr-12"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors text-xs font-medium"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">
                  Confirm
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors text-xs font-medium"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleRegister}
              type="button"
              className="w-full rounded-xl bg-linear-to-br from-blue-600 to-blue-800 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Create Account
            </button>

          </div>

          {/* Log in link */}
          <div className="mt-5 text-center">
            <p className="text-xs text-slate-500">
              Already have an account?
              <a href="/signin" className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4 ml-1">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Signup