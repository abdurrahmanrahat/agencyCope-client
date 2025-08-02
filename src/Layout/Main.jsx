import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Cursor from "../components/ui/Cursor/Cursor";
import GoToTop from "../components/ui/GoToTop";

const Main = () => {
  return (
    <div>
      <Cursor />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <GoToTop />
    </div>
  );
};

export default Main;
