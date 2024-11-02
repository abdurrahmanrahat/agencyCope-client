import DemandTop from "../../../assets/home/demand-top.png";
import DemandHome from "../../../assets/home/demand.jpg";
import Button from "../../../components/ui/Button";

const Demand = () => {
  return (
    <div className="md:flex gap-12 md:mx-20 overflow-hidden">
      {/* img div */}
      <div
        className="md:w-1/2 mb-16 md:mb-0"
        data-aos="fade-right"
        data-aos-duration="1700"
      >
        <img src={DemandHome} alt="" />
      </div>

      {/* content div */}
      <div
        className="md:w-1/2 relative flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1700"
      >
        {/* content */}
        <div className="text-[18px] flex flex-col justify-center gap-y-2">
          <h2 className="text-[32px] font-semibold">1:1 On Demand Coaching</h2>
          <h4 className="font-bold  text-[#ffe600]">
            FOR SERVICE-BASED ENTREPRENEURS
          </h4>
          <p>
            If you are looking to grow your service-based business to 5k months
            and above, 1:1 On Demand Business Coaching is here to help you
            scale. For designers, virtual assistants, marketing strategists and
            other aligned service-based businesses, learn how to set up
            processes that help you get more clients and make more money.
            Business coaching ranges from 1 month to 3 month commitments.
          </p>
          <div>
            <Button text={"LEARN MORE"} />
          </div>
        </div>
        {/* img for positioning */}
        <div className="absolute -top-28 right-0 md:top-0 md:right-0">
          <img src={DemandTop} alt="" className="w-[110px]" />
        </div>
      </div>
    </div>
  );
};

export default Demand;
