import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blog/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
      
        ]
    }
])