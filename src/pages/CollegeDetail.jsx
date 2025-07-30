import React from 'react'
import { useParams } from 'react-router-dom'
import colleges from '../data/colleges.json'
import MapView from '../components/MapView.jsx'

export default function CollegeDetail(){
  const { slug } = useParams()
  const item = colleges.find(c=>c.slug===slug)
  if (!item) return <div className="max-w-6xl mx-auto px-4 py-10">College not found.</div>
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-slate-600">{item.city}, {item.state} • Entrance: {item.entrance}</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">Download Brochure</button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border">
          <h3 className="font-semibold">Programs</h3>
          <p className="text-slate-700 mt-2">{item.programs.join(', ')}</p>
          <h3 className="font-semibold mt-4">Facilities</h3>
          <p className="text-slate-700 mt-2">{item.facilities.join(', ')}</p>
          <h3 className="font-semibold mt-4">Fees/Year</h3>
          <p className="text-slate-700 mt-2">{item.fees}</p>
        </div>
        <div className="p-4 rounded-xl border">
          <h3 className="font-semibold mb-3">Location</h3>
          <MapView center={item.coords} markers={[{lat:item.coords[0], lng:item.coords[1], label:item.name}]} />
          <p className="mt-2 text-xs text-slate-500">Map tiles: © OpenStreetMap contributors</p>
        </div>
      </div>
    </div>
  )
}
