import ServicesCover from "../../../assets/service-cover.jpg";

const ServicesBanner = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div
        className="bg-cover h-80 lg:h-[340px] 2xl:h-[380px] relative"
        style={{ backgroundImage: `url(${ServicesCover})` }}
      >
        <div className="w-full flex flex-col items-center justify-center gap-6 p-4 md:p-0 py-8 md:py-0 absolute inset-0 bg-[#16191e] opacity-75">
          <h2 className="text-4xl text-center">Let’s work together</h2>
          <h4 className="text-lg text-center">
            TOWARDS BUILDING YOUR DREAM BRAND IDENTITY & WEBSITE
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
