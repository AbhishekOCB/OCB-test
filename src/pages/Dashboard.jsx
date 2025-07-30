import React from 'react'
import { store } from '../utils/storage'

export default function Dashboard(){
  const saved = store.get('ocb_saved', [])
  const journal = store.get('ocb_journal', [])
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border bg-white">
          <h3 className="font-semibold">Saved Items</h3>
          <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
            {saved.map((s,i)=>(<li key={i}>{s.name}</li>))}
          </ul>
        </div>
        <div className="p-4 rounded-xl border bg-white">
          <h3 className="font-semibold">Recent Journal Entries</h3>
          <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
            {journal.slice(0,5).map(j=>(<li key={j.id}>{new Date(j.ts).toLocaleString()} — Mood {j.mood}/10</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}
