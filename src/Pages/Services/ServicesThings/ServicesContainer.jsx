import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "../../../assets/services/click-container-img.png";

const ServicesContainer = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-4 md:mx-0 py-10">
          {/* head section */}
          <div className="flex flex-col justify-center items-center">
            <img src={Image} className="w-40" alt="" />
            <h2 className="text-[28px] font-medium text-center md:px-32 mt-4">
              You deserve the confidence that comes with having a powerful,
              strategic, and eye-catching Design + Systems
            </h2>
            <h4 className="font-medium">Here’s how we can work together!</h4>
          </div>

          {/* clickable services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-16 text-center mt-12">
            {/* Item one */}

            <div>
              <a href="#item-one">
                <span className="border-b-2 border-[#ffe600] hover:border-transparent duration-700 text-[24px] font-semibold">
                  BRAND IDENTITY DESIGN{" "}
                  <IoIosArrowRoundForward className="inline-block text-[36px] font-bold" />
                </span>
              </a>
            </div>
            <div>
              <a href="#item-two">
                <span className="border-b-2 border-[#ffe600] hover:border-transparent duration-700 text-[24px] font-semibold">
                  Website-In-A-Day{" "}
                  <IoIosArrowRoundForward className="inline-block text-[36px] font-bold" />
                </span>
              </a>
            </div>
            <div>
              <a href="#item-three">
                <span className="border-b-2 border-[#ffe600] hover:border-transparent duration-700 text-[24px] font-semibold">
                  GRAPHIC DESIGN{" "}
                  <IoIosArrowRoundForward className="inline-block text-[36px] font-bold" />
                </span>
              </a>
            </div>
            <div>
              <a href="#item-four">
                {" "}
                <span className="border-b-2 border-[#ffe600] hover:border-transparent duration-700 text-[24px] font-semibold">
                  DIGITAL MARKETING{" "}
                  <IoIosArrowRoundForward className="inline-block text-[36px] font-bold" />
                </span>
              </a>
            </div>
            <div>
              <span className="border-b-2 border-[#ffe600] hover:border-transparent duration-700 text-[24px] font-semibold">
                BRAND IDENTITY DESIGN{" "}
                <IoIosArrowRoundForward className="inline-block text-[36px] font-bold" />
              </span>
            </div>
            <div>
              <span className="border-b-2 border-[#ffe600] hover:border-transparent duration-700 text-[24px] font-semibold">
                BRAND IDENTITY DESIGN{" "}
                <IoIosArrowRoundForward className="inline-block text-[36px] font-bold" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
