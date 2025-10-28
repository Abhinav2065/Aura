import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/username' element={<Profile/>} />
        </Routes>
    </div>
    </Router>
  )
}

export default App