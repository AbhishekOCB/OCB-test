import React from 'react'

export default function SearchBar({ value, onChange, placeholder='Search...' }) {
  return (
    <input
      value={value}
      onChange={e=>onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full md:w-96 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-slate-300"
    />
  )
}
