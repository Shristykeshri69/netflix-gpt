import Login from './login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const appRouter = createBrowserRouter([
 
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
