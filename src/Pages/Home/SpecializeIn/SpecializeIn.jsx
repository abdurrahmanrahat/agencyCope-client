import SpecialImage from "../../../assets/home/specialized-design.png";

const SpecializeIn = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-24 pb-14 mx-4 md:mx-0">
          {/* title */}
          <div
            className="text-center overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1700"
          >
            <h4 className="uppercase text-lg font-semibold mb-6">
              <span className="border-b-2 border-[#ffe600] text-[#ffe600] shadow-class bg-black rounded-md p-[10px]">
                SPECIALIZING IN
              </span>
            </h4>
            <h2 className="md:text-[20px] md:w-[60%] mx-auto mt-2">
              Intentional design that isnt’t only breathtakingly (and
              envy-inducingly!) beautiful, but also strategically engineered to
              convert & outperform your competition!
            </h2>
          </div>
          <div className="overflow-hidden">
            <img
              src={SpecialImage}
              alt=""
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializeIn;
