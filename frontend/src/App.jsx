import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/username' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    </div>
    </Router>
  )
}

export default App