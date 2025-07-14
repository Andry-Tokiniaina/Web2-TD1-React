import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselEquipe = ({ items, visibleCount = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = items.length - visibleCount;

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-[${100 / visibleCount}%] flex-shrink-0 px-2`}
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white rounded-xl shadow p-4 h-60 flex flex-col items-center justify-center text-center">
                <img src={item.image} alt="" className="w-full h-32 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
        disabled={currentIndex === 0}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
        disabled={currentIndex >= maxIndex}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CarouselEquipe;
