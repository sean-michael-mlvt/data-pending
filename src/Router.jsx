import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> }
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <Contact /> }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;