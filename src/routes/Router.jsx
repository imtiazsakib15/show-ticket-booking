import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ShowDetails from "../pages/ShowDetails/ShowDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/show/:id",
        element: <ShowDetails />,
      },
    ],
  },
]);

export default Router;
