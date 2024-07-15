// Your router configuration file
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Layout from "../layout";
import ContactUs from "../Pages/contactUs";
import AboutUs from "../Pages/about";
import Portfolio from "../Pages/portfolio";
import Services from "../Pages/services";
import ProjectDetails from "../Pages/portfolioDetails";
// import WebDesign from "../Pages/WebDesign";
import WebDesign from "../Pages/webdesign";

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
        path: "/project/:category/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/services/web-design",
        element: <WebDesign />,
      },
      {
        path: "/services/web-development",
        element: <WebDesign />,
      },
      {
        path: "/services/app-development",
        element: <WebDesign />,
      },
      {
        path: "/services/branding",
        element: <WebDesign />,
      },
      {
        path: "/services/seo",
        element: <WebDesign />,
      },
      {
        path: "/services/content-writing",
        element: <WebDesign />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
