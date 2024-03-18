import Demand from "./Demand";
import Template from "./Template";
import Web from "./Web";

const Designers = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-4 py-14 md:mx-0">
          {/* title */}
          <div className="text-center">
            <h4 className="uppercase text-lg font-semibold">
              <span className="border-b-4 border-[#ffe600]">FOR DESIGNERS</span>
            </h4>
            <h2 className="lg:text-[20px] mx-auto max-w-[60ch] mt-2">
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
