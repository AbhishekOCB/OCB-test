import React, { useEffect, useState } from 'react'
import colleges from '../data/colleges.json'
import ComparisonTable from '../components/ComparisonTable.jsx'

export default function Compare(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    // demo: compare all
    setItems(colleges.slice(0,3))
  }, [])
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">College Comparison</h2>
      <ComparisonTable items={items} />
    </div>
  )
}
