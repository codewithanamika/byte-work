import React from "react";
import Hero from "../components/Hero";
import heroimage from "../assets/home-image.webp";
import Button from "../components/Button";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "SINGLE ROOM",
      image: heroimage,
      price: "$147",
    },
    {
      id: 2,
      name: "DOUBLE ROOM",
      image: heroimage,
      price: "$155",
    },
    {
      id: 3,
      name: "TWIN ROOM",
      image: heroimage,
      price: "$155",
    },
  ];

  return (
    <>
      <Hero image={heroimage} altText="Comfortable rooms" />

      <div className="text-center mt-10 px-4">
        <h1 className="uppercase text-3xl md:text-4xl font-bold playfair mb-3">
          Rooms and Rates
        </h1>
        <h2 className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn't our only
          objective — we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature's palette as visible from our
          rooms' sea-view windows and terraces.
        </h2>
      </div>

      <div className="flex flex-col items-center gap-10 px-4 sm:px-8 md:px-12 lg:px-15 py-6 sm:py-8 md:py-10 lg:py-12">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="w-full max-w-5xl border-gray-500 border-l rounded-b-xl overflow-hidden shadow-md bg-white"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-72 md:h-[500px] object-cover"
            />

            <div className="bg-blue-950 text-white text-center py-3 text-lg font-semibold">
              {room.name}
            </div>

            <div className="flex justify-between py-5 px-6 bg-gray-50 border-gray-500 border-b border-r rounded-b-xl">
              <div className="flex items-center gap-3">
                <Button className="flex justify-center items-center rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 hover:bg-yellow-500 transition text-lg sm:text-xl font-bold">
                  +
                </Button>
                <span className="text-xs uppercase">view room details</span>
              </div>

              <div className="mx-4 text-lg font-semibold text-gray-800">
                {room.price}
                <span className="text-sm text-gray-600 ml-1">Avg/night</span>
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
