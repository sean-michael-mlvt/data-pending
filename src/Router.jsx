import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import Pages from ./pages/ directory to be route elements
import Home from "./pages/Home";

//Define paths and associated page elements
const router = createBrowserRouter([
  { path: "/", element: <Home /> }
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <Contact /> }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;