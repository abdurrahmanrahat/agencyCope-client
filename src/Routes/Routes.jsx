import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import ServicePage from "../Pages/Services/ServicePage/ServicePage";
import ScrollToTop from "../components/ui/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Main></Main>
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
