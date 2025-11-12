import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../../assets/agency-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const Navbar2 = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleNavToggle = () => setIsOpenMenu(!isOpenMenu);

  const closeMenu = () => setIsOpenMenu(false);

  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Services", url: "/services" },
    { id: 3, text: "Portfolio", url: "/portfolio" },
    { id: 4, text: "Contact", url: "/contact" },
    { id: 5, text: "About", url: "/about" },
  ];

  return (
    <>
      <div className="fixed inset-x-0 top-3 lg:top-4 z-50">
        <div
          //   initial={{ y: -100, opacity: 0 }}
          //   animate={{ y: 0, opacity: 1 }}
          //   exit={{ y: -100, opacity: 0 }}
          //   transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mx-auto w-[90%] max-w-[1280px] bg-darkShed/70 backdrop-blur-sm text-white shadow-lg border-b border-borderColor rounded-full"
        >
          <div className={`py-2 md:py-3 px-4`}>
            <div className="flex items-center justify-between">
              <Link to="/">
                <img
                  src={Logo}
                  className="w-36 md:w-40 xl:w-44 2xl:w-48 rounded"
                  alt="Agency Logo"
                />
              </Link>

              <ul className="hidden lg:flex space-x-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <ActiveLink to={item.url}>{item.text}</ActiveLink>
                  </li>
                ))}
              </ul>

              <div onClick={handleNavToggle} className="block lg:hidden">
                {isOpenMenu ? (
                  <IoMdClose className="w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <GiHamburgerMenu className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </div>

              <div className="hidden lg:block">
                <Link to="/contact">
                  <button
                    className={`text-[18px] rounded-full border border-primary bg-primary text-black hover:bg-transparent hover:text-primary duration-700 px-[16px] py-[8px] flex gap-3 items-center`}
                  >
                    <span className="lg:hidden">Book</span>
                    <span className="hidden lg:block">Book a Call</span>
                    <IoMdArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔲 Backdrop (click to close) */}
      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-[998] lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="navbar"
        className={`fixed lg:hidden top-0 left-0 w-[70%] md:w-[60%] h-screen bg-dark text-white z-[999] p-5 transition-transform duration-700 ease-in-out ${
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

export default Navbar2;
