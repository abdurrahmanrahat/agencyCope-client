import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "../../../assets/agency-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import "./Navbar.css";

const Navbar = () => {
  // const [navToggle, setNavToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex flex-col items-center bg-[#16191e] text-[#f4f4f4] pb-6">
      <div className="p-4">
        <img src={Logo} className="w-48 h-18 rounded" alt="" />
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-col md:flex-row items-center gap-3 font-medium">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/services">Services</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/portfolio">Portfolio</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          {/* <button className="text-[#ffe600]">
            <BsFillCartFill />
          </button> */}
        </ul>
      </div>

      {/* sm */}
      <div className="md:hidden cursor-pointer flex justify-between gap-36">
        <div onClick={toggleMenu} className="flex items-center justify-center">
          <GiHamburgerMenu className="w-8 h-8 text-white ms-1 " />
        </div>
        <div className="text-[20px] items-center font-semibold">
          <p>Select Page</p>
        </div>
      </div>

      {/* menu for mobile device */}
      <div
        className={
          menuOpen
            ? "fixed top-0 left-0 w-[75%] z-10 sm:hidden h-screen bg-indigo-50 p-10 ease-in-out duration-500 text-[#16191e]"
            : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
      >
        <div>
          <div onClick={toggleMenu} className="cursor-pointer">
            <IoMdClose className="h-8 w-8 text-[#16191e]" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-3">
            <li onClick={toggleMenu}>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li onClick={toggleMenu}>
              <ActiveLink to="/services">Services</ActiveLink>
            </li>
            <li onClick={toggleMenu}>
              <ActiveLink to="/portfolio">Portfolio</ActiveLink>
            </li>
            <li onClick={toggleMenu}>
              <ActiveLink to="/contact">Contact</ActiveLink>
            </li>
            <li onClick={toggleMenu}>
              <ActiveLink to="/about">About</ActiveLink>
            </li>
            <button onClick={toggleMenu}>
              <BsFillCartFill />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
