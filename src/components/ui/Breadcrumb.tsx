import { FaHome } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type TBreadcrumbProps = {
  items: BreadcrumbItem[];
  isStart?: boolean;
  isBanner?: boolean;
};

export const Breadcrumb = ({
  items,
  isStart = false,
  isBanner = false,
}: TBreadcrumbProps) => {
  return (
    <nav
      className={`flex items-center ${
        isStart ? "justify-start" : "justify-center"
      } gap-2 text-sm 2xl:text-base ${
        isBanner ? "text-gray-300" : "text-gray-800 dark:text-gray-300"
      }`}
    >
      <Link
        to="/"
        className="hover:text-primary transition-colors flex items-center gap-1"
      >
        <FaHome className="h-4 w-4" />
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <FaChevronRight className="h-4 w-4" />

          <Link
            to={item.href}
            className={`hover:text-primary transition-colors ${
              index === items.length - 1 ? "text-primary font-medium" : ""
            }`}
          >
            {item.label.length > 20
              ? item.label.slice(0, 20) + "..."
              : item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};
