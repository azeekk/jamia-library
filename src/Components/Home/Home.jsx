import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import Logo from '../../assets/jamia_logo.png'
import collegevideo from '../../assets/collegevideo.mp4'
import { Swiper, SwiperSlide } from "swiper/react";
import library1 from '../../assets/library1.mp4'
import library2 from '../../assets/library2.mp4'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";



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

        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000, // Slide transition every 3 seconds
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,  
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        navigation={true}
        pagination={{clickable: true}}
        className="mySwiper"
      >
      <SwiperSlide><video src={library1} width="600" height="300" autoPlay muted loop controls="false" target="video" ></video></SwiperSlide>
       <SwiperSlide><video src={library2} width="600" height="300" autoPlay muted loop controls="false" target="video" ></video></SwiperSlide>
      </Swiper>

      <p>Jamia Nadwiyya Arts and Science College, established in 2003-04 in Edavanna, Malappuram, Kerala, boasts a well-equipped central library. The library houses a diverse collection of books valued at over fifty lakh rupees, supporting both students and staff in their academic pursuits. Its primary objective is to enhance the teaching-learning process by providing essential resources. 
 Additionally, the college offers seven laboratories dedicated to Educational Psychology, Social Studies, Science, and Work Experience, further enriching the educational experience. </p>

      </div>




    </div>
  )
} 

export default Home
