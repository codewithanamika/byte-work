import React from "react";
import Hero from "../components/Hero";
import heroimage from "../assets/home-image.webp";
import HomeInfo from "../components/Homeinfo.jsx";
import Button from "../components/Button.jsx";

const Home = () => {
  return (
    <>
      <div>
        <Hero image={heroimage} altText="Luxury Hotel" />
      </div>
      <h2 className="text-center text-sm sm:text-base md:text-lg lg:text-2xl mt-4 sm:mt-5 md:mt-6 px-4">
        All our room types are including complementary breakfast.
      </h2>

      <HomeInfo
        id="room"
        title="Luxury redefined"
        subtitle="Our rooms are designed to transport youinto and environment made for leisure.Take your mind off the day-to-day of home life and find a private paradise for yourself."
        image={heroimage}
      />
      <HomeInfo
        id="room"
        title="Leave your worries in the sand"
        subtitle="We love life at the beach.Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind.It seems like time stands still watching the ocean. "
        image={heroimage}
      />
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
};

export default Home;
