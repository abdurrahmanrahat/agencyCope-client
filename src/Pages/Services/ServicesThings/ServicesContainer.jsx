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
            <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
              Our Services
            </h5>
            <h2 className="md:text-xl text-center ">
              Confidently grow with strategic, bold design and smart systems
            </h2>
          </div>

          {/* clickable services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-16 text-center mt-12">
            {serviceLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href}>
                  <span className="border-b-2 border-primary text-primary shadow-class bg-[#16191E] rounded-md px-3 py-2 capitalize">
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
