import Hero from "../components/Hero";
import Button from "../components/Button";
import heroimage from "../assets/home-image.webp";
import React from "react";
import Testimonials from "../components/Testimonials.jsx";

export default function Facilities() {
  const facilities = [
    { id: 1, name: "THE GYM", image: heroimage },
    { id: 2, name: "POOLSIDE BAR", image: heroimage },
    { id: 3, name: "THE SPA", image: heroimage },
    { id: 4, name: "SWIMMING POOL", image: heroimage },
    { id: 5, name: "RESTAURANT", image: heroimage },
    { id: 6, name: "LAUNDRY", image: heroimage },
  ];

  return (
    <>
      <Hero image={heroimage} altText="Our Facilities" />

      <div className="text-center mt-12 px-4">
        <h1 className="uppercase text-3xl md:text-4xl font-bold playfair mb-4">
          Facilities
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all your needs and ensure an
          experience quite unique. Our modern resort facilities will help you
          enjoy luxury with stunning views and exceptional comfort.
        </p>
      </div>

      <div className="mt-14 px-6 md:px-12 lg:px-20 grid grid-cols-1 gap-14 md:gap-20 justify-center items-center">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="flex justify-center items-center w-full overflow-hidden transition-all duration-300"
          >
            <div className="relative">
              <img
                src={facility.image}
                alt={facility.name}
                className=" w-full h-[400px]  object-cover hover:scale-105 transition-all duration-500"
              />

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 
               bg-white text-black px-15 py-1  
               text-lg font-semibold"
              >
                {facility.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Testimonials />
    </>
  );
}
