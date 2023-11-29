import CountUp from "react-countup";

const CountingUp = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="pb-14 max-w-screen-xl mx-auto">
        <div className="py-14 p-12 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 text">
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="text-[48px]">
              <CountUp start={1} end={240} duration={3} />+
            </h4>
            <h2 className="text-[18px] mb-2">Happy Clients</h2>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="text-[48px]">
              <CountUp start={1} end={7} duration={3} />+
            </h4>
            <h2 className="text-[18px] mb-2">Years Experience</h2>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="text-[48px]">
              <CountUp start={1} end={32} duration={3} />+
            </h4>
            <h2 className="text-[18px] mb-2">Reviews</h2>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="text-[48px]">
              <CountUp start={1} end={13} duration={3} />+
            </h4>
            <h2 className="text-[18px] mb-2">Countries</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingUp;
