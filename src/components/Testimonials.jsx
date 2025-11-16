import React, { useState } from "react";
import Button from "./Button";

const testimonials = [
  {
    name: "John Carter",
    role: "CEO",
    message: "Calm, Serene, Retro - what a way to relax and enjoy",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Michael Smith",
    role: "Manager",
    message: "Calm, Serene, Retro - what a way to relax and enjoy",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "David Wilson",
    role: "Hotel Owner",
    message: "Calm, Serene, Retro - what a way to relax and enjoy",
    image: "https://i.pravatar.cc/150?img=20",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="font-bold playfair text-2xl sm:text-2xl md:text-3xl  leading-tight mb-4 md:mb-6 text-center">
          Testimonials
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center md:text-left md:p-10 md:flex md:items-center md:gap-8">
          <div className="mx-auto md:mx-0">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="mt-6 w-28 sm:w-32 md:w-40 lg:w-48 h-28 sm:h-32 md:h-40 lg:h-48 rounded-full mx-auto md:mx-0 object-cover border-4 border-gray-200 shadow transform md:rotate-3"
            />
          </div>

          <div className="mt-6 md:mt-0 md:flex-1">
            <p className="text-gray-700 italic mt-4 text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-0">
              "{testimonials[index].message}"
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-3 text-gray-900">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-500 text-sm sm:text-sm md:text-base">
              {testimonials[index].role}
            </p>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 md:gap-6">
              <div className="hidden md:flex items-center gap-3">
                <Button
                  onClick={prevSlide}
                  className="px-3 py-2 text-sm border rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>
                </Button>

                <Button
                  onClick={nextSlide}
                  className="px-3 py-2 text-sm border rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-transform focus:outline-none ${
                      index === i
                        ? "bg-black scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
          <Button
            onClick={prevSlide}
            className="text-sm border rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </Button>

          <Button
            onClick={nextSlide}
            className="text-sm border rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
