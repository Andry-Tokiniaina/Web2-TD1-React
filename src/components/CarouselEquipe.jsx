import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselEquipe = ({ items, visibleCount = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = items.length - visibleCount;

  const prev = () => {
    // Retour à la fin si on va trop à gauche
    if (currentIndex === 0) {
      setCurrentIndex(maxIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    // Retour au début si on est à la fin
    if (currentIndex >= maxIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 w-9/10"
          style={{
            transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
            width: `${(100 / visibleCount) * items.length}%`, // adapte la largeur du slider
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-start text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain rounded-md mb-4 bg-gray-100"
                  style={{borderRadius : "50%",height :"50%"}}
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full z-10 hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full z-10 hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CarouselEquipe;
