import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import ServiceModal from "../../../components/Modal/ServiceModal";
import MyButton from "../../../components/ui/MyButton";

const ServiceCard = ({ service }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className="container-class py-20"
        id={service.id}
        // data-aos="fade-up"
        // data-aos-duration="1200"
      >
        <div className="text-center">
          <h2 className="text-[28px] font-medium">
            {service.index}. {service.title}
          </h2>
          <p className="md:text-[18px] md:px-28">{service.description}</p>
        </div>

        <div className="mt-12 md:flex gap-12">
          <div className="md:w-1/2 flex items-center justify-end mb-8 md:mb-0">
            <img src={service.img} alt="" className="w-[500px]" />
          </div>
          <div className="md:w-1/2 text-[18px] flex flex-col justify-evenly gap-y-3">
            <h4 className="text-[20px] font-medium">WHAT’S INCLUDED:</h4>
            <div>
              {service.items.map((item, idx2) => (
                <p key={idx2}>+ {item}</p>
              ))}
            </div>
            <div>
              <p>
                <span className="font-medium">Timeframe:</span>{" "}
                {service.timeframe}
              </p>
              <p>
                <span className="font-medium">Price:</span> {service.price}
              </p>
            </div>
            <div>
              <span onClick={() => setShowModal(true)}>
                <MyButton
                  mobileText="GET STARTED"
                  desktopText="LET'S GET STARTED"
                  isOutline={false}
                  icon={<IoMdArrowForward />}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <ServiceModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        defaultService={service.title}
      />
    </div>
  );
};

export default ServiceCard;
