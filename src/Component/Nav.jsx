import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='Navigation'>
            <ul className='ul'>
              <li className='homeli'><Link to="/bca-department">Home</Link></li>
              <li className='teachersli'><Link to="/teachers">Teachers</Link></li>
              <li className='programsli'><Link to="/programs">Programs</Link></li>
              <li className='aboutli'><Link to="/about">About</Link></li>
            </ul>
          </div>
  )
}

export default Nav
