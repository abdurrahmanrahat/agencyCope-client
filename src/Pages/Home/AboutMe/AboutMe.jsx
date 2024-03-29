import { IoIosArrowRoundForward } from "react-icons/io";
import AboutPhoto from "../../../assets/home/about-photo.jpg";

const AboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden">
      <div
        className="mb-24 mx-4 md:mx-0"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        {/* title */}
        <div className="text-center">
          <h4 className="uppercase text-lg font-semibold">
            <span className="border-b-4 border-[#ffe600]">
              MEET YOUR DESIGNER
            </span>
          </h4>
          <h2 className="md:text-[32px] font-medium mx-auto mt-2">
            Hey there! I’m Yeasin Mahbub
          </h2>
          <h2 className="text-[#ffe600] md:text-[28px] font-semibold">
            BRAND IDENTITY, GRAPHIC DESIGNER, AND WEB DESIGNER
          </h2>
        </div>

        {/* img and content */}
        <div className="md:flex gap-12 mt-12 md:mx-20">
          {/* img */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <img src={AboutPhoto} alt="" />
          </div>

          {/* content */}
          <div className="md:w-1/2 text-[18px] flex flex-col justify-evenly gap-y-2">
            <p>
              A tech enthusiast, fantasy-lover, and design aficionado ready to
              shine my light on your world, so you can shine your light on
              others!
            </p>
            <p>
              From craft blogger to building a 6-figure business, I know how the
              magic of a well-designed, tailored-to-convert brand and website
              can impact your business.
            </p>
            <p>
              I blend my Computer Engineering geekery with my artistic
              sensibilities to give you a website experience that goes beyond
              pretty pictures and cool fonts.
            </p>
            <p>
              You want a website that does the heavy lifting for you with
              strategically crafted sales funnels, UX that melts resistance and
              an online presence that has your competition asking “Who’s her
              designer?”
            </p>
            <p>I’m that designer.</p>
            <h4 className="font-semibold">
              Let’s work together on cutting through the noise and making your
              brand stand out!
            </h4>
            <div>
              <button className="bg-[#ffe600] text-[#16191e] rounded-md text-[16px] px-[16px] py-[12px] font-semibold">
                MORE ABOUT ME{" "}
                <IoIosArrowRoundForward className="inline-block bg-transparent text-[28px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
