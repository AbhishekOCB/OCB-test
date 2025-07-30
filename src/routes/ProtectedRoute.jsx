import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

export default function ProtectedRoute({ children, admin=false }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (admin && !user.isAdmin) return <Navigate to="/" replace />
  return children
}
