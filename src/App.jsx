import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Colleges from './pages/Colleges.jsx'
import CollegeDetail from './pages/CollegeDetail.jsx'
import Compare from './pages/Compare.jsx'
import Coaching from './pages/Coaching.jsx'
import PGs from './pages/PGs.jsx'
import Food from './pages/Food.jsx'
import Gyms from './pages/Gyms.jsx'
import Grocery from './pages/Grocery.jsx'
import Hangouts from './pages/Hangouts.jsx'
import Salon from './pages/Salon.jsx'
import Rentals from './pages/Rentals.jsx'
import Travel from './pages/Travel.jsx'
import Wellbeing from './pages/Wellbeing.jsx'
import Community from './pages/Community.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/college/:slug" element={<CollegeDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/pgs" element={<PGs />} />
        <Route path="/food" element={<Food />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/hangouts" element={<Hangouts />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/wellbeing" element={<Wellbeing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute admin><Admin /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
