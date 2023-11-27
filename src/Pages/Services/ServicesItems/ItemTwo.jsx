import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "../../../assets/services/services-two.png";

const ItemTwo = () => {
  return (
    <div
      className="mx-4 lg:mx-0 py-14 mt-20 bg-[#1C1C1C] text-white"
      id="item-two"
    >
      <div className="text-center">
        <h2 className="text-[28px] font-medium">02. Website-In-A-Day</h2>
        <p className="md:text-[18px] md:px-28">
          Get your website up and running fast, without compromising any of the
          quality. Websites need to do more than just look pretty. With Website
          In A Day, you will get a website that is equal parts strategy, design,
          and technical genius for a fully functional experience made to
          captivate and convert. Looking for a completely customized and coded
          website? Let’s chat!
        </p>
      </div>

      {/* img and content */}
      <div className="mt-12 md:flex gap-12">
        <div className="md:w-1/2 flex items-center justify-end mb-8 md:mb-0">
          <img src={Image} alt="" className="w-[500px]" />
        </div>
        <div className="md:w-1/2 text-[18px] flex flex-col justify-evenly gap-y-3">
          <h4 className="text-[20px] font-medium">WHAT’S INCLUDED:</h4>
          <div>
            <p>+ Brand Consultation</p>
            <p>+ Client Portal</p>
            <p>+ Collaborative Pinterest board</p>
            <p>+ Up to 5 pages</p>
            <p>+ Responsive Website</p>
            <p>+ Basic SEO</p>
            <p>+ Design customization</p>
            <p>+ Content upload</p>
            <p>+ Detailed code comments</p>
            <p>+ Source code</p>
            <p>+ Unlimited Revisions</p>
          </div>
          <div>
            <p>
              <span className="font-medium">Timeframe:</span> 3 days (24 hours
              for design)
            </p>
            <p>
              <span className="font-medium">Price:</span> $960 usd
            </p>
          </div>
          <div>
            <button className="bg-[#ffe600] text-white text-[16px] px-[16px] py-[12px] font-medium">
              LET&apos;S GET STARTED{" "}
              <IoIosArrowRoundForward className="inline-block text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTwo;
