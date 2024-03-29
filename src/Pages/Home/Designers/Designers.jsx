import Demand from "./Demand";
import Template from "./Template";
import Web from "./Web";

const Designers = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-4 py-14 md:mx-0">
          {/* title */}
          <div
            className="flex flex-col justify-center items-center overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <h4 className="uppercase text-[16px] font-semibold mb-2">
              <span className="border-b-2 border-[#ffe600]">FOR DESIGNERS</span>
            </h4>
            <h2 className="text-[14px] lg:text-[16px] max-w-[60ch] text-center mt-2">
              Want to stand out from the crowd with spellbinding skills and
              (effortlessly!) book marvelous high-ticket clients
            </h2>
          </div>

          {/* all lists */}
          <div className="mt-20">
            {/* first: web */}
            <Web></Web>

            {/* second: template */}
            <Template></Template>

            {/* third: demand */}
            <Demand></Demand>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;
