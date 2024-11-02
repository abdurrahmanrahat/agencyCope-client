import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ text }) => {
  return (
    <button className="text-[14px] md:text-[15px] bg-primary text-dark rounded-md px-[18px] py-[12px] font-medium uppercase">
      {text}{" "}
      <FaArrowRightLong className="inline-block bg-transparent pl-1 text-[18px]" />
    </button>
  );
};

export default Button;
