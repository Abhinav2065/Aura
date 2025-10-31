import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Register from './Components/Register'
import ProtectedRoutes from './ProtectedRoutes'

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />


            {/* Protected Routes */}
            <Route element={<ProtectedRoutes/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/username' element={<Profile/>} />
            </Route>
        </Routes>
    </div>
    </Router>
  )
}

export default App