import { TypeAnimation } from "react-type-animation";
// import BannerImage from "../../../assets/home/banner-photo.png";
// import BannerImage from "../../../assets/home/person1.png";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { Link } from "react-router-dom";
import BannerImage from "../../../assets/home/image1.png";
import MyButton from "../../../components/ui/MyButton";

const BannerSection = () => {
  return (
    <div className="relative bg-[#151415] rounded-lg mx-[2%] lg:mx-[3%] 2xl:mx-[5%]">
      <div className="container-class lg:flex flex-row-reverse lg:gap-4 overflow-hidden min-h-screen lg:px-10">
        {/* Corner Lines */}
        <div className="absolute w-32 h-[1px] bg-gray-800 rotate-45 top-0 left-0 origin-top-left translate-x-[10px] translate-y-[10px]" />
        <div className="absolute w-32 h-[1px] bg-gray-800 -rotate-45 top-0 right-0 origin-top-right -translate-x-[10px] translate-y-[10px]" />
        <div className="absolute w-32 h-[1px] bg-gray-800 -rotate-45 bottom-0 left-0 origin-bottom-left translate-x-[10px] -translate-y-[10px]" />
        <div className="absolute w-32 h-[1px] bg-gray-800 rotate-45 bottom-0 right-0 origin-bottom-right -translate-x-[10px] -translate-y-[10px]" />

        {/* Image Section */}
        <div className="lg:w-1/2 overflow-hidden flex justify-center items-end ">
          <img
            src={BannerImage}
            className="w-[80%]"
            alt="person image"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col gap-y-4 justify-center items-center md:items-start my-12 lg:my-0">
          <div>
            <h3 className="text-lg md:text-[20px]">Hi 👋, We Agency Cope</h3>
            <div className="lg:flex gap-2 lg:gap-4 items-center">
              <h2 className="text-[32px] md:text-[40px] font-medium">
                We Provide
              </h2>
              <span className="text-primary text-[20px] md:text-[26px] italic">
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
          </div>
          <p
            className="text-center md:text-justify text-[17px] md:text-[19px]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Agency Cope is a performance and ROI-focused Digital Marketing
            agency providing Graphic Design, SEO, Web Design & Development, and
            Brand Identity in Bangladesh with 10+ years of hands-on experience.
          </p>

          {/* social icons + hire button */}
          {/* <div className="md:flex justify-between items-center">
            <div className="flex gap-4 md:gap-6 justify-center pb-5 md:pb-0">
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

            <div className="flex justify-center">
              <Link to="/contact">
                <Button text={"Hire Us"} />
              </Link>
            </div>
          </div> */}
          <div className="flex gap-2">
            <MyButton
              mobileText="WhatsApp"
              desktopText="Chat Real-Time"
              isOutline={false}
              icon={<FaWhatsapp className="w-7 h-7" />}
            />
            <Link to={`/contact`}>
              <MyButton
                mobileText="Meeting"
                desktopText="Schedule Meeting"
                isOutline={true}
                icon={<SiGooglemeet className="w-7 h-7" />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
