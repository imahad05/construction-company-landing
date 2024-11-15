import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Links } from "./Links";
import { FaBars, FaMoon, FaSun, FaTimes, FaUser } from "react-icons/fa";
import { useApp } from "../../context/AppContext";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeMode, setThemeMode, setIsAuthenticated, isAuthenticated } =
    useApp();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
  };
  return (
    <nav className="fixed top-0 right-0 left-0 flex justify-between items-center px-6 md:px-[7vw] h-16 bg-gray-100 dark:bg-gray-800 z-50 shadow-xl overflow-x-hidden">
      <h1 className="text-sm md:text-lg xl:text-xl font-semibold text-gray-800 dark:text-gray-100">
        Construction Company Landing
      </h1>

      <div className="flex items-center space-x-6">
        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center space-x-4">
          {Links.map((link) => (
            <NavLink
              to={link.route}
              key={link.id}
              className="text-lg flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              aria-label={link.link}
            >
              {link.link}
              <hr className="bg-primary h-[3px] rounded-full w-0 transition-all duration-300 hover:w-full" />
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer hover:scale-105 transition-transform"
          /> */}
          <Link to={"/login"}>
            <FaUser className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 cursor-pointer" />
          </Link>
          {themeMode === "light" ? (
            <FaMoon
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 cursor-pointer"
              onClick={() => setThemeMode("dark")}
            />
          ) : (
            <FaSun
              className="text-xl md:text-2xl text-gray-100 dark:text-gray-100 cursor-pointer"
              onClick={() => setThemeMode("light")}
            />
          )}
          {isMenuOpen ? (
            <button
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
          ) : (
            <FaBars
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 cursor-pointer xl:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
          {isAuthenticated && (
            <button onClick={handleLogOut}>
              <BiLogOut className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 cursor-pointer" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
};

const MobileMenu = ({ setIsMenuOpen }) => (
  <div className="fixed top-16 shadow-md inset-0 z-50 bg-gray-200 dark:bg-gray-800 p-10 w-full md:w-1/2 h-screen transform duration-300">
    <ul className="flex flex-col items-center space-y-6 mt-10">
      {Links.map((link) => (
        <NavLink
          to={link.route}
          key={link.id}
          onClick={() => setIsMenuOpen(false)}
          className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all"
          aria-label={link.link}
        >
          {link.link}
        </NavLink>
      ))}
    </ul>
  </div>
);

export default Header;
