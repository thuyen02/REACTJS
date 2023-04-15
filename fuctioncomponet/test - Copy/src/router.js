import {
    Outlet,
    createBrowserRouter,
  } from "react-router-dom";
import PostDetails from "./PostDetails";
import Layout from './Layout'

  const router = createBrowserRouter([
    {   path: "/",
    element: <Header/>,
    children: [{
        path: "/",
        element: <div>
            <Banner/>
            <HomepageProduct/>
        </div>
    }]
    }
  ]);
  export default router;