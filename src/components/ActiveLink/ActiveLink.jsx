import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-[#EE9322]" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
