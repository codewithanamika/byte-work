import React from "react";
import Button from "./Button";

const Hero = ({ image, altText }) => {
  return (
    <section className="relative">
      <img
        src={image}
        alt={altText}
        className="w-full h-[80vh] object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col  justify-center text-left text-white px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider mt-30">
          Welcome to
        </h1>
        <div className="playfair uppercase tracking-widest font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-10xl">
          luxury
        </div>
        <div className="uppercase tracking-widest text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold playfair">
          hotels
        </div>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl w-48 sm:w-56 md:w-64 lg:w-96">
          Book your stay and enjoy luxury redefined at the most affordable
          rates.
        </p>
        <div className="flex justify-center items-center">
          <Button className="flex uppercase items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
              <path
                fill-rule="evenodd"
                d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                clip-rule="evenodd"
              />
              <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
            </svg>
            Book now
          </Button>
        </div>
        <h4 className="text-center mt-10 text-sm sm:text-base font-semibold">
          Scroll
        </h4>
        <div className="flex justify-center items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
