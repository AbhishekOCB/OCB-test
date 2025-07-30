import React, { useMemo, useState } from 'react'
import { haversine, estimateCommute } from '../utils/haversine.js'

const options = [
  { name:'Metro', mode:'metro' },
  { name:'Bus', mode:'bus' },
  { name:'Auto', mode:'auto' },
  { name:'Cab', mode:'cab' },
  { name:'Walk', mode:'walk' },
  { name:'Cycle', mode:'cycle' },
]

export default function Travel(){
  const campus = { name:'Amity University', coords:[28.544,77.333] }
  const [dest, setDest] = useState({ name:'SGT University', coords:[28.482,76.813] })

  const distance = useMemo(()=>haversine(campus.coords[0], campus.coords[1], dest.coords[0], dest.coords[1]).toFixed(2), [dest])
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Travel & Commute</h2>
      <p className="text-slate-700">Costs, distance, and ETA from campus.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {options.map(o=>{
          const est = estimateCommute(parseFloat(distance), o.mode)
          return (
            <div key={o.mode} className="p-4 rounded-xl border bg-white">
              <div className="font-semibold">{o.name}</div>
              <div className="text-sm text-slate-600 mt-2">Distance: {distance} km</div>
              <div className="text-sm text-slate-600">ETA: {est.minutes} min</div>
              <div className="text-sm text-slate-600">Est. Cost: ₹{est.cost}</div>
            </div>
          )
        })}
      </div>
      <p className="text-xs text-slate-500">Estimates are illustrative; real costs vary by city and time.</p>
    </div>
  )
}
