import About2Image from "../../assets/about/about2.png";

const Section2 = () => {
  return (
    <div className="bg-[#16191E] mx-4 md:mx-0">
      <div className="md:flex">
        <div>
          <img src={About2Image} className="" alt="" />
        </div>
        <div className="text-[#F4F4F4] p-10 flex flex-col justify-center space-y-4">
          <h2 className="text-[24px] md:text-[36px] lg:text-[44px] font-bold uppercase">
            TOP RATED DESIGNER ON <span className="text-[#49D300]">UPWORK</span>
          </h2>

          <p className="font-medium max-w-[55ch]">
            I&apos;ll Personally Guide You Through Each Stage So You Can Make
            Amazing Things For Your Brand Quickly & Easily.
          </p>

          <div>
            <p className="font-medium flex flex-col md:flex-row">
              <span className="text-[#2973F6]">about.mahbub.co</span>
              <span className="hidden md:inline px-2">|</span>
              <span className="text-[#2973F6]">gdmarket20@gmail.com</span>
              <span className="hidden md:inline px-2">|</span>
              <span className="text-[#2973F6]">+880 1929-157108</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <button className="text-[16px] font-semibold  border border-black rounded-md bg-[#ffe600] border-none text-[#16191e] hover:bg-black hover:text-white duration-1000 w-[150px] p-[8px] md:p-[12px]">
                Let&apos;s Talk
              </button>
            </div>

            <div>
              <button className="text-[16px] font-semibold border border-black rounded-md bg-[#ffe600] border-none text-[#16191e] hover:bg-black hover:text-white duration-1000 w-[150px] p-[8px] md:p-[12px]">
                Upwork Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
