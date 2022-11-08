import { useState } from "react";
import {
  FaMoon,
  FaLightbulb,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/navbar/etherchannellogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ handleMode, darkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-20 w-full h-[53px] shadow-lg flex justify-between items-center px-4 bg-[#050f1d] dark:bg-gray-500 text-gray-300 dark:text-gray-800">
      <Link
        className="cursor-pointer"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "40px", height: "40px", borderRadius: "50px" }}
        />
      </Link>

      {/* menu */}
      <ul className="hidden md:flex space-x-10 text-sm">
        <li className="cursor-pointer">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/services">Services</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Dark/Light Mode */}
      <div
        onClick={handleMode}
        className="z-30 ml-72 sm:ml-[30rem] md:ml-0 cursor-pointer dark:text-gray-800"
      >
        {darkMode ? <FaMoon size={20} /> : <FaLightbulb size={20} />}
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-30 cursor-pointer dark:text-gray-800"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile menu */}
      <ul
        id="nav"
        className={`top-0 right-0 w-1/2 bg-[#0a192f] p-10 pl-20 text-white fixed h-full z-20 ease-in-out duration-300 flex flex-col justify-center items-center dark:bg-gray-100 dark:text-gray-800 space-y-8 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/about">
            About
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/courses">
            Courses
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/services">
            Services
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
