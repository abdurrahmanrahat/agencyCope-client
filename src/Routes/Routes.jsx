import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import ServicePage from "../Pages/Services/ServicePage/ServicePage";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "demo",
        element: <Services></Services>,
      },
    ],
  },
]);

export default router;
