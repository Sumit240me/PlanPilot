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
    <main className="h-screen w-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-50">

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[50%] rounded-full bg-violet-400/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl h-full max-h-[96vh] grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden relative z-10">

        <div className="hidden md:flex flex-col justify-between p-8 lg:p-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
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
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
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
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

            <div className="grid grid-cols-2 gap-3">
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
              className="w-full py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-semibold text-sm shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-slate-200" />
              <span className="flex-shrink mx-3 text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                or sign up with
              </span>
              <div className="flex-grow border-t border-slate-200" />
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 transition-colors rounded-xl font-medium text-sm text-slate-700"
              >
                <svg width="15" height="15" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 transition-colors rounded-xl font-medium text-sm text-slate-700"
              >
                <svg width="14" height="14" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.5-105.5C115.7 756.1 65 651.6 65 551.8c0-167.1 109.1-255.4 216.1-255.4 59 0 108.2 38.9 145.2 38.9 35.3 0 90.5-41.3 157.3-41.3 31.4 0 127.6 2.6 190.5 86.4zm-151.2-115.2c28.7-35.9 48.8-85.7 48.8-135.5 0-7.1-.6-14.3-1.9-20.1-46.5 1.9-101.9 31.4-135.5 71.9-26.1 30.8-50.6 80.6-50.6 131.1 0 7.7 1.3 15.4 1.9 17.9 3.2.6 8.4 1.3 13.6 1.3 41.3 0 93.1-28.1 123.7-66.6z" />
                </svg>
                Apple
              </button>
            </div>
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