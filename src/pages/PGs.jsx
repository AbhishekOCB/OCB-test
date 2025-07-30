import React, { useMemo, useState } from 'react'
import listings from '../data/listings.json'
import ListingCard from '../components/ListingCard.jsx'
import MapView from '../components/MapView.jsx'
import { haversine, estimateCommute } from '../utils/haversine.js'

export default function PGs(){
  const [mode, setMode] = useState('auto')
  const campus = { name:'Amity University', coords:[28.544,77.333] }
  const markers = listings.filter(l=>['PG','Hostel'].includes(l.category)).map(l=>({lat:l.lat,lng:l.lng,label:l.name}))

  const enriched = useMemo(()=>{
    return listings.filter(l=>['PG','Hostel'].includes(l.category)).map(l=>{
      const d = haversine(campus.coords[0], campus.coords[1], l.lat, l.lng)
      const est = estimateCommute(d, mode)
      return { ...l, distanceCalc: d.toFixed(2), eta: est.minutes, cost: est.cost }
    })
  }, [mode])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">PGs & Hostels near {campus.name}</h2>
        <select value={mode} onChange={e=>setMode(e.target.value)} className="px-3 py-2 rounded-xl border">
          <option value="auto">Auto</option>
          <option value="cab">Cab</option>
          <option value="metro">Metro</option>
          <option value="bus">Bus</option>
          <option value="cycle">Cycle</option>
          <option value="walk">Walk</option>
        </select>
      </div>
      <MapView center={campus.coords} markers={markers} />
      <div className="grid md:grid-cols-2 gap-4">
        {enriched.map(item=>(
          <div key={item.name} className="space-y-3">
            <ListingCard item={item} />
            <div className="text-xs text-slate-600">Distance: {item.distanceCalc} km • ETA: {item.eta} min • Est. Cost: ₹{item.cost}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
