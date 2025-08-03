import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const PortfolioCard = ({ project }) => {
  return (
    <Link to={project.href} target="_blank">
      <div className="bg-[#151415] rounded-lg p-4 flex flex-col justify-between group overflow-hidden h-[370px]">
        <div className="overflow-hidden rounded-lg h-56">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 px-4 md:px-6 my-4">
          <h4 className="text-[18px] md:text-[22px] flex items-center justify-between">
            {project.title}
            <FiArrowUpRight className="text-primary w-6 h-6 md:w-8 md:h-8 font-medium transition-transform duration-700 group-hover:rotate-45" />
          </h4>
          <p className="text-sm text-gray-300 break-words whitespace-normal leading-[1.4]">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
