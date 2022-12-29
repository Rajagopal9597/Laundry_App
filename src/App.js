import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Sign_in from './components/signin/Sign_in'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign_in />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
