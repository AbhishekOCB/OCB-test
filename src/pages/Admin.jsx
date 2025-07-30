import React, { useState } from 'react'
import listings from '../data/listings.json'

export default function Admin(){
  const [items, setItems] = useState(listings)

  function toggleVerify(i){
    const next = items.map((x,idx)=> idx===i ? { ...x, verified: !x.verified } : x)
    setItems(next)
    // In real app, save to backend
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Admin CMS (Demo)</h2>
      <p className="text-slate-700">Verify listings and moderate content.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it, i)=>(
          <div key={i} className="p-4 rounded-xl border bg-white">
            <div className="font-semibold">{it.name}</div>
            <div className="text-sm text-slate-600">{it.category} • Verified: {it.verified? 'Yes':'No'}</div>
            <button onClick={()=>toggleVerify(i)} className="mt-2 px-3 py-1 rounded-lg border">{it.verified? 'Unverify':'Verify'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
