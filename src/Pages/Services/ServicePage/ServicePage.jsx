import ItemOne from "../ServicesItems/ItemOne";
import CountingUp from "../ServicesThings/CountingUp";
import ServicesBanner from "../ServicesThings/ServicesBanner";
import ServicesContainer from "../ServicesThings/ServicesContainer";

const ServicePage = () => {
  return (
    <div>
      <ServicesBanner></ServicesBanner>

      {/* count up */}
      <CountingUp></CountingUp>

      {/* container clickable lists */}
      <ServicesContainer></ServicesContainer>

      {/* item one */}
      <ItemOne></ItemOne>
    </div>
  );
};

export default ServicePage;
