import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../layout';
// pages layers
import { HomePage } from '@/pages';
import { NotFoundErrorPage } from '@/pages';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [{ path: '/', element: <HomePage /> }],
      errorElement: <NotFoundErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
