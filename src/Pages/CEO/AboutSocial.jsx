import { DiEnvato } from "react-icons/di";
import {
  FaBehance,
  FaFacebookF,
  FaFlickr,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/about/about.jpg";
import Signature from "../../assets/about/signature.webp";
import MyButton from "../../components/ui/MyButton";
import EmailSection from "./EmailSection";

const socials = [
  {
    name: "Facebook",
    label: "Follow",
    icon: FaFacebookF,
    link: "https://www.facebook.com/agency.cope",
  },
  {
    name: "Linkedin",
    label: "Connect",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/yeasinmahbub",
  },
  {
    name: "Flickr",
    label: "Case Studies",
    icon: FaBehance,
    link: "https://www.behance.net/mdyeasin1088",
  },
  {
    name: "Dribbble",
    label: "Explorations",
    icon: FaFlickr,
    link: "https://flickr.com/photos/expovector",
  },
  {
    name: "Instagram",
    label: "Follow",
    icon: FaInstagram,
    link: "https://www.instagram.com/agencycope",
  },

  {
    name: "Graphic River",
    label: "Visit",
    icon: DiEnvato,
    link: "https://graphicriver.net/user/yeasin_mahbub/portfolio",
  },
];

const AboutSocial = () => {
  return (
    <div className="container-class bg-darkShed py-10 md:py-10 lg:py-20 px-4 md:px-8 lg:px-14 mb-14 md:mb-20 rounded-lg grid md:grid-cols-2 gap-4 lg:gap-8 items-center">
      {/* LEFT SIDE */}
      <div className="md:col-span-1 border border-gray-900 p-4 lg:p-8 rounded-2xl">
        <div className="flex items-center gap-4">
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-16 h-16 object-cover rounded-full border-2 border-white"
          />
          <div>
            <p className="text-[14px]">I’m</p>
            <h2 className="text-xl md:text-2xl font-medium">
              <span className="text-white">Yeasin </span>
              <span className="text-white">Mahbub</span>
            </h2>
          </div>
        </div>

        <p className="text-gray-300 my-4 leading-relaxed">
          I care about making your startup look and feel ready to pitch.
        </p>

        {/* Signature */}
        <img src={Signature} className="w-28" alt="signature" />

        {/* Buttons */}
        <div className="flex gap-[6px] md:gap-2 justify-between md:justify-start mt-6">
          <Link to={`/contact`}>
            <MyButton
              mobileText="Book"
              desktopText="Book a Call"
              isOutline={false}
              icon={<IoMdArrowForward className="w-4 h-4 md:w-5 md:h-5" />}
            />
          </Link>
          <Link
            to={`https://drive.google.com/file/d/1QMaFPGv1JXQg4O8ZRZUN0BPoE6tdts4s/view?usp=sharing`}
            target="_blank"
          >
            <MyButton
              mobileText="Resume"
              desktopText="My Resume"
              isOutline={true}
              icon={<LuEye className="w-4 h-4 md:w-5 md:h-5" />}
            />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-1 flex flex-col gap-4">
        {/* SOCIAL GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-2 lg:gap-6">
          {socials.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl hover:bg-[#1d1d1d] border border-gray-900 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-white">
                  <Icon className="text-[20px] group-hover:text-[#caff00] transition-colors duration-300 mb-1" />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400 group-hover:text-[#caff00]">
                    {item.label}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* EMAIL SECTION */}
        <div className="border border-[#1a1a1a] rounded-xl p-4 text-center">
          <p className="text-sm text-gray-300">Or, feel free to send a mail</p>

          <EmailSection />
        </div>
      </div>
    </div>
  );
};

export default AboutSocial;
