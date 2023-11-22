import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import BannerImage from "../../../assets/home/banner-photo.jpg";

const BannerSection = () => {
  return (
    <div className="md:flex md:gap-4">
      <div className="md:w-1/2 flex flex-col gap-y-4 justify-center my-12 md:my-0">
        <div>
          <h3 className="text-[22px] md:text-[36px] font-bold">
            Hi! We Agency Cope Company
          </h3>
          <span className="font-semibold text-[#EE9322] text-[20px] md:text-[32px] 2xl:text-[36px]">
            <TypeAnimation
              sequence={[
                "Graphic Design",
                1500,
                "Web Development",
                1500,
                "Digital Marketing",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              cursor={false}
            />
          </span>
        </div>
        <p className="my-4 text-justify text-[14px] md:text-[16px] font-medium">
          Agency Cope is a performance and ROI-focused Digital Marketing agency
          providing Graphic Design, SEO, Web Design & Development, and Brand
          Identity in Bangladesh with 10+ years of hands-on experience.
        </p>

        {/* social icons */}
        <div className="md:flex justify-between">
          <div className="flex gap-2 mb-4 md:mb-0 justify-center ">
            <button className="text-[24px] p-[4px] md:p-[12px] border border-black rounded-md hover:bg-black hover:text-white duration-700">
              <FaFacebook />
            </button>
            <button className="text-[24px] p-[4px] md:p-[12px] border border-black rounded-md hover:bg-black hover:text-white duration-700">
              <FaLinkedin />
            </button>
            <button className="text-[24px] p-[4px] md:p-[12px] border border-black rounded-md hover:bg-black hover:text-white duration-700">
              <FaInstagram />
            </button>
            <button className="text-[24px] p-[4px] md:p-[12px] border border-black rounded-md hover:bg-black hover:text-white duration-700">
              <FaYoutube />
            </button>
          </div>

          {/* hire button */}
          <div className="flex justify-center">
            <button className="text-[16px] font-semibold p-[8px] md:p-[12px] border border-black rounded-md hover:bg-black hover:text-white duration-1000">
              Hire My Agency
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
