import SpecialImage from "../../../assets/home/specialized-design.png";

const SpecializeIn = () => {
  return (
    <div className="mt-24">
      {/* title */}
      <div className="text-center">
        <h4 className="uppercase text-lg font-semibold">
          <span className="border-b-4 border-[#EE9322]">SPECIALIZING IN</span>
        </h4>
        <h2 className="md:text-[20px] md:w-[60%] mx-auto mt-2">
          Intentional design that isnt’t only breathtakingly (and
          envy-inducingly!) beautiful, but also strategically engineered to
          convert & outperform your competition!
        </h2>
      </div>
      <div>
        <img src={SpecialImage} alt="" />
      </div>
    </div>
  );
};

export default SpecializeIn;
