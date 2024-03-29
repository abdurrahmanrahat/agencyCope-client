import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowServices = () => {
  const [services, serServices] = useState([]);

  useEffect(() => {
    fetch("shortServices.json")
      .then((res) => res.json())
      .then((data) => serServices(data));
  }, []);

  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div className="py-16 md:py-24 mx-4 md:mx-0">
        <div className="max-w-screen-xl mx-auto">
          <div
            className="flex flex-col justify-center items-center overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1700"
          >
            <h4 className="uppercase text-[16px] font-semibold text-center mb-4">
              <span className="border-b-2 border-[#ffe600] text-[#ffe600] shadow-class bg-[#16191E] rounded-md p-[10px]">
                HOW MAY I HELP YOU
              </span>
            </h4>
            <h2 className="text-[14px] lg:text-[16px] max-w-[70ch] text-center mt-2">
              I specialize in creating beautiful design & websites that convert
              & generate revenue while making an impact with marketing for
              growing your brand.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-12 overflow-hidden">
            {services.map((service) => (
              <div
                key={service._id}
                className="card md:w-96 bg-black py-6"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  src={service.image}
                  className="w-4/5 md:w-80 mx-auto rounded-md"
                  alt="Name_of_Product"
                />
                <div className="card-body text-center">
                  <p className="text-[14px] lg:text-[16px]">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link to={service.url}>
                    <button className="bg-[#ffe600] py-[10px] px-4 text-[15px] text-[#16191e] rounded-md font-medium capitalize hover:bg-[#16191e] hover:text-white border hover:border border-[#ffe600] transition-all duration-500">
                      Learn More
                    </button>
                  </Link>
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
