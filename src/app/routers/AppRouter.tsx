/**
 * @description AppRouter는 애플리케이션의 페이지 라우팅을 담당하는 라우터 컴포넌트입니다.
 * - createBrowserRouter를 사용하여 브라우저 라우터를 생성합니다. (react-router-dom 라이브러리 사용)
 * - 신규 페이지 추가 시 children 배열에 url 경로(path)와 렌더링할 페이지 컴포넌트(element)를 추가합니다.
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// app layers
import { AppLayout } from '../layout'
// pages layers
import { HomePage } from '@/pages'
import { NotFoundErrorPage } from '@/pages'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [{ path: '/', element: <HomePage /> }],
      // NOTE: 오류 발생 시 렌더링할 컴포넌트
      errorElement: <NotFoundErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}
