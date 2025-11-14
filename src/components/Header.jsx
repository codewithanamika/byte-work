import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-white py-3 sm:py-4">
      <div className="container mx-auto flex justify-between items-center px-3 sm:px-6">
        <div className="flex flex-col bg-amber-400 text-black p-2 sm:p-3 md:p-4 mt-[-15px] sm:-mt-5 rounded-lg">
          <h1 className="text-lg sm:text-xl md:text-2xl playfair font-bold tracking-widest">
            Luxury
          </h1>
          <h4 className="text-xs sm:text-sm px-2 sm:px-4 tracking-widest uppercase playfair">
            Hotels
          </h4>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-black transition text-sm lg:text-base"
                : "hover:border-b-2 hover:border-black transition text-sm lg:text-base"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/facilities"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-black transition text-sm lg:text-base"
                : "hover:border-b-2 hover:border-black transition text-sm lg:text-base"
            }
          >
            Facilities
          </NavLink>

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-black transition text-sm lg:text-base"
                : "hover:border-b-2 hover:border-black transition text-sm lg:text-base"
            }
          >
            Rooms
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-black transition text-sm lg:text-base"
                : "hover:border-b-2 hover:border-black transition text-sm lg:text-base"
            }
          >
            Contact-us
          </NavLink>
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-black/90 md:hidden flex flex-col space-y-4 p-6 mt-2">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white transition text-sm"
                  : "hover:border-b-2 hover:border-white transition text-sm"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/facilities"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white transition text-sm"
                  : "hover:border-b-2 hover:border-white transition text-sm"
              }
            >
              Facilities
            </NavLink>

            <NavLink
              to="/rooms"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white transition text-sm"
                  : "hover:border-b-2 hover:border-white transition text-sm"
              }
            >
              Rooms
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white transition text-sm"
                  : "hover:border-b-2 hover:border-white transition text-sm"
              }
            >
              Contact-us
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
