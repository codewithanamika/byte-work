import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Facilities", path: "/facilities" },
    { name: "Rooms", path: "/rooms" },
    { name: "Contact-us", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-white py-3 sm:py-4">
      <div className="container mx-auto flex justify-between items-center px-3">
        <Link to="/">
          <div className="flex flex-col bg-amber-400 text-black mt-[-15px] rounded-lg px-3 py-2">
            <h1 className="text-lg sm:text-xl md:text-2xl playfair font-bold tracking-widest leading-tight">
              Luxury
            </h1>
            <h4 className="leading-none text-xs sm:text-sm px-2 sm:px-4 tracking-widest uppercase playfair">
              Hotels
            </h4>
          </div>
        </Link>

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

        <nav className="hidden md:flex space-x-3 lg:space-x-5">
          {navItems.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="relative text-sm lg:text-base font-medium px-2 py-1"
            >
              {({ isActive }) => (
                <>
                  <span className="inline-block">{link.name}</span>
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-black w-full transform origin-right transition-transform duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-black/90 md:hidden flex flex-col space-y-4 p-6 mt-2">
            {navItems.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => {
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
                className="relative text-sm text-white font-medium py-2"
              >
                {({ isActive }) => (
                  <>
                    <span className="inline-block">{link.name}</span>
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-white w-full transform origin-right transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
