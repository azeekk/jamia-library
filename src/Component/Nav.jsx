import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='Navigation'>
            <ul className='ul'>
              <li className='homeli'><Link to="/jamia-library">Home</Link></li>
              <li className='teachersli'><Link to="/teachers">Teachers</Link></li>
              <li className='aboutli'><Link to="/about">About</Link></li>
            </ul>
          </div>
  )
}

export default Nav
