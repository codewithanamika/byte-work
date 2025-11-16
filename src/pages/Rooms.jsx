import React from "react";
import Hero from "../components/Hero";
import heroimage from "../assets/home-image.webp";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials.jsx";
import RoomSlider from "../components/RoomSlider.jsx";

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

      <div className="flex flex-col items-center gap-10 px-4 sm:px-8 md:px-12  py-6 sm:py-8 md:py-10 lg:py-12">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="w-full max-w-5xl border-gray-500 border-l rounded-b-xl overflow-hidden shadow-md bg-white"
          >
            <RoomSlider images={[room.image, room.image, room.image]} />
            <div className="bg-blue-950 text-white tracking-[.15em] text-center py-3 text-lg font-semibold">
              {room.name}
            </div>

            <div className="flex justify-between py-5 px-6 bg-gray-50 border-gray-500 border-b border-r rounded-b-xl">
              <div className="flex items-center gap-3">
                <a className="flex justify-center items-center rounded-full w-5 h-5  bg-yellow-400 hover:bg-yellow-500 transition text-lg sm:text-xl font-bold cursor-pointer">
                  +
                </a>
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
      <Testimonials />
    </>
  );
}
