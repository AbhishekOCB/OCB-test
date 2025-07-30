import React, { useEffect, useMemo, useState } from 'react'
import { store } from '../utils/storage'
import Chart from 'chart.js/auto'

export default function Wellbeing(){
  const [text, setText] = useState('')
  const [entries, setEntries] = useState(()=>store.get('ocb_journal', []))
  const [mood, setMood] = useState(5)

  function addEntry(){
    const e = { id:Date.now(), text, mood: Number(mood), ts: new Date().toISOString() }
    const next = [e, ...entries]
    setEntries(next)
    store.set('ocb_journal', next)
    setText('')
    setMood(5)
  }

  useEffect(()=>{
    const ctx = document.getElementById('moodChart')
    if (!ctx) return
    // destroy previous
    if (window._moodChart) window._moodChart.destroy()
    const data = entries.slice(0,10).map(e=>({ x:new Date(e.ts), y:e.mood }))
    window._moodChart = new Chart(ctx, {
      type:'line',
      data: { datasets:[{ label:'Mood (1-10)', data }] },
      options: { parsing:false, scales:{ x:{ type:'time', time:{ unit:'day' } }, y:{ min:1, max:10 } } }
    })
  }, [entries])

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Mental Health & Wellbeing Hub</h2>
      <div className="p-4 rounded-xl border bg-white space-y-3">
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Journal privately (stored only in your browser)"
          className="w-full p-3 rounded-xl border" rows={4}></textarea>
        <div className="flex items-center gap-3">
          <label className="text-sm text-slate-600">Mood (1-10)</label>
          <input type="number" min="1" max="10" value={mood} onChange={e=>setMood(e.target.value)} className="w-20 px-3 py-2 rounded-xl border" />
          <button onClick={addEntry} className="px-4 py-2 rounded-xl bg-slate-900 text-white">Save Entry</button>
        </div>
        <p className="text-xs text-slate-500">Private by design: entries are saved locally in your browser (no server).</p>
      </div>
      <div className="p-4 rounded-xl border bg-white">
        <canvas id="moodChart" height="120"></canvas>
      </div>
      <div className="p-4 rounded-xl border bg-white">
        <h3 className="font-semibold">Get Support</h3>
        <ul className="list-disc list-inside text-sm text-slate-700 mt-2">
          <li>Anonymous journaling & mood trends (this page)</li>
          <li>Option to connect with life coaches/career advisors (integrate later)</li>
          <li>AI support chatbot (integrate later)</li>
        </ul>
      </div>
    </div>
  )
}
