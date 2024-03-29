import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "../../../assets/services/services-two.png";

const ItemTwo = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div
        className="max-w-screen-xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
        <div className="mx-4 lg:mx-0 py-16" id="item-two">
          <div className="text-center">
            <h2 className="text-[28px] font-medium">02. Website-In-A-Day</h2>
            <p className="mx-auto lg:text-[18px] max-w-[80ch]">
              Are u looking for DESKTOP, MOBILE & TABLET friendly responsive and
              beautiful website? So you are on right place. I can create best
              RESPONSIVE website in very short interval of time for you.
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
                <p>+ Up to 5 pages</p>
                <p>+ Responsive Design</p>
                <p>+ Content upload</p>
                <p>+ Detailed code comments</p>
                <p>+ Source code</p>
                <p>+ Basic SEO</p>
                <p>+ Complete Control panel (Dashboard)</p>
                <p>+ Functional website</p>
                <p>+ Design customization</p>
                <p>+ Brand Consultation</p>
                <p>+ Unlimited Revisions</p>
              </div>
              <div>
                <p>
                  <span className="font-medium">Timeframe:</span> 9 days
                </p>
                <p>
                  <span className="font-medium">Price:</span> $560 usd
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

export default ItemTwo;
