import CountingUp from "../ServicesThings/CountingUp";
import ServicesBanner from "../ServicesThings/ServicesBanner";

const ServicePage = () => {
  return (
    <div>
      <ServicesBanner></ServicesBanner>

      {/* count up */}
      <CountingUp></CountingUp>
    </div>
  );
};

export default ServicePage;
