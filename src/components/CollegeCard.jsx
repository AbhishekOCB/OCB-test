import React from 'react'
import { Link } from 'react-router-dom'

export default function CollegeCard({ item, onCompareToggle, selected }) {
  return (
    <div className="p-4 rounded-xl border bg-white">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg"><Link to={`/college/${item.slug}`}>{item.name}</Link></h3>
          <p className="text-sm text-slate-600">{item.city} • {item.state}</p>
        </div>
        <button onClick={()=>onCompareToggle(item)} className={`px-3 py-1 rounded-lg text-sm ${selected? 'bg-slate-900 text-white':'border'}`}>
          {selected? 'Added':'Compare'}
        </button>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="p-3 rounded-lg bg-slate-50 border">Fees/Year: {item.fees}/-</div>
        <div className="p-3 rounded-lg bg-slate-50 border">Entrance: {item.entrance}</div>
        <div className="p-3 rounded-lg bg-slate-50 border">Facilities: {item.facilities.join(', ')}</div>
        <div className="p-3 rounded-lg bg-slate-50 border">Programs: {item.programs.join(', ')}</div>
      </div>
    </div>
  )
}
