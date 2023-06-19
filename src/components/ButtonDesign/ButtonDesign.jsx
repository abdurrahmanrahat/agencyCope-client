import { FaArrowRight } from "react-icons/fa";

const ButtonDesign = ({ name, bgColor, hoverColor }) => {
    return (
        <button className={`btn uppercase bg-[${bgColor}] hover:bg-[#4CBED2] hover:scale-95 transition-transform duration-600 border-0 hover:border-2 border-white text-white font-medium rounded-none`}>
            {name} <FaArrowRight />
        </button>
    );
};

export default ButtonDesign;