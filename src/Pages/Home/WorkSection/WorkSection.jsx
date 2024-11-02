import img1 from "../../../assets/portfolioImg/graphic-flyer-min.jpg";
import img2 from "../../../assets/portfolioImg/graphic-logo-min.jpg";
import img3 from "../../../assets/portfolioImg/marketing1-min.jpg";
import img4 from "../../../assets/portfolioImg/marketing2-min.jpg";
import img5 from "../../../assets/portfolioImg/web-img1-min.jpg";
import img6 from "../../../assets/portfolioImg/web-img2-min.jpg";
import Button from "../../../components/ui/Button";

const WorkSection = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="container-class py-16">
        <div className="text-center mx-4">
          <div className="flex flex-col justify-center items-center ">
            <h4 className="uppercase text-lg font-semibold">
              <span className="border-b-[3px] border-primary">
                RECENT WORKS
              </span>
            </h4>
            <h2 className="text-[14px] lg:text-[16px] max-w-[60ch] text-center mt-3">
              Collections of recent eye-catching projects for different client
              delivery with hundred percent satisfaction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 2xl:gap-20 mt-6 p-4 md:p-10">
            <div className="overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-[1500ms]"
                src={img1}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-[1500ms]"
                src={img2}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-[1500ms]"
                src={img3}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-[1500ms]"
                src={img4}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-[1500ms]"
                src={img5}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="hover:scale-[1.1] duration-[1500ms]"
                src={img6}
                alt=""
              />
            </div>
          </div>
          <span>
            <Button text={"View More"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
