import React from 'react'

export default function FilterPanel({ filters, setFilters, schema }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {schema.map((f)=>(
        <div key={f.key} className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">{f.label}</label>
          {f.type==='select' ? (
            <select value={filters[f.key] ?? ''} onChange={e=>setFilters(prev=>({...prev, [f.key]: e.target.value}))}
              className="px-3 py-2 rounded-xl border">
              <option value="">All</option>
              {f.options.map(o=><option key={o} value={o}>{o}</option>)}
            </select>
          ) : (
            <input type={f.type||'text'} value={filters[f.key] ?? ''} onChange={e=>setFilters(prev=>({...prev, [f.key]: e.target.value}))}
              placeholder={f.placeholder||''} className="px-3 py-2 rounded-xl border" />
          )}
        </div>
      ))}
    </div>
  )
}
