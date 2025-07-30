import React from 'react'

export default function ListingCard({ item, onSave }) {
  return (
    <div className="p-4 rounded-xl border bg-white">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-sm text-slate-600">{item.category} • {item.distance} km from campus</p>
        </div>
        <button onClick={()=>onSave?.(item)} className="px-3 py-1 rounded-lg text-sm border">Save</button>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="p-3 rounded-lg bg-slate-50 border">Budget: ₹{item.budget}/month</div>
        <div className="p-3 rounded-lg bg-slate-50 border">Rating: {item.rating}</div>
        <div className="p-3 rounded-lg bg-slate-50 border">Amenities: {item.amenities.join(', ')}</div>
        <div className="p-3 rounded-lg bg-slate-50 border">Verified: {item.verified? 'Yes':'No'}</div>
      </div>
    </div>
  )
}
