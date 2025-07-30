import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const saved = localStorage.getItem('ocb_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  function login({ email, password }) {
    // MOCK: Accept any email/password; 'admin@ocb.app' is admin
    const isAdmin = email === 'admin@ocb.app'
    const name = email.split('@')[0]
    const u = { email, name, isAdmin }
    localStorage.setItem('ocb_user', JSON.stringify(u))
    setUser(u)
    return u
  }

  function logout() {
    localStorage.removeItem('ocb_user')
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() { return useContext(AuthContext) }
