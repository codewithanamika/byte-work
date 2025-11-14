import React, { useState } from "react";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("message sent");
  };
  return (
    <div>
      <div className="bg-blue-950 h-40 sm:h-48 md:h-60 w-full relative">
        <h1 className="mt-20 sm:mt-24 md:mt-30 absolute inset-0 text-2xl sm:text-3xl md:text-4xl flex items-center justify-center uppercase text-white font-extrabold px-4">
          contact us
        </h1>
      </div>
      <div className="mt-12 sm:mt-20 md:mt-30 px-4 sm:px-8 md:px-30 lg:px-60">
        <p className="playfair font-bold text-xl sm:text-2xl md:text-3xl">
          we're here for you
        </p>
        <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, complaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 mt-12 sm:mt-20 md:mt-30 px-4 sm:px-8 md:px-10 lg:px-30 mb-10">
        <div className="md:mt-20 w-full sm:w-50">
          <h3 className="text-sm sm:text-base md:text-lg">
            497 Evergreen Rd. Roseville, CA 95673
          </h3>
          <h2 className="flex gap-2 mt-2 font-bold text-sm sm:text-base">
            <a
              href="https://www.google.com/maps/place/Times+Square,+New+York,+NY"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              view map
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </h2>
          <p className="mt-6 text-xs sm:text-sm md:text-base">
            Phone: +44 345 678 903
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            Email:
            <a
              href="mailto:luxury_hotels@gmail.com"
              className="hover:text-blue-600 ml-1"
            >
              luxury_hotels@gmail.com
            </a>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md space-y-3 sm:space-y-4"
        >
          <div>
            <label
              className="block mb-1 font-medium text-xs sm:text-sm"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block mb-1 font-medium text-xs sm:text-sm"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address"
              className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium text-xs sm:text-sm"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message..."
              className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>

          <div className="text-right">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
