import InfinityScrollImg from "../../../assets/home/Infinite-Scroll.png";

const InfinityScroll = () => {
  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden">
      <div
        className="my-24"
        data-aos="fade-left"
        // data-aos-anchor="#example-anchor"
        // data-aos-offset="500"
        data-aos-duration="3000"
      >
        <img src={InfinityScrollImg} alt="" />
      </div>
    </div>
  );
};

export default InfinityScroll;
