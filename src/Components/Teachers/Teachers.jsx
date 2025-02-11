import React, { useEffect, useState } from "react";
import axios from "axios";
import SkeletonLoader from "../../Component/Skeleton/Skeleton"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import "./Teachers.css";

const Teachers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    axios
    .get("https://bca-department-backend-production.up.railway.app/api/collections") // Replace with your actual API endpoint
    .then((response) => {
      const librarians = response.data.Library;
      console.log(librarians);
      setData(librarians);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
      setLoading(false);
    });
}, []);


  return (
    <div className="teachers">
      <h2 className="header">Librarians</h2>
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
        {loading
          ? // Show 5 skeleton slides while loading
            [...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonLoader />
              </SwiperSlide>
            ))
          :data.map((teacher, index) => (   
          <SwiperSlide key={index}>
            <div className="teachercard">
            <div className="teacherimage">
           <img src={teacher.imageUrl} alt={`${teacher.name}'s photo`} loading="lazy" />
           </div>
           <div className="teacherheading">
            <h2 className="heading1">{teacher.name}</h2>
            <h4 className="heading2">{teacher.qualification}</h4>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Teachers;
