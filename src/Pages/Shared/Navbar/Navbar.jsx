import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../../assets/agency-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import MyButton from "../../../components/ui/MyButton";

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
          <ul className="hidden lg:flex space-x-3 border border-primary border-opacity-20 p-4 rounded-md">
            {navItems.map((item) => (
              <li key={item.id} className="">
                <ActiveLink to={`${item.url}`}>{item.text}</ActiveLink>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNavToggle} className="block lg:hidden ">
            {isOpenMenu ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </div>

          {/* Mobile menu */}
          <div
            id="navbar"
            className={`fixed lg:hidden top-0 left-0 w-[70%] h-screen bg-dark text-white ease-in-out duration-700 z-[999] p-[20px] ${
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
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.id} onClick={handleNavToggle}>
                    <ActiveLink to={`${item.url}`}>{item.text}</ActiveLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Mobile Navlinks end */}

          <div className="hidden lg:block">
            <MyButton
              mobileText="Book"
              desktopText="Book a Call"
              isOutline={false}
              icon={<IoMdArrowForward />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
