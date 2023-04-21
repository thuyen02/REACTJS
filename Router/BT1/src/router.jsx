import {createBrowserRouter , Outlet } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductsTail';
import Header from './Header';
import Admin from './Admin';
const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: (
            <div>
              <Home/>
            </div>
          ),
        },
        {
          path: '/product/:productId',
          element: <ProductDetail />,
        },
        {
            path: '/admin',
            element : <Admin/>
        }
      ],
    },
  ]);
  export default router;