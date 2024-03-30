// import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "../../../assets/services/click-container-img.png";

const ServicesContainer = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-4 md:mx-0 py-16">
          {/* head section */}
          <div className="flex flex-col justify-center items-center">
            <img src={Image} className="w-40" alt="" />
            <h4 className="text-[24px] lg:text-[32px] font-medium text-center mt-4">
              Here’s how we can work together!
            </h4>
            <p className="text-[16px] text-center max-w-[50ch] mt-2">
              You deserve the confidence that comes with having a powerful,
              strategic, and eye-catching Design + Systems
            </p>
          </div>

          {/* clickable services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-16 text-center mt-12">
            {/* Item one */}
            <div>
              <a href="#item-one">
                <span className="border-b-2 lg:text-[18px] font-medium border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[6px]">
                  BRAND IDENTITY
                </span>
              </a>
            </div>

            {/* Item two */}
            <div>
              <a href="#item-two">
                <span className="border-b-2 lg:text-[18px] font-medium border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[6px] uppercase">
                  Website Design
                </span>
              </a>
            </div>

            {/* item three */}
            <div>
              <a href="#item-three">
                <span className="border-b-2 lg:text-[18px] font-medium border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[6px]">
                  GRAPHIC DESIGN
                </span>
              </a>
            </div>

            {/* item four */}
            <div>
              <a href="#item-four">
                <span className="border-b-2 lg:text-[18px] font-medium border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[6px]">
                  DIGITAL MARKETING
                </span>
              </a>
            </div>

            {/* item five */}
            <div>
              <a href="#item-five">
                <span className="border-b-2 lg:text-[18px] font-medium border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[6px] uppercase">
                  Social Media Content
                </span>
              </a>
            </div>

            {/* item six */}
            <div>
              <span className="border-b-2 lg:text-[18px] font-medium border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[6px]">
                BRAND IDENTITY DESIGN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
