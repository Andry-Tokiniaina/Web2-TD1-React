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

            {/* Overlay de texte */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              {/* Titre principal */}
              <h1 className="text-white font-bold text-5xl md:text-6xl font-serif mb-6">
                Haute Ecole d'Informatique
              </h1>

              {/* Texte dynamique */}
              <p className="text-white text-xl md:text-2xl mb-8 w-full md:w-2/3">
                {item.texte}
              </p>

              {/* Boutons */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="bg-white text-blue-950 px-7 py-4 font-bold text-xl rounded-md">
                  Inscrivez-vous ici
                </div>
                <div className="bg-yellow-500 text-white px-7 py-4 font-bold text-xl rounded-md">
                  Emploi du temps
                </div>
                <div className="bg-blue-950 text-white px-7 py-4 font-bold text-xl rounded-md">
                  Programme pédagogique
                </div>
              </div>

              {/* Texte bas de page (juste au-dessus des cercles) */}
              <div className="text-white text-sm absolute bottom-4 w-full text-center font-bold">
                Habilitation MESupRES, suivant l'arrêté n°31309/2023
              </div>
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
