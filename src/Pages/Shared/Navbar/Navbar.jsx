import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../../assets/agency-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const handleNavToggle = () => setIsOpenMenu(!isOpenMenu);

  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Services", url: "/services" },
    { id: 3, text: "Portfolio", url: "/portfolio" },
    { id: 4, text: "Contact", url: "/contact" },
    { id: 5, text: "About", url: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavbarContent = (paddingY) => (
    <div className={`container-class ${paddingY}`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className="w-48 rounded" alt="Agency Logo" />
        </Link>

        <ul className="hidden lg:flex space-x-3 border border-primary border-opacity-20 p-4 rounded-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <ActiveLink to={item.url}>{item.text}</ActiveLink>
            </li>
          ))}
        </ul>

        <div onClick={handleNavToggle} className="block lg:hidden">
          {isOpenMenu ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact">
            <button
              className={`text-[18px] rounded-md border border-primary bg-primary text-black hover:bg-transparent hover:text-primary duration-700 px-[16px] py-[8px] flex gap-4 items-center`}
            >
              <span className="lg:hidden">Book</span>
              <span className="hidden lg:block">Book a Call</span>
              <IoMdArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ✅ Regular Navbar in document flow */}
      <div className="w-full bg-dark text-white z-10">
        {NavbarContent("py-6")}
      </div>

      {/* ✅ Fixed Navbar appears after scroll with animation */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="fixed top-0 w-full bg-darkShed text-white shadow-lg z-50 border-b border-borderColor"
          >
            {NavbarContent("py-3")}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <div
        id="navbar"
        className={`fixed lg:hidden top-0 left-0 w-[70%] h-screen bg-dark text-white z-[999] p-5 transition-transform duration-700 ease-in-out ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="my-5 flex justify-center">
          <img src={Logo} className="w-40 rounded" alt="Mobile Logo" />
        </div>

        <nav className="mx-10 mt-16">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.id} onClick={handleNavToggle}>
                <ActiveLink to={item.url}>{item.text}</ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
