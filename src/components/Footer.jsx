import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 text-white py-8 sm:py-10 mt-8 sm:mt-12 relative">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
          <div>
            <h2 className="uppercase text-xl sm:text-2xl font-bold tracking-widest playfair">
              Luxury
            </h2>
            <h4 className="text-xs sm:text-sm uppercase mb-3 sm:mb-4 px-3 sm:px-4 tracking-[.15em]">
              Hotels
            </h4>

            <p className="text-xs sm:text-sm">
              497 Evergreen Rd. Roseville, CA 95653
            </p>
            <p className="text-xs sm:text-sm">+44 345 678 903</p>
            <a
              href="mailto:luxury.hotels@gmail.com"
              className="hover:text-gray-200 transition cursor-pointer block mt-1 text-xs sm:text-sm"
            >
              luxury.hotels@gmail.com
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <Link
              to="/about"
              className="hover:text-gray-200 transition text-xs sm:text-sm"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-200 transition text-xs sm:text-sm"
            >
              Contact
            </Link>
            <Link
              to="/terms"
              className="hover:text-gray-200 transition text-xs sm:text-sm"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="flex flex-col space-y-2 sm:space-y-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition text-xs sm:text-sm"
            >
              <FaFacebookF size={16} className="sm:w-5 sm:h-5" />
              <span>Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition text-xs sm:text-sm"
            >
              <FaTwitter size={16} className="sm:w-5 sm:h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition text-xs sm:text-sm"
            >
              <FaInstagram size={16} className="sm:w-5 sm:h-5" />
              <span>Instagram</span>
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-sm sm:text-lg">Subscribe to our newsletter</h2>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 sm:p-3 rounded-tl rounded-bl text-amber-50 focus:outline-none border-yellow-500 border-2 w-full text-xs sm:text-sm"
              />
              <button className="bg-amber-400 text-black py-2 sm:py-3.5 px-2 sm:px-3 rounded-tr rounded-br hover:bg-yellow-400 transition w-full sm:w-auto text-xs sm:text-sm">
                OK
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
