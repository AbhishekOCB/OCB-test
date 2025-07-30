import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

export default function AppLayout() {
  const auth = useAuth() || {}          // <-- guard
  const { user, logout } = auth         // <-- won’t crash if null
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white grid place-items-center font-extrabold">OCB</div>
            <span className="font-semibold">Off Campus Buddy</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/colleges">Colleges</NavLink>
            <NavLink to="/compare">Compare</NavLink>
            <NavLink to="/pgs">PGs</NavLink>
            <NavLink to="/travel">Travel</NavLink>
            <NavLink to="/wellbeing">Wellbeing</NavLink>
            <NavLink to="/community">Community</NavLink>
            {user?.isAdmin && <NavLink to="/admin">Admin</NavLink>}
          </nav>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-slate-600">Hi, {user.name}</span>
                <button className="px-3 py-1 rounded-lg bg-slate-900 text-white text-sm" onClick={()=>{logout(); navigate('/')}}>Logout</button>
              </>
            ) : (
              <NavLink to="/login" className="px-3 py-1 rounded-lg bg-slate-900 text-white text-sm">Login</NavLink>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Off Campus Buddy (OCB)</p>
          <p>Made for demo • React + Vite + Tailwind + Leaflet</p>
        </div>
      </footer>
    </div>
  )
}
