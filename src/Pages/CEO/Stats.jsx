const Stats = () => {
  const stats = [
    {
      value: "7",
      valueSign: "+",
      label: "Years of experience",
    },
    {
      value: "1,200",
      valueSign: "+",
      label: "Projects completed",
    },
    {
      value: "99",
      valueSign: "%",
      label: "Client retention rate",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="bg-[#0b0b0b] p-6 py-8 rounded-xl">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium">
            {stat.value}
            <span className="text-primary">{stat.valueSign}</span>
          </p>
          <p className="mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
