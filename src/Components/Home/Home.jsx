import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import Logo from '../../assets/jamia_logo.png'
import collegevideo from '../../assets/collegevideo.mp4'
import Navbar from '../../Component/Nav'


const Home = () => {
  return (
    <div className='spotlight'>

      <header className='header'>
        <div className='left'>
          <div className='img'>
            <img src={Logo} alt="logo"className='image' />
          </div>
          <div className='headercolor'>
            <h3 className='heading'>JAMIA ARTS <br></br> AND<br></br> SCIENCE COLLEGE</h3>
            </div>
        </div>
        <div className='right'>
        </div>
      </header>
      <div className='spotlight'> 

      <div className='middle'>
        <h1 className='bca'>LIBRARY</h1>
      </div>

      <div className='video'>
          <video src={collegevideo} width="600" height="300" autoPlay muted loop controls="false" target="video" ></video>
        </div>


      </div>




    </div>
  )
} 

export default Home
