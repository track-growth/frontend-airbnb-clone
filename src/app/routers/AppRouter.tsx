import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../layout'
// pages
import { SignUpPage } from '@/pages/auth/signup'
import { NotFoundErrorPage } from '@/pages/error'
import { HomePage } from '@/pages/home'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/signup', element: <SignUpPage /> },
        // { path: '/login', element: <LoginPage /> },
      ],
      errorElement: <NotFoundErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}
