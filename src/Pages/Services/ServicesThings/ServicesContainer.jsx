// import { IoIosArrowRoundForward } from "react-icons/io";

const serviceLinks = [
  {
    label: "Brand Identity Design",
    href: "#item-one",
  },
  {
    label: "Website Development",
    href: "#item-two",
  },
  {
    label: "Graphic Design",
    href: "#item-three",
  },
  {
    label: "Digital Marketing",
    href: "#item-four",
  },
  {
    label: "Social Media Content",
    href: "#item-five",
  },
  {
    label: "Motion Graphics",
    href: "#item-six",
  },
];

const ServicesContainer = () => {
  return (
    <div className="bg-darkShed">
      <div className="container-class">
        <div className="mx-4 md:mx-0 py-16">
          <div className="flex flex-col items-center">
            <h5 className="text-primary uppercase text-base md:text-[20px] 2xl:text-2xl font-medium mb-0">
              Our Services
            </h5>
            <h2 className="2xl:text-xl text-center ">
              Accelerate success with strategic creativity and efficient systems
            </h2>
          </div>

          {/* clickable services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-16 text-center mt-12">
            {serviceLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href}>
                  <span className="border-b-[3px] lg:text-lg 2xl:text-xl border-primary text-primary shadow-class bg-[#16191E] rounded-full px-3 md:px-4 2xl:px-5 py-2 2xl:py-3 capitalize font-medium">
                    {item.label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
