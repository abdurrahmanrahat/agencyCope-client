import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import CEOPage from "../Pages/CEO/CEO";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import TermsAndConditions from "../Pages/Home/TermsAndConditions/TermsAndConditions";
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ServicePage from "../Pages/Services/ServicePage/ServicePage";

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
        path: "portfolio",
        element: <PortfolioPage></PortfolioPage>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "ceo-of-agency-cope",
        element: <CEOPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
]);

export default router;
