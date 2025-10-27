/**
 * @description App component는 애플리케이션의 root component입니다.
 * - QueryClientProvider를 사용하여 Tanstack Query(React Query)를 전역적으로 관리합니다.
 * - OverlayProvider를 사용하여 모달, 툴팁 등의 오버레이를 전역적으로 관리합니다.
 * - AppRouter를 사용하여 애플리케이션의 라우팅을 관리합니다.
 */

import { OverlayProvider } from 'overlay-kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// app layers
import { AppRouter } from './routers'
import { queryClientConfig } from './config'
import './styles'

function App() {
  const queryClient = new QueryClient(queryClientConfig)

  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <AppRouter />
      </OverlayProvider>
      {/* NOTE: ReactQueryDevtools는 React Query 디버깅 도구입니다.
        - 개발 환경에서만 노출되며, 프로덕션 환경에서는 노출되지 않습니다.
        - 오른쪽 하단 모서리에 동그라미 아이콘으로 열고 닫을 수 있습니다.
        - initialIsOpen={false}는 디버깅 도구를 페이지가 로드될 때 자동으로 열지 않도록 설정합니다. */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
