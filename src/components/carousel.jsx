import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


const MyCarousel = () => {
         return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000} // durée de transition
    >
      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img src=".\src\assets\1.jpeg" alt="Image 1" />
          <p style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            margin: 0,
            padding: "8px"
          }}>
            Image 1
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img src=".\src\assets\2.jpeg" alt="Image 2" />
          <p style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            margin: 0,
            padding: "8px"
          }}>
            Image 2
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img src=".\src\assets\3.jpeg" alt="Image 3" />
          <p style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            margin: 0,
            padding: "8px"
          }}>
            Image 3
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};


export default MyCarousel
