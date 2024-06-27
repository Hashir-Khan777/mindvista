import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Layout from "../layout";
import ContactUs from "../Pages/contactUs";
import AboutUs from "../Pages/about";
// import ContactUs from "../Pages/contactUs";

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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
