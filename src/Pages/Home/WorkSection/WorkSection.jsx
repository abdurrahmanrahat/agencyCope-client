import img1 from "../../../assets/portfolioImg/graphic-flyer-min.jpg";
import img2 from "../../../assets/portfolioImg/graphic-logo-min.jpg";
import img3 from "../../../assets/portfolioImg/marketing1-min.jpg";
import img4 from "../../../assets/portfolioImg/marketing2-min.jpg";
import img5 from "../../../assets/portfolioImg/web-img1-min.jpg";
import img6 from "../../../assets/portfolioImg/web-img2-min.jpg";

const WorkSection = () => {
  return (
    <div className="text-center mb-24">
      <h4 className="uppercase text-lg font-semibold">
        <span className="border-b-4 border-[#EE9322]">RECENT WORKS</span>
      </h4>
      <h2 className="text-2xl mt-2">
        Collections of recent eye-catching projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-6 p-4 md:p-10">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
      <span>
        <button className=" bg-[#EE9322] py-[10px] px-4 text-[16px] text-white font-[600] uppercase">
          See the Portfolio
        </button>
      </span>
    </div>
  );
};

export default WorkSection;
