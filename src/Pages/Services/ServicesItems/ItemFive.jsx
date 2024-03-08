import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "../../../assets/services/services-three.png";

const ItemFive = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div
        className="max-w-screen-xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        id="item-five"
      >
        <div className="px-4 lg:px-0 py-20">
          <div className="text-center">
            <h2 className="text-[28px] font-medium">
              05. Social Media Content
            </h2>
            <p className="md:text-[18px] md:px-28">
              Position yourself as an established expert in your space with a
              crystal clear brand identity. Say goodbye to the endless DIY
              struggle and hours spent in Canva, and get a custom brand style
              that will make your ideal clients fall in love. When we are done,
              you will walk away with a brand that looks and feels like you and
              that you will be proud to share online.
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
                <p>+ 6 platforms</p>
                <p>+ Page/channel evaluation</p>
                <p>+ 30 social posts created</p>
                <p>+ Content creation</p>
                <p>+ Engagement with followers</p>
                <p>+ 30 days</p>
                <p>+ Schedule posts</p>
                <p>+ Custom graphics</p>
                <p>+ Targeted Hashtags</p>
                <p>+ Creative caption</p>
                <p>+ Action plan</p>
              </div>
              <div>
                <p>
                  <span className="font-medium">Timeframe:</span> 4 weeks
                </p>
                <p>
                  <span className="font-medium">Price:</span> $1299 usd
                </p>
              </div>
              <div>
                <button className="bg-[#ffe600] text-[#16191e] rounded-md text-[16px] px-[16px] py-[12px] font-medium">
                  LET&apos;S GET STARTED{" "}
                  <IoIosArrowRoundForward className="inline-block text-[28px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFive;
