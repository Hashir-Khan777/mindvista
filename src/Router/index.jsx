import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Layout from "../layout";
import ContactUs from "../Pages/contactUs";
import AboutUs from "../Pages/about";
import Portfolio from "../Pages/portfolio";
import Services from "../Pages/services";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
