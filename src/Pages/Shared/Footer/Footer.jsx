import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import FooterFav from "../../../assets/footer-fav.png";
import Button from "../../../components/ui/Button";

const Footer = () => {
  return (
    <div className="bg-[#16191e]">
      <div className="container-class md:flex justify-between py-16 2xl:py-20">
        {/* one */}
        <div className="flex items-center justify-center ">
          <img src={FooterFav} alt="" />
        </div>

        {/* two */}
        <div className="mt-4 md:mt-0">
          <div>
            <h4 className="uppercase md:text-lg text-white font-medium">
              <span className="border-b-[2px] border-primary">
                WORK WITH ME
              </span>
            </h4>

            <div className="text-white text-[14px] mt-6 flex flex-col gap-y-1">
              <p>BRAND IDENTITY</p>
              <p>WEBSITE-IN-A-DAY</p>
              <p>LAUNCH DESIGN + TECH</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="uppercase md:text-lg text-white font-medium">
              <span className="border-b-[2px] border-primary">
                FOR DESIGNERS
              </span>
            </h4>

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
            <h4 className="uppercase md:text-lg text-white font-medium">
              <span className="border-b-[2px] border-primary">IMPORTANT</span>
            </h4>

            <div className="text-white text-[14px] mt-6 flex flex-col gap-y-1">
              <p>BLOG</p>
              <p>CONTACT</p>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
          </div>

          <div className="mt-8">
            {/* <button className="bg-[#FFD6CA] text-black px-[16px] py-[12px] font-semibold border-4 border-transparent hover:border-[#ffe600] duration-700">
              FREE CONSULT{" "}
              <IoIosArrowRoundForward className="inline-block bg-transparent text-[28px]" />
            </button> */}
            <Button text={"FREE CONSULT"} />
          </div>
        </div>

        {/* four */}
        <div className="mt-4 md:mt-0">
          <div>
            <h4 className="uppercase md:text-lg text-white font-medium">
              <span className="border-b-[2px] border-primary">GET SOCIAL</span>
            </h4>

            <div className="flex gap-4 md:gap-6 justify-center text-light mt-4">
              <button className="text-[24px] md:text-[28px] hover:text-primary transition-all duration-500">
                <FaFacebook />
              </button>
              <button className="text-[24px] md:text-[28px] hover:text-primary transition-all duration-500">
                <FaLinkedin />
              </button>
              <button className="text-[24px] md:text-[28px] hover:text-primary transition-all duration-500">
                <FaInstagram />
              </button>
              <button className="text-[24px] md:text-[28px] hover:text-primary transition-all duration-500">
                <FaYoutube />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-light py-4 text-[14px] text-center">
        <p>© DIGITAL AGENCY COPE 2023. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
