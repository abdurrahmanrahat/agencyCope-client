import Demand from "./Demand";
import Template from "./Template";
import Web from "./Web";

const Designers = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="container-class">
        <div className="mx-4 md:mx-0 py-16 md:py-24">
          {/* title */}
          <div
            className="flex flex-col justify-center items-center overflow-hidden"
            // data-aos="fade-up"
            // data-aos-duration="1700"
          >
            <h4 className="uppercase text-lg font-semibold">
              <span className="border-b-[3px] border-primary">
                FOR DESIGNERS
              </span>
            </h4>
            <h2 className="text-[14px] lg:text-[16px] max-w-[60ch] text-center mt-3">
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
