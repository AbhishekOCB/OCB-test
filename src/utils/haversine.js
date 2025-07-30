export function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371 // km
  const toRad = (d)=>d*Math.PI/180
  const dLat = toRad(lat2-lat1)
  const dLon = toRad(lon2-lon1)
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2
  const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

export function estimateCommute(distanceKm, mode='auto') {
  // Simple estimates; adjust as needed
  const speeds = { walk:5, cycle:12, auto:25, cab:30, metro:35, bus:20 }
  const costPerKm = { auto:12, cab:20, metro:3, bus:2, walk:0, cycle:0 }
  const speed = speeds[mode] ?? 25
  const timeHrs = distanceKm / speed
  const minutes = Math.round(timeHrs*60)
  const cost = Math.round((costPerKm[mode] ?? 0) * distanceKm)
  return { minutes, cost }
}
