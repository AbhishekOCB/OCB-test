import React from 'react'
export default function NotFound(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold">404 — Page not found</h2>
      <p className="mt-3 text-slate-700">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 rounded-xl bg-slate-900 text-white">Go Home</a>
    </div>
  )
}
