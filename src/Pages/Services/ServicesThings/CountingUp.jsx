import CountUp from "react-countup";

const CountingUp = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 lg:py-16 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 text">
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="font-extrabold text-[32px] 2xl:text-[36px] text-[#16191e]">
              <CountUp start={1} end={240} duration={3} />+
            </h4>
            <h2 className="text-[#909090] lg:text-[18px] font-medium">
              Happy Clients
            </h2>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="font-extrabold text-[32px] 2xl:text-[36px] text-[#16191e]">
              <CountUp start={1} end={8} duration={3} />+
            </h4>
            <h2 className="text-[#909090] lg:text-[18px] font-medium">
              Years Experience
            </h2>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="font-extrabold text-[32px] 2xl:text-[36px] text-[#16191e]">
              <CountUp start={1} end={32} duration={3} />+
            </h4>
            <h2 className="text-[#909090] lg:text-[18px] font-medium">
              Reviews
            </h2>
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <h4 className="font-extrabold text-[32px] 2xl:text-[36px] text-[#16191e]">
              <CountUp start={1} end={13} duration={3} />+
            </h4>
            <h2 className="text-[#909090] lg:text-[18px] font-medium">
              Countries
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingUp;
