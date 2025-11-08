import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuth } from './isAuth'

const ProtectedRoutes = () => {
    
    const isAuthenticated = isAuth();
    const location = useLocation();

  return isAuthenticated? <Outlet/> : <Navigate to='/login' state={{from: location}} replace/>
}

export default ProtectedRoutes