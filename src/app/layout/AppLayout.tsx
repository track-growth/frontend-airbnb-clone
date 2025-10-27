/**
 * @description 애플리케이션 레이아웃 컴포넌트입니다.
 * - 상단 header와 하단 footer를 포함합니다. (현재는 header만 있습니다.)
 * - Outlet을 사용하여 하위 라우트 컴포넌트를 렌더링합니다. (AppRouter 파일에서 children으로 설정된 컴포넌트를 렌더링)
 */

import { Outlet } from 'react-router-dom'
import { Header } from './ui'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* TODO: footer */}
    </>
  )
}
