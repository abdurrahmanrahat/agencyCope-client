import Button from "../../../../components/ui/Button";
import WebHome from "../../../assets/home/web-home.png";
import WebTop from "../../../assets/home/web-top.png";

const Web = () => {
  return (
    <div className="md:flex gap-12 md:mx-20 overflow-hidden">
      {/* img div */}
      <div className="md:w-1/2 mb-16 md:mb-0">
        <img
          src={WebHome}
          alt=""
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>

      {/* content div */}
      <div
        className="md:w-1/2 relative flex justify-center"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {/* content */}
        <div className="text-[18px] flex flex-col justify-center gap-y-2">
          <h2 className="text-[32px] font-semibold">Wizards of Web Design</h2>
          <h4 className="font-bold  text-[#ffe600]">
            FOR BRAND & WEB DESIGNERS
          </h4>
          <p>
            The Wizards of Web Design is a 12-week live program for new &
            seasoned web designers serious about amplifying their skills and
            growing their business.
          </p>
          <p>
            For aspiring or new designers, VA’s, or other creatives who want to
            scale your biz to 6 figures, learn how to get consistent leads and
            sales.
          </p>
          <div>
            <Button text={"I NEED THIS"} />
          </div>
        </div>
        {/* img for positioning */}
        <div className="absolute -top-28 right-0 md:top-0 md:right-0">
          <img src={WebTop} alt="" className="w-[110px]" />
        </div>
      </div>
    </div>
  );
};

export default Web;
