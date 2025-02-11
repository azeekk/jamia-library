import React from 'react'
import './Footer.css';
import Frame from '../../assets/Frame.png'
import Frame2 from '../../assets/Frame2.png'
import LocationLogo from '../../assets/location.png'
import PhoneLogo from '../../assets/phone.png'
import MailLogo from '../../assets/mail.png'


const Footer = () => {
  return (
    <div className='footer'>  
        <h1 className='thank'><img src={Frame2} alt="" />'Thank you for visiting us'<img src={Frame} alt="" /></h1>
        <div className='quicksupport'>
          <h4>Quick.Support</h4>
          <h2 className='informationheader'>you can get all the information</h2>
        </div>

        <div className='contacts'> 
          <li className='location'>
              <img src={LocationLogo} alt="" />
              <h5 className='headerone'>visit us</h5>
              <h6 className='headertwo'>Jamia Nadawiyya</h6>
              <h6 className='headerthree'>Edavanna</h6>

          </li>

          <li className='phone'>
            <img src={PhoneLogo} alt="" />
            <h5 className='headerone'>Call us</h5>
            <h6 className='headertwo'>9744297753</h6>
            <h6 className='headerthree'>9744297753</h6>

          </li>

          <li className='email'>
            <img src={MailLogo} alt="" />
            <h5 className='headerone'>Email us</h5>
            <h6 className='headertwo'><a href="">https://www.jnasc.org</a></h6>
            <h6 className='headerthree'><a href="">https://www.jnasc.org</a></h6>
            
          </li>
        </div>
    </div>
  )
}

export default Footer
