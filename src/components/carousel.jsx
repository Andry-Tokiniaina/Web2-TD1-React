import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // ← important pour le style des flèches

const MyCarousel = ({ elements, height = "90vh" }) => {
  return (
    <div style={{ position: "relative", width : "100%" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // ← ajout de Navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {elements.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: "relative", width: "100%" }}>
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: height,
                  objectFit: "cover",
                }}
              />
              <p className='text-white w-2/3 text-center text-2xl' style={
                  {
                    position : "absolute",
                    top : "24%",
                    left : "17%",
                    margin : "auto"
                  }}>
                <h1 className='font-bold text-6xl font-serif'>
                    Haute Ecole d'Informatique
                </h1>
                <br className='p-10'/>
                "Des entreprises partenaires et une équipe déagogique et administrative qui travaille sans relâche pour la
                 montée en compétences de nos étudiants"
              </p>
                  <div className='flex w-1/1 justify-around' style={{
                    position : "absolute",
                    top : "75%"
                  }}>
                    <div className='bg-white text-blue-950 px-7 py-5 font-bold text-2xl rounded-md'>Inscrivez vous ici</div>
                    <div className='bg-yellow-500 text-white px-7 py-5 font-bold text-2xl rounded-md'>Emploi du temps</div>
                    <div className='bg-blue-950 text-white px-7 py-5 font-bold text-2xl rounded-md'>Programme pédagogique</div>
                  </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Les boutons flèches personnalisés */}
        <div className="swiper-button-prev" style={arrowStyle}></div>
        <div className="swiper-button-next" style={arrowStyle}></div>
      </Swiper>
    </div>
  );
};

// Style simple pour les flèches
const arrowStyle = {
  color: "#fff",
  fontSize: "2rem",
  padding: "10px",
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  cursor: "pointer",
};

export default MyCarousel;
