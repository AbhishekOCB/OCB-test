import React, { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import FilterPanel from '../components/FilterPanel.jsx'
import COURSES from '../data/courses.json'

// Demo data — move to src/data/courses.json later if you prefer


// Build filter options from data
const STREAMS = Array.from(new Set(COURSES.map(c => c.stream))).sort()
const DEGREES = Array.from(new Set(COURSES.map(c => c.degree))).sort()

export default function Courses() {
  const [q, setQ] = useState('')
  const [filters, setFilters] = useState({ stream: '', degree: '' })
  const [visible, setVisible] = useState(8) // simple "load more" pagination

  const schema = [
    { key: 'stream', label: 'Stream', type: 'select', options: STREAMS },
    { key: 'degree', label: 'Degree', type: 'select', options: DEGREES },
  ]

  const filtered = useMemo(() => {
    return COURSES.filter(c => {
      const matchesQuery =
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.stream.toLowerCase().includes(q.toLowerCase())
      const matchesStream = !filters.stream || c.stream === filters.stream
      const matchesDegree = !filters.degree || c.degree === filters.degree
      return matchesQuery && matchesStream && matchesDegree
    })
  }, [q, filters])

  const shown = filtered.slice(0, visible)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <h2 className="text-2xl font-bold">Courses</h2>
        <SearchBar value={q} onChange={setQ} placeholder="Search courses e.g., BBA, MBA, B.Tech" />
      </div>

      <div className="p-4 rounded-xl border bg-white">
        <FilterPanel filters={filters} setFilters={setFilters} schema={schema} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {shown.length < filtered.length && (
        <div className="text-center">
          <button
            className="px-5 py-2 rounded-xl bg-slate-900 text-white shadow"
            onClick={() => setVisible(v => v + 6)}
          >
            Load more
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-slate-600">No courses match your filters. Try clearing them.</p>
      )}
    </div>
  )
}

function CourseCard({ course }) {
  return (
    <div className="p-4 rounded-xl border bg-white flex flex-col">
      <div className="flex-1">
        <div className="text-xs text-slate-500">{course.stream} • {course.degree}</div>
        <h3 className="mt-1 font-semibold text-lg">{course.name}</h3>

        <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
          <div className="p-3 rounded-lg bg-slate-50 border">
            <span className="text-slate-500">Duration: </span>{course.duration}
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border">
            <span className="text-slate-500">Entrance: </span>{course.exams.join(', ')}
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border">
            <span className="text-slate-500">Typical Fees: </span>{course.feesRange}
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border">
            <span className="text-slate-500">Colleges: </span>
            {course.collegesCount} (e.g., {course.sampleColleges.join(', ')})
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {/* Link to your colleges page; you can read the query param later */}
        <a
          href={`/colleges?program=${encodeURIComponent(course.name)}`}
          className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm"
        >
          View Colleges
        </a>
        <a
          href={`/compare`}
          className="px-4 py-2 rounded-xl border text-sm"
        >
          Compare Colleges
        </a>
      </div>
    </div>
  )
}
