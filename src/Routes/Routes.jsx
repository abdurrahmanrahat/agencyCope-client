import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;