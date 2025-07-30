import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs px-2 py-1 rounded bg-slate-900 text-white">Courses first</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Find the right <span className="underline decoration-sky-400 decoration-4 underline-offset-4">course & college</span> — then everything around it.
          </h1>
          <p className="mt-4 text-slate-700 md:text-lg">
            Discover programs, compare colleges, and manage off‑campus life with PGs, food, travel, rentals, and wellbeing—on one platform.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/colleges" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium shadow">Explore Colleges</Link>
            <Link to="/compare" className="px-5 py-3 rounded-xl bg-white border font-medium shadow">Compare Colleges</Link>
          </div>
        </div>
        <div className="p-6 md:p-8 rounded-2xl border bg-white/80 backdrop-blur shadow">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border">🎓 Courses & Colleges</div>
            <div className="p-4 rounded-xl bg-white border">🏠 PGs & Hostels</div>
            <div className="p-4 rounded-xl bg-white border">🚌 Travel & Commute</div>
            <div className="p-4 rounded-xl bg-white border">🧠 Wellbeing Hub</div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Map‑first discovery, campus‑geofenced filters, and more.</p>
        </div>
      </div>
    </section>
  )
}
