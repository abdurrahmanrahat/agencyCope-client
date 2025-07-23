import { IoMdArrowForward } from "react-icons/io";
import Image from "../../../assets/services/services-three.png";
import MyButton from "../../../components/ui/MyButton";

const ItemThree = () => {
  return (
    <div className="">
      <div
        className="container-class"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
        <div className="mx-4 lg:mx-0 py-20" id="item-three">
          <div className="text-center">
            <h2 className="text-[28px] font-medium">03. GRAPHIC DESIGN</h2>
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
                <MyButton
                  mobileText="GET STARTED"
                  desktopText="LET'S GET STARTED"
                  isOutline={false}
                  icon={<IoMdArrowForward />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemThree;
