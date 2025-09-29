import { DiEnvato } from "react-icons/di";
import { FaBehance, FaFlickr, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../../assets/agency-logo.png";
import { quickLinks, supportLinks } from "./footer.helpers";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white">
      {/* Top section */}
      <div className="container-class grid md:grid-cols-4 gap-10 py-16 2xl:py-20">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Agency Logo" className="w-40 mb-4" />
          <p className="text-[15px] text-gray-200 text-center md:text-left">
            We help brands unlock their full potential through strategic design,
            storytelling, and digital solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="uppercase text-lg font-medium border-b-2 border-primary inline-block mb-4 [word-spacing:4px]">
            Services
          </h4>
          <ul className="space-y-2 text-base text-gray-300">
            <li>Brand Strategy</li>
            <li>Logo & Visual Identity</li>
            <li>Web Design & Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="uppercase text-lg font-medium border-b-2 border-primary inline-block mb-4 [word-spacing:4px]">
            Quick Links
          </h4>

          <ul className="space-y-2 text-base text-gray-300">
            {quickLinks.map(({ label, to }, i) => (
              <li key={i} className="hover:text-primary transition-colors">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="uppercase text-lg font-medium border-b-2 border-primary inline-block mb-4 [word-spacing:4px]">
            Support
          </h4>

          <ul className="space-y-2 text-base text-gray-300">
            {supportLinks.map(({ label, to }, i) => (
              <li key={i} className="hover:text-primary transition-colors">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-borderColor pt-5 pb-4">
        <div className="container-class flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6">
            <a
              href="https://www.facebook.com/agency.cope"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] hover:text-primary transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasinmahbub"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] hover:text-primary transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.behance.net/mdyeasin1088"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] hover:text-primary transition-all duration-300"
            >
              <FaBehance />
            </a>
            <a
              href="https://flickr.com/photos/expovector"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] hover:text-primary transition-all duration-300"
            >
              <FaFlickr />
            </a>
            <a
              href="https://www.instagram.com/agencycope"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] hover:text-primary transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://graphicriver.net/user/yeasin_mahbub/portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] hover:text-primary transition-all duration-300"
            >
              <DiEnvato />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[14px] text-gray-300 text-center md:text-right">
            © DIGITAL AGENCY COPE {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
