import React from 'react'
import './programs.css'
import bcavideo from '../../assets/bcavideo.mp4'

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='programheader'>PROGRAMS</h1>
      <div className='section'>
        <div className='top'>
                  <div className='video1'>
                    <video src={bcavideo} width="500" height="200" autoPlay muted loop controls="false" ></video>
                  </div>

        </div>
        <div className='bottom'>
        <h4 className='program_heading'>Programs</h4>
        <p className='program_paragraph'>The BCA Department is committed to providing students with a strong foundation in computer science, software development, and emerging technologies. The department organizes a variety of academic and co-curricular programs to enhance learning, skill development, and industry exposure.</p>
          
        </div>
      </div>    
    </div>
  )
}

export default Programs
