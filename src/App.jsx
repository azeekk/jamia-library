import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Teachers from './Components/Teachers/Teachers'
import Programs from './Components/Programs/Programs'
import Footer from './Components/Footer/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Nav'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/bca-department" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<Footer/>}/>
      </Routes>
  </Router>
  )
}

export default App
