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
import WebDev from "../Pages/webdev";
import AppDev from "../Pages/appdev";
import Branding from "../Pages/branding";
import Seo from "../Pages/seo";
import ContentWriting from "../Pages/contentwriting";

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
        element: <WebDev />,
      },
      {
        path: "/services/app-development",
        element: <AppDev />,
      },
      {
        path: "/services/branding",
        element: <Branding />,
      },
      {
        path: "/services/seo",
        element: <Seo />,
      },
      {
        path: "/services/content-writing",
        element: <ContentWriting />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
