import React from 'react'

export default function ComparisonTable({ items }) {
  if (!items?.length) return <p className="text-slate-600">Add colleges to compare.</p>
  const fields = [
    { key:'name', label:'College' },
    { key:'programs', label:'Programs' },
    { key:'fees', label:'Fees/Year' },
    { key:'entrance', label:'Entrance' },
    { key:'facilities', label:'Facilities' },
    { key:'brochure', label:'Brochure' },
    { key:'reviews', label:'Reviews' },
  ]
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 text-left">Field</th>
            {items.map(i=>(<th key={i.slug} className="p-3 text-left">{i.name}</th>))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {fields.map(f=>(
            <tr key={f.key}>
              <td className="p-3 font-medium">{f.label}</td>
              {items.map(i=>(<td key={i.slug+f.key} className="p-3">
                {Array.isArray(i[f.key]) ? i[f.key].join(', ') : (i[f.key] ?? '—')}
              </td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
