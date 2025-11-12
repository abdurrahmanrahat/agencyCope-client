import { Outlet } from "react-router-dom";
import Cursor from "../components/ui/Cursor/Cursor";
import GoToTop from "../components/ui/GoToTop";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar2 from "../Pages/Shared/Navbar/Navbar2";

const Main = () => {
  return (
    <div>
      <Cursor />
      <Navbar2></Navbar2>
      <Outlet></Outlet>
      <Footer></Footer>
      <GoToTop />
    </div>
  );
};

export default Main;
