import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    login({ email, password })
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={submit} className="mt-6 space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2 rounded-xl border" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-2 rounded-xl border" />
        <button className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white">Continue</button>
      </form>
      <p className="mt-3 text-xs text-slate-500">Tip: use <strong>admin@ocb.app</strong> to see the Admin link.</p>
    </div>
  )
}
