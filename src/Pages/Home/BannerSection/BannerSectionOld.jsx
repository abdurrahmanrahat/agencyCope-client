import { FaWhatsapp } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import BannerImage from "../../../assets/home/mahbub.png";
import MyButton from "../../../components/ui/MyButton";

const BannerSectionOld = () => {
  const whatsAppNumber = "8801929157108";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodedMessage = "Hi there, is there anyone to assist me?";
  const whatsAppLink = `${baseUrl}?phone=${whatsAppNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="relative bg-darkShed rounded-lg mx-[2%] lg:mx-[3%] 2xl:mx-[5%]">
      <div className="container-class lg:flex flex-row-reverse items-center justify-center lg:gap-4 overflow-hidden md:min-h-screen lg:px-10 py-20 md:py-0">
        {/* Corner Lines */}
        <div className="absolute w-32 h-[1px] bg-gray-800 rotate-45 top-0 left-0 origin-top-left translate-x-[10px] translate-y-[10px]" />
        <div className="absolute w-32 h-[1px] bg-gray-800 -rotate-45 top-0 right-0 origin-top-right -translate-x-[10px] translate-y-[10px]" />
        <div className="absolute w-32 h-[1px] bg-gray-800 -rotate-45 bottom-0 left-0 origin-bottom-left translate-x-[10px] -translate-y-[10px]" />
        <div className="absolute w-32 h-[1px] bg-gray-800 rotate-45 bottom-0 right-0 origin-bottom-right -translate-x-[10px] -translate-y-[10px]" />

        {/* Image Section */}
        <div className="lg:w-1/2 overflow-hidden flex justify-center items-center ">
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
            <h3 className="md:text-lg text-center md:text-start">
              Welcome to Agency Cope — Your Trusted Digital Partner
            </h3>
            <div className="md:flex gap-2 lg:gap-4 items-center text-center md:text-start">
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
            className="text-center md:text-start md:text-[17px]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Agency Cope is a performance-driven digital marketing agency
            specializing in Graphic Design, SEO, Web Development, and Brand
            Identity. With over 7 years of hands-on experience, we help brands
            grow smarter and faster, based in Bangladesh serving globally.
          </p>

          {/* social icons + hire button */}
          <div className="flex gap-[6px] md:gap-2 justify-between md:justify-start">
            <Link to={whatsAppLink} target="_blank" rel="noreferrer noopener">
              <MyButton
                mobileText="WhatsApp"
                desktopText="Chat Real-Time"
                isOutline={false}
                icon={<FaWhatsapp className="w-5 h-5 md:w-7 md:h-7" />}
              />
            </Link>
            <Link to={`/contact`}>
              <MyButton
                mobileText="Meeting"
                desktopText="Schedule Meeting"
                isOutline={true}
                icon={<SiGooglemeet className="w-5 h-5 md:w-7 md:h-7" />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSectionOld;

// 👋
