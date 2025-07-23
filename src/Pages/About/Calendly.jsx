import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="mb-12 px-4 md:px-8 lg:px-16">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="rounded-xl overflow-hidden shadow-lg border border-[#2a2a2a]"
      >
        <InlineWidget
          url="https://calendly.com/rahat47/make-schedule?primary_color=caff00&text_color=ffffff&background_color=0b0b0b"
          styles={{
            height: "700px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Calendly;
