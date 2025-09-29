import { getAllServices } from "../../../data/services";
import ServiceCard from "../ServicesThings/ServiceCard";
import ServicesBanner from "../ServicesThings/ServicesBanner";
import ServicesContainer from "../ServicesThings/ServicesContainer";

const ServicePage = () => {
  const servicesData = getAllServices();

  return (
    <div>
      <ServicesBanner></ServicesBanner>

      {/* container clickable lists */}
      <ServicesContainer></ServicesContainer>

      <div>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
