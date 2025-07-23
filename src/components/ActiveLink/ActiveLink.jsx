import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? "text-dark bg-primary " : ""
        } text-lg px-5 py-2 hover:bg-primary hover:text-dark rounded-full transition-all duration-300 font-medium`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
