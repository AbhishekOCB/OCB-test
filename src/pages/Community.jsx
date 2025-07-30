import React, { useState } from 'react'
import { store } from '../utils/storage'

export default function Community(){
  const [q, setQ] = useState('')
  const [questions, setQuestions] = useState(()=>store.get('ocb_questions', []))

  function ask(){
    if (!q.trim()) return
    const item = { id:Date.now(), text:q.trim(), answers:[], ts:new Date().toISOString() }
    const next = [item, ...questions]
    setQuestions(next); store.set('ocb_questions', next); setQ('')
  }
  function answer(id, text){
    const next = questions.map(x=> x.id===id ? { ...x, answers:[...x.answers, { id:Date.now(), text }] } : x )
    setQuestions(next); store.set('ocb_questions', next)
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Student Community (Q&A)</h2>
      <div className="p-4 rounded-xl border bg-white">
        <textarea value={q} onChange={e=>setQ(e.target.value)} className="w-full p-3 rounded-xl border" rows={3} placeholder="Ask a question about colleges, courses, exams, housing..."></textarea>
        <div className="mt-3 text-right">
          <button onClick={ask} className="px-4 py-2 rounded-xl bg-slate-900 text-white">Ask</button>
        </div>
      </div>
      <div className="space-y-4">
        {questions.map(item=>(
          <Thread key={item.id} item={item} onAnswer={answer} />
        ))}
      </div>
    </div>
  )
}

function Thread({ item, onAnswer }){
  const [text, setText] = useState('')
  return (
    <div className="p-4 rounded-xl border bg-white">
      <div className="font-medium">{item.text}</div>
      <div className="mt-2 space-y-2">
        {item.answers.map(a=>(<div key={a.id} className="text-sm text-slate-700">• {a.text}</div>))}
      </div>
      <div className="mt-3 flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border" placeholder="Write an answer..." />
        <button onClick={()=>{onAnswer(item.id, text); setText('')}} className="px-3 py-2 rounded-xl border">Reply</button>
      </div>
    </div>
  )
}
