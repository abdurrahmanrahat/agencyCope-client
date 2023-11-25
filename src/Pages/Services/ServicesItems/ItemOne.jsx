import { IoIosArrowRoundForward } from "react-icons/io";
import GIF from "../../../assets/services/services-one.gif";

const ItemOne = () => {
  return (
    <div className="mx-4 lg:mx-0 mt-24" id="item-one">
      <div className="text-center">
        <h2 className="text-[28px] font-medium">01. Brand Identity Design</h2>
        <p className="md:text-[18px] md:px-28">
          Position yourself as an established expert in your space with a
          crystal clear brand identity. Say goodbye to the endless DIY struggle
          and hours spent in Canva, and get a custom brand style that will make
          your ideal clients fall in love. When we are done, you will walk away
          with a brand that looks and feels like you and that you will be proud
          to share online.
        </p>
      </div>

      {/* img and content */}
      <div className="mt-12 md:flex gap-12">
        <div className="md:w-1/2 flex items-center justify-end mb-8 md:mb-0">
          <img src={GIF} alt="" className="w-[500px]" />
        </div>
        <div className="md:w-1/2 text-[18px] flex flex-col justify-evenly gap-y-3">
          <h4 className="text-[20px] font-medium">WHAT’S INCLUDED:</h4>
          <div>
            <p>+ Brand Consultation</p>
            <p>+ Comprehensive Brand Questionnaire</p>
            <p>+ Collaborative Pinterest board</p>
            <p>+ Moodboard & Design concept</p>
            <p>+ Logo Design & Variations (Alternate & Submark)</p>
            <p>+ Supplemental Brand Fonts</p>
            <p>+ Brand Accents (Patterns / Texture)</p>
            <p>+ Brand Icons (upto 6)</p>
            <p>+ Social Media Cover</p>
            <p>+ 3 A La carte items (of your choice)</p>
            <p>+ Digital Mockups</p>
          </div>
          <div>
            <p>
              <span className="font-medium">Timeframe:</span> 3 weeks
            </p>
            <p>
              <span className="font-medium">Price:</span> $1799 usd
            </p>
          </div>
          <div>
            <button className="bg-[#EE9322] text-white text-[16px] px-[16px] py-[12px] font-medium">
              LET&apos;S GET STARTED{" "}
              <IoIosArrowRoundForward className="inline-block text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOne;
