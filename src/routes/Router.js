import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://photography-king-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://photography-king-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/my-review",
        element: (
          <PrivetRoute>
            <MyReview />
          </PrivetRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivetRoute>
            <AddService />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
