import React, { useEffect, useRef } from 'react'
import L from 'leaflet'

export default function MapView({ center=[28.545,77.192], zoom=12, markers=[] }) {
  const mapRef = useRef(null)
  useEffect(()=>{
    if (!mapRef.current) {
      const map = L.map('ocb-map').setView(center, zoom)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map)
      markers.forEach(m=>{
        L.marker([m.lat,m.lng]).addTo(map).bindPopup(m.label||'')
      })
      mapRef.current = map
    }
  }, [center, zoom, markers])
  return <div id="ocb-map" className="w-full h-72 rounded-xl border" />
}
