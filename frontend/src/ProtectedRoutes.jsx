import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuth } from './isAuth'

const ProtectedRoutes = () => {
    
    const isAuthenticated = isAuth();

  return isAuthenticated? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes