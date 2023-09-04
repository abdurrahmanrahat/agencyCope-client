import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import Logo from "../../../assets/logo.jpg";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  // const [navToggle, setNavToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex flex-col items-center">
      <div className="p-4">
        <img src={Logo} className="w-48 h-20 rounded" alt="" />
      </div>

      {/* Nav Toggle
      <div className="lg:hidden flex gap-40">
        <div className="ml-2 " onClick={() => setNavToggle(!navToggle)}>
          {navToggle ? (
            <IoMdClose className="text-[32px]" />
          ) : (
            <GiHamburgerMenu className="text-[32px]" />
          )}
        </div>

        <div className="text-[20px] items-center font-semibold">
          <p>Select Page</p>
        </div>
      </div> */}

      <div className="hidden md:block">
        <ul className="flex flex-col md:flex-row items-center gap-3">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/services">Services</ActiveLink>
          </li>
          <li>
            <ActiveLink to="https://rahatsportfolio.netlify.app/">
              Portfolio
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <button>
            <BsFillCartFill />
          </button>
        </ul>
      </div>
      {/* sm */}
      <div className="sm:hidden cursor-pointer flex justify-between gap-36">
        <div onClick={toggleMenu} className="flex items-center justify-center">
          <GiHamburgerMenu className="w-9 h-9 text-black ms-1 " />
        </div>
        <div className="text-[20px] items-center font-semibold">
          <p>Select Page</p>
        </div>
      </div>

      {/* menu for mobile device */}
      <div
        className={
          menuOpen
            ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-indigo-50 p-10 ease-in-out duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
      >
        <div>
          <div onClick={toggleMenu} className="cursor-pointer">
            <IoMdClose className="h-8 w-8 text-black" />
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
              <ActiveLink to="https://rahatsportfolio.netlify.app/">
                Portfolio
              </ActiveLink>
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
