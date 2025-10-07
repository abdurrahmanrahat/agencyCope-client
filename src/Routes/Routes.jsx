import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import CEOPage from "../Pages/CEO/CEO";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import FaqPage from "../Pages/Policies/FAQ/FaqPage";
import PrivacyPolicy from "../Pages/Policies/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../Pages/Policies/RefundPolicy/RefundPolicy";
import TermsAndConditions from "../Pages/Policies/TermsAndConditions/TermsAndConditions";
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";
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
        element: <PortfolioPage />,
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
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "refund-policy",
        element: <RefundPolicy />,
      },
    ],
  },
]);

export default router;
