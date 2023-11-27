import { IoIosArrowRoundForward } from "react-icons/io";
import TemplateTop from "../../../assets/home/template-top.png";
import TemplateImg from "../../../assets/home/template.jpg";

const Template = () => {
  return (
    <div className="md:flex gap-12 md:mx-20  my-32">
      {/* content div */}
      <div className="md:w-1/2 relative flex justify-center mb-12 md:mb-0">
        {/* content */}
        <div className="text-[18px] flex flex-col justify-center gap-y-2 ml-12 md:ml-20">
          <h2 className="text-[32px] font-semibold">Design Templates</h2>
          <h4 className="font-bold  text-[#ffe600]">
            FOR BEGINNER BRANDS / BUSINESSES
          </h4>
          <p>
            For Designers: Speed-up and accelerate your design process with
            pre-made templates for Client onboarding, sending proposals, etc.
          </p>
          <p>
            For Brands: Web Design templates designed on WordPress (DIVI) and
            Showit for beginner brands and entreprenuers who are looking to
            revamp on a budget.
          </p>
          <div>
            <button className="bg-[#ffe600] text-white text-[16px] px-[16px] py-[12px] font-semibold">
              I&apos;M READY
              <IoIosArrowRoundForward className="inline-block bg-transparent text-[28px]" />
            </button>
          </div>
        </div>
        {/* img for positioning */}
        <div className="absolute -top-24 left-0 md:-top-20 md:left-0">
          <img src={TemplateTop} alt="" className="w-[110px]" />
        </div>
      </div>

      {/* img div */}
      <div className="md:w-1/2 mb-16 md:mb-0">
        <img src={TemplateImg} alt="" />
      </div>
    </div>
  );
};

export default Template;
