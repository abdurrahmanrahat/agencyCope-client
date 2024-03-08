import FAQ from "../FAQ/FAQ";
import ItemFive from "../ServicesItems/ItemFive";
import ItemFour from "../ServicesItems/ItemFour";
import ItemOne from "../ServicesItems/ItemOne";
import ItemThree from "../ServicesItems/ItemThree";
import ItemTwo from "../ServicesItems/ItemTwo";
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

      {/* item two */}
      <ItemTwo></ItemTwo>

      {/* item three */}
      <ItemThree></ItemThree>

      {/* item four */}
      <ItemFour></ItemFour>

      {/* item five */}
      <ItemFive></ItemFive>

      {/* FAQ */}
      <FAQ></FAQ>
    </div>
  );
};

export default ServicePage;
