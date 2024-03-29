import img1 from "../../../assets/portfolioImg/graphic-flyer-min.jpg";
import img2 from "../../../assets/portfolioImg/graphic-logo-min.jpg";
import img3 from "../../../assets/portfolioImg/marketing1-min.jpg";
import img4 from "../../../assets/portfolioImg/marketing2-min.jpg";
import img5 from "../../../assets/portfolioImg/web-img1-min.jpg";
import img6 from "../../../assets/portfolioImg/web-img2-min.jpg";

const WorkSection = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto py-16">
        <div className="text-center mx-4">
          <div className="flex flex-col justify-center items-center ">
            <h4 className="uppercase text-[16px] font-semibold mb-2">
              <span className="border-b-2 border-[#ffe600]">RECENT WORKS</span>
            </h4>
            <h2 className="text-[14px] lg:text-[16px] max-w-[60ch] text-center mt-2">
              Collections of recent eye-catching projects for different client
              delivery with hundred percent satisfaction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-6 p-4 md:p-10">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
          <span>
            <button className=" bg-[#ffe600] py-[12px] px-4 text-[16px] text-[#16191e] rounded-md font-[600] uppercase">
              See the Portfolio
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
