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
    <div className="py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 lg:gap-8 text-center">
          {countingData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 py-8 rounded-xl border border-[#2a2a2a] hover:border-[#caff00] transition-all duration-300"
            >
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                <CountUp start={0} end={item.value} duration={2.5} />
                <span className="text-primary">{item.sign}</span>
              </h4>
              <p className="mt-2 text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountingUp;
