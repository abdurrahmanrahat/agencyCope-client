import Image1 from "../../assets/about/1.png";
// import Image2 from "../../assets/about/2.png";
// import Image3 from "../../assets/about/3.png";

const Section3 = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-screen-xl mx-auto py-16 md:py-24">
        <div className="md:flex justify-evenly gap-12">
          <div className="flex flex-col justify-center items-center">
            <img src={Image1} className="w-[170px] 2xl:w-[180px] mb-2" alt="" />
            <h2 className="font-extrabold text-[30px] text-[#16191e]">298+</h2>
            <p className="text-[#909090] lg:text-[18px] font-semibold">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className="flex flex-col justify-center items-center my-16 md:my-0">
            <img src={Image1} className="w-[170px] 2xl:w-[180px] mb-2" alt="" />
            <h2 className="font-extrabold text-[30px] text-[#16191e] uppercase">
              24 Hours
            </h2>
            <p className="text-[#909090] lg:text-[18px] font-semibold">
              AVERAGE DELIVERY TIME
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Image1} className="w-[170px] 2xl:w-[180px] mb-2" alt="" />
            <h2 className="font-extrabold text-[30px] text-[#16191e]">
              97.00%
            </h2>
            <p className="text-[#909090] lg:text-[18px] font-semibold">
              CUSTOMER SATISFACTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
