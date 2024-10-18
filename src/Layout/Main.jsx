import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar2 from "../Pages/Shared/Navbar/Navbar2";

const Main = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
