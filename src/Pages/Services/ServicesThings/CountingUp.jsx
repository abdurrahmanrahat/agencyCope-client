import CountUp from "react-countup";

const countingData = [
  {
    value: 240,
    sign: "+",
    label: "Happy Clients",
  },
  {
    value: 8,
    sign: "+",
    label: "Years Experience",
  },
  {
    value: 32,
    sign: "+",
    label: "Reviews",
  },
  {
    value: 13,
    sign: "+",
    label: "Countries",
  },
];

const CountingUp = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 lg:gap-8 text-center">
          {countingData.map((item, index) => (
            <div
              key={index}
              className="bg-dark p-5 py-6 rounded-xl border border-borderColor hover:border-[#caff00] transition-all duration-300"
            >
              <h4 className="text-xl lg:text-2xl font-medium">
                <CountUp start={0} end={item.value} duration={2.5} />
                <span className="text-primary">{item.sign}</span>
              </h4>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountingUp;
