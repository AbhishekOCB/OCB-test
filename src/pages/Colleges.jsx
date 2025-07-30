import React, { useMemo, useState } from 'react'
import colleges from '../data/colleges.json'
import CollegeCard from '../components/CollegeCard.jsx'
import SearchBar from '../components/SearchBar.jsx'

export default function Colleges(){
  const [q, setQ] = useState('')
  const [compare, setCompare] = useState([])

  const filtered = useMemo(()=>{
    return colleges.filter(c => c.name.toLowerCase().includes(q.toLowerCase()))
  }, [q])

  function toggle(item){
    setCompare(prev=>{
      const exists = prev.find(p=>p.slug===item.slug)
      if (exists) return prev.filter(p=>p.slug!==item.slug)
      if (prev.length>=4) return prev // max 4
      return [...prev, item]
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <h2 className="text-2xl font-bold">Colleges</h2>
        <SearchBar value={q} onChange={setQ} placeholder="Search colleges e.g., SGT University" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(c=>(<CollegeCard key={c.slug} item={c} onCompareToggle={toggle} selected={!!compare.find(p=>p.slug===c.slug)} />))}
      </div>
      <div className="sticky bottom-4">
        {compare.length>0 && (
          <a href="/compare" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white shadow">
            Compare ({compare.length})
          </a>
        )}
      </div>
    </div>
  )
}
