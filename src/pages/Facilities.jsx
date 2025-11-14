import Hero from "../components/Hero";
import Button from "../components/Button";
import heroimage from "../assets/home-image.webp";
import React from "react";

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

      <div className="mt-14 px-6 md:px-12 lg:px-20 grid grid-cols-1  gap-14 md:gap-20 justify-center items-center">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className=" overflow-hidden   transition-all duration-300"
          >
            <div className="relative w-full ">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full max-h-4xl object-cover hover:scale-105 transition-all duration-500"
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
      <h2 className="flex justify-center items-center font-bold playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-10 px-4">
        Testimonials
      </h2>
      <p className="mt-3 sm:mt-4 md:mt-5 flex justify-center items-center px-4 text-sm sm:text-base">
        "Calm, Serene, Retro - what a way to relax and enjoy"
      </p>
      <h5 className="text-xs sm:text-sm md:text-base flex justify-center items-center mt-2 px-4">
        Mr. and Mrs. Baxter, UK
      </h5>
      <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex justify-center items-center gap-4">
        <Button className="flex justify-center items-center p-2 sm:p-3 rounded-full w-12 h-10 sm:w-14 sm:h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a.75.75 0 0 1 0 1.06L9.31 12l6.44 6.44a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button className="flex justify-center items-center p-2 sm:p-3 rounded-full w-12 h-10 sm:w-14 sm:h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.25 4.5a.75.75 0 0 0 0 1.06L14.69 12l-6.44 6.44a.75.75 0 0 0 1.06 1.06l7-7a.75.75 0 0 0 0-1.06l-7-7a.75.75 0 0 0-1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </>
  );
}
