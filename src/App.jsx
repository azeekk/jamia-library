import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Teachers from './Components/Teachers/Teachers'
import Footer from './Components/Footer/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Nav'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/jamia-library" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/about" element={<Footer/>}/>
      </Routes>
  </Router>
  )
}

export default App
