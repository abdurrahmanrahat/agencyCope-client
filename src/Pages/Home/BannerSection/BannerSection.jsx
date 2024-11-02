import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
// import BannerImage from "../../../assets/home/banner-photo.png";
// import BannerImage from "../../../assets/home/person1.png";
import BannerImage from "../../../assets/home/person.png";
import Button from "../../../components/ui/Button";

const BannerSection = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container-class md:flex flex-row-reverse md:gap-4 pt-20 pb-10 lg:pb-0">
        <div className="md:w-1/2 overflow-hidden flex justify-center items-center ">
          <img
            src={BannerImage}
            className="w-[80%]"
            alt="person image"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-y-4 justify-center  my-12 md:my-0">
          <div>
            <h3 className="text-[22px] md:text-[36px] font-bold">
              Hi! We Agency Cope Company
            </h3>
            <span className="font-semibold text-primary text-[20px] md:text-[32px] 2xl:text-[36px]">
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
          <p
            className="my-4 text-justify text-[14px] md:text-[16px] font-medium"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Agency Cope is a performance and ROI-focused Digital Marketing
            agency providing Graphic Design, SEO, Web Design & Development, and
            Brand Identity in Bangladesh with 10+ years of hands-on experience.
          </p>

          {/* social icons */}
          <div className="md:flex justify-between items-center">
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

            {/* hire button */}
            <div className="flex justify-center">
              <Link to="/contact">
                {/* <button className="text-[15px] font-semibold py-[8px] px-[12px] md:py-[12px] md:px-[16px] rounded-md bg-primary border-none text-dark uppercase">
                  Hire My Agency
                </button> */}
                <Button text={"Hire Us"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
