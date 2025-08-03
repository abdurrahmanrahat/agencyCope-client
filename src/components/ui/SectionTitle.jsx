const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
        {title}
      </h5>
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-center md:text-start lg:max-w-[30ch]">
        {description}
      </h2>
    </div>
  );
};

export default SectionTitle;
