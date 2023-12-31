import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import FooterFav from "../../../assets/footer-fav.png";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#16191e] md:flex justify-between px-10 py-14">
        {/* one */}
        <div className="flex items-center justify-center ">
          <img src={FooterFav} alt="" />
        </div>

        {/* two */}
        <div className="mt-4 md:mt-0">
          <div>
            <span className="text-[#ffe600] md:text-[18px] font-semibold border-b-2 border-[#ffe600]">
              WORK WITH ME
            </span>
            <div className="text-white text-[14px] mt-6 flex flex-col gap-y-1">
              <p>BRAND IDENTITY</p>
              <p>WEBSITE-IN-A-DAY</p>
              <p>LAUNCH DESIGN + TECH</p>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-[#ffe600] md:text-[18px] font-semibold border-b-2 border-[#ffe600]">
              FOR DESIGNERS
            </span>
            <div className="text-white text-[14px] mt-6 flex flex-col gap-y-1">
              <p>1:1 COACHING</p>
              <p>WIZARDS OF WEB DESIGN</p>
              <p>DESIGNER TEMPLATES</p>
            </div>
          </div>
        </div>

        {/* three */}
        <div className="mt-4 md:mt-0">
          <div>
            <span className="text-[#ffe600] md:text-[18px] font-semibold border-b-2 border-[#ffe600]">
              IMPORTANT
            </span>
            <div className="text-white text-[14px] mt-6 flex flex-col gap-y-1">
              <p>BLOG</p>
              <p>CONTACT</p>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-[#FFD6CA] text-black px-[16px] py-[12px] font-semibold border-4 border-transparent hover:border-[#ffe600] duration-700">
              FREE CONSULT{" "}
              <IoIosArrowRoundForward className="inline-block bg-transparent text-[28px]" />
            </button>
          </div>
        </div>

        {/* four */}
        <div className="mt-4 md:mt-0">
          <div>
            <span className="text-[#ffe600] md:text-[18px] font-semibold border-b-2 border-[#ffe600]">
              GET SOCIAL
            </span>
            <div className="text-black text-[16px] flex gap-2 mt-4">
              <button className="p-[10px] bg-[#FFD6CA] rounded-full">
                <FaFacebookF></FaFacebookF>
              </button>
              <button className="p-[10px] bg-[#FFD6CA] rounded-full">
                <FaTwitter></FaTwitter>
              </button>
              <button className="p-[10px] bg-[#FFD6CA] rounded-full">
                <FaInstagram></FaInstagram>
              </button>
              <button className="p-[10px] bg-[#FFD6CA] rounded-full">
                <FaLinkedin></FaLinkedin>
              </button>
              <button className="p-[10px] bg-[#FFD6CA] rounded-full">
                <FaPinterestP />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-[#f4f4f4] py-4 text-[14px] text-center">
        <p>© DIGITAL AGENCY COPE 2023. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
