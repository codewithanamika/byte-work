import React, { useState } from "react";

const RoomSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const goToSlide = (i) => setIndex(i);

  return (
    <div className="relative w-full h-72 md:h-[400px] overflow-hidden">
      <img
        src={images[index]}
        alt="room"
        className="w-full h-full object-cover transition-all duration-300"
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all 
              ${i === index ? "bg-white scale-125" : "bg-gray-400 opacity-70"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RoomSlider;
