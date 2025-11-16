import React from "react";
import Button from "./Button";

const InfoSection = ({ id, title, subtitle, image }) => {
  return (
    <section
      id={id}
      className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-15 py-6 sm:py-8 md:py-10 lg:py-12"
    >
      <div className="md:w-1/3 relative pl-4 sm:pl-5 md:pl-6 space-y-3 sm:space-y-4">
        <span className="absolute left-0 top-0 h-full w-0.5 bg-black rounded-full"></span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold playfair">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-black leading-relaxed">
          {subtitle}
        </p>
        <Button className="uppercase font-bold">Explore</Button>
      </div>

      <div className="flex justify-center items-center w-full sm:w-[80%] md:w-[70%] h-[200px] sm:h-[250px] md:h-[300px]">
        <img
          src={image}
          alt={title}
          className="h-[250px]  md:h-[350px] w-full  shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default InfoSection;
