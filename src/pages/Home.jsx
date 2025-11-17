import React from "react";
import Hero from "../components/Hero";
import heroimage from "../assets/home-image.webp";
import HomeInfo from "../components/Homeinfo.jsx";
import Testimonials from "../components/Testimonials.jsx";

const Home = () => {
  return (
    <>
      <div>
        <Hero image={heroimage} altText="Luxury Hotel" />
      </div>
      <h2 className="text-center text-sm md:text-xl tracking-[.15em] mt-5 md:mt-8 px-4">
        All our room types are including complementary breakfast.
      </h2>

      <HomeInfo
        id="room"
        title="Luxury redefined"
        subtitle="Our rooms are designed to transport you into and environment made for leisure.Take your mind off the day-to-day of home life and find a private paradise for yourself."
        image={heroimage}
      />
      <HomeInfo
        id="room"
        title="Leave your worries in the sand"
        subtitle="We love life at the beach.Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind.It seems like time stands still watching the ocean. "
        image={heroimage}
      />

      <Testimonials />

      <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex justify-center items-center gap-4"></div>
    </>
  );
};

export default Home;
