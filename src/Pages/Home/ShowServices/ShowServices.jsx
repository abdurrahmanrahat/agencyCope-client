import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const ShowServices = () => {
  const [services, serServices] = useState([]);

  useEffect(() => {
    fetch("shortServices.json")
      .then((res) => res.json())
      .then((data) => serServices(data));
  }, []);

  return (
    <div className="">
      <div className="my-14 md:my-24">
        <div className="container-class">
          <div
            className="flex flex-col justify-center items-center overflow-hidden"
            // data-aos="fade-right"
            // data-aos-duration="1700"
          >
            <h4 className="uppercase text-lg font-semibold">
              <span className="border-b-[3px] border-primary">
                HOW MAY I HELP YOU
              </span>
            </h4>
            <h2 className="text-[14px] lg:text-[16px] max-w-[70ch] text-center mt-3">
              I specialize in creating beautiful design & websites that convert
              & generate revenue while making an impact with marketing for
              growing your brand.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-12">
            {services.map((service) => (
              <div
                key={service._id}
                className="w-full shadow-myCustomShadow"
                // data-aos="fade-right"
                // data-aos-duration="2000"
              >
                <div className="w-full h-[220px] overflow-hidden">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover"
                    alt="Name_of_Product"
                  />
                </div>

                {/* content */}
                <div className="px-4 py-8 space-y-4">
                  <div className="text-justify">
                    <h2 className="text-[22px] font-medium mb-1">
                      {service.title}
                    </h2>

                    <p className="text-[14px] lg:text-[16px] text-start">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-start">
                    <Link to={service.url}>
                      <Button text={"Learn More"} />
                    </Link>
                  </div>
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
