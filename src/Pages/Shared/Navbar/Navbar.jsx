import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../../assets/agency-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Services", url: "/services" },
    { id: 1, text: "Portfolio", url: "/portfolio" },
    { id: 1, text: "Contact", url: "/contact" },
    { id: 1, text: "About", url: "/about" },
  ];

  // Function to handle clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpenMenu &&
        !document.getElementById("navbar").contains(event.target)
      ) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div className="bg-dark text-white">
      <div className="container-class py-7">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link href="/">
            <div className="">
              <img src={Logo} className="w-40 rounded" alt="" />
            </div>
          </Link>

          {/* Nav items section */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <ActiveLink to={`${item.url}`}>
                  <span className="font-medium text-[15px] hover:text-myGray transition-all duration-500 uppercase">
                    {item.text}
                  </span>
                </ActiveLink>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNavToggle} className="block md:hidden ">
            {isOpenMenu ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>

          {/* Mobile menu */}
          <div
            id="navbar"
            className={`fixed md:hidden top-0 left-0 w-[70%] h-screen bg-dark text-white ease-in-out duration-700 z-[999] p-[20px] ${
              isOpenMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* logo and close toggle icon */}
            <div className="my-5 flex justify-center items-center">
              <div className="">
                <img src={Logo} className="w-40 rounded" alt="" />
              </div>
            </div>

            {/* mobile nav items */}
            <nav className="mx-10 mt-10">
              <ul className="space-y-[8px]">
                {navItems.map((item) => (
                  <li key={item.id} onClick={handleNavToggle}>
                    <ActiveLink to={`${item.url}`}>
                      <span className="font-medium text-[15px] hover:text-myGray transition-all duration-500 uppercase">
                        {item.text}
                      </span>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Mobile Navlinks end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
