import { useEffect, useState } from "react";

const ShowServices = () => {
  const [services, serServices] = useState([]);

  useEffect(() => {
    fetch("shortServices.json")
      .then((res) => res.json())
      .then((data) => serServices(data));
  }, []);

  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="py-20 mx-4 md:mx-0">
        <div className="max-w-screen-xl mx-auto">
          <div
            className="flex flex-col justify-center items-center overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1700"
          >
            <h4 className="uppercase text-lg font-semibold text-center">
              <span className="border-b-4 border-[#ffe600]">
                HOW MAY I HELP YOU
              </span>
            </h4>
            <h2 className="lg:text-[20px] max-w-[70ch] text-center mt-2">
              I specialize in creating beautiful design & websites that convert
              & generate revenue while making an impact with marketing for
              growing your brand.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-12 overflow-hidden">
            {services.map((service) => (
              <div
                key={service._id}
                className="card md:w-96"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  src={service.image}
                  className="w-4/5 md:w-80 mx-auto"
                  alt="Name_of_Product"
                />
                <div className="card-body text-center">
                  <p className="text-lg">{service.description}</p>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#ffe600] py-[10px] px-4 text-[14px] text-[#16191e] rounded-md font-[600] uppercase">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowServices;
