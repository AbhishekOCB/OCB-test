# Off Campus Buddy (OCB) — Full Web (React + Vite + Tailwind)

A functional MVP scaffold with:
- **Courses & Colleges first** (list, detail, compare)
- **Map‑first listings** for PGs/Hostels (Leaflet + OSM)
- **Travel & Commute estimates** (distance, ETA, cost)
- **Wellbeing Hub** (private journaling + mood trend)
- **Student Community** (Q&A)
- **Auth (mock)** with admin‑only **CMS** placeholder
- SPA routing & **Vercel rewrites** ready

## Quickstart
```bash
npm i
npm run dev
```
Open http://localhost:5173

**Login tips:** any email works. Use `admin@ocb.app` to see the Admin link.

## Build & Deploy
```bash
npm run build
npm run preview
```
Then push to GitHub and import in Vercel.

## Vercel SPA rewrites
Add `vercel.json` at project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Firebase (optional)
This scaffold uses mock auth; you can replace it with Firebase easily.
- Create a Firebase Web app; copy config into an env file and swap `utils/auth.jsx` with your Firebase logic.

## Notes
- Map tiles via OpenStreetMap. Production apps should cache/attribute appropriately.
- Estimates are illustrative; wire to real APIs as needed.
